'use strict';

var dotProductAngle = require('../getDotProductAngle');

test('dotProductAngle', () => {
  let angle = dotProductAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 });
  expect(angle).toBeCloseTo(45);
});
