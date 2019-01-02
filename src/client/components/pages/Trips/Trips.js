import React, { PureComponent, Fragment } from 'react'
import KohChang from './KohChang/KohChang'
import DayTrips from './DayTrips/DayTrips'




class Trips extends PureComponent {

  _renderLocation = () => {
    const { pathname } = this.props.location;
      switch(pathname) {
        case '/trips/:Koh-Change-Liveaboard':
          return (
              <Fragment>
                  <KohChang />
              </Fragment>
          )
          case '/trips/:day-trips':
          return (
            <Fragment>
              <DayTrips />
            </Fragment>
            )
          default:
            return pathname
      }

  }


  render() {
    return (
          <Fragment>
            {this._renderLocation()}
          </Fragment>
    )
  }
}


export default Trips;