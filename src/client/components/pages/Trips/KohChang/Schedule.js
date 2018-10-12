import React from "react";

export const Schedule = ({ translate }) => (
    <div className='section__schedule' >
    <div className='header__koh__trips' >
         <h3>{translate("KohChang.subtitle2")}</h3>
    </div>
        <div className='section___3'>
                <div className='cards__schedule' >
                    <h2>{translate("KohChang.subtitle_3")}</h2>
                    <ul className='cards__container__sch cards__1' >
                        <li>10:00 P.M. - {translate("KohChang.cards_1")}</li>
                        <li>11:00 P.M. - {translate("KohChang.cards_2")}</li>
                    </ul>
                </div>
                <br />
                <br />
                <div className='cards__schedule' >
                    <h2>Saturday</h2>
                    <ul className='cards__container__sch cards__2' >
                        <li>7.00 A.M. - {translate("KohChang.cards_3")}</li>
                        <li>8.00 A.M. - {translate("KohChang.cards_4")}</li>
                        <li>9.00 A.M. - {translate("KohChang.cards_5")}</li>
                        <li>11.00 A.M. - {translate("KohChang.cards_6")}</li>
                        <li>12.30 P.M. - {translate("KohChang.cards_7")}</li>
                        <li>2.00 P.M. - {translate("KohChang.cards_8")}</li>
                        <li>3.00 P.M. - {translate("KohChang.cards_9")}</li>
                        <li>5.00 P.M. - {translate("KohChang.cards_10")}</li>
                        <li>7.00 P.M. - {translate("KohChang.cards_11")}</li>
                        <li>8.00 P.M. - {translate("KohChang.cards_12")}</li>
                    </ul>
                </div>
                <br />
                <br />
                <div className='cards__schedule' >
                    <h2>Sunday</h2>
                    <ul className='cards__container__sch cards__3' >
                        <li>7.00 A.M. - {translate("KohChang.cards_3")}</li>
                        <li>8.00 A.M. - {translate("KohChang.cards_13")}</li>
                        <li>9.00 A.M. - {translate("KohChang.cards_5")}</li>
                        <li>11.00 A.M. - {translate("KohChang.cards_14")}</li>
                        <li>12.30 P.M. - {translate("KohChang.cards_7")}</li>
                        <li>2.00 P.M. - {translate("KohChang.cards_15")}</li>
                        <li>3.30 P.M. - {translate("KohChang.cards_9")}</li>
                        <li>5.30 P.M. - {translate("KohChang.cards_16")}</li>
                    </ul>
                </div>
            </div>
    </div>
)