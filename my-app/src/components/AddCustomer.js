import React, { Component } from 'react'

export default class AddCustomer extends Component {
    state = {
        type: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCustomer(this.state.type);
        this.setState({ type: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
                <input
                type="text"
                name="type"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Customer ..."
                value={this.state.type}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Add"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}
