import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'



const initialState = {}

const middleWare = [thunk]

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        ),
)

