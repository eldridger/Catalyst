import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import color from 'color';

const available = {
    color: color('white').hexString(),
    textDecoration: 'none'
};

const unavailable = {
    color: color(available.color).darken(0.8).hexString(),
    textDecoration: 'none'
};

@Radium
export default class CustomLink extends Component {
    static propTypes = {
        isLink: PropTypes.bool,
        styles: PropTypes.object,
        link: PropTypes.string,
        text: PropTypes.string
    };

    static defaultProps = {
        isLink: false,
        styles: {}
    };

    render() {
        if (this.props.isLink) {
            if (this.props.link) {
                return <Link style={Object.assign({}, this.props.styles, available)} to={this.props.link}>
                    {this.props.text}
                </Link>
            } else {
                return <a href="javascript:void(0)" style={Object.assign({}, this.props.styles, unavailable)}>
                    {this.props.text}
                </a>
            }
        } else {
            return <div style={Object.assign({}, this.props.styles, available)}>{this.props.text}</div>
        }
    }
}