import React, { Component } from 'react';
import Navgbar from './Navgbar'
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    const texthome = (
      <div>
      <h1 className="titlehome fivec permanent" >ARMA TU COTEJO</h1>
      <h3 className="subtitlehome fivec comfortaa">¿Preparado para jugar?</h3>
      </div>
    );
    const login =(
      <div className="row justify-content-center comfortaa">
      <form className="divlogin firstbc">

      <div>
        <h5 id="comencemos" className="comfortaa center fivec">EMPECEMOS</h5>
      </div>

      <div className="form-group">
      <label className="fivec labellogin" for="exampleInputEmail1">Email</label>
      <input
        className="form-control"
        type ="text"
        placeholder="Email"
      />
      </div>
      <div>
      <label className="fivec labellogin" for="exampleInputPassword1">Password</label>
      <input
        className="form-control"
        type ="password"
        placeholder="Password"
      />
      <h6 className="comfortaa firstc olvpass"><a href="#">¿Olvidaste tu contraseña?</a></h6>
      </div>
      <div className="center divbutton">
        <Link to="/eventos" className="link nav-link"><button className="btn buttonhome btn-lg thirdbc ">Juega</button></Link>
        <h6 className="comfortaa firstc regbutton"><Link to="/register" className="link nav-link">¿Ya te registraste?</Link></h6>
      </div>
      </form>
      </div>
    );

    return(
      <div>
      <Navgbar />
      {texthome}
      {login}
      </div>
		)
	}
}

export default Home
