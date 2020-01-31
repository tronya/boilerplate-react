import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { menuItems } from '../../helpers/menuHelper';
import { Link } from 'react-router-dom';

const Menu = ({ menu }) => {
  return (
    <ul className="menu">
      {menu.map(menuItem => (
        <li className={classNames('menu__item', {
          'menu__expandable': menuItem.childrenItems,
        })}>
          {menuItem.childrenItems ? (
            <>
              <a className="menu__link">
              <span className="menu__icon-holder">
                <i className={`mi-${menuItem.icon}`}/>
              </span>
                <span className="menu__title">{menuItem.name}</span>
                {menuItem.badge ? <span className="badge">{menuItem.badge}</span> : null}
              </a>
              <ul className="menu__sub-menu">
                {menuItem.childrenItems.map(subItem => (
                  <li className="menu__subItem">
                    <Link to={subItem.link}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link to={menuItem.link} className="menu__link">
              <span className="menu__icon-holder">
                <i className={`mi-${menuItem.icon}`}/>
              </span>
              <span className="menu__title">{menuItem.name}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

Menu.defaultProps = {
  menu: menuItems,
};

Menu.propTypes = {};

export default Menu;
