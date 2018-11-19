import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChefListItem from '../ChefListItem/ChefListItem';

class ChefList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="content">
                <pre>TESTING:  {JSON.stringify(this.props)}</pre>
                {this.props.projects.map((project, i) => {
                    return (<ChefListItem key={i} project={project} />);
                })}
            </div>
        );
    }
}

// Makes our project reducer available in our component
const mapReduxStateToProps = (reduxState) => ({
    chef_profile: reduxState.projects
});

export default connect(mapReduxStateToProps)(ChefList);