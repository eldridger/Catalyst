import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import CustomLink from 'components/common/CustomLink';

@Radium
export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        styles: PropTypes.object,
        onClick: PropTypes.func,
        redirect: PropTypes.string
    };

    static defaultProps = {
        onClick: () => {},
        styles: {}
    };

    onClick = () => {
        this.props.onClick && this.props.onClick(this.props.item);
    };

    render() {
        const {item, styles} = this.props;
        const link = this.props.link || this.props.item.link;

        return (
            <li onClick={this.onClick}>
                <CustomLink text={item.text} styles={styles} link={link} isLink={!!link} />
            </li>
        )
    }
}