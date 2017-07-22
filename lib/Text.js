import React from 'react';
import VisualObject from './VisualObject';

class Text extends VisualObject {
  constructor(props) {
    super(props);

    this.setDefaultPositionTransformers();
    this.setDefaultRotationTransformer();

    this.setBatchPassthroughTransformers([
      'fontFamily', 'fontSize', 'fontStyle',
      'fontWeight', 'textAnchor', 'textDecoration',
    ]);
  }

  buildObject() {
    return ( <text /> );
  }

  render() {
    const textObject = super.render();

    return (
      <textObject.type {...textObject.props}>
        { this.props.text }
      </textObject.type>
    );
  }
}

export default Text;
