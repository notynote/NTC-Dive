import React, { Fragment } from 'react';


const DiverTrips = ({ translate }) => (

<Fragment>
        <section className='daytrips__container__section' >
        <div className='container__carousel_daytrips__one'>
            <img
            src={require('../../../../assets/images/Image next to non diver package.JPG')}
            className='img__koh2'
            alt='...'
            />
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




export default DiverTrips