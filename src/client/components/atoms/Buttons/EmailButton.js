import React from 'react'




export default class EmailButton extends React.PureComponent {
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
