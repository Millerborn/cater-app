
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class HireListItem extends Component {

    state = {
        order_date: '',
        address_id: '',
        menu_item_id: '',
        chef_id: '',
    }

    handleChange = (itemId, address) => {
        console.log('Running Order Item handle change', itemId, address);
        this.setState({
            order_date: '12-15-2019',
            address_id: address,
            menu_item_id: itemId,
            chef_id: this.props.menu.chef_id, 
        })
    }

    handleSubmit = () => {
        console.log('Push to db', this.state);
        this.props.dispatch( { type: 'ADD_ORDER', payload: this.state } );
    }

    // Displaying details of selected chef
    render() {
        const itemId = this.props.menu.id;
        const address = this.props.user.id;

        return (
            <div className="card-menu" >
            {JSON.stringify(address)}
                <Card id="card">
                    <CardMedia
                        component="img"
                        alt= "https://via.placeholder.com/160x80"
                        height="200"
                        src = "https://via.placeholder.com/160x80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h2>{this.props.menu.title}</h2>
                        <h5>Ingredients</h5>
                        <p>{this.props.menu.ingredients}</p>
                        <p>{this.props.menu.time_to_make} minuets to make</p>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary"
                            onClick={() =>  this.handleChange(itemId, address)}>
                            Add click
                        </Button>
                        <Button variant="contained" color="primary"
                            onClick={() =>  this.handleSubmit(itemId, address)}>
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
          </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    user: reduxState.user
});

export default connect(mapStateToProps)(HireListItem);
