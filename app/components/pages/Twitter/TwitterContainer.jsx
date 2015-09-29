import React, {Component, PropTypes} from 'react';

export default class TwitterContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node //.isRequired
    };

    render() {
        return (
            <div>
                This is the twitter page
                {/* this.props.children */}
            </div>
        )
    }
}