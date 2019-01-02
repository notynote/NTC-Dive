import React, {  Fragment,  } from 'react'

import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';


import Footer from '../../molecules/Footer/Footer';

import { DiveContainer1, DiveContainer2 } from './DiveContainer';





export const  DiveSites = ({ translate }) => {

  return (
    <Fragment>

      <header className='divesites__background' >
        <div className='opacity__divesites' ></div>
      </header>

        <section className='section__divesites' >
          <div style={{ paddingTop: 40, }} >
            <h1>{translate("DiveSites.header")}</h1>
          </div>
            <DiveContainer1 translate={translate} />
            <DiveContainer2 translate={translate} />


        </section>
        <Footer />
       </Fragment>
    )
}







const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(DiveSites);