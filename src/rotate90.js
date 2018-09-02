'use strict';

const Segment = require('./index');

/**
 * Rotates segment of 90 degrees
 * @param {object} [options]
 * @param {string} [options.around = "from"] - Specify around what point you want the rotation ('from', or 'middle' -> middle of the segment)
 * @return {object} this
 */
Segment.prototype.rotate90 = function (options = {}) {
  const { around = 'from' } = options;
  // transition variables
  var tox = this.from.x + this.from.y - this.to.y;
  var toy = this.from.y + this.to.x - this.from.x;

  let dx = tox - this.from.x;
  let dy = toy - this.from.y;

  if (around === 'from') {
    this.to.y = toy;
    this.to.x = tox;
    // var perpendicular = new Segment(this.from, to);
  } else if (around === 'middle') {
    let middle = { x: (this.from.x + this.to.x) / 2, y: (this.from.y + this.to.y) / 2 };

    this.from.x = middle.x - dx / 2;
    this.from.y = middle.y - dy / 2;

    this.to.x = middle.x + dx / 2;
    this.to.y = middle.y + dy / 2;
  }

  return this;
};

