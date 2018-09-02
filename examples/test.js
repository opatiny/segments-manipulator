'use strict';

var Segment = require('../src');

var segment = new Segment({ x: 0, y: 0 }, { x: 5, y: 10 });

segment.from = { x: 2, y: 3 };

console.log(segment.rotate90());
