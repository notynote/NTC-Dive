import React, { Fragment } from 'react'
import TripsContainer  from './TripsContainer'
import ScheduleContainer  from './ScheduleContainer'




export const Container3 = ({ translate }) => (
        <Fragment>
           <ScheduleContainer month={translate("Schedule.dec")} >
            <TripsContainer
            tripCode='PRC9-2018'
            dates='01-02 Dec 2018'
            boat='January Princess'
            avalibility='1 Slot'
            />
            <TripsContainer
            tripCode='PRC10-2018'
            dates='08-09 Dec 2018'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC11-2018'
            dates='15-16 Dec 2018'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC12-2018'
            dates='22-23 Dec 2018'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC13-2018'
            dates='29-30 Dec 2018'
            boat='January Princess'
            avalibility='8 Slots'
            />
          </ScheduleContainer>
        </Fragment>
)
export const Container4 = ({ translate }) => (
        <Fragment>
           <ScheduleContainer month={translate("Schedule.jan")} >
            <TripsContainer
            tripCode='PRC14-2019'
            dates='05-06 Jan 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer
            tripCode='PRC15-2019'
            dates='12-13 Jan 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC16-2019'
            dates='19-20 Jan 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC17-2019'
            dates='26-27 Jan 2019'
            boat='January Princess'
            avalibility='Full'
            />
          </ScheduleContainer>
        </Fragment>
)
export const Container5 = ({ translate }) => (
        <Fragment>
           <ScheduleContainer month={translate("Schedule.feb")} >
            <TripsContainer
            tripCode='PRC18-2019'
            dates='02-03 Feb 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer
            tripCode='PRC19-2019'
            dates='09-10 Feb 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC20-2019'
            dates='16-17 Feb 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC21-2019'
            dates='23-24 Feb 2019'
            boat='January Princess'
            avalibility='20 Slots'
            />
          </ScheduleContainer>
        </Fragment>
)
export const Container6   = ({ translate }) => (
        <Fragment>
           <ScheduleContainer month={translate("Schedule.march")} >
            <TripsContainer
            tripCode='PRC22-2019'
            dates='02-03 Mar 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer
            tripCode='PRC23-2019'
            dates='09-10 Mar 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC24-2019'
            dates='16-17 Mar 2019'
            boat='January Princess'
            avalibility='18 Slots'
            />
            <TripsContainer 
            tripCode='PRC25-2019'
            dates='23-24 Mar 2019'
            boat='January Princess'
            avalibility='Full'
            />
            <TripsContainer 
            tripCode='PRC25-2019'
            dates='30-31 Mar 2019'
            boat='January Princess'
            avalibility='Full'
            />
          </ScheduleContainer>
        </Fragment>
)
