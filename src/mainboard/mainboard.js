import React, {Component} from 'react';
import './mainboard.css';

class MainBoard extends Component{
    render(){
        return(
            <div className="card MainBoard" >
                <img className="card-img-top" src={this.props.imageUrl} alt="Card"></img>
                <div className="card-body placeHoriz" style={{backgroundColor: "#484D4D"}}>
                    <div className="text-center" >
                        <h4>150000</h4>
                        <p>Short Views</p>
                    </div>
                    <div className="text-center">
                        <h4>200</h4>
                        <p>Likes</p>
                    </div>
                    <div className="text-center">
                        <h4>37</h4>
                        <p>Comments</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBoard;