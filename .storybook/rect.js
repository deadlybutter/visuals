import React from 'react';
import { storiesOf } from '@storybook/react';

import Graph from '../lib/Graph';
import Rect from '../lib/Rect';
import Text from '../lib/Text';

storiesOf('Rect', module)
  .add('displays', () => (
    <Graph>
      <Rect x={50} y={50} width={50} height={50} fill="#7FDBFF" />
    </Graph>
  ))
  .add('renders shape children', () => (
    <Graph>
      <Rect x={50} y={50} width={50} height={50} fill="#7FDBFF">
        <Rect x={10} y={10} width="100%" height="100%" fill="#0074D9" />
      </Rect>
    </Graph>
  ))
  .add('renders object children', () => (
    <Graph>
      <Rect x={50} y={50} width={50} height={50} fill="#7FDBFF">
        <Text x={0} y={0} text="test" />
      </Rect>
    </Graph>
  ))
  .add('render children with percent based grid', () => (
    <Graph>
      <Rect x={0} y={0} width='50%' height='50%' fill="#7FDBFF">
        <Rect x='50%' y='50%' width='50%' height='50%' fill="#0074D9" />
      </Rect>
    </Graph>
  ))
  .add('style properties', () => (
    <Graph>
      <Rect
        x='25%' y='25%'
        width='50%' height='50%'
        fill='#7FDBFF'
        stroke='#0074D9'
        strokeWidth='4px'
        strokeDasharray="5, 5"
      />
    </Graph>
  ))
  .add('rotation', () => (
    <Graph>
      <Rect
        x='50%' y='50%'
        width='50%' height='50%'
        fill='#7FDBFF'
        stroke='#0074D9'
        strokeWidth='4px'
        strokeDasharray="5, 5"
        rotate={{ angle: '90' }}
      />
    </Graph>
  ));
