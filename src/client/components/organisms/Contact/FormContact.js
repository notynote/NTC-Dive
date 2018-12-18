import React, { PureComponent, Fragment,  } from 'react'

import LoaderSuccess   from '../../../components/atoms/Loader/LoaderSuccess';

import { connect } from "react-redux";
import { submitFormToFirebase } from '../../../../backend/dux/actions/appActions';





class FormContact extends PureComponent {
  constructor(props) {
    super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            formError: '',
        }
        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.messageRef = React.createRef()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };
  handleChange = message => event => {
    this.setState({
      [message]: event.target.value,
    });
  };


  submitForm = e => {
        const { name, email, message } = this.state
        e.preventDefault();
        this.props.dispatchSendEmailFirebase(name, email, message)
       this.clearInput()
   }

   clearInput = _ => this.setState({ name: '', email: '', message: ''})


    render() {

      return (
        <Fragment>
        <form className="contact100-form validate-form" onSubmit={this.submitForm}>
          <span className="contact100-form-title">
            Send Us A Message
          </span>
          <LoaderSuccess />

          <label className="label-input100" htmlFor="email">Enter your name *</label>
          <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input id="email" className="input100" type="text" name="name" placeholder="Eg. Full Name"
            onChange={this.handleChange('name')}
            ref={this.nameRef}
            required
            />
            <span className="focus-input100"></span>
          </div>

          <label className="label-input100" htmlFor="email">Enter your Email *</label>
          <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"
            onChange={this.handleChange('email')}
            required
            ref={this.emailRef}
            />
            <span className="focus-input100"></span>
          </div>

          <label className="label-input100" htmlFor="message">Message *</label>
          <div className="wrap-input100 validate-input" data-validate = "Message is required">
            <textarea id="message" className="input100" name="message" placeholder="Write us a message"
            required
            onChange={this.handleChange('message')}
            ref={this.messageRef}
  
            ></textarea>
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn" >
              Send Message
            </button>
          </div>
			</form>
      </Fragment>
    )
  }
}


const mapDispatchToProps  = {
    dispatchSendEmailFirebase: (name, email, message) => submitFormToFirebase(name, email, message)
}

const mapStateToProps = state => ({
    app: state.app
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContact)

