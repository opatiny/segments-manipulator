'use strict';

const Segment = require('.');

/**
 * Returns an object containing the components of the vector corresponding to a segment
 * @return {object} components - In the format {x: 5, y: 9}
 */
Object.defineProperty(Segment.prototype, 'unitComponents', {
  get: function () {
    let unitComponents = {};
    unitComponents.x = this.components.x / this.length;
    unitComponents.y = this.components.y / this.length;
    return unitComponents;
  }
});
