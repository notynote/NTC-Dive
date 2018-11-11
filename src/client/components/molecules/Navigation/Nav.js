import React, { Component, Fragment } from 'react'
import Header from './Header'
import CustomDropdown from './CustomDropdown'
import navbarStyles from '../../../assets/jss/navbarStyles'
import IconNav from './IconNav'

import { Link } from 'react-router-dom'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";
import LanguageToggle from "../../atoms/Buttons/LanguageToggle";



class Navigation extends Component {
  render() {
    const { classes } = this.props;
    
    return (
        <Fragment>
           <Header
              fixed
              color={`white`}
              changeColorOnScroll={{
                height: 200,
                color: `white`
              }}
              rightLinks={
                <List className={classes.list}>
                    <div className='lang_container' >
                      <LanguageToggle />
                   </div>
              <ListItem className={classes.listItem}>
                  <Link to="/" className={classes.navLink}>
                      Home
                  </Link>
                </ListItem>
              <ListItem className={classes.listItem}>
                  <Link to="/schedule" className={classes.navLink}>
                      Schedule
                  </Link>
                </ListItem>

              <ListItem className={classes.listItem}>
              <CustomDropdown
                        left
                        buttonText='Trips'
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                      <Link to="/trips/:Koh-Change-Liveaboard" className={classes.dropdownLink}>
                          Koh Chang Liveaboard
                        </Link>,
                        <Link to='/trips/:day-trips' className={classes.dropdownLink}>
                          Day Trips
                        </Link>,
                        ]}
                      />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to="/dive-sites" className={classes.navLink}>
                      Gallery
                  </Link>
                </ListItem>

              <ListItem className={classes.listItem}>
                  <Link to="/contact" className={classes.navLink}>
                      Contact Us 
                  </Link>
                </ListItem>
                  <IconNav />
                </List>
              }
            />
        </Fragment>
    )
  }
}


export default withStyles(navbarStyles)(Navigation)