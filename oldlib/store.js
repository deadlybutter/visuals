import { createStore, combineReducers } from 'redux';

import { reducer as ruler } from './Ruler';

const initialStore = {
  ruler: {
    width: 0,
    height: 0,
  },
};

export default createStore(
  combineReducers(ruler),
  initialStore,
);
