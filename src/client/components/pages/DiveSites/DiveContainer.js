import React from 'react'
import { BluberryHill, AlhambraRock, HTMS, HUA, KohRang, KohThalu } from "../../../assets/api/api";
import { CardImages } from '../../molecules/Cards/CardImages';
import Module from '../../molecules/Module';


export const DiveContainer1 = ({ translate }) => (
    <div className='container__section__divesites' >
            <CardImages text={translate("SitesContainer.title_1")} 
            img={require('../../../assets/images/IMG_0797.JPG')}>
              <Module 
              title={translate("SitesContainer.title_1")}
              album={AlhambraRock}
              />
              </CardImages>
              <CardImages
                  text={translate("SitesContainer.title_2")}
                  img={require('../../../assets/images/IMG_0800.JPG')}>
                <Module 
              title={translate("SitesContainer.title_2")}
              album={BluberryHill}
              />
              </CardImages>

              <CardImages
                  text={translate("SitesContainer.title_3")}
                  img={require('../../../assets/images/IMG_0801.JPG')}>
                 <Module 
                  title={translate("SitesContainer.title_2")}
                  album={HUA}
                  />
              </CardImages>
    </div>
)
export const DiveContainer2 = ({ translate }) => (
    <div className='container__section__divesites' >
    <CardImages
        text={translate("SitesContainer.title_4")}
        img={require('../../../assets/images/IMG_0798.JPG')}>
       <Module 
        title={translate("SitesContainer.title_4")}
        album={HTMS}
        />
    </CardImages>
    <CardImages
        text={translate("SitesContainer.title_5")}
        img={require('../../../assets/images/IMG_0802.PNG')}>
       <Module 
        title={translate("SitesContainer.title_5")}
        album={KohRang}
        />
    </CardImages>
    <CardImages
        text={translate("SitesContainer.title_6")}
        img={require('../../../assets/images/IMG_0799.JPG')}>
       <Module 
        title={translate("SitesContainer.title_6")}
        album={KohThalu}
    />
    </CardImages>
  </div>
)