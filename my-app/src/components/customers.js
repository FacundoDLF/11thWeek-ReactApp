import React, { Component} from 'react';

class CustomersList extends Component {
    render() {
        return this.props.customers.map((customers) => (
            <h3>{customers.id_customer}
            {customers.type}
            {customers.email}
            {customers.num_phone}
            {customers.city}</h3>
        ));
    }
}

export default CustomersList;