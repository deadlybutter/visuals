import React from 'react';
import { storiesOf } from '@storybook/react';

import Graph from '../lib/Graph';
import Text from '../lib/Text';

storiesOf('Text', module)
  .add('displays', () => (
    <Graph>
      <Text x={20} y={20} text="hey" />
    </Graph>
  ))
  .add('font properties', () => (
    <Graph>
      <Text
        x={220}
        y={220}
        text="hey"
        fontSize="28px"
        fontFamily="Verdana"
        fontWeight="900"
        fontStyle="italic"
        textDecoration="underline"
      />
    </Graph>
  ))
  .add('style properties', () => (
    <Graph>
      <Text
        x={220}
        y={220}
        text="hey"
        fontSize="48px"
        fontWeight="900"
        fill="#0074D9"
        stroke="#7FDBFF"
      />
    </Graph>
  ))
  .add('does not render children', () => (
    <Graph>
      <Text x={40} y={40} text="should render" fontSize='20px'>
        <Text x={0} y={0} text="should not render" />
      </Text>
    </Graph>
  ))
  .add('percent position', () => (
    <Graph>
      <Text
        x='50%' y='50%'
        text="This should be centered"
        textAnchor="middle" 
      />
    </Graph>
  ))
  .add('rotation', () => (
    <Graph>
      <Text
        x='50%' y='50%'
        text="This should be centered at 45deg"
        textAnchor="middle"
        rotate={{ angle: '45' }}
      />
    </Graph>
  ));
