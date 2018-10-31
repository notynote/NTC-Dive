import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import YouTubePlayer from 'react-player/lib/players/YouTube'
class AboutUs extends React.PureComponent {
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
                <div className=' about__section__dive__learn' >
                    <div className='koh__containers ' >
                        <h2 className='koh__header__about' >{translate("AboutUs.subtitle1")}</h2>
                       <p className='tours__p__about__one' >
                       {translate("AboutUs.content1")}
                     </p>
                     <div className='btn__about__sec' >
                     <Link className='ite__sch__blue' to='/trips/:Koh-Change-Liveaboard'>
                         {translate("AboutUs.btn")}
                      </Link>
                     </div>
                    </div>
                   </div>

    
      <div className='section__one_bck '>
         <div className='about__items__one'>
          <h4 className='about__title'>{translate("AboutUs.subtitle2")}</h4>
          <div className='divesites__princess_container'>
                        <YouTubePlayer url={'http://www.youtube.com/watch?v=W4BH4cV0tA0'}
                            playing={false}
                            loop={false}
                            className='video__1'
                            width='100%'
                            height='100%'
                            />
                      </div>
                <div style={{ position: 'relative', top: 50 }} >
                <Link className='ite__sch__blue' to='/dive-sites' >
                         {translate("AboutUs.contact_us")}
                      </Link>
                </div>
            </div>
         </div>
            </Fragment>
    )
  }
}







export default AboutUs 