
import React, { Component } from 'react';
import HireList from './HireList/HireList';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class HirePage extends Component {

    state = {
        customOrder: '',
    }

    componentWillUpdate() {
        this.props.dispatch({ type: 'FETCH_MENU' });
        this.props.dispatch({ type: 'GET_ORDERS' });
    }

    createCustomOrder = () => {
        console.log('creating custom Order');
        
    }

    handleChange = (event) => {
        console.log('Running custom order handle change', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
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
                {JSON.stringify(this.props.order)}
                <HireList address={this.props.address} history={this.props.history} />
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Button onClick={this.createCustomOrder}>Enter a custom order</Button>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax="4"
                            value={this.state.customOrder}
                            onChange={this.handleChange('customOrder')}
                            className="customOrderInput"
                            margin="normal"
                            helperText="hello"
                            variant="outlined"
                            />
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
});

export default connect(mapStateToProps)(HirePage);
