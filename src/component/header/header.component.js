import React from 'react';
import './header.scss';
import TechTags from '../tags/tags.component';
import RightNavigation from './right-nav.component';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="appHeader">
      <section className="app-heading">
        <section>
          <NavLink to="/iPrepQ" className="homeNav">
            <h1>{`iPrepQ`}</h1>
            <h2> Interview Questions, Prepration & more...</h2>
          </NavLink>
        </section>
        <section className='app-heading-menu'>
          <RightNavigation />
        </section>
      </section>
      <section className="header-tags">
        <RightNavigation />
        <TechTags />
      </section>
    </header>
  );
};

export default AppHeader;
