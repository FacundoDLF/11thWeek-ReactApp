import React, { Component} from 'react';
import CustomersList from './components/Customers';

import './App.css';

class App extends Component {
  state = {
    customers: [
      {
        id_customer: 1,
        type: "private",
        email: "dalbasiny0@g.co",
        num_phone: "+46 (642) 859-6500",
        st_address: "Colorado",
        num_address: "48",
        num_duns: "41-254-6037",
        country: "Sweden",
        city: 'Delaware',
        postal_code: "597 96",
        date_discharge: "27/08/2020"
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <CustomersList customers={this.state.customers}/>
      </div>
    );
  }
}

export default App;
