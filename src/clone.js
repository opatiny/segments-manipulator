'use strict';

const Segment = require('.');

/**
 * Returns a copy of the segment
 * @return {object} clone
 */
Segment.prototype.clone = function () {
  var clone = new Segment(this.from, this.to);
  return clone;
};

module.exports = Segment.clone;
