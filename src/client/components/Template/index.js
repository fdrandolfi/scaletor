import React from 'react';

import './index.scss';

import { templates } from '../../structures/templates';

const Template = ({ id }) => (
  <div className="template">
    <img
      className="template__image"
      src={templates[id].imgSrc}
      alt=""
    />
  </div>
);

export default Template;
