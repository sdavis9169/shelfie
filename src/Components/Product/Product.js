import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css'

export default function Product(props) {
	return (
		<div className='product'>
			<img 
			className='product-image'src={props.currentProduct.image_url}  />
			<div>
				<div>
					<p>{props.currentProduct.name}</p>
					<p>${props.currentProduct.price} </p>
				</div>

				<div className="button-container">
					<button
						className='button'
						onClick={() => {
							axios.delete('/api/product/' + props.currentProduct.product_id)
								.then(() => {
								props.getItemList();
							});
						}}
					>
					
						Delete
					</button>
					<Link to={"/edit-product-form/" + props.currentProduct.product_id}>
						<button
						className='button'>Edit</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
