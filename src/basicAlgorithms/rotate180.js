'use strict';

const Segment = require('.');

/**
 * Rotates segment of 180 degrees (central symmetry)
 * @param {object} [options]
 * @param {string} [options.around = "from"] - Specify around what point you want the rotation ('from', or 'middle' -> middle of the segment)
 * @return {object} this
 */
Segment.prototype.rotate180 = function (options = {}) {
  const { around = 'from' } = options;

  // transition variables
  var tox = this.to.x;
  var toy = this.to.y;

  if (around === 'from') {
    this.to.x -= 2 * this.components.x;
    this.to.y -= 2 * this.components.y;
  } else if (around === 'middle') {
    this.to.x = this.from.x;
    this.to.y = this.from.y;

    this.from.x = tox;
    this.from.y = toy;
  }

  return this;
};

