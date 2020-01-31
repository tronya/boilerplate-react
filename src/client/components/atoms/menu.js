import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import menuItems from '../../helpers/menuHelper';

const Menu = ({ menu }) => (
  <ul className="menu">
    {menu.map(menuItem => (
      <li
        key={menuItem.name}
        className={classNames('menu__item', {
          menu__expandable: menuItem.childrenItems,
        })}
      >
        {menuItem.childrenItems ? (
          <>
            <div className="menu__link">
              <span className="menu__icon-holder">
                <i className={`mi-${menuItem.icon}`} />
              </span>
              <span className="menu__title">{menuItem.name}</span>
              {menuItem.badge ? <span className="badge">{menuItem.badge}</span> : null}
            </div>
            <ul className="menu__sub-menu">
              {menuItem.childrenItems.map(subItem => (
                <li className="menu__subItem" key={subItem.name}>
                  <Link to={subItem.link}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link to={menuItem.link} className="menu__link">
            <span className="menu__icon-holder">
              <i className={`mi-${menuItem.icon}`} />
            </span>
            <span className="menu__title">{menuItem.name}</span>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

Menu.defaultProps = {
  menu: menuItems,
};

Menu.propTypes = {
  menu: arrayOf(
    shape({
      icon: string.isRequired,
      link: string,
    }),
  ),
};

export default Menu;
