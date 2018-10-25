import React, {Component} from 'react';
import './header.css';

//Components
import HeaderCard from '../headcard/headcard';
import MainBoard from '../mainboard/mainboard';

class Header extends Component{
    render(){
        return(
            <div className="col-sm-8">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <HeaderCard />
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <HeaderCard />
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <HeaderCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <MainBoard />
                    </div>
                    <div className="col-sm-12 col-xs-12">
                        <MainBoard />
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;