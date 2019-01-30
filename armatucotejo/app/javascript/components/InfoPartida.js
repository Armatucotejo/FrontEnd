import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class InfoPartida extends React.Component{

  constructor(props) {
  super(props);
  this.state = {sport: ''};
  this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
    this.setState({sport: event.target.value});
  }

  render(){
    const ranges = [
      {
        value: 'Futbol',
        label: 'Futbol',
      },
      {
        value: 'Futsal',
        label: 'Futsal',
      },
      {
        value: 'Voleyball',
        label: 'Voleyball',
      },
      {
        value: 'Basketball',
        label: 'Basketball',
      },
    ];

    const styleS = {
      display: "flex",
    }
    const styleDP = {
      display: "flex",
    }


    const selectSport =(
      <div>
      <TextField
         select
         label="Deporte"
         value={this.state.sport}
         style={styleS}
         onChange={this.handleChange}
       >
         {ranges.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       </div>
    );

    const datePicker = (
      <form noValidate>
      <TextField
        id="date"
        label="Fecha de Juego"
        type="date"
        defaultValue="2019-01-24"
        style={styleDP}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );

    const timePicker=(
      <form noValidate>
      <TextField
        id="time"
        label="Hora de Juego"
        type="time"
        defaultValue="07:00"
        style={styleDP}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    );

    return(
        <div className="container">
          {selectSport}
          {datePicker}
          {timePicker}
        </div>
    )
  }
}

export default InfoPartida;
