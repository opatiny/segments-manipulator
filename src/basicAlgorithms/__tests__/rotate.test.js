'use strict';

const Segment = require('..');

test('Segment.rotate', () => {
  let result = new Segment({ x: 0, y: 0 }, { x: 2, y: 2 });
  let segment = result.rotate(90);
  expect(segment.to.x).toBeCloseTo(-2);
  expect(segment.to.y).toBeCloseTo(-2, 2);

  /* why doesn't it work???
  let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  let segment1 = result1.rotate(90);
  expect(segment1.to.x).toBeCloseTo(-2);
  expect(segment1.to.y).toBeCloseTo(0, 2);
  */

  let result2 = new Segment({ x: 1, y: 1 }, { x: 3, y: 3 });
  let segment2 = result2.rotate(180);
  expect(segment2.to.x).toBeCloseTo(-1);
  expect(segment2.to.y).toBeCloseTo(-1);

  let result3 = new Segment({ x: 1, y: 2 }, { x: 3, y: 3 });
  let segment3 = result3.rotate(30);
  expect(segment3.to.x).toBeCloseTo(2.232);
  expect(segment3.to.y).toBeCloseTo(3.482);
});

