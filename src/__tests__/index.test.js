'use strict';

const Segment = require('../index');

test('Segment', () => {
  let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  expect(result1).toEqual({ x: 0, y: 0 }, { x: 0, y: 2 });

  let result2 = new Segment({ x: 1, y: 1 }, { x: 3, y: 3 });
  expect(result2).toEqual({ x: 1, y: 1 }, { x: 3, y: 3 });
});
