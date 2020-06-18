import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthGlobal from "../../../shared/context/store/AuthGlobal";
import { logoutUser } from "../../../shared/context/actions/autentication.action";

import './NavLinks.css';

const NavLinks = props => {
  const context = useContext(AuthGlobal);
  const authLogoutHandler = event => {
    logoutUser(context.dispatch)
  }
  return <ul className="nav-links">
    <li>
      <NavLink to="/ControlCentre" exact>Tomas</NavLink>
    </li>
    <li>
      <NavLink to="/Program">Programar</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">Información</NavLink>
    </li>
    <li>
      <NavLink to="/auth"> <button /* className="no-button" */ onClick={authLogoutHandler}>Log out</button> </NavLink>
    </li>
  </ul>
};

export default NavLinks;