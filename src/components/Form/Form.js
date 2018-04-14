import React, { Component }from 'react'
import * as emailjs from 'emailjs-com';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSent: false,
            emailSuccess: false,
            error: false
        }
    }

    sendEmail = () => {
        this.setState({...this.state, formSent: true})
        emailjs.sendForm("default_service", "wanclouds", '#myForm')
            .then((response) => {
            this.setState({... this.state, emailSuccess: true })
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, (err) => {
            this.setState({... this.state, error: true })
            console.log("FAILED. error=", err);
            });
    }

    componentWillMount() {
        emailjs.init('user_OYSrYwdlMpstDzfPRqbZn');
    }

    render() { 
        return (
            <div className="form">
                { this.state.error ? <div className="thank-you">    
                    <h2>There was an error sending the Email, please try again.</h2>
                </div> : null}
                <div className="close" onClick={this.props.toggle}>X</div>
                {(this.state.formSent && this.state.emailSuccess) ? (
                <div className="thank-you">    
                    <h2>Thank you for your message! <br/> We will reply to your email shortly.</h2>
                </div>
                )
                : (this.state.formSent && !this.state.emailSuccess) ? (
                <div className="thank-you">   
                    <h2>Sending message...</h2>
                </div>
                ) :
                (<form id="myForm">
                    <label>Full Name</label>
                    <input name="name" type="text"/>
                    <label>Email</label>
                    <input name="email" type="text"/>
                    <label>Message</label>
                    <textarea name="message" id="" cols="30" rows="8"></textarea>
                    <button type="button" onClick={() => this.sendEmail()}>SEND</button>
                </form>) }
            </div> 
          )
    }
}
 
export default Form;