import React, { Component, Fragment,  } from 'react'
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Message from '@material-ui/icons/Message';
import InputAdornment from "@material-ui/core/InputAdornment";

import classes from 'classnames'
import CardBody from '../../molecules/Cards/CardBody'
import CardFooter from '../../molecules/Cards/CardFooter'
import CustomInput from '../../atoms/Input/Input'
import Button from '../../atoms/Buttons/TransparentButton'


import LoaderSuccess   from '../../../components/atoms/Loader/LoaderSuccess';

import { connect } from "react-redux";
import { submitFormToFirebase } from '../../../../backend/dux/actions/appActions';


class FormContact extends Component {
  constructor(props) {
    super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            formError: ''
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
        const name = this.nameRef.current.props.value
        const email = this.emailRef.current.props.value
        const message = this.messageRef.current.props.value
        e.preventDefault();
        this.props.dispatchSendEmailFirebase(name, email, message)
       this.clearInput()
   }

   clearInput = _ => this.setState({ name: '', email: '', message: ''})


    render() {
      const { translate} = this.props;

      return (
        <Fragment>
      <form onSubmit={this.submitForm} >
        <div className='form__input' >
        <LoaderSuccess />
        <CardBody >

         <CustomInput
          labelText={translate("Contact.name")}
          id="full"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "name",
            endAdornment: (
              <InputAdornment  position="end">
                <People className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
          ref={this.nameRef}
          onChange={this.handleChange('name')}
          value={this.state.name}
          required={true}
          />


       <CustomInput
          labelText={translate("Contact.email")}
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            ),
          }}
          ref={this.emailRef}
          onChange={this.handleChange('email')}
          value={this.state.email}
          required={true}
        />
       <CustomInput
          labelText={translate("Contact.message")}
          id="message"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "message",
            endAdornment: (
              <InputAdornment position="end">
                <Message className={classes.inputIconsColor} />
              </InputAdornment>
            ),
          }}
          ref={this.messageRef}
          onChange={this.handleChange('message')}
          value={this.state.message}
          required={true}
        />

      </CardBody>
          </div>
     <CardFooter className={classes.cardFooter}>
        <Button simple color="warning" type='submit' size="lg">
          {translate("Contact.btn")}
        </Button>
      </CardFooter>
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

