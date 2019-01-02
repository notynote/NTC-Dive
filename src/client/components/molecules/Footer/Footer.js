import React, { Fragment } from 'react'

import {  getTranslate } from 'react-localize-redux'

import { connect } from "react-redux";

import { Link } from 'react-router-dom'


// export const Footer = () => 

class Footer extends React.PureComponent {

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
                -
                <Link to='/schedule' >
                   Schedule
                </Link>
                -
                <Link to='/dive-sites' >
                Dive Sites
                </Link>
                -
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
               {translate("Footer.content")}
              </p>


            </div>

            </footer>
    </Fragment>
    )
  }
}




const mapStateToProps = state => ({
    app: state.app,
    translate: getTranslate(state.locale),
})




export default connect(mapStateToProps, null)(Footer)