import React, {Component, PropTypes} from 'react';

export default class WatchContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node //.isRequired
    };

    render() {
        return (
            <div>
                This is the watch page
                {/* this.props.children */}
            </div>
        )
    }
}