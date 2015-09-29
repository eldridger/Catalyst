import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import List from 'components/List';
import Theme from 'themes/theme';

@Radium
export default class FindScrim extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        scrimList: PropTypes.array
    };

    render() {
        let messages = [];

        if (this.props.errorMessage) {
            messages = [...messages, this.props.errorMessage];
        }

        if (!this.props.scrimList.length) {
            messages = [...messages, <div> THIS IS A SPINNER, WAIT </div>];
        }

        return (
            <div >
                {messages}
                <List items={this.props.scrimList} />
            </div>
        )
    }
}