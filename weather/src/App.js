import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import City from './components/City'
import State from './components/State'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state = {
      city : "",
      state : "",
      weather : [],
      searches : []
    }

    this.handleCity = this.handleCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  handleCity(city){
    this.setState({city : city})
    
  }

  handleState(state){
    this.setState({state: state})
  }

  getWeather( weather ){
    axios.get(`http://api.wunderground.com/api/7b076f75009aebae/forecast10day/q/${this.state.state}/${this.state.city}.json`).then( response =>{
      if(response.data.forecast !== undefined){

        response.data.forecast.simpleforecast.forecastday.splice(5)
        this.setState({weather : response.data.forecast.simpleforecast.forecastday})
        
      }


    })

    this.getSearches()

    }

  getSearches(){
    axios.post('/api/places/',{
      params: {
        city: this.state.city
      }
      }).then(response => {
      this.setState({searches: response.data})
    })
  }


  render() {
    console.log(this.state.weather)
    console.log(this.state.searches)
    return (
      <div className="weatherApp">
      <div className="weatherInput center">
        <h1 className="header">&lt;DevWeather &frasl;&gt;</h1>
        <City handleCity={this.handleCity}/>
        <State handleState={this.handleState} />
        <button className="weatherButton center" onClick={this.getWeather}>Get Weather</button>
    </div>
    {this.state.weather.length === 0  ? 

<h3 className="center enterCity">Enter City</h3> 
: 
    <div className="weatherDisplay center">
        {this.state.weather.map(card => {
            return <div class="weatherCard center">
              <div>{card.date.weekday}</div>
              <div>{card.conditions}</div>
              <div>High {card.high.fahrenheit}</div>
              <div>Low {card.low.fahrenheit}</div>
              <img src={card.icon_url}/>
            </div>    
        })}
        </div>
    }
        

        <div className="searches">
          <h2 className="center">Recent Searches</h2>
          <div className="center searchCity" >
          {this.state.searches.map(city => {
            return(
            <div>{city}</div>
            )
          })}
        </div> 
          </div>
      </div>
    );
  }
}

export default App;
