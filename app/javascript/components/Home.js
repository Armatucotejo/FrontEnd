import React, { Component } from 'react';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Home extends React.Component{
  render(){
    const navegacion = (
      <nav className="navbar navbar-expand-lg firstbc navfont">
      <div className="container-fluid">
        <div className= "navbar-header fivec">
          <a className="navbar-brand">ARMATUCOTEJO</a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link fivec" href="#">Sign Up</a></li>
        </ul>
      </div>
      </nav>
    );
    const texthome = (
      <div>
      <h1 className="titlehome firstc" >ARMA TU COTEJO</h1>
      </div>
    );

    const buttonhome =(
      <div className="center divbutton">
        <button className="btn buttonhome btn-lg ">Juega</button>
        <h6 className="comfortaa firstc regbutton"><a href="#">¿Ya te registraste?</a></h6>
      </div>
    );

    return(
      <div>
      {navegacion}
      {texthome}
      {buttonhome}
      </div>
		)
	}
}

export default Home
