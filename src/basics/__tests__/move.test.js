'use strict';

const Segment = require('../Segment');

test('Segment.move', () => {
  let result1 = new Segment({ x: 1, y: 1 }, { x: 0, y: 2 });
  let segment1 = result1.move(5, 3);
  expect(segment1).toEqual({ from: { x: 6, y: 5 }, to: { x: 5, y: 5 } });
});
