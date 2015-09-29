import React, {Component, PropTypes} from 'react';

export default class PlayContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <div >
                {this.props.children}
            </div>
        )
    }
};