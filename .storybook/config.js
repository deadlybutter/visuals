import { configure } from '@storybook/react';

function loadStories() {
  require('../lib/stories.js');
}

configure(loadStories, module);
