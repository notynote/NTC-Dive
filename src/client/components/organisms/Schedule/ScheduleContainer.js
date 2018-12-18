import React, { Fragment  } from 'react'
import { getTranslate  } from "react-localize-redux";
import { connect } from "react-redux";


const ScheduleContainer = ({ children, month, translate }) => (
    <Fragment>
    <section className='schedule__container' >
            <div className='container__sch_1' >
                <h1 className='header_sch_1' >{month}</h1>
            </div>
     <div className='btm__container_sch2' >
     <div className='btm_container_schedule' >
            <ul className='info__schedule' >
                <li>Trip Code</li>
                <li>Dates</li>
                <li>Boat</li>
                <li>Itirenary</li>
                <li>Booking</li>
                <li>Avalibility</li>
            </ul>
            </div>
        {children}
        </div>
    </section>
</Fragment>
)


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})


export default connect(mapStateToProps, null)(ScheduleContainer)