'use strict';

var getTangent = require('../getTangent');

test('bisectorAngle', () => {
  let tangent = getTangent({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 });
  expect(tangent).toEqual({ from: { x: -4, y: 1 }, to: { x: 6, y: 1 } });
});
