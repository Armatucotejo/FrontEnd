import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logonav from '../../assets/images/logo-nav.png';
import logopng from '../../assets/images/logo-png.png';
import avatarpng from '../../assets/images/avatar.png';
import estrellapng from '../../assets/images/estrella.png';
import Navgbar from './Navgbar';
import Avatar from '@material-ui/core/Avatar';

class PerfilJF extends React.Component{

	constructor(props){
		super(props);
		this.state={
			userName: "Mierda",
			deportes: [],
		}
	}


	render(){

		const styles={
			avatar:{
				width: "100px",
				height: "100px",
			}
		}

		const logo = (
			<div align ="center">
				<div id="logohome" className="col-3">
      				<div>
        				<img id="imgLogo" src={logonav} alt="logohome"/>
      				</div>
      	</div>
			</div>
		);

		const pagina = (

			<div className="container">
			<div className = "fourbc col">

			</div>
				<div className = " secondbc col-6">
						<Avatar alt="Avatar" src={avatarpng} className={classes.avatar} />
						<h1>{this.state.userName}</h1>

				</div>
				<div className = "secondbc col-4">

				</div>
				<div className = "fourbc col">

				</div>

			</div>


		);


		return(
			<div>
			<Navgbar/>
			<h1>HEYASIAS</h1>
			{logo}
			{pagina}
			</div>
			)
	}
}


export default PerfilJF
