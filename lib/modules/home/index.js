// @flow

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from '../../components';

import Drinks from '../../services/drinks';

import Header from '../common/header';
import Card from '../common/card';

import Detail from '../detail';


class Home extends Component {

  state = {
    loading: true,
    drinks: []
  };

  componentDidMount() {
    this.retrieveDrinks();
  }

  retrieveDrinks = async () => {
    let drinks = await Drinks.Random();
    this.setState({ drinks, loading: false });
  };

  navigate = (to, params) => {
    return () => (
      Platform.OS === 'web' ?
        this.props.history.push(`/${to.toLowerCase()}/${params.drink.id}`):
        this.props.navigation.navigate( to, params )
    );
  };


  render() {
    return (
      <View style={styles.wrapper}>

        <Header title='Random drinks!'
                right={require('../../../public/img/icon-search.png')} />

        <ScrollView style={styles.content}>

          {this.state.loading &&
            <Text style={styles.loading}>loading...</Text>}

          {this.state.drinks.map(d =>
          <Card key={d.id}
                name={d.name}
                picture={d.picture}
                ingredients={d.ingredients}
                onPress={this.navigate('Detail', { drink: d })} />)}

        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#19bbd1'
  },
    content: {
      flex: 1,
      paddingTop: 4
    },

    loading: {
      textAlign: 'center',
      color: '#fff',
      marginTop: 24
    }
});