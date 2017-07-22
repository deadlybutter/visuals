import React from 'react';
import VisualObject from './VisualObject';
import { isSafe, mapChildrenWithProps } from './helpers';
import { convertValueToRealCoordinates } from './transformers';

class VisualShape extends VisualObject {
  constructor(props) {
    super(props);
  }

  setDefaultDimensionTransformers() {
    this.setPropTransformer('width', props => {
      return convertValueToRealCoordinates('width', props, 'x');
    });

    this.setPropTransformer('height', props => {
      return convertValueToRealCoordinates('height', props, 'y');
    });
  }

  getOrigin() {
    return {
      x: this.executePropTransformer('x'),
      y: this.executePropTransformer('y'),
    };
  }

  getGrid() {
    return {
      width: this.executePropTransformer('width'),
      height: this.executePropTransformer('height'),
    };
  }

  transformChildren() {
    const { graph, children } = this.props;

    if (! isSafe(children)) return null;

    const origin = this.getOrigin();
    const grid = this.getGrid();

    return mapChildrenWithProps(children, { graph, origin, grid });
  }

  render() {
    const visualObject = super.render();
    const children = this.transformChildren();

    if (! isSafe(children)) return visualObject;

    return (
      <g>
        { visualObject }
        { children }
      </g>
    );
  }
}

export default VisualShape;
