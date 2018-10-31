import React, { Component, Fragment } from 'react'

import {  getTranslate } from 'react-localize-redux'

import { connect } from "react-redux";
import { sendEmailFooter } from '../../../../backend/dux/actions/appActions'
import { Link } from 'react-router-dom'


class Footer extends Component {

  render() {
    const { translate } = this.props;
    return (
    <Fragment>
		<footer className="footer-distributed">

            <div className="footer-left">
            <div className='logo__container' >
              <img
              alt='...'
              src={require('../../../assets/images/NTC.png')}
              className='logo__footer'
              />
              </div>

              <p className="footer-links">
                <Link to='/' >
                      Home 
                </Link>
                ·
                <Link to='/schedule' >
                   Schedule
                </Link>
                ·
                <Link to='/dive-sites' >
                Dive Sites
                </Link>
                ·
                <Link to='/contact' >
                Contact Us
                </Link>
              </p>

              <p className="footer-company-name">NTC Dive &copy; 2018</p>
            </div>

            <div className="footer-center">

              <div>
                <i className="fa fa-map-marker"></i>
                <p><span>{translate("Footer.address")}</span>{translate("Footer.address2")}</p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>092 592 9744</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:ntcdiveboat@gmail.com">ntcdiveboat@gmail.com</a></p>
              </div>

            </div>

            <div className="footer-right">

              <p className="footer-company-about">
                <span>{translate("Footer.about_company")}</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>


            </div>

            </footer>
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