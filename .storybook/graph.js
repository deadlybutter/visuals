import React from 'react';
import { storiesOf } from '@storybook/react';

import Graph from '../lib/Graph';
import Rect from '../lib/Rect';
import Text from '../lib/Text';

storiesOf('Graph', module)
  .add('displays', () => (
    <Graph />
  ))
  .add('renders shape children', () => (
    <Graph>
      <Rect x={0} y={0} width='100%' height='100%' fill="#7FDBFF" />
    </Graph>
  ))
  .add('renders object children', () => (
    <Graph>
      <Text x={120} y={120} text="test" fontSize="100px" />
    </Graph>
  ));
