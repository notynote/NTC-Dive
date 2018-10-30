import React, { Component, Fragment } from 'react'

import {  getTranslate } from 'react-localize-redux'

import { connect } from "react-redux";
import { sendEmailFooter } from '../../../../backend/dux/actions/appActions'
import FooterForm from '../../organisms/FooterForm';


class Footer extends Component {

  render() {
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
          <FooterForm
          translate={translate}
          dispatchSendEmailToFirebase={this.props.dispatchSendEmailToFirebase}
          />
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