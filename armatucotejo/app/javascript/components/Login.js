import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logopng from '../../assets/images/logo-png.png';
import logonav from '../../assets/images/logo-nav.png';

class Login extends React.Component{

    render(){

    const styles ={
      display: this.props.dp
    }

    const logo = (
      <div id="logohome" className="col-8">
      <div>
        <img id="imgLogo" src={logonav} alt="logohome"/>
      </div>
      </div>
    );


    const login = (
  <div className="firstbc col-8 divReg" style={styles}>

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
          <input type="user" className="comfortaa form-control formReg" id="inputUserName" placeholder="Nombre de Usuario"
          />
        </div>
        <div className="col-10 centerdiv inputReg">
          <input type="password" className=" comfortaa form-control formReg" id="inputPassword" placeholder="Contraseña"
          />
          <h6 className="comfortaa firstc olvpass"><a href="#">¿Olvidaste tu contraseña?</a></h6>
        </div>
        <div className="col-10 centerdiv inputReg">
          <button className="btn comfortaa buttonLogin fivebc firstc">Iniciar Sesion</button>
          <a onClick={this.props.onClick} className="btn comfortaa buttonReg fivebc firstc">Registrate Rapido</a>
        </div>
      </div>
      </form>

    </div>

    <div className="container containerReg">
      <div>
        <h1  className="separadorReg comfortaa">o</h1>
      </div>
    </div>

    <div className="container containerReg">
      <div className="col-10 divGoogle">
      <div className="g-signin2 center" data-onsuccess="onSignIn"></div>
      </div>
      <div className="col-10 divFacebook">
      <div class="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </div>
    </div>

  </div>
    );

    return(
      <div>
        {logo}
        {login}
      </div>
    )
  }
}

export default Login;
