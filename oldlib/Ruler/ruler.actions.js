export const SET_PIXEL_DIMENSIONS = 'SET_PIXEL_DIMENSIONS';

export const setPixelDimensions = (width, height) => {
  return { type: SET_PIXEL_DIMENSIONS, width, height };
};
