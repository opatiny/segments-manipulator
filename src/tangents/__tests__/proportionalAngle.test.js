'use strict';

var getProportionalAngle = require('../getProportionalAngle');

test('getProportionalAngle', () => {
  let angle = getProportionalAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 });
  expect(angle).toBeCloseTo(45);

  let angle1 = getProportionalAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 4 });
  expect(angle1).toBeCloseTo(45);
});
