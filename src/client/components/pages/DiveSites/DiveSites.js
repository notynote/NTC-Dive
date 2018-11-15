import React, { Component, Fragment,  } from 'react'

import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';
import { CardImages } from '../../molecules/Cards/CardImages';
import Module from '../../molecules/Module';
import Footer from '../../molecules/Footer/Footer';
import { BluberryHill, AlhambraRock, HTMS, HUA, KohRang, KohThalu } from "../../../assets/api/api";





class DiveSites extends Component {

  render() {
    const { translate } = this.props
    return (
    <Fragment>

      <header className='divesites__background' >
    <div className='opacity__divesites' >

      </div>
    </header>

        <section className='section__divesites' >
          <div style={{ paddingTop: 40, }} >
            <h1>Check Out Our Dive Sites</h1>
          </div>
            <div className='container__section__divesites' >
              <CardImages
                  text={translate("SitesContainer.title_1")}
                  img={require('../../../assets/images/IMG_0797.JPG')}>
              <Module 
              title={translate("SitesContainer.title_1")}
              album={AlhambraRock}
              />
              </CardImages>


              <CardImages
                  text={translate("SitesContainer.title_2")}
                  img={require('../../../assets/images/IMG_0800.JPG')}>
                <Module 
              title={translate("SitesContainer.title_2")}
              album={BluberryHill}
              />
              </CardImages>

              <CardImages
                  text={translate("SitesContainer.title_3")}
                  img={require('../../../assets/images/IMG_0801.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_2")}
                  album={HUA}
                  />
              </CardImages>
            </div>

            <div className='container__section__divesites' >
              <CardImages
                  text={translate("SitesContainer.title_4")}
                  img={require('../../../assets/images/IMG_0798.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_4")}
                  album={HTMS}
                  />
              </CardImages>
              <CardImages
                  text={translate("SitesContainer.title_5")}
                  img={require('../../../assets/images/IMG_0802.PNG')}>
                 <Module 
                  title={translate("SitesContainer.title_5")}
                  album={KohRang}
                  />
              </CardImages>
              <CardImages
                  text={translate("SitesContainer.title_6")}
                  img={require('../../../assets/images/IMG_0799.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_6")}
                  album={KohThalu}
              />
              </CardImages>
            </div>
        </section>
        <Footer />
       </Fragment>
    )
  }
}






const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(DiveSites);