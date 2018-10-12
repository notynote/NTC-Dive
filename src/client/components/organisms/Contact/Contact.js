import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Icon } from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import { youtube } from 'react-icons-kit/icomoon/youtube'
import { instagram } from 'react-icons-kit/icomoon/instagram'


import Button from "../../atoms/Buttons/TransparentButton";

import { LocationContainer } from "./LocationContainer";


import CardHeader from '../../molecules/Cards/CardHeader'

import pageStyles from "../../../assets/jss/pageStyles";

import FormContact from "./FormContact";




class Contact extends React.Component {
   render() {
     const { classes, translate } = this.props
     return (
       <div className='contact__container'>
          <div className='opacity__container'>
          <div className='grid__container' >
          <CardHeader color="warning" className={classes.cardHeader}>
                      <h4 className='contact__head'>{translate("Contact.contact")}</h4>
                      <div className={classes.socialLine}>
                       <Button
                        href="https://twitter.com/"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                      >
                        <Icon icon={youtube} />
                      </Button>
                      <Button
                        color="transparent"
                        href="https://www.facebook.com/NTCDiveboat/"
                        target="_blank"
                        className={classes.navLink}
                      >
                        <Icon icon={facebook} />
                      </Button>
                      <Button
                        color="transparent"
                        href="https://www.instagram.com/notynote"
                        target="_blank"
                        className={classes.navLink}
                      >
                        <Icon icon={instagram} />
                      </Button>
                      </div>
              </CardHeader>
                <LocationContainer translate={translate} />
                <FormContact translate={translate}/>
                      </div>
                  </div>
          </div>
     )
   }
}

export default withStyles(pageStyles)(Contact);


