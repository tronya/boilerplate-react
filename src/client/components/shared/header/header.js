import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="page__container clearfix">
        <div className="header-logo">
          <a href="/" className="logo__link">
            <div className="logo" style={{backgroundImage: 'url("/assets/img/logo.svg")'}}/>
          </a>
        </div>
        <div className="delimiter"/>
        <ul className="menu">

          <li className="menu__item  current menu-item-has-children">

            <a className="menu__link">
						<span className="menu__icon-holder">
                            <i className="mi-project"/>
                        </span>
              <span className="menu__title">Projects</span>
            </a>

            <ul className="sub-menu">
              <li className="menu-subitem"><a href="/admin/project_tasks">Projects</a></li>
              <li className="menu-subitem"><a href="/admin/tasks/invoices">Invoices</a></li>
            </ul>

          </li>
          <li className="menu__item
              menu-item-has-children">
            <a className="menu__link">
  						<span className="menu__icon-holder">
                              <i className="mi-quotes"></i>
                          </span>
              <span className="menu__title">Quotes</span>
            </a>
            <ul className="sub-menu">
              <li className="menu-subitem"><a href="/admin/estimators">Pending</a></li>

              <li className="menu-subitem"><a href="/admin/estimators_approved">Approved</a></li>
              <li className="menu-subitem"><a href="/admin/estimators_finished">Finished</a></li>
              <li className="menu-subitem"><a href="/admin/estimators_archive">Archive</a></li>
            </ul>
          </li>
          <li className="menu__item
            ">
            <a className="menu__link" href="/admin/tracker">
						<span className="menu__icon-holder">
                            <i className="mi-tracker"></i>
                        </span>
              <span className="menu__title">Tracker</span>
            </a>
          </li>

          <li className="menu__item
             menu-item-has-children">
            <a className="menu__link">
						<span className="menu__icon-holder">
                            <i className="mi-contractors"></i>
                        </span>
              <span className="menu__title">Contractors</span>
              <span className="pending-number">35</span>
            </a>
            <ul className="sub-menu">
              <li className="menu-subitem"><a href="/admin/contracts">Contractors</a></li>
              <li className="menu-subitem"><a href="/admin/approved_team">Astra Team</a></li>
              <li className="menu-subitem"><a href="/admin/vehicles">Fleet</a></li>
              <li className="menu-subitem"><a href="/admin/equipment">Equipment</a></li>
            </ul>
          </li>
          <li className="menu__item">
            <a className="menu__link"
               href="https://properties.astra-management.ca/loginrequest/tronyakyura@gmail.com/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE2MywiaWF0IjoxNTgwMzk3OTc2LCJqdGkiOiJjNWQ3MzBhNy1kMWFlLTQ3MTgtYjVlYy04ZGJhYjY5MDU4MDAiLCJhcHBfaWQiOm51bGx9.76Fzh0gIl2V1tExQpH0vSUusAZxaigV9ml1WLwqBBRE">
  						<span className="menu__icon-holder">
                              <i className="mi-properties"></i>
                          </span>
              <span className="menu__title">Properties</span>
            </a>
          </li>
          <li className="menu__item
             menu-item-has-children">
            <a className="menu__link">
						<span className="menu__icon-holder">
              <i className="mi-project"/>
            </span>
              <span className="menu__title">Settings</span>
            </a>
            <ul className="sub-menu">
              <li className="menu-subitem"><a href="/admin/permissions">Permissions</a></li>
              <li className="menu-subitem"><a href="/admin/settings">Emails</a></li>
              <li className="menu-subitem"><a href="/admin/categories">Categories</a></li>
              <li className="menu-subitem"><a href="/admin/estimator_types">Estimators</a></li>

            </ul>
          </li>


        </ul>

        <div className="header-logout">
          <a href="/users/sign_out" className="header-logout__icon" title="Sign out"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
