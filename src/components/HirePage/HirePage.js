
import React, { Component } from 'react';
import HireList from './HireList/HireList';
import { connect } from 'react-redux';


class HirePage extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MENU'});
    }
    
    // Renders the entire app on the DOM
    render() {
        let chef = this.props.menu[0];
        
        return (
            <div className="App">
                {JSON.stringify(chef)}
                {/* need to display chef name here */}
                {/* <h1 className="menu-h1">Chef {chef.first_name}</h1> */}
                <h1 className="menu-h1-menu">MENU</h1>
                <HireList history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HirePage);
