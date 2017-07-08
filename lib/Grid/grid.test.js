import expect from 'expect.js';
import React from 'react';
import { shallow } from 'enzyme';
import Grid from './grid';

describe('Grid', function() {
  it('true should be true', function() {
    expect(true).to.be(true);
  });

  it('grid should be null', function() {
    const grid = shallow(<Grid />);
    expect(grid.isEmptyRender()).to.be(true);
  });
});
