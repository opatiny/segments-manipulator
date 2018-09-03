'use strict';

var Segment = require('..');

test('Segment', () => {
  let segment = new Segment({ x: 0, y: 0 }, { x: 5, y: 10 });
  segment.from = { x: 2, y: 3 };
  expect(segment).toEqual({ from: { x: 2, y: 3 }, to: { x: 5, y: 10 } });
  expect(segment.rotate90()).toEqual({ from: { x: 2, y: 3 }, to: { x: -5, y: 6 } }
  );
  expect(segment.length).toBeCloseTo(7.615);

  let segment2 = new Segment({ x: 0, y: 0 }, { x: 5, y: 10 });

  let segment3 = segment2.clone();
  segment3.from = { x: 9, y: 9 };
  expect(segment2).toEqual({ from: { x: 0, y: 0 }, to: { x: 5, y: 10 } });
  expect(segment3).toEqual({ from: { x: 9, y: 9 }, to: { x: 5, y: 10 } });

  expect(segment3.translate(-9, -9).rotate90()).toEqual({ from: { x: 0, y: 0 }, to: { x: -1, y: -4 } });
});
