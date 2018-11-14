import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './client/assets/css/app.css'
import './client/assets/css/main.css'
import "react-image-gallery/styles/css/image-gallery.css"
import './client/assets/css/index.css'
import { Provider } from 'react-redux'
import { store } from './backend/dux/store'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Index} from './App'


ReactDOM.render(
    <Fragment>
        <Provider store={store} >
            <Index />
        </Provider>
    </Fragment>

, document.getElementById('root'));

