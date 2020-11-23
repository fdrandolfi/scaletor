import img_G_PRS_C24_6 from '../../assets/images/templates/G-PRS-C24-6.png';

/**
 * Templates
 */
const templates = {
  'PRS-G-PRS-C24-6': {
    label: 'PRS Custom 24',
    strings: 6,
    frets: 24,
    imgSrc: img_G_PRS_C24_6,
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
