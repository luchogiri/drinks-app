// @flow

console.disableYellowBox = true;

import React, { Component } from 'react';
import Navigation from './modules/navigation';


export default class Application extends Component {

  render() {
    return (
      <Navigation onNavigationStateChange={null} />
    );
  }
}
