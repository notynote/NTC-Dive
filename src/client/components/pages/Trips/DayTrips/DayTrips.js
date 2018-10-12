import React, { Fragment } from 'react';


import Slider from "react-slick";
import DiverTrips from './DiverTrips'
import Footer from '../../../molecules/Footer/Footer';

import { getTranslate } from 'react-localize-redux'
import { connect } from 'react-redux';


class DayTrips extends React.Component {

    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        };

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
                    <Slider {...settings}  >
                    <div alt='First slide' className='slick-image image__fac' >
                        <img alt='slide__carousel' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/january__princess__1.jpg')} />
                    </div>
                    <div alt='Second slide' className='slick-image image__fac' >
                        <img alt='slide__carousel' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/january_princess_2.jpg')} />
                    </div>
                    <div alt='Third slide' className='slick-image image__fac' >
                        <img alt='slide__carousel' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/beach__picture_1.JPG')} />
                    </div>
                    <div alt='Fourth slide' className='slick-image image__fac' >
                        <img alt='slide__carousel' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/january_princess_3.jpg')} />
                    </div>
                    </Slider>
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
                </section>
                <DiverTrips translate={translate} />
                <Footer />
        </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(DayTrips);