import * as types from '../constant'


const initialState = {
    data: {},

    loading: false,
}



export default (state = initialState, action) => {
        switch(action.type) {
            case types.SEND_EMAIL_REQUEST:
                return {
                    ...state,
                    loading: false,
                }
            case types.SEND_EMAIL_SUCCESS:
                return {
                    ...state,
                    loading: true,
                }
            case types.SEND_EMAIL_FAILURE:
                return {
                    ...state,
                    loading: false,
                }

                case types.TOGGLE_MODAL:
                return {
                    ...state,
                    loading: action.toggle
                }

                default:
                    return {
                        ...state,
                        ...initialState
                    }
        }
}