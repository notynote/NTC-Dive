import React, { Component, Fragment } from 'react'

import Footer from '../../molecules/Footer/Footer'

import AboutUs from './AboutUs'

import { getTranslate } from "react-localize-redux";


import { connect } from "react-redux";
import { changeLanguage } from '../../../../backend/dux/actions/appActions'
import { LinkButton } from '../../atoms/Buttons/LinkButton';
import ContactHome from './ContactHome';




class Home extends Component {

  componentDidMount() {
    document.title = ` NTC Dive`
  }
  render() {
    const { languages, translate } = this.props;
    
    return (
        <Fragment>
         <div className='front__page__ntc' >
              <div className='brand__ntc__container'>
              <div>
                <h1 className='brand__title'>{translate("brand.title")}</h1>
              </div>
                  <div className='btn__containers' >
                    <h3 className='brand__subtitle' >{translate("brand.subtitle")}</h3>
                  </div>
                  <div  >
                    <LinkButton backgroundColor="#e91e63" links='/' text={translate("brand.know_about")}/>
                  </div> 
              </div>
          </div>
            <AboutUs translate={translate} />
            <ContactHome translate={translate}/>
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

