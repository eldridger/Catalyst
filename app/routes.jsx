import React from 'react';
import { Route } from 'react-router';
import App from 'App';
//import PlayContainer from 'components/pages/Play'

//export default (
//    <Route path="/" component={App}>
//        <Route path="/play" component={PlayContainer}/>
//    </Route>
//)

export default {
    component: App,
    childRoutes: require('components/pages')
}