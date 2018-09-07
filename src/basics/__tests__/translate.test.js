'use strict';

const Segment = require('../Segment');

test('Segment.translate', () => {
  let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  let segment1 = result1.translate(5, 3);
  expect(segment1).toEqual({ from: { x: 5, y: 3 }, to: { x: 5, y: 5 } });
});
