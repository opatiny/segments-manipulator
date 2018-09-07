'use strict';

const Segment = require('../src/basicAlgorithms');
const convertToAnnotations = require('../annotations/convertToAnnotations');
const data = require('../web/data.json');

var tangents = [];

var xs = data.x;
var ys = data.y;

for (var index = 1; index < data.x.length - 1; index++) {
  var previousPoint = { x: xs[index - 1], y: ys[index - 1] };
  var point = { x: xs[index], y: ys[index] };
  var nextPoint = { x: xs[index + 1], y: ys[index + 1] };
  var tangent = Segment.getTangent(previousPoint, point, nextPoint);

  tangents.push(tangent);
}
console.log(tangents);

convertToAnnotations(tangents, {
  strokeColor: 'purple',
  strokeWidth: '3px',
  path: '/home/opatiny/git/opatiny/segments-manipulator/examples/tangents.json'
});
