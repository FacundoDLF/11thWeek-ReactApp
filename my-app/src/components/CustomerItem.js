import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class CustomerItem extends Component {
    // getStyle = () => {
    //     return {
    //         backgroundColor: 'rgb(0, 0, 155)',
    //         padding: '10px',
    //         borderBottom: '1px #ccc dotted',
    //     },
    // }
    render() {
        return (
            <div style={itemStyle}>
                <p>{ this.props.customers.city}</p>
            </div>
        )
    }
}

CustomerItem.propTypes = {
    customers: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'rgb(180, 0, 0)',
    color: 'rgb(255,255,255)',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
};

export default CustomerItem