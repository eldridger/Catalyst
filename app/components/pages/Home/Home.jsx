import React, {Component} from 'react';
import Radium from 'radium';
import HomeItem from './HomeItem';

const styles = {
    base: {
        display: 'flex',
        flexFlow: 'row wrap'
    }
};

@Radium
export default class Home extends Component {
    static propTypes = {
        links: React.PropTypes.array
    };
    render() {
        return (
            <div className="Home" style={[styles.base]}>
                {this.props.links.map(link => {
                    return <HomeItem route={link.route} title={link.title} />;
                })}
            </div>
        );
    }
};