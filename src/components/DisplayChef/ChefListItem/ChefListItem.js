
import React, { Component } from 'react';

class ChefListItem extends Component {

    // Displays details for a single project
    render() {
        return (
            <div className="chefs">
                <img src="https://via.placeholder.com/320x240" />
                <div className="details">
                    <h3>{this.props.displayChefsReducer}</h3>
                </div>
            </div>
        );
    }
}

export default ChefListItem;