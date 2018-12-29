import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './client/assets/css/app.css'
import './client/assets/css/main.css'
import "react-image-gallery/styles/css/image-gallery.css"
import './client/assets/css/index.css'
import { Provider } from 'react-redux'
import { store } from './backend/dux/store'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from './client/assets/api/aws-exports(1)'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

import {Index} from './App'

const client = new AWSAppSyncClient({
    url: AppSyncConfig.aws_appsync_graphqlEndpoint,
    region: AppSyncConfig.aws_appsync_region,
    auth: {
      type: AppSyncConfig.aws_appsync_authenticationType,
      apiKey: AppSyncConfig.aws_appsync_apiKey,
    }
})



ReactDOM.render(
    <Fragment>
        <ApolloProvider client={client} >
            <Rehydrated>
                <Provider store={store} >
                    <Index />
                </Provider>
            </Rehydrated>
        </ApolloProvider>
    </Fragment>

, document.getElementById('root'));

