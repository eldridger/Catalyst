import React, {Component, PropTypes} from 'react';

export default class FindScrim extends Component {
    static propTypes = {
        selectedGame: PropTypes.object.isRequired
    };

    render() {
        return (
            <div >
                Host scrims here.
            </div>
        )
    }
}