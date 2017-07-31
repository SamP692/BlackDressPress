import React from 'react';
import Link  from 'react-router-dom';

import { navLinks } from '../../local.config';

import './Nav.css';

export default () => {
  const buildLinks = () => {
    Object.entries(navLinks).forEach(link => (
      <Link key={link[0]} to={link[1].location}>{link[1].display}</Link>
    ));
  };

  return (
    <div id="navContainer">
      {buildLinks()}
    </div>
  );
};
