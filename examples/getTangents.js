'use strict';

const Segment = require('..');

const convertToAnnotations = require('../annotations/convertToAnnotations');
const data = require('../web/data.json');

var tangents = [];

var xs = data.x;
var ys = data.y;

for (var index = 0; index < data.x.length - 1; index++) {
  var previousPoint = { x: xs[index - 1], y: ys[index - 1] };
  var point = { x: xs[index], y: ys[index] };
  var nextPoint = { x: xs[index + 1], y: ys[index + 1] };

  var tangent = Segment.getTangent(previousPoint, point, nextPoint);

  tangents.push(tangent);
}

convertToAnnotations(tangents, {
  strokeColor: 'purple',
  strokeWidth: '1px',
  path: 'examples/tangents.json'
});

