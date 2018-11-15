import React, { Component } from 'react';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logonav from '../../assets/images/logo-nav.png';
import { Link } from 'react-router-dom';

class Navegbar extends React.Component{
  render(){
    return(
    <nav className="navbar navbar-expand-lg fivebc navfont">
    <div className="container-fluid">
      <div className= "navbar-header firstc">
        <Link to="/" className="navbar-brand link nav-link"><img id="logonav" src={logonav} alt="logo"/></Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="" className="btn thirdbc link nav-link fivec">Log Out</Link></li>
      </ul>
    </div>
    </nav>
  )
  }
}

export default Navegbar;
