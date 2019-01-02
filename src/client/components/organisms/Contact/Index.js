import React from 'react';
import Contact from './Contact'
import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';



const Index = ({ translate }) => <Contact translate={translate} /> 


const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
})

export default connect(mapStateToProps, null)(Index);