import React, { Component, Fragment } from 'react'

import Footer from '../../molecules/Footer/Footer'

import {AboutUs} from './AboutUs'




import { getTranslate } from "react-localize-redux";
import { connect } from "react-redux";
import { changeLanguage } from '../../../../backend/dux/actions/appActions'


import { NavContainer } from './NavContainer';




class Home extends Component {

  componentDidMount() {
    document.title = ` NTC Dive`
  }
  render() {
    const { languages, translate } = this.props;
    const title = "Nawee Taweechoke".toUpperCase()
    return (
        <Fragment>
         <div className='front__page__ntc' >
              <div className='brand__ntc__container'>
                <h1 className='title__home' >{title}</h1>
              </div>
          </div>
            <NavContainer { ...this.props } translate={translate} />
            <AboutUs translate={translate} />
            <Footer translate={translate}
            lang={languages}
            />

          </Fragment>
    )
  }
}


const mapDispatchToProps = {
    dispatchChangeLanguage : () => changeLanguage()
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

