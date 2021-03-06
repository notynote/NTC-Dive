import React, {  Fragment } from 'react'
import { Schedule } from "./Schedule";
import { Rates } from './Rates'
import { getTranslate } from 'react-localize-redux'
import { connect } from "react-redux";
import { LinkButton } from '../../../atoms/Buttons/LinkButton';
import { KohChangimages, BoatTrip2 } from "../../../../assets/api/api";
import ImageGallery from 'react-image-gallery';
import {DiveSitesContainer} from '../../../organisms/DiveSitesContainer';
import Footer from '../../../molecules/Footer/Footer'



const KohChang = ({ translate }) => (
    <Fragment>
      <div>
        <div className="section">
        <header className='kohchang__header'>
        <h2 className='header__koh1' >{translate("KohChang.title")}</h2>
      </header>
        </div>
    <div className='section__4' >
          <div className='koh__container' >
                <h2 className='koh__header' >{translate("KohChang.subtitle")}</h2>
                <p className='desc__p' >
                    {translate("KohChang.content_1")}
                    <br />
                    <br />
                    {translate("KohChang.content_2")}
                    <br />
                    <br />
                    {translate("KohChang.content_3")}
                    </p>
                    <div style={{ paddingTop: 26 }}  />
            <LinkButton backgroundColor="#e91e63" links='/dive-sites' 
            text={translate("KohChang.btn_links")}/>
                <div className='triangle__koh' />
          </div>
          <div className='gallery__kochchang' >
                <ImageGallery items={KohChangimages} />
          </div>
    </div>

    <Schedule translate={translate} />
    <Rates translate={translate} />

    <DiveSitesContainer 
    translate={translate}
    header={translate("Sites.subtitle")}
    content={translate("Sites.content")}
    >
    <div className='gal' >
    <ImageGallery items={BoatTrip2} />
    </div>
    </DiveSitesContainer>
    <Footer />
    </div>
    </Fragment>
)
const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(KohChang);