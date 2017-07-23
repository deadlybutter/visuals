import { configure } from '@storybook/react';
import './styling.css';

function loadStories() {
  require('./graph.js');
}

configure(loadStories, module);
