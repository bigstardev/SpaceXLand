import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/header-brand-logo/header-brand-logo@2x.png';
import './TopNavLogo.scss';

const TopNavLogo: FC = () => (
  <NavLink className="TopNavLogo" to="/">
    <img alt="Logo" className="TopNavLogo__img" src={Logo} />
  </NavLink>
);

export default TopNavLogo;
