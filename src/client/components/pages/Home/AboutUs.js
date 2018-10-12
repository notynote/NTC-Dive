import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'
class AboutUs extends Component {
  render() {
      const { translate } = this.props;
    return (
            <Fragment>
               <div className='about__content' >
                    <div className='mainAbout' >
                        <h1 className='aboutTitle' >{translate("AboutUs.title")}</h1>
                        <p className='content__about' >
                            {translate("AboutUs.content")}
                        </p>
                    </div>
                    </div>
                <div className='section__2 about__section__dive__learn' >
                    <div className='koh__container ' >
                        <h2 className='koh__header__about' >{translate("AboutUs.subtitle1")}</h2>
                       <p className='tours__p__about__one' >
                       {translate("AboutUs.content1")}
                     </p>
                     <div className='btn__about__sec' >
                     <Link className='ite__sch__blue' to='/trips/:day-trips'>
                         {translate("AboutUs.btn")}
                      </Link>
                     </div>
                    </div>
                        <img
                        src={require('../../../assets/images/about_sec.jpg')}
                        className='img__koh__tours_learn'
                        alt='...'
                        />
                   </div>

    
      <div className='section__one_bck '>
         <div className='about__items__one'>
          <h4 className='about__title'>{translate("AboutUs.subtitle2")}</h4>
            <p className='about__p' >{translate("AboutUs.content2")}</p>
                <div>
                <Link className='ite__sch__blue' to='/contact' >
                         {translate("AboutUs.contact_us")}
                      </Link>
                </div>
            </div>
         </div>


                <div className='section__2__about about__section__dive' >
                <img
                        src={require('../../../assets/images/IMG_1919.JPG')}
                        className='img__koh__tours'
                        alt='...'
                        />
                    <div className=' about__section__tours' >
                        <h2 className='koh__header about__h1__sec' >{translate("AboutUs.subtitle3")}</h2>
                        <p className='tours__p__about' >{translate("AboutUs.content3")}</p>
                    </div>
                </div>
            </Fragment>
    )
  }
}







export default AboutUs 