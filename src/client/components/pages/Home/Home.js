import React, { Component, Fragment } from 'react'

import Footer from '../../molecules/Footer/Footer'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

import { getTranslate } from "react-localize-redux";


import { connect } from "react-redux";
import { changeLanguage } from '../../../../backend/dux/actions/appActions'




class Home extends Component {

  componentDidMount() {
    document.title = ` NTC Dive`
  }
  render() {
    const { languages, translate } = this.props;
    
    return (
        <Fragment>
         <div className='front__page__ntc' >
              <div className='brand__ntc__container' >
                <h1 className='brand__title'>{translate("brand.title")}</h1>
                  <h3 className='brand__subtitle' >{translate("brand.subtitle")}</h3>
              </div>
                  <div className='button__container_ntc' >
                      <Link className='ite__sch' to={'/trips/:Koh-Change-Liveaboard'} >
                         {translate("brand.btn")}
                      </Link>
                   <Link className='ite__sch__blue' to='/contact' >
                         {translate("brand.btn2")}
                      </Link>
                  </div>
          </div>
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

