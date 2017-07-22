import React from 'react';

export function mapChildrenWithProps(children, props) {
  return React.Children.map(children, child => React.cloneElement(child, props));
}

export function isSafe(obj) {
  if (typeof(obj) === 'undefined' || obj === null) {
    return false;
  }

  return true;
}

export function getPercentOf(num, den) {
  return (num / den) * 100;
}

export function isPercent(value) {
  return typeof(value) === 'string' && value.endsWith('%');
}

export function isUnit(value) {
  return typeof(value) === 'string' && value.endsWith('u');
}
