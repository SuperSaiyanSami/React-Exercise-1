import React, {Component} from 'react';
import './headcard.css';

class HeadCard extends Component{
    render(){
        return(
            <div className="card HeadCard">
                <div className="card-body centerVH">
                    <h5 className="card-title HeadCard-header-text">{this.props.value}</h5>
                    <p className="card-text HeadCard-Helper-Text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}


export default HeadCard;