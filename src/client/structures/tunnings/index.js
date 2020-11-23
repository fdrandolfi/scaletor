import e_standard_6 from './six/e_standard';
import d_standard_6 from './six/d_standard';
import drop_d_6 from './six/drop_d';
import drop_c_6 from './six/drop_c';
import drop_b_6 from './six/drop_b';
import drop_b_e_standard_6 from './six/drop_b_e_standard';
import ethereal_6 from './six/ethereal';

/**
 * Tunnings
 */
const tunnings = {
  6: {
    e_standard: e_standard_6,
    d_standard: d_standard_6,
    drop_d: drop_d_6,
    drop_c: drop_c_6,
    drop_b: drop_b_6,
    'drop_b_&_e_standard': drop_b_e_standard_6,
    ethereal: ethereal_6,
  },
};

/**
 * Returns an Array with notes
 *
 * @param {Number} tunningId - The tunning note id
 * @param {scaleId} strings - The strings number from template
 * @returns {Array} The array of scale notes
 */
const getTunning = (tunningId, strings) => tunnings[strings][tunningId] || tunnings[6].e_standard;

/**
 * Returns a list of tunnings
 *
 * @param {scaleId} strings - The strings number from template
 * @returns {Array} The tunning options
 */
const getTunningList = (strings) => {
  const resultList = [];
  Object.keys(tunnings[strings]).forEach((tune) => {
    resultList.push({
      label: tune.replace('_', ' ')
        .replace('_', ' ')
        .replace('_', ' ')
        .replace('_', ' ')
        .toUpperCase(),
      value: tune,
    });
  });
  return resultList;
};

export { getTunning, getTunningList };
