import React from 'react';

import pkg from '../../../../package.json';
import './index.scss';

const version = {
  label: `Scaletor v${JSON.stringify(pkg.version).replace('"', '').replace('"', '')} `,
  link: 'https://github.com/fdrandolfi/scaletor/blob/main/changelog.md',
};

const Footer = () => (
  <section className="footer">
    <h3>
      Dedicated to all of us who learn by passion
    </h3>
    <p>
      <a
        href={version.link}
        alt="changelog"
      >
        {version.label}
      </a>
      | © 2020 FELIPE RANDOLFI
    </p>
  </section>
);

export default Footer;
