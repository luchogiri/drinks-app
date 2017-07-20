// @flow

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from '../components';

import Header from '../modules/common/header';


export default class HeaderDevCard extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (empty)</Text>
            <Header />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (with back)</Text>
            <Header back />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (with title)</Text>
            <Header title='da title' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (title & back)</Text>
            <Header title='da title' back />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (with right)</Text>
            <Header right={require('../../public/img/icon-search.png')} />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (with title & right)</Text>
            <Header title='da title' right={require('../../public/img/icon-search.png')} />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (with back, title & right)</Text>
            <Header title='da title' back right={require('../../public/img/icon-search.png')} />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (hidden right space)</Text>
            <Header title='da title' back right='hidden' />
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>Header (custom title)</Text>
            <Header title='custom' back right='hidden'>
              <View style={styles.custom_title}>
                <Text>Custom title</Text>
              </View>
            </Header>
          </View>

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
    },


  custom_title: {
    flex: 1,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
    paddingLeft: 16,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});