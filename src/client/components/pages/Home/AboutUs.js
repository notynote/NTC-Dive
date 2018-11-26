import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import YouTube from 'react-youtube';

export const AboutUs = ({ translate }) => {
    return (
            <Fragment>
                <div className=' about__section__dive__learn' >
                    <div className='koh__containers ' >
                        <h1 className='aboutTitle' >{translate("AboutUs.title")}</h1>
                       <p className='tours__p__about__one' >
                            {translate("AboutUs.content")}
                     </p>
                    </div>
                   </div>


               <div className='about__content' >
                    <div className='mainAbout' >
                    <h2 className='koh__header__about' >{translate("AboutUs.subtitle1")}</h2>
                        <p className='content__about' >
                       {translate("AboutUs.content1")}
                        </p>
                    <div className='btn-container' >
                    <div>

                     <Link className='ite__sch__blue' to='/trips/:Koh-Change-Liveaboard'>
                         {translate("AboutUs.btn")}
                      </Link>
                    </div>
                    <div>
                     <Link className='ite__sch' to='/trips/:day-trips'>
                         {translate("AboutUs.btn2")}
                      </Link>
                    </div>
                    </div>
                     </div>
                    </div>

    
            <VideoContainer translate={translate} />
            </Fragment>
    )
}



const VideoContainer = ({ translate }) => {
        return (
            <React.Fragment>

            
            <h4 className='about__title'>{translate("AboutUs.subtitle2")}</h4>
            <div className='container_video' >
            <div>
            <YouTube
            videoId="W4BH4cV0tA0"
            className='opts'
            />
            </div>
            <div>
            <YouTube
            className='opts'
            videoId="W4BH4cV0tA0"
            />
            </div>
            </div>
            <div className='btn_video_con' >

                            <Link className='ite__sch__blue_one' to='/dive-sites' >
                            {translate("AboutUs.contact_us")}
                         </Link>
            </div>
            </React.Fragment>
        )
}







export default AboutUs 
