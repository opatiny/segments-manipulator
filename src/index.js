'use strict';


/**
 * Creates new instance of segment
 * @param {object} [from] - Starting point of the segment in the format {x: 3, y: 54}
 * @param {object} [to] - End point of the segment in the format {x: 3, y: 54}
 */
function Segment(from, to) {
  this.from = from;
  this.to = to;
}

module.exports = Segment;

require('./rotate90');
require('./length');
require('./clone');
require('./translate');

Segment.getTangent = require('./getTangent');
