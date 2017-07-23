import { isPercent, isUnit, isSafe } from './helpers';

function _convertValueToRealCoordinates(value, props, dimension) {
  const { grid } = props;

  const isX = dimension === 'x';
  const gridLength = isX ? grid.width : grid.height;

  let newValue = value;
  if (isPercent(newValue)) newValue = (parseInt(value) / 100) * gridLength;

  return newValue;
}

export function convertValueToRealCoordinates(key, props, dimension) {
  return _convertValueToRealCoordinates(props[key], props, dimension);
}

export function offsetValue(value, props, dimension) {
  const { origin } = props;
  const isX = dimension === 'x';

  const distance = isX ? origin.x : origin.y;
  return value + distance;
}

export function passthrough(key, props) {
  return props[key];
}

export function rotate(props, defaultCenter) {
  const { rotate } = props;

  const cx = offsetValue(
    _convertValueToRealCoordinates(
      rotate.x || defaultCenter.x,
      props,
      'x'
    ),
    props,
    'x'
  );

  const cy = offsetValue(
    _convertValueToRealCoordinates(
      rotate.y || defaultCenter.y,
      props,
      'y'
    ),
    props,
    'y'
  );

  return `rotate(${rotate.angle}, ${cx}, ${cy})`;
}
