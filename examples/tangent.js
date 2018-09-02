'use strict';


Segment.getTangent([{ x: 0, y: 0 }]);

var Segment = require('../src');

var segment = new Segment({ x: 0, y: 0 }, { x: 5, y: 10 });

segment.from = { x: 2, y: 3 };

console.log(segment.rotate90());
console.log(segment.length);

var segment2 = segment.clone();
segment2.from = { x: 9, y: 9 };

console.log(segment);
console.log(segment2);

segment2.translate(-9, -9).rotate90();
console.log(segment2);
