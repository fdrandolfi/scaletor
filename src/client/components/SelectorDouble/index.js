import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';

import './index.scss';

const SelectorDouble = ({
  id, title, optionsNote, optionsScale, onChangeNote, onChangeScale,
}) => (
  <div className={classnames(
    'selector-double',
    `selector-double--${id}`,
  )}
  >
    <p className="selector-double__title">
      {title}
    </p>
    <div className="selector-double__content">
      <Select
        defaultValue={optionsNote[0]}
        className={classnames(
          'selector-double__select',
          'selector-double__select--note',
        )}
        options={optionsNote}
        onChange={onChangeNote}
      />
      <Select
        defaultValue={optionsScale[0]}
        className={classnames(
          'selector-double__select',
          'selector-double__select--scale',
        )}
        options={optionsScale}
        onChange={onChangeScale}
      />
    </div>
  </div>
);

export default SelectorDouble;
