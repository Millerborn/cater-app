import React, { Component } from 'react';
import { connect } from 'react-redux';
import HireListItem from '../HireListItem/HireListItem';
import Button from '@material-ui/core/Button';


class HireList extends Component {
    
    handleClick = (event) => {
        event.preventDefault();
        console.log('Hire chef button', this.props);
        this.props.history.push('/checkout');
    }

    // Displays a vertical list with project details
    render() {
        return (
            <div className="chef-list">
                {/* {JSON.stringify(this.props.menu)} */}
                {this.props.menu.map((menu, i) => {
                    return (
                        <HireListItem key={i} menu={menu} history={this.props.history} 
                    />);
                })}
                <Button onClick={this.handleClick} id="hire-chef-button">Hire Chef</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HireList);