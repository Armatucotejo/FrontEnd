import React, { Component } from 'react';
import Navegbar from './Navegbar';
import {Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import fondo from '../../assets/images/fondo.png';

class Eventos extends React.Component{
  render(){

    const titulo = (
      <div>
        <h1 id="titleselector" className="permanent center fivec"> EVENTOS </h1>
      </div>
    );

    const eventos =(
      <div>
          <div id="diveventos" className="container col-6">
          <div className="row">

            <div id="divmap" className="col-8">
              <div id="map"></div>
            </div>
            <div id="divlista" className="comfortaa col-3 fivec">
              <h3 className="comfortaa firstc center "> Jugadores </h3>
              <div id="divjugadores" className="firstbc">
              <ol type="1" id="listajugadores" className="fuentelista">
                <li>Felipe09</li>
                <li>TheRaptor</li>
                <li>CanibalBoy</li>
                <li>Mañas</li>
                <li>MetricasFrias</li>
                <li>Nadamsu</li>
                <li>Juda</li>
                <li>Bastershawn</li>
                <li>Killcrops</li>
                <li>DrakenTK</li>
                <li>Granuja999</li>
                <li>KazeO</li>
              </ol>
              </div>
              <div className="center">
                <Button className="bmargen btn thirdbc fivec">Crear</Button>
                <Button className="bmargen btn thirdbc fivec">Unirse</Button>
              </div>
            </div>
          </div>

          <div class="w-100"></div>

          <div className="row">

            <div id="divmap" className="col-8">
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

              </div>
            </form>
            </div>

            <div id="divlista" className="comfortaa col-3">
              <h3 className="comfortaa firstc center "> En Proceso </h3>
            </div>

          </div>
          </div>

      </div>
    );

    const mapa = (
        <div>
          <div className="container">
            <div id="interfaz" className="row justify-content-center">


            <div className="col-6">
              <div id="map"></div>
            </div>

            <div className="col-3">

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
        {eventos}
      </div>
		)
	}
}

export default Eventos
