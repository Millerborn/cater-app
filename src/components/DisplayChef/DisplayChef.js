
import React, { Component } from 'react';
import ChefList from './ChefList/ChefList';
import { connect } from 'react-redux';

class DisplayChef extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_CHEFS'});
    }
    
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <pre>TESTING:  {JSON.stringify(this.props.history)}</pre>
                <ChefList history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DisplayChef);
