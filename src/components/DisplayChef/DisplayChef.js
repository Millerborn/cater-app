
import React, { Component } from 'react';
import ChefList from './ChefList/ChefList';
import { connect } from 'react-redux';

class DisplayChef extends Component {

    dispatchFunction = (id) => {
        this.props.dispatch( { type: 'FETCH_CHEFS' } );
    }
    componentDidMount() {
        this.dispatchFunction();
    }
    
    // Renders the entire app on the DOM
    render() {      
        return (
            <div className="App">
                {JSON.stringify(this.props.history)}
                <ChefList history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DisplayChef);
