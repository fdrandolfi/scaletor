import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';

import './index.scss';

const Selector = ({
  id, title, options, onChange,
}) => (
  <div className={classnames(
    'selector',
    `selector--${id}`,
  )}
  >
    <p className="selector__title">
      {title}
    </p>
    <Select
      defaultValue={options[0]}
      className="selector__select"
      options={options}
      onChange={onChange}
    />
  </div>
);

export default Selector;
