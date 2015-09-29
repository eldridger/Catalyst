import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import HostScrim from './HostScrim';

@connect(mapStateToProps)
export default class HostScrimContainer extends Component {
    static propTypes = {
        // Redux state
        selectedGame: PropTypes.object.isRequired
    };

    render () {
        return <HostScrim selectedGame={this.props.selectedGame} />
    }
}

function mapStateToProps(state) {
    return {
        selectedGame: state.selectedGame
    }
}