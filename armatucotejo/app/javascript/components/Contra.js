import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import logonav from '../../assets/images/logo-nav.png';

class Contra extends React.Component{

    render(){

      const logo = (
        <div id="LogoEvento" className="col-4">
        <div className="col-8 mAuto">
          <img id="imgEvento" src={logonav} alt="logohome"/>
        </div>
        </div>
      );

      return(
        <div>
        <Navgbar/>
        {logo}
        <div id="containerEven" className="container">

          <div className="row">
            <div className="col">
            <div class="element-main">
            		<h1>Olvidaste tu contra...</h1>
            		<p> Tu cotejo te espera</p>
            		<form>
            			<input type="text" value="Su correo cotejo" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your e-mail address';}"></input>
            			<input type="submit" value="Recuperar contra coteja"></input>
            		</form>
            	</div>
            </div>
            </div>
            </div>
            </div>
    		)
  	}
  }
  export default Contra
