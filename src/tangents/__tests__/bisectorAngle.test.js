'use strict';

var bisectorAngle = require('../getBisectorAngle');

test('bisectorAngle', () => {
  let angle = bisectorAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 });
  expect(angle).toBeCloseTo(45);
});
