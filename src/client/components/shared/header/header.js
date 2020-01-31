import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../atoms/menu';

const Header = () => (
  <header className="header">
    <div className="header__container clearfix">
      <div className="header__logo-wrapper">
        <a href="/">
          <div className="header__logo" />
        </a>
      </div>
      <div className="delimiter" />
      <Menu />
      <div className="header__logout">
        <Link to={'/users/sign_out'} className="header__logout-icon" />
      </div>
    </div>
  </header>
);

export default Header;
