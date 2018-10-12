import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player'
import video1 from '../../../assets/videos/mv penpisut video.mp4'
import video2 from '../../../assets/videos/january__princess.mp4'
import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';






class DiveSites extends Component {

  render() {
    const { translate } = this.props
    return (
    <Fragment>

      <header className='divesites__background' >
    <div className='opacity__divesites' >
        <h1 className='divesites__header' >
          {translate("Sites.title")}
        </h1>
      </div>
    </header>


      <section className='dive__sites__container1' >
                <h1 className='header__princess' >{translate("Sites.subtitle")}</h1>
          <div className='dive_sites__content1' >
          <div className='img__dive_sites' >
              <img src={require("../../../assets/images/deck_princess.JPG")} 
              alt='...'
              className='deck__picture'
              />
              </div>
     <div className='divesites__princess_container'>
          <div className='divesites__container' >
                  <ReactPlayer url={video2}
                    playing={true}
                    loop={true}
                    className='video__1'
                    />
                    </div>
                    <p>{translate("Sites.content")}</p>
            </div>
         </div>
     </section>
      <section className='dive__sites__container1' >
                <h1 className='header__princess' >MV. Pepisut</h1>
          <div className='dive_sites__content1' >
          <div className='img__dive_sites' >
              <img src={require("../../../assets/images/deck_pepisut.JPG")} 
              alt='...'
              className='deck__picture_1'
              />
              </div>
     <div className='divesites__princess_container__2'>
          <div className='divesites__container' >
                  <ReactPlayer url={video1}
                    playing={true}
                    loop={true}
                    className='video__1'
                    />
                    </div>
                    <p>{translate("Sites.content1")}</p>
            </div>
         </div>
     </section>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(DiveSites);