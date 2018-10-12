import React, { Component, Fragment } from 'react'


import CustomInput from '../../atoms/Input/Input'
import Button from '../../atoms/Buttons/TransparentButton'
import {  getTranslate } from 'react-localize-redux'

import { connect } from "react-redux";
import { sendEmailFooter } from '../../../../backend/dux/actions/appActions'


class Footer extends Component {
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
    <Fragment>
      <section className='footer__section'>
         <div className='logo__footer__container' >
            <img src={require('../../../assets/images/NTC.png')}
            alt='logo__footer' className='logo__footer' />

          <div className='footer__content__copy' >
                <p className='address__content' >{translate("Footer.address")}</p>
                <p>092 592 9744</p>
          </div>

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
       </div>
      </section>
          <div className='copyright__footer' >
                <p style={{ fontSize: '0.7rem' }} >&copy; Made By Williams</p>
          </div>
    </Fragment>
    )
  }
}


const mapDispatchToProps = {
    dispatchSendEmailToFirebase: (email) => sendEmailFooter(email)
}

const mapStateToProps = state => ({
    app: state.app,
    translate: getTranslate(state.locale),
})




export default connect(mapStateToProps, mapDispatchToProps)(Footer)