import React, { Component } from 'react';
import './State.css'

class State extends Component {
  constructor(){
    super()

    this.state = {
      stateArray : ['','Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  }

  render() {
    return (
        <div>
            <select onChange={(e) => this.props.handleState(e.target.value)}>
                {this.state.stateArray.map(state => {
                    return <option value={state}>{state}</option>
                })}
            </select>
      </div>
    );
  }
}

export default State;
