import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';


export default class Dashboard extends Component {
	constructor(props){
		super(props)
		this.state={
			inventoryList:[]
		}
	}
	componentDidMount() {
		this.getItemList();
	}
	componentDidUpdate(){
		this.getItemList();
	}
	getItemList() {
    axios.get('/api/product')
    .then((response) => {
			this.setState({ inventoryList: response.data });
		});
	}
	render() {
		const list = this.state.inventoryList.map((product, index) => {
			return (
				<Product
					getItemList={()=>this.getItemList()}
					currentProduct={product}
					key={index}
				/>
			);
		});
		return <div>{list}</div>;
	}
}