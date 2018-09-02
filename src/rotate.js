'use strict';

const Segment = require('.');

/**
 * Rotates segment of any angle in degrees
 * @param {object} [options]
 * @param {string} [options.around = "from"] - Specify around what point you want the rotation ('from', or 'middle' -> middle of the segment)
 * @return {object} this
 */
Segment.prototype.rotate = function (options = {}) {
  const { around = 'from' } = options;

  return this;
};

module.exports = Segment.rotate;
