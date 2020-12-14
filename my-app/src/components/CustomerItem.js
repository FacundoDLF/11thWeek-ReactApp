import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomersList from './Customers';

export class CustomerItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.customers.num_phone}</p>
            </div>
        )
    }
}

CustomerItem.propTypes = {
    customers: PropTypes.object.isRequired
}

export default CustomerItem