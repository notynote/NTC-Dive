import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import EmailButton  from "../../atoms/Buttons/EmailButton";
import { getTranslate } from "react-localize-redux";
import { connect } from "react-redux";


const TripsContainer = ({ tripCode, dates, boat, avalibility, translate}) => {
      return (
        <Fragment>
                    <ul className='sch__2' >
                      <li>{tripCode}</li>
                      <li>{dates}</li>
                      <li>{boat}</li>
                      <li >
                      <Link className='ite__sch' to='/trips/:Koh-Change-Liveaboard' >
                      {translate("Schedule.Itirenary")}
                      </Link>
                      </li>
                      <EmailButton translate={translate} />
                      <li>{avalibility}</li>
                    </ul>

                    <ul className='sch__3' >
                      <li>
                      <span className='sch__p' >{translate("Schedule.tripcode")}: </span>
                      {tripCode}
                      </li>
                      <li>
                      <span className='sch__p' >{translate("Schedule.dates")}: </span>
                      {dates}
                      </li>
                      <li>
                      <span className='sch__p' >{translate("Schedule.Boat")}: </span>
                      {boat}
                      </li>
                      <li >
                      <Link className='ite__sch' to='/trips/:Koh-Change-Liveaboard' >
                      {translate("Schedule.Itirenary")}
                      </Link>
                      </li>
                      <EmailButton translate={translate} />
                      <li  >
                      <span className='sch__p' >{translate("Schedule.Avalibility")}: </span>
                      {avalibility}
                      </li>
                    </ul>
        </Fragment>
      )
}


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})


export default connect(mapStateToProps, null)(TripsContainer)