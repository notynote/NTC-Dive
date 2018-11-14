import React, { Component, Fragment } from 'react'
import Footer from '../../molecules/Footer/Footer'
import {  getTranslate } from "react-localize-redux";

import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
} from "./Containers";

import { connect } from "react-redux";
import CreateContainer from './CreateContainer';

class Schedule extends Component {


  render() {
    const { translate } = this.props;
    return (
        <Fragment>
          <header className='bck_schedule' >
            <div className='schedule__container__header' >
                <h1 className='header__sch__one' >{translate("Schedule.title")}</h1>
            </div>
          </header>
            <Container1 
            translate={translate} />
            <Container2 translate={translate} />
            <Container3 translate={translate} />
            <Container4 translate={translate} />
            <Container5 translate={translate} />
            <Container6 translate={translate} />
            <CreateContainer { ...this.props } />
            <Footer translate={translate} />
        </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})


export default connect(mapStateToProps, null)(Schedule)