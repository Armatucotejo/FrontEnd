import React from 'react';
import ReactDOM from 'react-dom';


class Pickers extends React.Component{

  render(){

    return(
        <div className="container">
          <div className="row">
            <textarea className="descForm form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
          </div>
          <div>
            <a className="btn comfortaa buttonReg secondbc fivec">Crear Cotejo</a>
          </div>
        </div>
    )
  }
}

export default Pickers;
