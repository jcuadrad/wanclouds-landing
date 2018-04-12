import React, { Component }from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="form">
                <div className="close" onClick={this.props.toggle}>X</div>
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
          )
    }
}
 
export default Form;