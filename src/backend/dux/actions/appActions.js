import * as types from '../constant';
import base from '../../../client/assets/api/api'
import  globalTranslations from '../../../client/assets/api/translation.json'
import { renderToStaticMarkup } from 'react-dom/server'
import { initialize, addTranslation, setActiveLanguage } from 'react-localize-redux'

const languages = {
    languages: [
        { name: "Eng", code: "en", img: require('../../../client/assets/images/us_icon.png') },
        { name: "Thai", code: "thai",  img: require('../../..//client/assets/images/thailand.png') },

      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup
      }
}

const saveItems = (key, item) => {
    return async _ => {
        await localStorage.setItem(key, JSON.stringify(item))
    }
}

export const switchLanguages = (code) => {
    return dispatch => {
        if (code === "en") {
       dispatch(saveItems("@LANG_ENG", code))
    } else if (code === "thai") {
        dispatch(saveItems("@LANG_THAI", code))
    }
         dispatch(setActiveLanguage(code))
    }
}

export const changeLanguage = () => {
    return dispatch => {
        dispatch(addTranslation(languages.translation))
        dispatch(initialize(languages))
    }
}

function sendEmailRequest() {
    return {
        type: types.SEND_EMAIL_REQUEST,
    }
}


function toggle() {
    return {
        type: types.TOGGLE_MODAL,
        toggle: true
    }
}
function toggleFalse() {
    return {
        type: types.TOGGLE_MODAL,
        toggle: false
    }
}


 const toggleModule = _ => {
    return dispatch => {
            dispatch(toggle())
            setTimeout(_ => {
                dispatch(toggleFalse())
            }, 3300 )
    }
}

export const addMessage = usersData => {
    return (dispatch, getState) => {
        const {...data} = getState().app
        
        data[`Users Data ${Date.now()}`] = usersData
    }
}




export const submitFormToFirebase = (name, email, message) => {
    return dispatch => {
        dispatch(sendEmailRequest())
        const usersInformation = { name, email, message };
        console.log(usersInformation)
        dispatch(addMessage(usersInformation))

         base.push('Contact Data From Users', {
            data: usersInformation,
            then(err) {
                if (!err) {
                     dispatch(toggleModule())
                } else {
                    dispatch(toggleFalse())
                }
            }
          })
    }
}


