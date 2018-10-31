import React, { Fragment } from 'react'
import { LinkButton } from '../../../atoms/Buttons/LinkButton';
export const Rates = ({ translate }) => (
<Fragment>

<div className="section">
<div className='section__2' >
            <div className='image__rates' >
           <img
           src={require('../../../../assets/images/fish_koh.jpeg')}
           className='img__koh'
           alt='...'
           />
           </div>
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
        <div className='btn_con_link' >
        <LinkButton backgroundColor="#e91e63" links='/schedule'
             text={translate("KohChang.btn_links_2")}/>
             </div>
           <div className='triangle__koh_one' />
     </div>
   </div>
</div>

</Fragment>
)
