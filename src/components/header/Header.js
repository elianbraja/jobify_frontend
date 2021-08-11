import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header(props) {
const [logged_out, setLoggedOut] = useState(false);

  function logOutUser() {
    localStorage.removeItem('token')
    setLoggedOut(true)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar">
        <ul className="navbar-nav">
          {logged_out || !props.user ?
            <React.Fragment>
              <NavLink className="nav-link" exact activeClassName="active" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" exact activeClassName="active" to="/signup">
                Sign up
              </NavLink>
            </React.Fragment>
          :
            <React.Fragment>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              
              <div className="dropdown">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" 
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"> Jobs</a>
                  
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/jobs"> Jobs </NavLink>
                    <NavLink className="nav-link" to="/jobs/new"> New Job </NavLink>
                  </div>
  
                </li>
              </div>

              <NavLink className="nav-link" exact activeClassName="active" to="/login" onClick={logOutUser}>
                Logout
              </NavLink>
            </React.Fragment>
          }
        </ul>
    </nav>
  );
}

export default Header;
