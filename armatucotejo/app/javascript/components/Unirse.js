import React, { Component } from 'react';
import Navgbar from './Navgbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import logonav from '../../assets/images/logo-nav.png';
import Lista from './Lista';
import InfoPartida from './InfoPartida';
class Unirse extends React.Component{

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
                <div id="Pickers" className="mContent">
                  <Lista/>
                  <div className="mLista">
                      <a className="btn comfortaa buttonCrear secondbc fivec ">Unirse a un Cotejo</a>
                  </div>
                </div>

            </div>
          </div>
        </div>
        <div id="" className=" row">
          <div className="col justify-content-center thirdbc firstc">
          <InfoPartida/>
          </div>

          </div>
          </div>

  		)
  	}
  }

export default Unirse
