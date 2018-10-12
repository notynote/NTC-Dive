import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './client/assets/css/app.css'
import './client/assets/css/index.css'
import { Provider } from 'react-redux'
import { store } from './backend/dux/store'


import {Index} from './App'


ReactDOM.render(
    <Fragment>
        <Provider store={store} >
            <Index />
        </Provider>
    </Fragment>

, document.getElementById('root'));

