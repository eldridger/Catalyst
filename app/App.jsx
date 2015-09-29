import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { pushState, goBack } from 'redux-react-router';
import Radium from 'radium';

import Theme from 'themes/theme'
import Header from 'components/Header';

const styles = {
    content: {
        position: 'absolute',
        backgroundColor: Theme.colors.lightPrimary,
        top: Theme.headerSize,
        right: 0,
        bottom: 0,
        left: 0
    }
};

//@connect(mapStateToProps, {/*resetErrorMessage,*/ })
@Radium
class App extends Component {
    static propTypes = {

        //// Injected by React Redux
        //errorMessage: PropTypes.string,
        ////resetErrorMessage: PropTypes.func.isRequired,
        //pushState: PropTypes.func.isRequired,
        //goBack: PropTypes.func.isRequired,
        //inputValue: PropTypes.string.isRequired,
        //selectedGame: PropTypes.string,

        // Injected by React Router
        children: PropTypes.node,
        history: PropTypes.object.isRequired
    };

    goBack = () => {
        if (this.props.location.pathname !== '/') {
            this.props.history.goBack();
        }
    };

    render() {
        const { children } = this.props;
        return (
            <div className="App">
                <Header onBack={this.goBack} />
                <div className="content" style={[styles.content]}>
                    {/* react-router children */}
                    {children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedGame: state.selectedGame
    };
}

export default connect(mapStateToProps)(App);