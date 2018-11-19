
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
                <ChefList />
            </div>
        );
    }
}

export default connect()(DisplayChef);