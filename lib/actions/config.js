// @flow

import ConfigService from '../services/config';

export const Actions = {

  LOADING: 'app/config/loading',
  SAVE: 'app/config/save'
};


const Config = {

  Retrieve: () => {
    return async dispatch => {
      dispatch( Config.Loading() );
      let data = await ConfigService.Retrieve();
      dispatch( Config.Save( data ) );
      dispatch( Config.Loading(false) );
    };
  },

  Loading: ( loading = true ) => ({ type: Actions.LOADING, data: loading }),

  Save: ( data = {} ) => ({ type: Actions.SAVE, data })

};

export default Config;
