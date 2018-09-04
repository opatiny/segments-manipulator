'use strict';

const Segment = require('.');

/**
 * Rotates segment of any angle in degrees
 * @param {number} [angle] - Angle in degrees (turning anti-clockwise)
 * @param {object} [options]
 * @param {string} [options.unit = "degrees"] - Unit of the angle (degrees or rad)
 * @return {object} this
 */
Segment.prototype.rotate = function (angle, options = {}) {
  const {
    unit = 'degrees'
  } = options;

  if (unit === 'degrees') {
    angle *= Math.PI / 180;
  }
  /*
  console.log(angle);
  console.log(this.components.x);
  console.log(this.components.y);
  */

  this.to.x = this.components.x * Math.cos(angle) - this.components.y * Math.sin(angle) + this.from.x;
  this.to.y = this.components.x * Math.sin(angle) + this.components.y * Math.cos(angle) + this.from.y;

  return this;
};
