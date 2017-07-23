import React from 'react';
import { isSafe } from './helpers';
import {
  convertValueToRealCoordinates,
  offsetValue,
  passthrough,
  rotate,
} from './transformers';

class VisualObject extends React.Component {
  constructor(props) {
    super(props);

    this.propTransformers = {};
    this.propAliases = {};
  }

  setPropTransformer(key, transformer) {
    this.propTransformers[key] = transformer;
  }

  setPropAlias(alias, trueKey) {
    this.propAliases[alias] = trueKey;
  }

  getCorrectPropKey(key) {
    return this.propAliases[key] || key;
  }

  setBatchPassthroughTransformers(keys) {
    for (const key of keys) {
      this.setPropTransformer(key, props => passthrough(key, props));
    }
  }

  executePropTransformer(key) {
    return this.propTransformers[key](this.props);
  }

  setDefaultPositionTransformers() {
    this.setPropTransformer('x', props => {
      const x = convertValueToRealCoordinates('x', props, 'x');
      return offsetValue(x, props, 'x');
    });

    this.setPropTransformer('y', props => {
      const y = convertValueToRealCoordinates('y', props, 'y');
      return offsetValue(y, props, 'y');
    });
  }

  setDefaultRotationTransformer() {
    this.setPropAlias('rotate', 'transform');
    this.setPropTransformer('rotate', props => {
      const center = {
        x: this.executePropTransformer('x'),
        y: this.executePropTransformer('y'),
      };

      return rotate(props, center);
    });
  }

  setDefaultStyleTransformers() {
    const styleAttributes = [
      'fill', 'opacity', 'stroke', 'strokeWidth',
      'strokeLinecap', 'strokeDasharray',
    ];

    this.setBatchPassthroughTransformers(styleAttributes);
  };

  buildObject () {
    throw 'buildObject missing override';
  }

  transformObject(obj) {
    if (! isSafe(obj)) return null;

    const transformedProps = {};

    for (const key of Object.keys(this.propTransformers)) {
      if (! isSafe(this.props[key])) continue;

      const transformedKey = this.getCorrectPropKey(key);
      const transformedValue = this.executePropTransformer(key);

      transformedProps[transformedKey] = transformedValue;
    }

    return (
      <obj.type {...transformedProps} />
    );
  }

  render() {
    return this.transformObject(this.buildObject());
  }
}

export default VisualObject;
