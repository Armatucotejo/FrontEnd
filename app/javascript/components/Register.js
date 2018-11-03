import React, { Component } from 'react';
import Navegbar from './Navegbar'

class Register extends React.Component{
  render(){

    const selector = (
        <div>

          <div>
            <h1 id="titleselector" className="permanent center fivec"> Registro </h1>
          </div>
        </div>
    );

    return(
      <div>
        <Navegbar />
        {selector}
      </div>
		)
	}
}

export default Register
