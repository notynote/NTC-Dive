import React, { Component } from 'react'

import CustomInput from '../atoms/Input/Input'
import Button from '../atoms/Buttons/TransparentButton'


export default class FooterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          formErrors: ''
        }
        this.emailRef = React.createRef()
      }
    
      handleChange = email => event => {
        this.setState({
          [email]: event.target.value,
        });
    
      };
    
    
      submitToFirebase = () => {
        if (this.state.email === '') {
          this.setState({ formErrors: 'Error: Email Cannot be Empty' })
        } else {
          const email = this.emailRef.current.props.value
          this.props.dispatchSendEmailToFirebase(email)
          this.clearSpace()
        }
      }

      clearSpace = () => {
        this.setState({
          email: ''
        })
      }
    
      render() {
        const { email } = this.state;
        const { translate } = this.props;
    return (
        <div className='input__footer' >
        {this.state.email === '' ? <h5 className='error_message' >{this.state.formErrors}</h5> : null}
            <CustomInput
              labelText="Email for more info"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              ref={this.emailRef}
              onChange={this.handleChange('email')}
              value={email}
              />
        <Button round color='rose'
        onClick={() => this.submitToFirebase()}
        >{translate("Footer.btn")}</Button>
        </div>
    )
  }
}
