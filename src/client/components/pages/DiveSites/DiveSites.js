import React, { Component, Fragment,  } from 'react'

import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';
import { CardImages } from '../../molecules/Cards/CardImages';
import Module from '../../molecules/Module';
  





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
              />
              </CardImages>


              <CardImages
                  text={translate("SitesContainer.title_2")}
                  img={require('../../../assets/images/IMG_0800.JPG')}>
                <Module 
              title={translate("SitesContainer.title_2")}
              />
              </CardImages>

              <CardImages
                  text={translate("SitesContainer.title_3")}
                  img={require('../../../assets/images/IMG_0801.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_2")}
              />
              </CardImages>
            </div>

            <div className='container__section__divesites' >
              <CardImages
                  text={translate("SitesContainer.title_4")}
                  img={require('../../../assets/images/IMG_0798.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_4")}
              />
              </CardImages>
              <CardImages
                  text={translate("SitesContainer.title_5")}
                  img={require('../../../assets/images/IMG_0802.PNG')}>
                 <Module 
                  title={translate("SitesContainer.title_5")}
              />
              </CardImages>
              <CardImages
                  text={translate("SitesContainer.title_6")}
                  img={require('../../../assets/images/IMG_0799.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_6")}
              />
              </CardImages>
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