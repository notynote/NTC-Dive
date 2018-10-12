import React, { Fragment } from 'react'


export const LocationContainer = ({ translate }) => (
  <Fragment>
    <div className='icon__container' >
      <div>
      <h2 className='address__p' >{translate("Contact.title")}</h2>
      <p className='address__p' >
{translate("Contact.address1")}
        <br />
        092 592 9744
        </p>
      </div>
    </div>
    </Fragment>
)