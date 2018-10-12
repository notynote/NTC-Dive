import React, { Fragment } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import cardsStyles from '../../../../assets/jss/cardsStyles'

import Card from '../../../molecules/Cards/Cards'
import Carousel from "react-slick";


class DiverTrips extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        };
        const { translate } = this.props
        return (
        <Fragment>
                <section className='daytrips__container__section' >
                    <div className='daytripts__container__desc' >
                        <h2>{translate("DiveSites.title")}</h2>
                        <p>
                        {translate("DiveSites.subtitle")}
                        </p>
                        <br />
                        <p>
                        {translate("DiveSites.subtitle1")}
                        </p>
                        <br />
                        <ul>
                            <li>{translate("DayTrips.lists__2")}</li>
                            <li>{translate("DayTrips.lists__3")}</li>
                            <li>{translate("DiveSites.subtitle1")}</li>
                        </ul>
                        <br />
                        <p>{translate("DiveSites.price")}</p>
                        <br />
                        <br />

                        <p>
                        {translate("DayTrips.lists__6")}
                        </p>
                        <br />
                        <ul>
                            <li>{translate("DayTrips.lists__7")}</li>
                        </ul>
                        <br />
                    </div>
                    <div className='container__carousel_daytrips__one'>
                  <Card carousel>
                    <Carousel {...settings}  >
                    <div alt='First slide' className='slick-image image__fac' >
                        <img alt='...' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/boatstips_2.JPG')} />
                    </div>
                    <div alt='First slide' className='slick-image image__fac' >
                        <img alt='...' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/boatstrips_3.JPG')} />
                    </div>
                    <div alt='First slide' className='slick-image image__fac' >
                        <img alt='...' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/boatstrips_4.JPG')} />
                    </div>
                    <div alt='First slide' className='slick-image image__fac' >
                        <img alt='...' style={{ width: '100%', height: '100%' }}  src={require('../../../../assets/images/boatstrips_5.JPG')} />
                    </div>
                    </Carousel>
                  </Card>
                </div>
                </section>
        </Fragment>

        )
    }
}



export default withStyles(cardsStyles)(DiverTrips)