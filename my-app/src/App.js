import React, { Component} from 'react';
import CustomersList from './components/Customers';
import Header from './layout/Header';
import AddCustomer from './components/AddCustomer';
import './App.css';

class App extends Component {
  state = {
    customers: [
      {
        id_customer: 1,
        type: "private",
        email: "dalbasiny0@gmail.co",
        num_phone: "+46 (642) 859-6500",
        st_address: "Colorado",
        num_address: "48",
        num_duns: "41-254-6037",
        country: "Sweden",
        city: 'Delaware',
        postal_code: "597 96",
        date_discharge: "27/08/2020",
        selected: false,
      }
    ]
  }

  selected = (id_customer) => {
    this.setState({ customers: this.state.customers.map(customers => {
      if(customers.id_customer === id_customer) {
        customers.selected = !customers.selected
      }
      return customers;
    })})
      console.log(id_customer);
  }

  delCustomer = (id_customer) => {
    this.setState({customers: [...this.state.customers.filter(customers => customers.id_customer !== id_customer)] });
    console.log(id_customer);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddCustomer/>
        <CustomersList customers={this.state.customers} selected={this.selected} delCustomer={this.delCustomer}/>
      </div>
    );
  }
}

export default App;
