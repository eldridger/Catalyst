import React, {Component, PropTypes} from 'react';
import List from 'components/List';

export default class GameSelector extends Component {
    static propTypes = {
        onSelect: PropTypes.func,
        games: PropTypes.array
    };

    onClick = (gameKey) => {
        this.props.onSelect(gameKey);
        // route to playOptions
    };

    render() {
        return (
            <div className="Games">
                <List items={this.props.games} onClick={this.onClick} redirect={'/play/playoptions'} isLink={true}/>
            </div>
        );
    }
}