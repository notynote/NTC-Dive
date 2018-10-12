import React from 'react'




export default class EmailButton extends React.Component {
    onClick = () => {
        window.location.href = `mailto:ntcdiveboat@gmail.com`;
    }
    render() {
        const { translate } = this.props;
      return  <li onClick={this.onClick} style={{
          cursor: 'pointer',
          color: '#00acc1'
      }} >{translate("Schedule.enquiry")}</li>;
    }
}
// const primaryColor = "#9c27b0";
// const warningColor = "#ff9800";
// const dangerColor = "#f44336";
// const successColor = "#4caf50";
// const infoColor = "#00acc1";
// const roseColor = "#e91e63";
// const grayColor = "#999999";