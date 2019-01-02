import React, { PureComponent, Fragment } from 'react'
import Footer from '../../molecules/Footer/Footer'
import {  getTranslate } from "react-localize-redux";
import { compose,} from 'react-apollo'
import { connect } from "react-redux";
import { composeScheduleData } from '../../../assets/api/query';
import ScheduleContainer from './ScheduleContainer';
import EmailButton from '../../atoms/Buttons/EmailButton';



class Schedule extends  PureComponent {
  renderData = (items) => {
    return (
        <ul className="scheduleContainer" >
        {items.map((item, i) => {
             return (
                 <li key={i} >{item}</li>
              )
             })}
       </ul>
     )
    }
    renderButton = (btn, classBtn) => {
      return (
          <ul className="scheduleContainer" >
          {btn.map((_, i) => {
               return (
                  <EmailButton translate={this.props.translate} />
                )
               })}
         </ul>
       )
              }
    renderButton1 = (btn, classBtn) => {
      return (
          <ul className="scheduleContainer" >
          {btn.map((_, i) => {
               return (
                <li className='ite__sch' onClick={() => this.props.history.push("/trips/:Koh-Change-Liveaboard")} > 
                       {this.props.translate("Schedule.Itirenary")}
                </li>
                )
               })}
         </ul>
       )
  }

  render() {
    const { translate } = this.props;
    return (
        <Fragment>
          <header className='bck_schedule' >
            <div className='schedule__container__header' >
                <h1 className='header__sch__one' >{translate("Schedule.title")}</h1>
            </div>
          </header>
          { this.props.data.loading === true  ? <p>Fectching Schedule...</p> :
                (<ListView
                { ...this.state } { ...this.props }
                renderData={this.renderData}
                renderButton={this.renderButton}
                renderButton1={this.renderButton1}
                /> )}
            <Footer translate={translate} />
        </Fragment>
    )
  }
}

const ListView = ({ renderData, renderButton1, renderButton, data, }) => {
  return (
  <React.Fragment>

  {!data.loading && (
        null
      )}
  {
      !data.loading && (
          data.listNtcDiveModels.items.map((item) => {
              const { tripCode, dates, availability, boat, month, id } = item;
              return (
                  <React.Fragment>
                      <ScheduleContainer onClick={() => id} key={id} month={month} >
                      <div className="schedule_Container" >
                          {renderData(tripCode)}
                          {renderData(dates)}
                          {renderData(boat)}
                          {renderButton1(tripCode)}
                          {renderButton(tripCode)}
                          {renderData(availability)}
                      </div>
                      </ScheduleContainer>
                  </React.Fragment>
              )
          })
          )
      }
      </React.Fragment>

  )
  }


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})

const ScheduleConnect = connect(mapStateToProps, null)(Schedule)

export default compose(composeScheduleData)(ScheduleConnect)