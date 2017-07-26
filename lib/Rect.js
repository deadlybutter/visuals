import React from 'react';
import VisualShape from './VisualShape';

class Rect extends VisualShape {
  constructor(props) {
    super(props);

    this.setDefaultPositionTransformers();
    this.setDefaultDimensionTransformers();
    this.setDefaultStyleTransformers();
    this.setDefaultRotationTransformer();
  }

  buildObject() {
    return (
      <rect />
    );
  }
}

export default Rect;
