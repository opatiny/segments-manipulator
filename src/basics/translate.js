'use strict';

const Segment = require('.');

/**
 * Translates segment
 * @param {number} [dx = 1] - X translate
 * @param {number} [dy = 1] - Y translate
 * @return {object} this
 */
Segment.prototype.translate = function (dx, dy) {
  this.from.x += dx;
  this.from.y += dy;

  this.to.x += dx;
  this.to.y += dy;
  return this;
};
