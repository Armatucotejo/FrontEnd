import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../assets/images/logo-png.png';
import logonav from '../../assets/images/logo-nav.png';

class Login extends React.Component{


  render(){

    const login = (
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

      <form>
      <div className="form-group formGReg">

        <div className="col-10 centerdiv inputReg">
          <input type="user" className="form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className="form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
          <h6 className="comfortaa firstc olvpass"><a href="#">¿Olvidaste tu contraseña?</a></h6>
        </div>
        <div className="col-10 centerdiv inputReg">
          <button className="btn buttonReg fivebc firstc">Iniciar Sesion</button>
          <h6 className="comfortaa firstc regbutton"><Link to="/register" className="link nav-link">Registrate</Link></h6>
        </div>
      </div>
      </form>

    </div>

  </div>
    );

    return(
      <div>
        {login}
      </div>
    )
  }
}

export default Login;
