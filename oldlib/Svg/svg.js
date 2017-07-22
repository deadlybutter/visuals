import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import Grid from '../Grid';
import Ruler from '../Ruler';

const Svg = ({ children }) => {
  const { ruler } = store.getState();

  return (
    <Provider store={store}>
      <Ruler>
        <svg width="100%" height="100%">
          <Grid realDimensions={[ruler.width, ruler.height]}>
            { children }
          </Grid>
        </svg>
      </Ruler>
    </Provider>
  );
};

export default Svg;
