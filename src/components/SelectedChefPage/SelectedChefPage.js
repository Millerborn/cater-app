import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectedChef extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="chef-list">
                <p>Hello</p>
                {/* <pre>TESTING:  {JSON.stringify(this.props.chefs)}</pre> */}
                {/* {this.props.chefs.map((chef, i) => {
                    return (<ChefListItem key={i} chef={chef} />);
                })} */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SelectedChef);
