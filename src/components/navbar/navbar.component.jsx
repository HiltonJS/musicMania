import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2 ">
          <Link className="navbar-brand text-white" to="/">
            <img
              src={Logo}
              width="30"
              height="30"
              class="d-inline-block align-top "
              alt="logo"
            />
            musMania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Genre
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item " to="/hiphop">
                    Hip Hop
                  </Link>
                  <Link className="dropdown-item " to="/rnb">
                    Rnb
                  </Link>
                </div>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
