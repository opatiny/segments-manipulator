'use strict';

const Segment = require('..');

test('Segment.length', () => {
  let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  let length = result1.length;
  expect(length).toEqual(2);
});
