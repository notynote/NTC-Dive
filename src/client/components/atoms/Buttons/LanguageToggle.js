import React from "react";
import { getTranslate } from "react-localize-redux";

import { connect } from "react-redux";
import { changeLanguage, switchLanguages } from '../../../../backend/dux/actions/appActions'



class LanguageToggle extends React.Component {

  componentDidMount() {
    const { dispatchChangeLang } = this.props
    dispatchChangeLang()
    console.log(this.props.match)
  }
  
  render() {
    const { lang:  {languages}, dispatchSwitchLang } = this.props;
    return (
      <ul className="selector">
      {languages.map(lang => (
        <div key={lang.code} className='container__lang' >
          <img className='lang_logo' src={lang.img} 
          onClick={() => dispatchSwitchLang(lang.code)}
          alt='...'
          />
        </div>
      ))}
    </ul>
    )
  }
}

const mapDispatchToProps = {
    dispatchChangeLang: () => changeLanguage(),
    dispatchSwitchLang: (code) => switchLanguages(code)
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  lang: state.locale
}) 


export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
