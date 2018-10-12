import { container } from "./index";


const pageStyles = {
    parallax: {
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
      "@media (max-width: 600px)": {
        // height: "58vh",

      },
    },
    filter: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    small: {
      height: "380px"
    },
    opacity: {
      opacity: '0.9',
      background: '#000000'
    },
    section: {
      minHeight: "110vh",
      maxHeight: "1600px",
      overflow: "hidden",
      padding: "70px 0",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      margin: "0",
      border: "0",
      display: "flex",
    alignItems: "center",
      // backgroundImage: "url(" + image + ")"
    },

    form: {
      margin: "0"
    },
    cardHeader: {
      width: "auto",
      textAlign: "center",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "-40px",
      padding: "20px 0",
      marginBottom: "15px",
      borderRadius: 30
    },
    socialIcons: {
      maxWidth: "24px",
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px"
    },
    divider: {
      marginTop: "30px",
      marginBottom: "0px",
      textAlign: "center"
    },
    cardFooter: {
      paddingTop: "0rem",
      border: "0",
      borderRadius: "6px",
      justifyContent: "center !important"
    },
    socialLine: {
      marginTop: "1rem",
      textAlign: "center",
      padding: "0"
    },
    inputIconsColor: {
      color: "#495057"
    },

    container,
    brand: {
      color: "#FFFFFF",
      textAlign: "left"
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "200",
      // display: "inline-block",
      position: "relative",
      textAlign: 'center',
      bottom: '140px',
      fontFamily: `'Leckerli One', cursive`,
      "@media (max-width: 420px)": {
        fontSize: '1.313rem',
        bottom: '50px', // Change width
        // background: 'red'
      },
      "@media (max-width: 960px)": {
        fontSize: '3rem',
        bottom: '100px'
      },
      "@media (max-width: 320px)": {
        fontSize: '1.313rem',
        top: '5px'
      },
      "@media (max-width: 380px)": {
        fontSize: '1.313rem',
        position: 'relative',
        top: '-35px'
      },
  
    },
    buttonContainer: {
      position: "relative",
      top: '160px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      textAlign: 'center',
      "@media (max-width: 600px)": {
        top: '120px'
      },
      "@media (max-width: 320px)": {
        top: '70px'
      },
      "@media (max-width: 380px)": {
        top: '70px'
      },
    },
    subtitle: {
      position: "relative",
      top: '120px',
      fontFamily: `'Dancing Script', cursive;`,
      textAlign: 'center',
      fontSize: "1.6rem",
      fontWeight: '200',
      "@media (max-width: 600px)": {
        fontSize: '1rem',
        top: '100px',
        paddingTop: '10px'
      },
      "@media (max-width: 320px)": {
        top: '40px'
      },
      "@media (max-width: 380px)": {
        top: '60px'
      },
    },
  
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      // margin: "-60px 30px 0px",
  
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    },
    readMoreBtn: {
      marginLeft: '40px'
    },
    imgRoundedCircle: {
      borderRadius: "60% !important"
    },
    imgFluid: {
      maxWidth: "100%",
      height: "auto"
    },
    // ******************************* About Us
  
        aboutTitle: {
          paddingTop: '40px',
          paddingBottom: '40px',
          textAlign: 'center',
        },
        contentTitle: {
          textAlign: 'center'
        },
        content: {
          lineHeight: '3.8rem',
          fontSize: '1.09rem',
          textAlign: 'center',
          "@media (max-width: 600px)": {
            
          },
        },
        imgAbout: {
          padding: '50%'
        },
        imgContent: {
          width: '100%',
          height: '100%',
        },
  };
  
  export default pageStyles;
  