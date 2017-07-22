# visuals
React component library for building visualizations

## install

```sh
$ npm install visuals
```

```js
const { Grid } = require('visuals');

<Grid />
```

## contributing

```sh
$ git clone https://github.com/joekent-cms-project/visuals.git
$ npm install
...
$ npm run storybook
$ npm run test
$ npm run lint
```

--------------------


GOALS

1. Kill all files
2. Make <Graph /> the Ruler + SVG component. Measure the actual SVG element (duh) and pass those values down.
3. Shape refactoring.
  - Make this an abstract class extending the React element
    - Handles under the hood technicals, common functions, animations, styling and abstract stubs.
    - Will also replace the need for the <Grid /> component. It will inherit all of this functionality and thus accept children.
    - Shape will monkeypatch the React component methods such as componentOnMount, render, etc. Ideally we prevent the children from calling the original.
  - Different types of shapes will extend Shape and implement various functions that are relevant / need to be overrided.


-----------


1. Add Scale, Dimension
 - Scale, virtual width/height that translates values relative to it
 - Dimension, the width/height of the element

2. Need a way of moving these props down to children & others (eg: map x/y to origin)

3. Add attributes

=====

Add Scale, Grid
 Grid  = graph - origin
 Scale = n || %
