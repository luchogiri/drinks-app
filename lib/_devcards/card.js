// @flow

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from '../components';

import DrinksService from '../services/api';
import Card from '../modules/common/card';


export default class CardDevCard extends Component {

  state = {
    loading: false,
    drinks: []
  };

  componentDidMount() {
    this.retrieveDrinks();
  }

  retrieveDrinks = async () => {
    let response = await DrinksService.Retrieve();
    this.setState({ drinks: response.drinks, loading: false });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>

          {/* Card component */}

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card</Text>
            <Card title='Martinez Cocktail'
                  descriptions={['Gin', 'Dry Vermouth', 'Triple sec', 'Orange bitters', 'Cherry']}
                  img='http://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (incomplete info)</Text>
            <Card />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (only title)</Text>
            <Card title='Martinez Cocktail' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (title & desc)</Text>
            <Card title='Martinez Cocktail' descriptions={['Gin', 'Dry Vermouth']} />
          </View>

          {/* */}

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#f8f8f8'
  },

  content: {
    paddingTop: 16,
    paddingBottom: 8,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#fff',
    borderBottomColor: '#dedede',
    backgroundColor: '#fcfcfc'
  },
    content_title: {
      fontSize: 22,
      fontWeight: '500',
      marginBottom: 8,
      marginLeft: 16
    }
});