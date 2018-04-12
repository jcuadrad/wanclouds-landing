import React, { Component } from 'react';
import Background from './assets/BG-LANDINGPAGE-WANCLOUDS.jpg';
import Logo from './assets/LOGO-LANDINGPAGE-WANCLOUDS.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div className="container">
        { this.state.showForm ? <div className="dim"></div> : null }
        <div className="App">
          { this.state.showForm ?
          <div className="form">
            <div className="close" onClick={this.toggleForm}>X</div>
            <form action="submit">
              <label>Full Name</label>
              <input type="text"/>
              <label>Email</label>
              <input type="text"/>
              <label>Message</label>
              <textarea name="message" id="" cols="30" rows="8"></textarea>
              <button>SEND</button>
            </form>
          </div> 
          : <div className="welcome">
            <img src={Logo} alt="Logo" className="logo"/>
            <h1>COMING <br/> SOON</h1>
            <span className="button" onClick={this.toggleForm}>Contact Us</span>
          </div> }
        </div>
      </div>
    );
  }
}

export default App;
