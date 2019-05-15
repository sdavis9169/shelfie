import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

const baseURL = 'http://localhost:4040'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
  };

  componentDidMount(){
    const inventoryPromise = [];
    inventoryPromise.push(axios.get(`${baseURL}`))

    Promise.all(inventoryPromise)
    .then((res) => {
      this.setState({
        inventory: res.map((e) =>  {
          return e.data
        })
      })
    })
  }


  render() {
    return (
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    )
  }
}

