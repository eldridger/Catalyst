import React, {Component, PropTypes} from 'react';

export default class EventsContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node //.isRequired
    };

    render() {
        return (
            <div>
                This is the events page
                {/* this.props.children */}
            </div>
        )
    }
}