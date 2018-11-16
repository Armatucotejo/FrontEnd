import React, { Component } from 'react';
import Navegbar from './Navegbar'
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Eventos extends React.Component{
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
              <div className="fivebc col-2">
              Jugadores
              <Button className="btn thirdbc fivec">Crear</Button>
              <Button className="btn thirdbc fivec">Unirse</Button>
              </div>
              <div className="fourbc col-6">
                <form>
                  <div className="form-row">
                    <div className="col">
                    <select id="inputState" class="form-control">
                      <option selected>Deportes</option>
                      <option>Futbol</option>
                      <option>Futsal</option>
                      <option>Basketball</option>
                      <option>Voleyball</option>
                    </select>
                    </div>
                    <div className="col">
                    <select id="inputState" class="form-control">
                      <option selected>Lugar</option>
                      <option>...</option>
                    </select>
                    </div>

                    <div class="well">
                      <div id="datetimepicker1" class="input-append date">
                        <input data-format="dd/MM/yyyy hh:mm:ss" type="text"></input>
                        <span class="add-on">
                          <i data-time-icon="icon-time" data-date-icon="icon-calendar">
                          </i>
                        </span>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
              <div className="fivebc col-2">
              Aloja
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

export default Eventos
