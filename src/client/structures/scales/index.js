import major from './patterns/major';
import minor from './patterns/minor';
import pentatonic_major from './patterns/pentatonic_major';
import pentatonic_minor from './patterns/pentatonic_minor';
import blues_major from './patterns/blues_major';
import blues_minor from './patterns/blues_minor';
import bebop from './patterns/bebop';
import spanish from './patterns/spanish';
import arabian from './patterns/arabian';
import egyptian from './patterns/egyptian';

import getScaleNotesByPattern from '../utils/getScaleNotesByPattern';

/**
 * Scale Patterns
 */
const scalePatterns = {
  major,
  minor,
  pentatonic_major,
  pentatonic_minor,
  blues_major,
  blues_minor,
  bebop,
  spanish,
  arabian,
  egyptian,
};

/**
 * Returns an array of scale available notes
 *
 * @param {Number} noteId - The base note id
 * @param {scaleId} scaleId - The scale type id
 * @returns {Array} The array of scale notes
 */
const getScale = (noteId, scaleId) => getScaleNotesByPattern(noteId, scalePatterns[scaleId]);

/**
 * Returns a list of scales
 *
 * @returns {Array} The scale options
 */
const getScaleList = () => {
  const resultList = [];
  Object.keys(scalePatterns).forEach((scale) => {
    resultList.push({
      label: scale.replace('_', ' ').toUpperCase(),
      value: scale,
    });
  });
  return resultList;
};

export { getScale, getScaleList };
