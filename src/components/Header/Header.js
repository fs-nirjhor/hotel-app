
import { NavLink } from "react-router-dom";
import logo from "../../images/icons/logo.png";
import headerImage from "../../images/header.png";
import { useContext } from 'react';
import {LoggedUserContext} from "../../App";

const Header = () => {
	const [loggedUser, setLoggedUser] = useContext(LoggedUserContext);
	
	const activeStyle = { borderBottom: "2px solid white"};
  return (
    <header
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url(${headerImage})`,
      }}
    >
        <img src={logo} alt="logo" width={75} />
      <nav>
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined }> Home</NavLink>
        <NavLink to="/book" style={({ isActive }) => isActive ? activeStyle : undefined } >Book</NavLink>
      { loggedUser.username ?
         <NavLink onClick={() => setLoggedUser({})}>Logout</NavLink>
      : <NavLink to="/login" style={({ isActive }) => isActive ? activeStyle : undefined } >Login</NavLink>
      }
      </nav>
      <div>
        <h1>Hotel Royal</h1>
        <b>The Global Icon Of Luxury</b>
      </div>
    </header>
  );
};

export default Header;
