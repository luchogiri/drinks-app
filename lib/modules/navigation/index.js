// @flow

import { StackNavigator } from 'react-navigation';

import Home from '../home';

const Navigation = StackNavigator({

  Home: { screen: Home }

}, { headerMode: 'none' });

export default Navigation;