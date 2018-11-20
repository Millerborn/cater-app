
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class HireListItem extends Component {

    addItem = (key) => {
        console.log('Adding Item to Cart:', key);
        
    }

    // Displaying details of selected chef
    render() {
        const key = `${this.props.menu.id}`;

        return (
            <div className="card-menu" >
                <Card id="card">
                    <CardMedia
                        component="img"
                        alt= "https://via.placeholder.com/160x80"
                        height="200"
                        src = "https://via.placeholder.com/160x80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h3>{this.props.menu.title}</h3>
                        <p>{this.props.menu.ingredients}</p>
                        <p>{this.props.menu.time_to_make}</p>
                    </CardContent>
                    <CardActions>
                        <Button varient="contained" color="primary"
                            onClick={() =>  {this.addItem(key)}}>
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
          </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(HireListItem);
