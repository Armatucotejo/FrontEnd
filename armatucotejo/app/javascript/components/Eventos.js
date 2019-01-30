import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Login from './Login';
import Checkbox from '@material-ui/core/Checkbox';
import Pickers from './Pickers';
import logonav from '../../assets/images/logo-nav.png';
import InfoPartida from './InfoPartida';
import CrearEvento from './CrearEvento';
import UnirseEvento from './UnirseEvento';
class Eventos extends React.Component{

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
          </div>

          <div className="fivebc EventoDivUp col-6 justify-content-center">
              <div className="EventoDiv" id="map"></div>
          </div>

          <div className="fivebc EventoDivUp col-3 justify-content-center">
              <div id="Pickers" className="firstbc">
                <InfoPartida/>
                <Pickers/>
              </div>
          </div>
          

        </div>

        <div className="row">
        <div className="col-1">
        </div>
        <div className="InfoDiv fivebc col-9 justify-content-center">
          <div id="InfoPartida" className="">

          </div>
        </div>
        <div className="col-1">
        </div>
        </div>

      </div>
      </div>
		)
	}
}

export default Eventos
