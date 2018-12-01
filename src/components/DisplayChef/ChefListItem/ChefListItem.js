
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRate from '@material-ui/icons/StarRate';
import compose from 'recompose/compose';
import IconButton from '@material-ui/core/IconButton';


// import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'row',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 350,
      height: 350,
      float: 'right',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
  

class ChefListItem extends Component {

    handleClick = (id) => {
        // event.preventDefault();
        console.log('chef id', id);
        this.props.dispatch( { type: 'SEND_MENU_ID', payload: id } );
        this.props.history.push('/hire-chef');
    }

    // Displaying details for chefs
    render() {
        const { classes } = this.props;
        const key = this.props.chef.id;
        return (
                <Card className={classes.card}>
                <CardMedia
                className={classes.cover}
                image={this.props.chef.profile_pic}
                title="Live from space album cover"
                />
                <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                    {this.props.chef.first_name} {this.props.chef.last_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    Specialties: {this.props.chef.specialty}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    Years of experience: {this.props.chef.years_of_experience}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    Description: {this.props.chef.description}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    Rating: {this.props.chef.rating}
                    <IconButton>
                        <StarRate /><StarRate /><StarRate /><StarRate /><StarRate />
                    </IconButton>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Hourly Rate: {this.props.chef.hourly_rate}
                    </Typography>
                    
                        <Button 
                            className="hire-chef-button" 
                            color="primary" 
                            variant="contained" 
                            onClick={() => this.handleClick(key)}
                        >
                            Hire Chef
                        </Button>
                </CardContent>
                </div>
            </Card>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

ChefListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    connect(mapStateToProps),
    withStyles(styles)
)(ChefListItem);
