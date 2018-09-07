'use strict';

const Segment = require('.');

/**
 * Returns a copy of the segment
 * @return {object} clone
 */
Segment.prototype.clone = function () {
  var clone = new Segment({ x: this.from.x, y: this.from.y }, { x: this.to.x, y: this.to.y });
  return clone;
};

module.exports = Segment.clone;
