import React, { Component }from 'react'
import Logo from '../../assets/LOGO-LANDINGPAGE-WANCLOUDS.png';
import './Welcome.css'

class Welcome extends Component {

    render() { 
        return (
            <div className="welcome">
                <img src={Logo} alt="Logo" className="logo"/>
                <h1>COMING <br/> SOON</h1>
                <span className="button" onClick={this.props.toggle}>Contact Us</span>
            </div>
          )
    }
}
 
export default Welcome;