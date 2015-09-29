import React, {Component} from 'react';
import Radium from 'radium';

import Theme from 'themes/theme';

const styles = {
        base: {
            display: 'block',
            textAlign: 'center',
            height: Theme.headerSize,
            lineHeight: Theme.headerSize,
            background: Theme.colors.primary,
            borderBottom: `1px solid ${Theme.colors.darkPrimary}`
        },
        back: {
            width: Theme.headerSize,
            height: Theme.headerSize,
            float: 'left',
            border: '1px solid black'
        },
        headerText: {
            fontSize: '1.5em',
            fontWeight: 'bold',
            margin: '0 auto'
        }
    };

@Radium
export default class Header extends Component {
    static propTypes = {
        onBack: React.PropTypes.func
    };
    render() {
        return (
            <header className="Header">
                <div style={[styles.base]}>
                    <a href="javascript:void(0)" style={[styles.back]} onClick={this.props.onBack}>
                        {/*<Icon name="fa-caret-square-o-left"/>*/}
                        back
                    </a>

                    <div style={[styles.headerText]}>Catalyst</div>
                </div>
            </header>
        );
    }
    //_goBack() {
    //    if (this.props.router.state.location.pathname !== '/') {
    //        this.props.router.goBack();
    //    }
    //}
};