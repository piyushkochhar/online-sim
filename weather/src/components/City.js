import React, { Component } from 'react';
import './City.css'

class City extends Component {

  render() {
    return (
        <div className="city">
        <input type="text" onChange={(e) => this.props.handleCity(e.target.value)} placeholder="City"/>
      </div>
    );
  }
}

export default City;
