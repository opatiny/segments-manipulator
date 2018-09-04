'use strict';

const fs = require('fs');

/**
  * Creates a file with the default name 'annotations.json' with the segments formatted properly to be used in jsGraph
  * @param {Array} [segments] - Array of segments, that are objects in the format { from: { x: 1, y: 1 }, to: { x: 3, y: 3 } }
  * @param {object} [options = {}]
  * @param {string} [options.strokeColor = 'black'] - Color of the segments
  * @param {string} [options.strokeWidth = '1px'] - Width of the segments
  * @param {string} [options.strokeType = 'line'] - Type of the segments
  * @param {string} [options.name = 'annotations.json'] - Name of the generated annotations file
  * @param {string} [options.path = `${__dirname}/${name}`] - Name of the generated annotations file
  */
function convertToAnnotations(segments, options = {}) {
  const {
    strokeColor = 'black',
    strokeWidth = '1px',
    strokeType = 'line',
    name = 'annotations.json',
    path = `${__dirname}/${name}`
  } = options;

  var annotations = [];

  for (var index = 0; index < segments.length; index++) {
    let point1 = segments[index].from;
    let point2 = segments[index].to;

    var annotation = {
      type: strokeType,
      data: {
        position: [point1, point2],
        strokeWidth: strokeWidth,
        strokeColor: strokeColor
      }
    };

    annotations.push(annotation);

    fs.writeFileSync(
      path,
      JSON.stringify(annotations),
      'utf8'
    );
  }
}

module.exports = convertToAnnotations;
