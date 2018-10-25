import React, {Component} from 'react';
import './mainboard.css';

class MainBoard extends Component{
    render(){
        return(
            <div className="card" >
                <img className="card-img-top" src="/images/blue.jpg" alt="Card image cap"></img>
                <div className="card-body placeHoriz bg-secondary">
                    <div className="text-center" >
                        <h3>150000</h3>
                        <p>Short Views</p>
                    </div>
                    <div className="text-center">
                        <h3>200</h3>
                        <p>Likes</p>
                    </div>
                    <div className="text-center">
                        <h3>37</h3>
                        <p>Comments</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBoard;