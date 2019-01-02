import React, { PureComponent, Fragment } from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";


import navbarStyles from '../../../assets/jss/navbarStyles'
import Button from '../../atoms/Buttons/TransparentButton'

import { Icon } from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import { youtube } from 'react-icons-kit/icomoon/youtube'
import { instagram } from 'react-icons-kit/icomoon/instagram'


class IconNav extends PureComponent {
  render() {
      const { classes } = this.props
    return (
    <Fragment>
        <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on YouTube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.youtube.com/channel/UC03CDuNG24Mdc8sucDwksag"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Icon icon={youtube} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/NTCDiveboat/"
            target="_blank"
            className={classes.navLink}
          >
            <Icon icon={facebook} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/notynote"
            target="_blank"
            className={classes.navLink}
          >
            <Icon icon={instagram} />
          </Button>
        </Tooltip>
      </ListItem>
 
      </Fragment>
    )
  }
}

export default withStyles(navbarStyles)(IconNav)