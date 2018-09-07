'use strict';

const Segment = require('../basicAlgorithms');

const getBisectorAngle = require('./getBisectorAngle');
const getDotProductAngle = require('./getDotProductAngle');

/**
 * From three points, returns tangent to the second point.
 * @param {object} [pointA] - First point in the format {x: 3, y: 54}
 * @param {object} [pointB] - Point to which the tangent is desired in the format {x: 3, y: 54}
 * @param {object} [pointC] - Last point in the format {x: 3, y: 54}
 * @param {object} [options]
 * @param {number} [options.segmentLength = 10] - Length of the segment
 * @param {string} [options.angleType = "bisector"] - Specify method to use to draw tangent (bisector, dotProduct or proportional)
 * @return {object} tangent
 */
function getTangent(pointA, pointB, pointC, options = {}) {
  const { angleType = 'bisector', segmentLength = 10 } = options;

  if (angleType === 'bisector') {
    var angle = getBisectorAngle(pointA, pointB, pointC);
  } else if (angleType === 'dotProduct') {
    angle = getDotProductAngle(pointA, pointB, pointC);
  }

  var segment = new Segment(pointB, pointC);
  segment.rotate(angle);

  var endPoint = {
    x: pointB.x + (segmentLength / 2) * segment.unitaryComponents.x,
    y: pointB.y + (segmentLength / 2) * segment.unitaryComponents.y
  };

  var firstTangentHalf = new Segment(pointB, endPoint);
  var secondTangentHalf = firstTangentHalf.clone().rotate180();

  var tangent = new Segment(secondTangentHalf.to, firstTangentHalf.to);

  return tangent;
}

module.exports = getTangent;
