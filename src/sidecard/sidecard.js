import React, {Component} from 'react';
import "./sidecard.css";

class SideCard extends Component{
    render(){
        return(
            <div className="card SideCard">
                <ul className="list-group list-group-flush SideCard-List">
                    <li className="list-group-item" style={{backgroundColor: this.props.StripColor}}>
                        <div className="li-item-wrap">
                            <p className="listText">{this.props.listText}</p>
                            <p className="listValue">{this.props.listValue}</p>
                        </div>
                    </li>
                    <li className="list-group-item">
                    
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideCard;