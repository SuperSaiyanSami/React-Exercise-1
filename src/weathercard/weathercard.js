import React, {Component} from 'react';
import './weathercard.css';

class WeatherCard extends Component {
    
    render(){
        return(
            <div className="card WeatherCard" style={{backgroundColor:this.props.color}}>
                <div className="card-body WeatherCard-Body centerVH">
                    <h2 className="card-title WeatherCard-Header-Text">{this.props.weather}<sup>o</sup></h2>
                    <p className="card-text center WeatherCard-Body-Text">{this.props.cityName}</p>
                </div>
            </div>
        );
    }
}

export default WeatherCard;