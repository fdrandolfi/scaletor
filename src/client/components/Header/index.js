import React from 'react';

import './index.scss';
import Logotype from '../../assets/images/general/logotype.svg';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={Logotype} alt="" />
  </header>
);

export default Header;
