import 'babel-core/polyfill';
import 'normalize.css';
import React, {Component} from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import configureStore from './store/configureStore';
import App from 'App';
import createBrowserHistory from 'history/lib/createBrowserHistory'


/** Redux-react-router example... Couldn't get "goBack" to work */
import { ReduxRouter } from 'redux-react-router';
import AppRouter from './Router'

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxRouter />
            </Provider>
        );
    }
}
 render(<Root />, document.getElementById('root'));



/** React-router without redux-react-router */
//const rootRoute = {
//    component: App,
//    childRoutes: require('components/pages')
//};
//
//const store = configureStore();
//
//render(
//    <Provider store={store}>
//        <Router routes={rootRoute} history={createBrowserHistory()} />
//    </Provider>,
//    document.getElementById('root')
//);

if (process.env.NODE_ENV !== 'production') {
    // Use require because imports can't be conditional.
    // In production, you should ensure process.env.NODE_ENV
    // is envified so that Uglify can eliminate this
    // module and its dependencies as dead code.
    require('./createDevToolsWindow')(store);
}