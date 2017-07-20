// @flow

import { Actions } from '../actions/config';

const InitialState = {

  loading: false,
  version: ''
};


const Config = ( state = { ...InitialState }, action) => {

  switch (action.type) {

    case Actions.LOADING:
      return { ...state, loading: action.data };

    case Actions.SAVE:
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export default Config;