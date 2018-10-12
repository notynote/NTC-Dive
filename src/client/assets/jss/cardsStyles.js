import { container,
    warningCardHeader,
    dangerCardHeader,
    successCardHeader,
    infoCardHeader,
    primaryCardHeader
  } from "./index";
  
  const cardsStyles = {
    section: {
      padding: "70px 0"
    },
    container,
    marginAuto: {
      marginLeft: "auto !important",
      marginRight: "auto !important"
    },
    card: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "#fff",
      width: "100%",
      boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem",
      transition: "all 300ms linear"
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardCarousel: {
      overflow: "hidden"
    },
    cardBody: {
      padding: "0.2rem 1rem",
      flex: "1 1 auto",
    },
    cardHeader: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "-30px",
      border: "0",
      marginBottom: "0"
    },
    cardTitle: {
      float: "left",
      padding: "10px 10px 10px 0px",
      lineHeight: "24px"
    },
    cardTitleRTL: {
      float: "right",
      padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
      display: "none !important"
    },
    tabsRoot: {
      minHeight: "unset !important"
    },
    tabRootButton: {
      minHeight: "unset !important",
      minWidth: "unset !important",
      width: "unset !important",
      height: "unset !important",
      maxWidth: "unset !important",
      maxHeight: "unset !important",
      padding: "10px 15px",
      borderRadius: "3px",
      lineHeight: "24px",
      border: "0 !important",
      color: "#fff !important",
      marginLeft: "4px",
      "&:last-child": {
        marginLeft: "0px"
      }
    },
    tabLabelContainer: {
      padding: "0px"
    },
    tabLabel: {
      fontWeight: "500",
      fontSize: "12px"
    },
    tabSelected: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: "0.2s background-color 0.1s"
    },
    tabWrapper: {
      display: "inline-block",
      minHeight: "unset !important",
      minWidth: "unset !important",
      width: "unset !important",
      height: "unset !important",
      maxWidth: "unset !important",
      maxHeight: "unset !important",
      "& > svg": {
        verticalAlign: "middle",
        margin: "-1px 5px 0 0"
      }
    },
    cardFooter: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      padding: "0.8rem 1.875rem"
    },
    cardHeaderPlain: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  
  };
  
  export default cardsStyles;