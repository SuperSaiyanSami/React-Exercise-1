import React, {Component} from 'react';
import './headcard.css';

class HeadCard extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">20</h5>
                    <h6 className="card-subtitle">New followers added this month</h6>
                </div>
            </div>
        );
    }
}


export default HeadCard;