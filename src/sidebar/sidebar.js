import React, {Component} from 'react';
import './sidebar.css';

//Components
import WeatherCard from '../weathercard/weathercard';
import SideCard from '../sidecard/sidecard';

class SideBar extends Component{
    render(){
        return(
            <div className="col-sm-4 col-xs-12">
                <WeatherCard weather="18" cityName="Paris" color="#FF8831"/>
                <SideCard StripColor="#0097CB" listValue="1.5k" listText="New visitors"/>
                <SideCard StripColor="#B48BD1" listValue="50%" listText="Bounce Rate"/>
                <SideCard StripColor="#FF4532" listValue="28%" listText="Searchs"/>
                <SideCard StripColor="#5AC164" listValue="140.5 kb" listText="Traffic"/>
            </div>
        );
    }
}

export default SideBar;