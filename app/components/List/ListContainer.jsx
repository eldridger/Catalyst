import React, {Component, PropTypes} from 'react';
import Theme from 'themes/theme';
import List from './List';

export default class ListContainer extends Component {
    static propTypes = {
        styles: PropTypes.shape({
            li: PropTypes.object,
            ul: PropTypes.object
        }),
        items: PropTypes.array.isRequired
    };

    static defaultProps = {
        styles: Theme.list
    };

    render() {
        return <List styles={this.props.styles} {...this.props} />
    }

}