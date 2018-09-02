'use strict';

var Segment = require('../src');

var convertToAnnotations;

var segments = [];

for (let i = 0; i < 100; i++) {
  segments.push(
    new Segment(
      { x: Math.random(), y: Math.random() },
      { x: Math.random(), y: Math.random() }
    )
  );
}

convertToAnnotations(segments, {
  strokeColor: 'red',
  strokeWidth: 1,
  strokeType: 2
});

