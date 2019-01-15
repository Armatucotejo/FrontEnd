import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Login from './Login';
import Checkbox from '@material-ui/core/Checkbox';
import Pickers from './Pickers';
import InfoPartida from './InfoPartida';

class Eventos extends React.Component{

  state = {
    checkedA : true,
  };

  handleChange = name => event => {
   this.setState({ [name]: event.target.checked });
 };

  render(){

    return(
      <div>
      <Navgbar/>
      <div id="containerEven" className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-6 justify-content-center">
              <div id="map"></div>
          </div>
          <div className="col-4 justify-content-center">
              <Pickers/>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col-6 justify-content-center">
              <InfoPartida/>
          </div>
          <div className="col-4 justify-content-center">

          </div>
          <div className="col">
          </div>
        </div>
      </div>
      </div>
		)
	}
}

export default Eventos
