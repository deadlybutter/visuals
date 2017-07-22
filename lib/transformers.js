import { isPercent, isUnit, isSafe } from './helpers';

export function convertValueToRealCoordinates(key, props, dimension) {
  const { grid, scale } = props;
  const value = props[key];

  const isX = dimension === 'x';
  const gridLength = isX ? grid.width : grid.height;

  let scalar = isX ? scale.x : scale.y;
  if (isPercent(scalar)) scalar = parseInt(scalar) / 100;
  else if (isUnit(scalar)) scalar = gridLength / parseInt(scalar);

  let newValue = value;
  if (isPercent(newValue)) newValue = (parseInt(value) / 100) * gridLength;

  if (key === 'y' && isPercent(value)) {
    console.log(grid);
  }

  return newValue * scalar;
}

export function offsetValue(value, props, dimension) {
  const { origin } = props;
  const isX = dimension === 'x';

  const distance = isX ? origin.x : origin.y;
  return value + distance;
}
