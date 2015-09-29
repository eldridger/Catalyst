import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import ListItem from './ListItem';

const styles = {
    position: 'relative'
};

@Radium
export default class List extends Component {
    static propTypes = {
        styles: PropTypes.shape({
            li: PropTypes.object,
            ul: PropTypes.object
        }),
        onClick: PropTypes.func,
        items: PropTypes.array.isRequired,
        redirect: PropTypes.string
    };

    static defaultProps = {
        styles: {},
        redirect: null
    };

    renderItems() {
        const {items, onClick, styles, redirect} = this.props;
        return items.map((item, i) =>
            <ListItem item={item} key={i} onClick={onClick} styles={styles.li} link={redirect || item.to} />)
    }

    render() {
        return (
            <ul style={[styles.ul, this.props.styles.ul]}>
                {this.renderItems()}
            </ul>
        )
    }
}