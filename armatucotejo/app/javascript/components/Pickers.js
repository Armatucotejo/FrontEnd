import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Pickers extends React.Component{

  render(){

    return(
        <div className="container">
          <div className="row">
            <div id="datePicker">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            </div>
          </div>

          <div className="row">
            <div id="timePicker">
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
            />
            </div>
          </div>
        </div>
    )
  }
}

export default Pickers;
