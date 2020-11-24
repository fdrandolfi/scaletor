import React from 'react';

import './index.scss';
import logotype from '../../assets/images/general/logotype.svg';

const Unsupported = () => (
  <div className="unsupported">
    <img
      className="unsupported__logotype"
      src={logotype}
      alt=""
    />
    <p className="unsupported__message">
      Unsupported resolution, so small...
    </p>
  </div>
);

export default Unsupported;
