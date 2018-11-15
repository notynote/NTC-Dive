
import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import Close from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import DialogActions from "@material-ui/core/DialogActions";
import TransparentButton from '../atoms/Buttons/TransparentButton'
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import customDropdownStyle from '../../assets/jss/customDropdownStyles'
import ImageGallery from 'react-image-gallery';

import PropTypes from 'prop-types'


function Transition(props) {
    return <Slide direction="down" {...props} />;
  }


class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
          classicModal: false,
          openLeft: false,
          openTop: false,
          openBottom: false,
          openRight: false
        };
      }
      handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
      }
    
      handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
      }
   
  render() {
      const { classes, title, album } = this.props
    return (
        <React.Fragment>

        <a className="info"
        style={{ cursor: 'pointer' }}
        onClick={() => this.handleClickOpen("classicModal")}>More Info</a>
        <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={this.state.classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.handleClose("classicModal")}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.handleClose("classicModal")}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>{title}</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <ImageGallery items={album}
          autoPlay={true}
          />
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <TransparentButton
            onClick={() => this.handleClose("classicModal")}
            color="danger"
            simple
          >
            Close
          </TransparentButton>
        </DialogActions>
      </Dialog>
      </React.Fragment>
    )
  }
}


Module.protoTypes = {
    title: PropTypes.string,
    album: PropTypes.any
}




export default withStyles(customDropdownStyle)(Module)