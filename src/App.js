import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom"; 

import { NotFound } from './client/components/pages/NotFound'
import Navigation from './client/components/molecules/Navigation/Nav'
import Home from './client/components/pages/Home/Home'
import Schedule from './client/components/organisms/Schedule/Schedule'
import Trip from './client/components/pages/Trips/Trips'
import Contact from './client/components/organisms/Contact/Index'

import DiveSites from './client/components/pages/DiveSites/DiveSites'

import { LocalizeProvider } from 'react-localize-redux'


class App extends Component {

  render() {
    return (
         <BrowserRouter  >
            <Fragment>
                <Navigation />
                <Switch>
                    <Route exact  path='/' component={Home} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/trips/:tripsId' component={Trip} />
                    <Route path='/dive-sites' component={DiveSites} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
         </BrowserRouter>
    );
  }
}



export const Index = () => {
    return (
      <LocalizeProvider>
        <App />
      </LocalizeProvider>
    )
}
