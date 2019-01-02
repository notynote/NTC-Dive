import React from 'react'
import { CardContainer } from '../../molecules/CardContainer';



export const NavContainer = ({ ...props, translate }) => {
        return (
        <React.Fragment>
      <div className='main__wrapper__container' >
          <CardContainer
          img={require("../../../assets/images/HTMS/POP_6864.jpg")}
          onClick={() => props.history.push('/schedule')}
          title={translate("Schedule.title")}
          />


          <CardContainer
          img={require("../../../assets/images/boat2/1.JPG")}
          onClick={() => props.history.push('/trips/:Koh-Change-Liveaboard')}
          title={translate("Schedule.Liveaboard")}
          />


          <CardContainer
          img={require("../../../assets/images/rock/POP_8268.JPG")}
          onClick={() => props.history.push('/trips/:day-trips')}
          title={translate("Schedule.DayTrip")}
          />
        </div>
        </React.Fragment>
      )
}