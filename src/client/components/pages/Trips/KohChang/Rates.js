import React, { Fragment } from 'react'

export const Rates = ({ translate }) => (
<Fragment>

<div className="section">
<div className='section__2' >
           <img
           src={require('../../../../assets/images/fish_koh.jpeg')}
           className='img__koh'
           alt='...'
           />
     <div className='koh__container__rates' >
           <h2 className='koh__header' >{translate("KohChang.rate_title")}</h2>
                   <p>
                   {translate("KohChang.rates_subtitle")}
            <br />
            <br />
                   {translate("KohChang.rates_content1")}
        </p>
        <p>{translate("KohChang.rates_content2")}</p>
    <ol className='list__rates' >
        <li>{translate("KohChang.rates_content3")}</li>
        <li>{translate("KohChang.rates_content4")}</li>
        <li>{translate("KohChang.rates_content5")}</li>
        <li>{translate("KohChang.rates_content6")}</li>
    </ol>
    <br />
    <br />
     <p>{translate("KohChang.rates_content7")}
        <br />
    {translate("KohChang.rates_content8")}
        </p>
           <div className='triangle__koh_one' />
     </div>
   </div>
</div>

</Fragment>
)


