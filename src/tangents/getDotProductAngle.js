'use strict';

const Segment = require('../basicAlgorithms');

/**
 * From three points, returns angle to tangent in degrees. Angle is calculated using dot product.
 * @param {object} [pointA] - First point of a triangle in the format {x: 3, y: 54}
 * @param {object} [pointB] - Point to which the tangent is desired in the format {x: 3, y: 54}
 * @param {object} [pointC] - Last point of a triangle in the format {x: 3, y: 54}
 * @param {object} [options]
 * @param {string} [options.unit = "degrees"] - Unit of the angle (degrees or rad)
 * @return {number} angle
 */
function getDotProductAngle(pointA, pointB, pointC, options = {}) {
  const { unit = 'degrees' } = options;

  let segmentA = new Segment(pointB, pointC);
  let segmentC = new Segment(pointA, pointB);

  let lengthA = segmentA.length;
  let lengthC = segmentC.length;

  let beta = Math.acos((segmentA.components.x * segmentC.components.x + segmentA.components.y * segmentC.components.y) / (lengthA * lengthC));

  if (unit === 'degrees') {
    beta *= 180 / Math.PI;
  }

  let angle = (180 - beta) / 2;

  return angle;
}

module.exports = getDotProductAngle;
