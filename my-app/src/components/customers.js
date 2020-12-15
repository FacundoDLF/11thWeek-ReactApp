import React, { Component} from 'react';
import CustomerItem from './CustomerItem';
import PropTypes from 'prop-types';

class CustomersList extends Component {

    render() {
        return this.props.customers.map((customers) => (
            <CustomerItem key={customers.id_customer} customers={customers} selected={this.props.selected} delCustomer={this.props.delCustomer}/>
        ));
    }
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired
}

export default CustomersList;