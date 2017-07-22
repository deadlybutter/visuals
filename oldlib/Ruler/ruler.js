import React from 'react';
import { connect } from 'react-redux';
import Container from 'easy-container';

import { setPixelDimensions } from './ruler.actions';

class Ruler extends React.Component {
  constructor(props) {
    super(props);

    this.id = `ruler-${Math.round(Date.now() * Math.random())}`;
    this.measure = this.measure.bind(this);
  }

  measure() {
    const pixelWidth = parseInt(getComputedStyle(document.getElementById(this.id)).width);
    const pixelHeight = parseInt(getComputedStyle(document.getElementById(this.id)).height);

    this.props.setPixelDimensions(pixelWidth, pixelHeight);
  }

  componentDidMount() {
    this.measure();
    window.onresize = this.measure;
  }

  render() {
    const { children } = this.props;

    return (
      <div id={`${this.id}`} style={{ width: '100%', height: '100%' }}>
        { children }
      </div>
    );
  }
}

Ruler.actionCreators = {
  setPixelDimensions
};

export default Container(Ruler, connect);
