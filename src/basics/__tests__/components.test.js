'use strict';

const Segment = require('../Segment');

test('Segment.components', () => {
  let segment1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  expect(segment1.components).toEqual({ x: 0, y: 2 });

  let segment2 = new Segment({ x: 53, y: 6 }, { x: 35, y: 90 });
  expect(segment2.components).toEqual({ x: -18, y: 84 });
});
