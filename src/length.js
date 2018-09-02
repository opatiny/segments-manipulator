'use strict';

const Segment = require('.');

/**
 * Returns the segment length
 * @return {object} length
 */
Object.defineProperty(Segment.prototype, 'length', {
  get: function () {
    let dx = this.to.x - this.from.x;
    let dy = this.to.y - this.from.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
});


let result1 = new Segment({ x: 0, y: 0 }, { x: 0, y: 2 });
console.log(result1.length);

module.exports = Segment.length;
