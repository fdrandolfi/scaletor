// 6 Strings
import img_G_PRS_C24_6 from '../../assets/images/templates/G-PRS-C24-6.png';
import img_G_GIBSON_LP_STD_6 from '../../assets/images/templates/G-GIBSON-LP-STD-6.png';
import img_G_FENDER_STRATO_6 from '../../assets/images/templates/G-FENDER-STRATO-6.png';

// 7 Strings
import img_G_SB_BODEN_7 from '../../assets/images/templates/G-SB-BODEN-7.png';
import img_G_SOLAR_TAB_7 from '../../assets/images/templates/G-SOLAR-TAB-7.png';

/**
 * Templates
 */
const templates = {
  'G-PRS-C24-6': {
    label: 'PRS Custom 24',
    strings: 6,
    frets: 24,
    imgSrc: img_G_PRS_C24_6,
  },
  'G-GIBSON-LP-STD-6': {
    label: 'Gibson Les Paul Standard',
    strings: 6,
    frets: 22,
    imgSrc: img_G_GIBSON_LP_STD_6,
  },
  'G-FENDER-STRATO-6': {
    label: 'Fender Vintera 60s Stratocaster',
    strings: 6,
    frets: 22,
    imgSrc: img_G_FENDER_STRATO_6,
  },
  'G-SB-BODEN-7': {
    label: 'Strandberg Boden 7',
    strings: 7,
    frets: 24,
    imgSrc: img_G_SB_BODEN_7,
  },
  'G-SOLAR-TAB-7': {
    label: 'Solar Type AB 7',
    strings: 7,
    frets: 24,
    imgSrc: img_G_SOLAR_TAB_7,
  },
};

/**
 * Returns a list of templates
 *
 * @returns {Array} The tunning options
 */
const getTemplateList = () => {
  const resultList = [];
  Object.keys(templates).forEach((template) => {
    resultList.push({
      label: templates[template].label,
      value: template,
    });
  });
  return resultList;
};

export { templates, getTemplateList };
