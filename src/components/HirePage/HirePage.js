
import React, { Component } from 'react';
import HireList from './HireList/HireList';
import { connect } from 'react-redux';

class HirePage extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MENU'});
    }
    
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <HireList history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(HirePage);
