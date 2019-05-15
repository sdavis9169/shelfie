import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: '',
            name: '',
            price:''
        };
        this.baseState = this.state;

        this.handleImage = this.handleImage.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleImage(value){
        this.setState({ image: value })
        
    }

    handleNameChange(value){
        this.setState({ name: value })
    }

    handlePriceChange(value){
        this.setState({ price: value })
    }

    handleCancel(){
        this.setState(this.baseState)
    }
    



  render() {
    return (
      <div className='form'>
        Form
        <div>
        <input 
        value={this.state.image}
        placeholder='Product image URL'
        onChange={e => this.handleImage(e.target.value)} 
        />

        <input 
        value={this.state.name}
        placeholder='Product Name'
        onChange={e => this.handleNameChange(e.target.value)}
        />

        <input 
        value={this.state.price}
        placeholder='Product Price'
        onChange={e => this.handlePriceChange(e.target.value)}
        />

        </div>
        <div>
        <button onClick={() => this.handleCancel()}>Cancel</button>
        <button>Add to Inventory</button>
        </div>
      </div>
    )
  }
}
