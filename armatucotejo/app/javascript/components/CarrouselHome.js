import React from 'react';
import ReactDOM from 'react-dom';
import futbol from '../../assets/images/futbol.jpg';
import futsal from '../../assets/images/futsal.jpg';
import voley from '../../assets/images/voley.jpg';



class CarrouselHome extends React.Component{
  render(){
    return(

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img id="a" src={futbol} alt="futbol"/>
          </div>
          <div className="carousel-item">
            <img id="b" src={futsal} alt="futsal"/>
          </div>
          <div className="carousel-item">
            <img id="c" src={voley} alt="voley"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    )
  }
}

export default CarrouselHome;
