import React, { Component } from 'react';
import Navgbar from './Navgbar';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import CarrouselHome from './CarrouselHome';

class Home extends React.Component{

  render(){

    const titleHome = (
      <h1 className="titlehome fivec carter" ></h1>
    );

    return(
      <div>
      <Navgbar/>
      {titleHome}
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-6 justify-content-center">
          </div>
          <div className="col-4 justify-content-center">
            <Login/>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
      </div>
		)
	}
}

export default Home
