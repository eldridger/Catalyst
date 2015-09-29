import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FindScrim from './FindScrim';

// Temp
const scrims = [];
for (let i = 0; i < 25; i++) {
    scrims.push({id: i, text: `test${i}`});
}

@connect(mapStateToProps)
export default class FindScrimContainer extends Component {
    static propTypes = {
        // Child Routes
        children: PropTypes.node,

        // Redux state
        selectedGame: PropTypes.object.isRequired
    };

    render() {
        return <div >
            <FindScrim scrimList={scrims} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        selectedGame: state.selectedGame
    }
}