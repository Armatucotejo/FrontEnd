import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../assets/images/logo-png.png';
import logonav from '../../assets/images/logo-nav.png';

class Register extends React.Component{
  render(){

    const styles ={
      display: this.props.dp
    }

    const registro = (
    <div className="firstbc col-8 divReg " style={styles}>

    <div className="container containerReg welcomeText">
      <div >
      <h1 id="textBienvenido" className="fivec pacifico">Bienvenido</h1>
      </div>
      <div>
      <h6 id="textLine" className="fivec carter">Arma tu cotejo en pocos pasos</h6>
      </div>
    </div>



    <div className="container containerReg">
      <form>

      <div className="form-group formGReg">
        <div className="col-10 centerdiv inputReg">
          <input type="name" className="comfortaa form-control formReg" id="inputName" placeholder="Nombres"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="lastname" className="comfortaa form-control formReg" id="inputLastName" placeholder="Apellidos"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="correo" className="comfortaa form-control formReg" id="inputCorreo" placeholder="Correo Electronico"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="comfortaa form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <button className="btn comfortaa buttonReg fivebc firstc">Registrar</button>
        </div>

        <div className="col-10 centerdiv inputReg">
          <p className="comfortaa condicionesReg">Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
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
