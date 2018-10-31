import React, { Fragment } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import cardsStyles from '../../../../assets/jss/cardsStyles'
import { KohChangimages } from "../../../../assets/api/api";
import ImageGallery from 'react-image-gallery';


class DiverTrips extends React.Component {
    render() {
        const { translate } = this.props
        return (
        <Fragment>
                <section className='daytrips__container__section' >
                <div className='container__carousel_daytrips__one'>
                         <ImageGallery items={KohChangimages} />
                      </div>
                    <div className='daytripts__container__desc__second' >
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

                </section>
        </Fragment>

        )
    }
}



export default withStyles(cardsStyles)(DiverTrips)