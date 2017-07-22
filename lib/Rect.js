import React from 'react';
import Shape from './Shape';

class Rect extends Shape {
  constructor(props) {
    super(props);
    this.setDefaultPositionTransformers();
    this.setDefaultDimensionTransformers();
  }

  constructShape() {
    return (
      <rect />
    );
  }
}

export default Rect;
