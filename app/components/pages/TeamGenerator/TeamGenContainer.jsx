import React, {Component, PropTypes} from 'react';

export default class TeamGenContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node //.isRequired
    };

    render() {
        return (
            <div>
                This is the Team Generator page
                {/* this.props.children */}
            </div>
        )
    }
}