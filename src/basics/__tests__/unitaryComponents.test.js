'use strict';

const Segment = require('../Segment');

test('Segment.unitaryComponents', () => {
  let segment1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  expect(segment1.unitaryComponents).toEqual({ x: 0, y: 1 });

  let segment2 = new Segment({ x: 5, y: 5 }, { x: 20, y: 20 });
  expect(segment2.unitaryComponents.x).toBeCloseTo(0.707);
  expect(segment2.unitaryComponents.y).toBeCloseTo(0.707);
});
