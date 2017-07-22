import React from 'react';
import { isSafe, mapChildrenWithProps } from './helpers';
import { convertValueToRealCoordinates, offsetValue } from './transformers';

class Shape extends React.Component {
  constructor(props) {
    super(props);

    this.attributeTransformers = {};

    this.originKeys = { x: 'x', y: 'y' };
    this.gridKeys = { width: 'width', height: 'height' };
  }

  setAttributeTransformer(key, transformer) {
    this.attributeTransformers[key] = transformer;
  }

  setDefaultPositionTransformers() {
    this.setAttributeTransformer('x', props => {
      const x = convertValueToRealCoordinates('x', props, 'x');
      return offsetValue(x, props, 'x');
    });

    this.setAttributeTransformer('y', props => {
      const y = convertValueToRealCoordinates('y', props, 'y');
      return offsetValue(y, props, 'y');
    });
  }

  setDefaultDimensionTransformers() {
    this.setAttributeTransformer('width', props => {
      return convertValueToRealCoordinates('width', props, 'x');
    });

    this.setAttributeTransformer('height', props => {
      return convertValueToRealCoordinates('height', props, 'y');
    });
  }

  setOriginAttributes(x, y) {
    this.originKeys = { x, y };
  }

  setGridAttributes(width, height) {
    this.gridKeys = { width, height };
  }

  constructShape() {
    return null;
  }

  fixChildren() {
    const { graph, children } = this.props;

    const origin = {
      x: this.attributeTransformers[this.originKeys.x](this.props),
      y: this.attributeTransformers[this.originKeys.y](this.props),
    };

    const grid = {
      width: this.attributeTransformers[this.gridKeys.width](this.props),
      height: this.attributeTransformers[this.gridKeys.height](this.props),
    };

    return mapChildrenWithProps(children, {
      graph,
      origin,
      grid,
    });
  }

  fixShape(shape) {
    if (! isSafe(shape)) return null;

    const props = {};

    for (const key of Object.keys(this.attributeTransformers)) {
      props[key] = this.attributeTransformers[key](this.props);
    }

    const fixedShape = ( <shape.type {...props} /> );

    const fixedChildren = this.props.children ? this.fixChildren() : null;
    if (! fixedChildren) return fixedShape;

    return (
      <g>
        { fixedShape }
        { fixedChildren }
      </g>
    );
  }

  render() {
    return this.fixShape(this.constructShape());
  }
}

Shape.defaultProps = {
  scale: { x: 1, y: 1 },
};

export default Shape;
