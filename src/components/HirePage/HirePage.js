
import React, { Component } from 'react';
import HireList from './HireList/HireList';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Orders from './Orders/Orders';
import Products from '../ShoppingCart/Products';

class HirePage extends Component {

    state = {
        customOrder: '',
        orderTotal: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
        this.props.dispatch({ type: 'GET_ORDERS' });
    }

    createCustomOrder = () => {
        console.log('creating custom Order');
    }

    calculateOrderTotal = (time, hourly) => {
        console.log('calculating order total', time, hourly);
        let price = time * hourly;
        return price;
    }

    handleChange = (event) => {
        console.log('Running custom order handle change', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
            orderTotal: this.calculateOrderTotal,
        })
        console.log('state in hire-page', this.state);
        
    }

    render() {
        const chef = this.props.menu[0];
        let chefName = '';
        if (chef !== undefined){
        chefName = 
        <div>
        <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
        </div>
        ;
        }

        // const time = chef.time_to_make;
        // const hourly = this.props.menu.hourly_rate;
        return (
            <div className="App">
                <Products />
                <Orders chefInfo={this.props.chef}/>
                {/* {JSON.stringify(this.props.chef)} */}
                {chefName}
                <HireList chef={this.props.chef} address={this.props.address} history={this.props.history} />
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Button onClick={this.createCustomOrder}>Enter a custom order</Button>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Custom Order"
                            multiline
                            rowsMax="4"
                            name="customOrder"
                            value={this.state.customOrder}
                            onChange={this.handleChange}
                            className="customOrderInput"
                            margin="normal"
                            variant="outlined"
                            />
                            <Button onClick={this.customOrderClick}>Add custom Order</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    menu: reduxState.menu,
    order: reduxState.orders,
    chef: reduxState.chefs,
});

export default connect(mapStateToProps)(HirePage);
