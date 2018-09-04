'use strict';

const Segment = require('..');

/**
 * From three points, returns angle to tangent in degrees. Angle is a bisector of the crossing sides of triangle.
 * @param {object} [pointA] - First point of a triangle in the format {x: 3, y: 54}
 * @param {object} [pointB] - Point to which the tangent is desired in the format {x: 3, y: 54}
 * @param {object} [pointC] - Last point of a triangle in the format {x: 3, y: 54}
 * @return {number} angle
 */
function getBisectorAngle(pointA, pointB, pointC) {
  let segmentA = new Segment(pointB, pointC);
  let segmentB = new Segment(pointA, pointC);
  let segmentC = new Segment(pointA, pointB);

  let lengthA = segmentA.length;
  let lengthB = segmentB.length;
  let lengthC = segmentC.length;

  let beta = Math.acos((lengthA ** 2 - lengthB ** 2 + lengthC ** 2) / (2 * lengthC * lengthA)) * 180 / Math.PI;

  let angle = (180 - beta) / 2;

  return angle;
}

module.exports = getBisectorAngle;
