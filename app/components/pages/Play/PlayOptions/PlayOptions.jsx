import React, {Component, PropTypes} from 'react';
import List from 'components/List';

export default class PlayOptions extends Component {
    static propTypes = {
        options: PropTypes.array,
        selectedGame: PropTypes.shape({
            text: PropTypes.string,
            key: PropTypes.string
        })
    };

    onClick = (selectedOp) => {
        //this.props.onSelect(selectedOp);
        // route with params maybe
    };

    render() {
        return (
            <div>{this.props.selectedGame.text}
                <List items={this.props.options} onClick={this.onClick} isLink={true}/>
            </div>
        )
    }
}