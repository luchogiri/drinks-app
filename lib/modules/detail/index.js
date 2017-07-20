// @flow

import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform } from '../../components';

import Drinks from '../../services/drinks';

import Header from '../common/header';


class Detail extends Component {

  constructor(props) {
    super(props);

    let drink = Platform.OS === 'web' ?
      this.props.match.params:
      this.props.navigation.state.params.drink;

    this.state = { drink, loading: true };
  }

  componentDidMount() {
    this.retrieveDrink();
  }

  retrieveDrink = async () => {
    if ( !this.state.drink.id ) return;
    let drink = await Drinks.Retrieve( this.state.drink.id );
    this.setState({ drink, loading: false });
  };

  goBack = () => {
    return (this.props.history || this.props.navigation).goBack();
  };


  render() {
    return (
      <View style={styles.wrapper}>
        <Header title={this.state.drink.name} back={this.goBack} />

        <ScrollView style={styles.content}>

          {this.state.loading &&
            <View style={styles.card}>
              <Text style={styles.loading}>loading...</Text>
            </View>}

          {this.state.drink.name &&
          <View style={styles.card}>

            <View style={styles.card_right}>
              {!!this.state.drink.picture && <Image style={styles.card_img} source={{uri: this.state.drink.picture}}/>}
              {!this.state.drink.picture && <View style={styles.card_img} />}
            </View>
            
            <View style={styles.card_left}>
              {this.state.drink.ingredients.map(i =>
                <Text key={i.name} style={styles.card_description}>{i.measure} - {i.name}</Text>)}
            </View>

            <View style={styles.card_resume}>
              <Text style={styles.card_resume_text}>
                • How to prepare
              </Text>
              <Text style={styles.card_resume_text}>
                {this.state.drink.instructions}
              </Text>
            </View>
          </View>}
        </ScrollView>
      </View>
    );
  }
}

export default Detail;

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
    marginTop: 24,
    flex: 1
  },

  card: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    marginBottom: 24
  },

  card_left: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16
  },
    card_title: {
      fontSize: 24,
      lineHeight: 24,
      color: '#555',
      marginBottom: 4,
    },
    card_description: {
      marginTop: 4,
      lineHeight: 14
    },
    card_more: {
      marginTop: 6,
      fontSize: 11,
      lineHeight: 12,
      color: '#666'
    },

  card_right: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 240
  },
    card_img: {
      flex: 1,
      height: '100%',
      width: '100%'
    },

    card_resume_text: {
      paddingLeft: 16,
      paddingRight: 16,
      marginBottom: 8
    }
});