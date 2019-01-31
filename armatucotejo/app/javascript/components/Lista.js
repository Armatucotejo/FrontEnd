import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class Lista extends React.Component{


  render(){

    return(
    <div className="container mLista">
      <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

  <div class="card">

    <div class="card-header" role="tab" id="headingOne1">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
        aria-controls="collapseOne1">
        <h5 className="mb-0">
          Futbol<i className="fas fa-angle-down rotate-icon"></i>
          <span className="badge badge-primary badge-pill " align="right">14</span>
        </h5>

      </a>
    </div>

    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
      <div class="card-body">
        More
      </div>
    </div>

  </div>
  <div class="card">

    <div class="card-header" role="tab" id="headingOne2">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne2" aria-expanded="true"
        aria-controls="collapseOne2">
        <h5 className="mb-0">
          Futsal<i className="fas fa-angle-down rotate-icon"></i>
          <span className="badge badge-primary badge-pill " align="right">3</span>
        </h5>

      </a>
    </div>

    <div id="collapseOne2" class="collapse show" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
      <div class="card-body">
        More
      </div>
    </div>

  </div>
  <div class="card">

    <div class="card-header" role="tab" id="headingOne3">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true"
        aria-controls="collapseOne3">
        <h5 className="mb-0">
          Voleyball<i className="fas fa-angle-down rotate-icon"></i>
          <span className="badge badge-primary badge-pill " align="right">1</span>
        </h5>

      </a>
    </div>

    <div id="collapseOne3" class="collapse show" role="tabpanel" aria-labelledby="headingOne3" data-parent="#accordionEx">
      <div class="card-body">
        More
      </div>
    </div>

  </div>
  <div class="card">

    <div class="card-header" role="tab" id="headingOne2">
      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne4" aria-expanded="true"
        aria-controls="collapseOne4">
        <h5 className="mb-0">
          Basketball<i className="fas fa-angle-down rotate-icon"></i>
          <span className="badge badge-primary badge-pill " align="right">1</span>
        </h5>

      </a>
    </div>

    <div id="collapseOne4" class="collapse show" role="tabpanel" aria-labelledby="headingOne4" data-parent="#accordionEx">
      <div class="card-body">
        More
      </div>
    </div>

  </div>

</div>

    </div>




    )
  }
}

export default Lista;
