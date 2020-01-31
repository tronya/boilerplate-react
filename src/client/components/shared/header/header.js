import React from 'react';
import Menu from '../../atoms/menu';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container clearfix">
        <div className="header__logo-wrapper">
          <a href="/">
            <div className="header__logo"/>
          </a>
        </div>
        <div className="delimiter"/>
        <Menu/>
        <div className="header__logout">
          <a href="/users/sign_out" className="header__logout-icon" title="Sign out"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
