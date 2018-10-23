import React, {Component} from 'react';
import './sidebar.css';

//Components
import HeaderCard from '../headcard/headcard';

class SideBar extends Component{
    render(){
        return(
            <div className="col-sm-4 col-xs-12">
                <HeaderCard />
                <HeaderCard />
                <HeaderCard />
                <HeaderCard />
            </div>
        );
    }
}

export default SideBar;