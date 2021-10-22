import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact >
          ALL USERS  <span className="padding"><i class="fa fa-user" aria-hidden="true"></i></span>
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES  <span className="padding"><i class="fa fa-globe" aria-hidden="true"></i></span>
</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE  <span className="padding"><i class="fa fa-plus" aria-hidden="true"></i></span>
</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth" >AUTHENTICATE  <span className="padding"><i class="fa fa-sign-in" aria-hidden="true"></i></span></NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT  <span className="padding"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
