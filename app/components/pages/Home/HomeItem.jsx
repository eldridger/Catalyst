import React, {Component} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import Theme from 'themes/theme';

const styles = {
    base: {
        boxSizing: 'border-box',
        flex: '0 0 50%',
        textAlign: 'center',
        //padding: '1.25rem 0.5rem',
        height: '100px',
        margin: 'auto'
    },
    inner: {
        display: 'table',
        textDecoration: 'none',
        backgroundColor: Theme.colors.darkBlue,
        color: Theme.colors.darkPrimary,
        border: '1px solid black',
        height: '100%',
        width: '100%'
    },
    text: {
        display: 'table-cell',
        verticalAlign: 'middle'
    }
};

@Radium
export default class HomeItem extends Component {
    render() {
        return (
            <div style={[styles.base]}>
                <Link to={this.props.route} style={Object.assign({}, styles.inner)}>
                    <span style={[styles.text]}>{this.props.title}</span>
                </Link>
            </div>
        );
    }
};