
import React, { Component } from 'react';
import HireList from './HireList/HireList';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class HirePage extends Component {

    componentWillUpdate() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    
    // Renders the entire app on the DOM
    render() {
        const chef = this.props.menu[0];
        console.log('Hire Page chef', chef);
        let chefName = '';
        if (chef !== undefined){
        chefName = 
        <div>
        <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
        </div>
        ;
        }
        return (
            <div className="App">
                {chefName}
                <HireList history={this.props.history} />
                <Button>Enter a custom order</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HirePage);
