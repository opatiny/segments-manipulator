'use strict';

const Segment = require('..');

test('Segment.unitComponents', () => {
  let segment1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  expect(segment1.unitComponents).toEqual({ x: 0, y: 1 });

  let segment2 = new Segment({ x: 5, y: 5 }, { x: 20, y: 20 });
  expect(segment2.unitComponents.x).toBeCloseTo(0.707);
  expect(segment2.unitComponents.y).toBeCloseTo(0.707);
});
