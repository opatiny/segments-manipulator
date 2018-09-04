'use strict';

const Segment = require('.');

/**
 * Returns an object containing the components of the vector corresponding to a segment
 * @return {object} components - In the format {x: 5, y: 9}
 */
Object.defineProperty(Segment.prototype, 'components', {
  get: function () {
    let components = {};
    components.x = this.to.x - this.from.x;
    components.y = this.to.y - this.from.y;
    return components;
  }
});
