//import React, {Component} from 'react';
//import {createStore, compose, combineReducers} from 'redux';
//import {
//    ReduxRouter,
//    routerStateReducer,
//    reduxReactRouter
//    } from 'redux-react-router';
//import {Route, Link} from 'react-router';
//import {Provider, connect} from 'react-redux';
//import { devTools } from 'redux-devtools';
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
//import createHistory from 'history/lib/createBrowserHistory';
//
//export default (RootComponent) => {
//    connect(state => ({ routerState: state.router }))(RootComponent);
//
//    const routes = {
//        component: RootComponent,
//        childRoutes: require('components/pages')
//    };
//
//    const reducer = combineReducers({
//        router: routerStateReducer
//    });
//
//    const store = compose(
//        reduxReactRouter({
//            routes,
//            createHistory
//        }),
//        devTools()
//    )(createStore)(reducer);
//
//    const Root = ({store}) => (
//        <Provider store={store}>
//            <ReduxRouter />
//        </Provider>
//    );
//
//    return <Root store={store} />;
//
//    //class Root extends Component {
//    //    render() {
//    //        return (
//    //            <div>
//    //                <Provider store={store}>
//    //                    { () => <ReduxRouter /> }
//    //                </Provider>
//    //                <DebugPanel top right bottom>
//    //                    <DevTools store={store} monitor={LogMonitor} />
//    //                </DebugPanel>
//    //            </div>
//    //        );
//    //    }
//    //}
//    //
//    //return Root;
//}

import React, {Component, PropTypes} from 'react';
import App from 'App';
import Play from 'components/pages/Play';
import FindScrim from 'components/pages/Play/FindScrim';
import GameSelector from 'components/pages/Play/GameSelector';
import PlayOptions from 'components/pages/Play/PlayOptions';

const AppRouter = (props) => (
    <Route path='/' component={App}>
        <Route path={Play.path} component={Play.component}>
            <IndexRoute path={GameSelector.path} component={GameSelector.component} />
            <Route path={PlayOptions.path} component={PlayOptions.component} />
            <Route path={FindScrim.path} component={FindScrim.component} />
        </Route>
    </Route>
);

export default AppRouter;