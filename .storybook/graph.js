import React from 'react';
import { storiesOf } from '@storybook/react';

import Graph from '../lib/Graph';
import Rect from '../lib/Rect';

storiesOf('Graph', module)
  .add('displays', () => (
    <div className="full">
      <Graph />
    </div>
  ))
  .add('renders children', () => (
    <div className="full">
      <Graph>
        <Rect x={0} y={0} width="100%" height="100%" fill="#7FDBFF" />
      </Graph>
    </div>
  ));
