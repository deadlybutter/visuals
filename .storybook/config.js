import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import './styling.css';

addDecorator(story => (
  <div className="full">
    {story()}
  </div>
));

function loadStories() {
  require('./graph');
  require('./rect');
  require('./text');
}

configure(loadStories, module);
