import {
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    infoBoxShadow,
    successColor,
    successBoxShadow,
    warningColor,
    warningBoxShadow,
    dangerColor,
    dangerBoxShadow,
    roseColor,
    container, 
    title,
    roseBoxShadow
  } from "./index";

  const modalStyle = {
    modal: {
      borderRadius: "6px"
    },
    modalHeader: {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px",
      minHeight: "16.43px"
    },
    modalTitle: {
      margin: "0",
      lineHeight: "1.42857143"
    },
    modalCloseButton: {
      color: "#999999",
      marginTop: "-12px",
      WebkitAppearance: "none",
      padding: "0",
      cursor: "pointer",
      background: "0 0",
      border: "0",
      fontSize: "inherit",
      opacity: ".9",
      textShadow: "none",
      fontWeight: "700",
      lineHeight: "1",
      float: "right"
    },
    modalClose: {
      width: "16px",
      height: "16px"
    },
    modalBody: {
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "16px",
      paddingLeft: "24px",
      position: "relative"
    },
    modalFooter: {
      padding: "15px",
      textAlign: "right",
      paddingTop: "0",
      margin: "0"
    },
    modalFooterCenter: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  };
  const tooltipsStyle = {
    tooltip: {
      padding: "10px 15px",
      minWidth: "130px",
      color: "#555555",
      lineHeight: "1.7em",
      background: "#FFFFFF",
      border: "none",
      borderRadius: "3px",
      boxShadow:
        "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
      maxWidth: "200px",
      textAlign: "center",
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: "0.875em",
      fontStyle: "normal",
      fontWeight: "400",
      textShadow: "none",
      textTransform: "none",
      letterSpacing: "normal",
      wordBreak: "normal",
      wordSpacing: "normal",
      wordWrap: "normal",
      whiteSpace: "normal",
      lineBreak: "auto"
    }
  };
  const popoverStyles = {
    popover: {
      padding: "0",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      lineHeight: "1.5em",
      background: "#fff",
      border: "none",
      borderRadius: "3px",
      display: "block",
      maxWidth: "276px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontStyle: "normal",
      fontWeight: "400",
      textAlign: "start",
      textDecoration: "none",
      textShadow: "none",
      textTransform: "none",
      letterSpacing: "normal",
      wordBreak: "normal",
      wordSpacing: "normal",
      whiteSpace: "normal",
      lineBreak: "auto",
      fontSize: "0.875rem",
      wordWrap: "break-word"
    },
    popoverBottom: {
      marginTop: "5px"
    },
    popoverHeader: {
      backgroundColor: "#fff",
      border: "none",
      padding: "15px 15px 5px",
      fontSize: "1.125rem",
      margin: "0",
      color: "#555",
      borderTopLeftRadius: "calc(0.3rem - 1px)",
      borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    popoverBody: {
      padding: "10px 15px 15px",
      lineHeight: "1.4",
      color: "#555"
    }
  };    
  
  const customDropdownStyle = theme => ({
    popperClose: {
      pointerEvents: "none"
    },
    dropdown: {
      borderRadius: "3px",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
      top: "100%",
      zIndex: "1000",
      minWidth: "160px",
      padding: "5px 0",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box"
    },
    menuList: {
      padding: "0"
    },
    pooperResponsive: {
      zIndex: "1200",
      [theme.breakpoints.down("sm")]: {
        zIndex: "1640",
        position: "static",
        float: "none",
        width: "auto",
        marginTop: "0",
        backgroundColor: "transparent",
        border: "0",
        boxShadow: "none",
        color: "black"
      }
    },
    dropdownItem: {
      ...defaultFont,
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      position: "relative",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      height: "fit-content",
      color: "#333",
      whiteSpace: "nowrap"
    },
    blackHover: {
      "&:hover": {
        boxShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
        backgroundColor: "#212121",
        color: "#fff"
      }
    },
    primaryHover: {
      "&:hover": {
        backgroundColor: primaryColor,
        color: "#FFFFFF",
        ...primaryBoxShadow
      }
    },
    infoHover: {
      "&:hover": {
        backgroundColor: infoColor,
        color: "#FFFFFF",
        ...infoBoxShadow
      }
    },
    successHover: {
      "&:hover": {
        backgroundColor: successColor,
        color: "#FFFFFF",
        ...successBoxShadow
      }
    },
    warningHover: {
      "&:hover": {
        backgroundColor: warningColor,
        color: "#FFFFFF",
        ...warningBoxShadow
      }
    },
    dangerHover: {
      "&:hover": {
        backgroundColor: dangerColor,
        color: "#FFFFFF",
        ...dangerBoxShadow
      }
    },
    roseHover: {
      "&:hover": {
        backgroundColor: roseColor,
        color: "#FFFFFF",
        ...roseBoxShadow
      }
    },
    dropdownItemRTL: {
      textAlign: "right"
    },
    dropdownDividerItem: {
      margin: "5px 0",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "1px",
      overflow: "hidden"
    },
    buttonIcon: {
      width: "20px",
      height: "20px"
    },
    caret: {
      transition: "all 150ms ease-in",
      display: "inline-block",
      width: "0",
      height: "0",
      marginLeft: "4px",
      verticalAlign: "middle",
      borderTop: "4px solid",
      borderRight: "4px solid transparent",
      borderLeft: "4px solid transparent"
    },
    caretActive: {
      transform: "rotate(180deg)"
    },
    caretRTL: {
      marginRight: "4px"
    },
    dropdownHeader: {
      display: "block",
      padding: "0.1875rem 1.25rem",
      fontSize: "0.75rem",
      lineHeight: "1.428571",
      color: "#777",
      whiteSpace: "nowrap",
      fontWeight: "inherit",
      marginTop: "10px",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        cursor: "auto"
      }
    },
    noLiPadding: {
      padding: "0"
    },






    section: {
      padding: "70px 0 0"
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    icon: {
      width: "17px",
      height: "17px",
      marginRight: "4px"
    },
    ...modalStyle,
    label: {
      color: "rgba(0, 0, 0, 0.26)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      transition: "0.3s ease all",
      lineHeight: "1.428571429",
      fontWeight: "400",
      paddingLeft: "0"
    },
    ...tooltipsStyle,
    ...popoverStyles
  });
  




  export default customDropdownStyle;
  