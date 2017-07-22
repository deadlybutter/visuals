import React from 'react';
import { mapChildrenWithProps } from './helpers';

class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graphWidth: 0,
      graphHeight: 0,
    };

    this.id = `ruler-${Math.round(Date.now() * Math.random())}`;
    this.measure = this.measure.bind(this);
  }

  measure() {
    const graphWidth = parseInt(getComputedStyle(document.getElementById(this.id)).width);
    const graphHeight = parseInt(getComputedStyle(document.getElementById(this.id)).height);

    this.setState({ graphWidth, graphHeight });
  }

  componentDidMount() {
    this.measure();
    window.onresize = this.measure;
  }

  render() {
    const { children } = this.props;

    const childProps = {
      graph: this.state,
      origin: { x: 0, y: 0 },
      scale: { x: 1, y: 1 },
      grid: {
        width: this.state.graphWidth,
        height: this.state.graphHeight,
      },
    };

    return (
      <svg id={`${this.id}`} width="100%" height="100%">
        { mapChildrenWithProps(children, childProps) }
      </svg>
    );
  }
}

export default Graph;
