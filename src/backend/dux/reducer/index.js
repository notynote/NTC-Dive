import { combineReducers } from 'redux'
import app from './appReducer'
import { localizeReducer as locale } from 'react-localize-redux';



export default combineReducers({
    app,
    locale
})