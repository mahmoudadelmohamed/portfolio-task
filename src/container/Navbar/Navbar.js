import React, { Component } from 'react';
import logo from '../../assets/images/logo1.png';
import { Navbar as Nav } from "react-bootstrap";
import { FaRegSun, FaMoon  } from 'react-icons/fa';


import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    const { toggle, darkmode } = this.props;
    // console.log(this.props.darkmode);
  return (
    <>
    <Nav className="navbar navbar-expand-lg px-4" >

      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
        <div className= 'collapse navbar-collapse '  id="myNavbar">
          <ul className='navbar-nav ml-auto text-uppercase'>
            <li className="nav-item active">
              <Link to="/" className="nav-link">home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/#projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item active">
              <Link to="/#content" className="nav-link">content</Link>
            </li>
            <li>
              <button onClick={toggle} className="toggle_button">{ darkmode ?
                 <FaMoon className="dark_icon"/> : <FaRegSun className="light_icon"/> }</button>
            </li>
          </ul>
        </div>
     </Nav>
    </>
    );
  }
}
export default Navbar;
 /*
*/
