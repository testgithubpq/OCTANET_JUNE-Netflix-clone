import React from 'react'
import logo from "../../netflix.png"
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im"
const Header = () => {
  console.log(logo);
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">MyList</Link>
      </div>
      <ImSearch/>
      </nav>
  )
}

export default Header