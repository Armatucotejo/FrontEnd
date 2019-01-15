import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../assets/images/logo-png.png';
import logonav from '../../assets/images/logo-nav.png';

class Register extends React.Component{
  render(){

    const registro = (
    <div className="firstbc col-8 divReg ">

    <div className="container containerReg">
      <div>
        <img id="logopng" src={logonav} alt="logonav"/>
      </div>
      <div className="col-10 divGoogle">
      <div className="g-signin2 center" data-onsuccess="onSignIn"></div>
      </div>
    </div>

    <div className="container containerReg">
      <div>
        <h1  className="separadorReg comfortaa">o</h1>
      </div>
    </div>

    <div className="container containerReg">
      <form>

      <div className="form-group formGReg">
        <div className="col-10 centerdiv inputReg">
          <input type="name" className="form-control formReg" id="inputName" placeholder="Nombres"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="lastname" className="form-control formReg" id="inputLastName" placeholder="Apellidos"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="user" className="form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="form-control formReg" id="inputCorreo" placeholder="Correo Electronico"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <button className="btn buttonReg fivebc firstc">Registrar</button>
        </div>

        <div className="col-10 centerdiv inputReg">
          <p className="condicionesReg">Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
        </div>
      </div>

      </form>
    </div>

  </div>
    );

    return(
      <div>
        {registro}
      </div>
		)
	}
}

export default Register
