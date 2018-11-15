import React, { Fragment } from 'react';


// import Slider from "react-slick";
import DiverTrips from './DiverTrips'
import Footer from '../../../molecules/Footer/Footer';

import { getTranslate } from 'react-localize-redux'
import { connect } from 'react-redux';
import { DayTripsSlide, BoatTrip1 } from "../../../../assets/api/api";
import ImageGallery from 'react-image-gallery';
import { DiveSitesContainer } from '../../../organisms/DiveSitesContainer';

class DayTrips extends React.Component {

    render() {
        const { translate } = this.props;
        return (

        <Fragment>
            <header className='daytrip__header'>
                <div className='daytrips__h1'>
                    <h1>{translate("DayTrips.title")}</h1>
                </div>
            </header>
                <section className='daytrips__container__section' >
                <div className='container__carousel_daytrips'>

                </div>
                    <div className='daytripts__container__desc' >
                        <h2>{translate("DayTrips.subtitle")}</h2>
                        <p>
                        {translate("DayTrips.subtitle2")}
                        </p>
                        <br />
                        <p>
                        {translate("DayTrips.subtitle3")}
                        </p>
                        <br />
                        <ul>
                            <li>{translate("DayTrips.lists__1")}</li>
                            <li>{translate("DayTrips.lists__2")}</li>
                            <li>{translate("DayTrips.lists__3")}</li>
                            <li>{translate("DayTrips.lists__4")}</li>
                        </ul>
                        <br />
                        <p>{translate("DayTrips.lists__5")}</p>
                        <br />
                        <br />

                        <p>
                        {translate("DayTrips.lists__6")}
                        </p>
                        <br />
                        <ul>
                            <li>{translate("DayTrips.lists__7")}</li>
                            <li>{translate("DayTrips.lists__8")}</li>
                            <li>{translate("DayTrips.lists__9")}</li>
                            <li>{translate("DayTrips.lists__10")} </li>
                        </ul>
                        <br />
                    </div>
                    <div className='container__carousel_daytrips' >
                    <ImageGallery items={DayTripsSlide} />
                    </div>
                </section>
                <DiverTrips translate={translate} />
                <div style={{ paddingTop: 20 }} />
                <DiveSitesContainer
                translate={translate}
                header={translate("Sites.title")}
                content={translate("Sites.content1")}
                >
                <div className='gal'>
                    <ImageGallery items={BoatTrip1} />
                </div>
                </DiveSitesContainer>
                <Footer />
        </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(DayTrips);