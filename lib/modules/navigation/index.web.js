// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from '../../components';
import { BrowserRouter, Route } from 'react-router-dom';

// import HeaderDevCard from '../../_devcards/header';
// import CardDevCard from '../../_devcards/card';

import Home from '../home';
import Detail from '../detail';


export default class Navigation extends Component {

  render() {
    return (
      <BrowserRouter>
        <View style={styles.wrapper}>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
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
