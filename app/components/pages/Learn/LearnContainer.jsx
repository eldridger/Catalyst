import React, {Component, PropTypes} from 'react';

export default class LearnContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node //.isRequired
    };

    render() {
        return (
            <div>
                This is the learn page
                {/* this.props.children */}
            </div>
        )
    }
}