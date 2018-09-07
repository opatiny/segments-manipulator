'use strict';

const Segment = require('../Segment');

test('Segment.rotate90', () => {
  let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
  let segment1 = result1.rotate90();
  expect(segment1).toEqual({ from: { x: 0, y: 0 }, to: { x: -2, y: 0 } });

  let result2 = new Segment({ x: 1, y: 1 }, { x: 3, y: 3 });
  let segment2 = result2.rotate90();
  expect(segment2).toEqual({ from: { x: 1, y: 1 }, to: { x: -1, y: 3 } });

  let result3 = new Segment({ x: 1, y: 2 }, { x: 3, y: 3 });
  let segment3 = result3.rotate90();
  expect(segment3).toEqual({ from: { x: 1, y: 2 }, to: { x: 0, y: 4 } });

  let result4 = new Segment({ x: 1, y: 2 }, { x: 3, y: 3 });
  let segment4 = result4.rotate90({ around: 'middle' });
  expect(segment4).toEqual({
    from: { x: 2.5, y: 1.5 },
    to: { x: 1.5, y: 3.5 }
  });
});
