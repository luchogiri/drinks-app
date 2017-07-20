// @flow

import { StackNavigator } from 'react-navigation';

// import HeaderDevCard from '../../_devcards/header';
// import CardDevCard from '../../_devcards/card';

import Home from '../home';
import Detail from '../detail';


const Navigation = StackNavigator({

  Home: { screen: Home },
  Detail: { screen: Detail }

}, { headerMode: 'none'});

export default Navigation;