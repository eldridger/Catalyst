import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { selectGame } from 'actions';
import GameSelector from './GameSelector';

const games = [{
    text: 'Call of Duty: Advanced Warfare',
    key: 'CODAW'
}, {
    text: 'Call of Duty: Ghosts',
    key: 'CODGH'
}, {
    text: 'Call of Duty: Black Ops II',
    key: 'CODBO2'
}, {
    text: 'Call of Duty Black Ops III',
    key: 'CODBO3'
}];

@connect(() => ({}), { selectGame })
export default class GameSelectorContainer extends Component {
    static propTypes = {
        // Redux Action
        selectGame: PropTypes.func.isRequired
    };

    onSelect = (game) => {
        this.props.selectGame(game)
    };

    render() {
        return (
            <GameSelector onSelect={this.onSelect} games={games} />
        );
    }
};