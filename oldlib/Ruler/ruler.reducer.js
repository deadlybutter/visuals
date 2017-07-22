import { SET_PIXEL_DIMENSIONS } from './ruler.actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PIXEL_DIMENSIONS:
      const width = action.width;
      const height = action.height;

      return {
        ...state,
        width,
        height,
      };
  }
};

export default reducer;
