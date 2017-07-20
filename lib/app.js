// @flow

console.disableYellowBox = true;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './reducers/store';
import Navigation from './modules/navigation';

export default class Application extends Component {

  constructor() {
    super();
    this.mounted = this.received = false;
    this.state = { loading: true, store : Store(this.storeDidLoad)};
  }

  componentDidMount() {
    if (this.received) this.setState({ loading: false });
    this.mounted = true;
  }

  storeDidLoad = () => {
    if (this.mounted) this.setState({ loading: false });
    this.received = true;
  };

  render() {
    return (
      <Provider store={this.state.store}>
        <Navigation onNavigationStateChange={null} />
      </Provider>
    );
  }
}
