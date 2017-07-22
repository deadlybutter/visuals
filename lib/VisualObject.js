import React from 'react';
import { isSafe } from './helpers';
import { convertValueToRealCoordinates, offsetValue } from './transformers';

class VisualObject extends React.Component {
  constructor(props) {
    super(props);

    this.propTransformers = {};
  }

  setPropTransformer(key, transformer) {
    this.propTransformers[key] = transformer;
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

  buildObject () {
    throw 'buildObject missing override';
  }

  transformObject(obj) {
    if (! isSafe(obj)) return null;

    const transformedProps = {};

    for (const key of Object.keys(this.propTransformers)) {
      transformedProps[key] = this.executePropTransformer(key);
    }

    return (
      <obj.type {...transformedProps} />
    );
  }

  render() {
    return this.transformObject(this.buildObject());
  }
}

VisualObject.defaultProps = {
  scale: { x: 1, y: 1 },
};

export default VisualObject;
