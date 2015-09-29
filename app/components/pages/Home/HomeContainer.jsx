import React, {Component, PropTypes} from 'react';
import Home from './Home';

const links = [
    {
        title: 'Play',
        route: '/play'
    }, {
        title: 'Learn',
        route: '/learn'
    }, {
        title: 'Watch',
        route: '/watch'
    }, {
        title: 'Team Generator',
        route: '/team_generator'
    }, {
        title: 'Events',
        route: '/events'
    }, {
        title: 'Twitter',
        route: '/twitter'
    }
];

export default class HomeContainer extends Component {
    render() {
        return (
            <Home links={links}/>
        );
    }
};