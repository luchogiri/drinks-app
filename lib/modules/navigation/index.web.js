// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from '../../components/index';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../home';

export default class Navigation extends Component {

  render() {
    return (
      <BrowserRouter>
        <View style={styles.wrapper}>
          <Route exact path="/" component={Home} />
        </View>
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
