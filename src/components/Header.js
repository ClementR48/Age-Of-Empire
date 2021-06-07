import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active">Acceuil</NavLink>
        <NavLink to="/civilization" exact activeClassName="nav-active">Civilsations</NavLink>
        <NavLink to="/structure" exact activeClassName="nav-active">Structures</NavLink>
        <NavLink to="/units" exact activeClassName="nav-active">Unités</NavLink>
      </ul>
    </header>
  );
};

export default Header;