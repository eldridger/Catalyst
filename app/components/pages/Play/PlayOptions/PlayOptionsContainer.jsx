import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PlayOptions from './PlayOptions';

const options = [
    {
        text: 'Find Pickup scrim',
        key: 'FIND_PICKUP',
        to: '/play/find_pickup'
    }, {
        text: 'Host a Pickup scrim',
        key: 'HOST_PICKUP',
        to: '/play/host_pickup'
    }, {
        text: 'Find a Team scrim',
        key: 'FIND_TEAM_SCRIM'
    }, {
        text: 'Join a Team',
        key: 'JOIN_TEAM'
    }, {
        text: 'Free Agent Pool',
        key: 'FREE_AGENTS'
    }
];

@connect(mapStateToProps)
export default class PlayOptionsContainer extends Component {
    static propTypes = {
        selectedGame: PropTypes.shape({
            text: PropTypes.string,
            key: PropTypes.string
        })
    };

    render() {
        return <PlayOptions selectedGame={this.props.selectedGame} options={options} />
    }
}

function mapStateToProps(state) {
    return {
        selectedGame: state.selectedGame
    }
}