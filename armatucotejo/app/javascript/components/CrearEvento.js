import React, { Component } from 'react';
import Navegbar from './Navegbar'
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class CrearEvento extends React.Component{
  render(){

    const titulo = (
      <div>
        <h1 id="titleselector" className="permanent center fivec"> ARMA TU COTEJO </h1>
      </div>
    );

    const mapa = (
        <div>
          <div className="container">
            <div id="interfaz" className="row justify-content-center">
              <div className="col-6">
              <div id="map"></div>
              </div>
              <div className="fivebc col-3">
            <h2>Crear Evento</h2>
              <div className="col">
              <select id="inputState" class="form-control">
                <option selected>Deportes</option>
                <option>Futbol</option>
                <option>Futsal</option>
                <option>Basketball</option>
                <option>Voleyball</option>
              </select>
              </div>
              <h6> </h6>
              <div class="formulario">
                <form name="formulario">

                  Selecciona la fecha deseada:
                  <input type="date" name="fecha" min="2019-03-25"
                                                  max="2019-05-25" step="2"></input>

                  Selecciona la hora deseada:
                  <input type="time" name="hora" min="18:00"
                                                 max="21:00" step="3600"></input>
                </form>

              </div>

              </div>
            </div>
          </div>
        </div>
    );

    return(
      <div>
        <Navegbar/>
        {titulo}
        {mapa}
      </div>
		)
	}
}

export default CrearEvento
