import React, { Fragment } from 'react'


export const DiveSitesContainer = ({ translate, header, children, content  }) => (
    <Fragment>
    <section className='dive__sites__container1' >
        <h1 className='header__container__kohchang' >{translate("Sites.header")}</h1>
            <div className='dive_sites__content1' >
            <div className='gallery__dive_sites' >
                  {children}
                </div>
            <div className='divesites__container' >
    <h1 className='header__princess' >{header}</h1>
                      <p>{content}</p>
                      </div>
              </div>
     </section>
</Fragment>
)









