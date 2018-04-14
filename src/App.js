import React, { Component } from 'react';
import './App.css';

import Form from './components/Form/Form'
import Welcome from './components/Welcome/Welcome'

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
          { this.state.showForm ? <Form toggle={this.toggleForm}/> : <Welcome toggle={this.toggleForm}/> }
        </div>
      </div>
    );
  }
}

export default App;
