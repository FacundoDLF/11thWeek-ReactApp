import React, { Component} from 'react';
import CustomerItem from './CustomerItem';
import PropTypes from 'prop-types';

class CustomersList extends Component {
    render() {
        return this.props.customers.map((customers) => (
            <CustomerItem key={customers.id_customer} customers={customers}/>
        ));
    }
}
CustomersList.propTypes = {
    customers: PropTypes.array.isRequired
}

export default CustomersList;