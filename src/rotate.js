'use strict';

const Segment = require('.');

/**
 * Rotates segment of any angle in degrees
 * @param {number} [angle] - Angle in degrees (turning anti-clockwise)
 * @param {object} [options]
 * @param {string} [options.around = "from"] - Specify around what point you want the rotation ('from', or 'middle' -> middle of the segment)
 * @param {string} [options.unit = "degrees"] - Unit of the angle (degrees or rad)
 * @return {object} this
 */
Segment.prototype.rotate = function (angle, options = {}) {
  const {
    around = 'from',
    unit = 'degrees'
  } = options;

  if (unit === 'degrees') {
    angle *= Math.Pi / 180;
  }

  let xPrime = this;


  return this;
};

module.exports = Segment.rotate;
