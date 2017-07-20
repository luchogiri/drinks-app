// @flow

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from '../components';

import Card from '../modules/common/card';


export default class CardDevCard extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card</Text>
            <Card name='Martinez Cocktail'
                  ingredients={[{name: 'Gin'}, {name: 'Dry Vermouth'}, {name: 'Triple sec'}, {name: 'Orange bitters'}]}
                  picture='http://www.thecocktaildb.com/images/media/drink/wwxwvr1439906452.jpg' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (incomplete info)</Text>
            <Card />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (only name)</Text>
            <Card name='Martinez Cocktail' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Item Card (name & ingrs)</Text>
            <Card name='Martinez Cocktail' ingredients={[{name: 'Gin'}]} />
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