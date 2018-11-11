import React from 'react'

import url1 from '../../../assets/images/four-divers.jpg'
import { connect } from 'react-redux';
import FormContact from '../../organisms/Contact/FormContact'

class ContactHome extends React.PureComponent {

  render() {
	const { translate } = this.props;
    return (
			<div className='section__one_bck '>
        <div className="container-contact100">
		<div className="wrap-contact100">
			<div className="contact100-form-title" style={{ backgroundImage:`url(${url1})` }}>
				<span className="contact100-form-title-1">
					{translate("ContactFormHome.contact")}
				</span>

				<span className="contact100-form-title-2">
					{translate("ContactFormHome.contact_subtitle")}
				</span>
			</div>
      <FormContact translate={translate} />
       </div>
    </div>
    </div>
    )
  }
}




const mapStateToProps = state => ({
    app: state.app
})


export default connect(mapStateToProps, null)(ContactHome)