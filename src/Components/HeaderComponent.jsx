// src/Components/HeaderComponent.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header>
      <h1>Bíblia Online</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Página Principal</NavLink>
          </li>
          <li>
            <NavLink to="/leia-a-biblia" activeClassName="active">Leia a Bíblia</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">Blog Religioso</NavLink>
          </li>
          <li>
            <NavLink to="/salmo" activeClassName="active">Salmo do Dia</NavLink>
          </li>
          <li>
            <NavLink to="/fale-conosco" activeClassName="active">Fale Conosco</NavLink>
          </li>
          <li>
            <NavLink to="/trabalhe-conosco" activeClassName="active">Trabalhe Conosco</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
