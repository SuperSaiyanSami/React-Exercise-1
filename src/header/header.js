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
                        <HeaderCard value="20" text="New followers added this month"/>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <HeaderCard value="$ 1250" text="Average Monthly Income " />
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <HeaderCard value="$ 13865" text="Yearly Income Goal" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <MainBoard imageUrl="/images/blue.jpg"/>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                        <MainBoard imageUrl="/images/pink.jpg" />
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;