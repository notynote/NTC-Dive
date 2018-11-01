import React, { Component, Fragment } from 'react'

import Footer from '../../molecules/Footer/Footer'

import AboutUs from './AboutUs'




import { getTranslate } from "react-localize-redux";
import { connect } from "react-redux";
import { changeLanguage } from '../../../../backend/dux/actions/appActions'

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
                <h1 className='title__home' >{'ntc liveaboard'.toUpperCase()}</h1>
                <h4 className='subtitle__home' >Join us to the underwater world</h4>
                <div className='btn_container_home'>
                <button onClick={() => this.props.history.push('/trips/:Koh-Change-Liveaboard')}
                id="btn_slide" className="slide">&nbsp;</button>
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

