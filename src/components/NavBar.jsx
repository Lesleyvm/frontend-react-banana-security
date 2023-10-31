import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const {isAuth, login, logout} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        <button
          type="button"
          onClick={handleLogin}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
        {isAuth &&
            <button
                type="button"
                onClick={logout}
            >
              Log out
            </button>}
      </div>
    </nav>
  );
}

export default NavBar;