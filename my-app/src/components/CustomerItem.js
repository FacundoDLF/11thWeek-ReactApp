import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class CustomerItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.customers.selected ? 'rgb(0, 245, 0)' : 'rgb(180, 0, 0)',
            color: 'rgb(255,255,255)',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // textDecoration: this.props.customers.selected ? 'line-through' : 'none',
            display: 'flex',
        }
    }
    render() {
        const {id_customer, type, email, num_phone } = this.props.customers;
        return (
            <div style={this.getStyle()}>
                <p >
                    <input type="checkbox" onChange={this.props.selected.bind(this, id_customer)}
                    /> {' '}
                    {type} {' '}
                    {email} {' '}
                    {num_phone} {' '}
                </p>
            </div>
        )
    }
}

CustomerItem.propTypes = {
    customers: PropTypes.object.isRequired
}

export default CustomerItem