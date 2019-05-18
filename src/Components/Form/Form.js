import React, { Component } from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: "",
			image_url: "",
            currentId: null,
            
		};
	}
	componentWillMount() {
		if (this.props.match.params.id) {
            axios.get('/api/product/' + this.props.match.params.id)
            .then(response=> {
                this.setState({
                    name: response.data[0].name,
                    price: response.data[0].price,
                    image_url:response.data[0].image_url,
                    currentId:response.data[0].product_id
                })
            })
		}
         
    }
    componentDidUpdate(props){
        if(props.match.params.id !== this.props.match.params.id){
            this.setState({
                name: "",
			    price: "",
			image_url: "",
            currentId: null,
            })
        }
    }
   
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	
	addItem() {
		const newItem = {
			name: this.state.name,
			price: this.state.price,
			image_url: this.state.image_url
		};

        axios.post('/api/product', newItem)
        .then(() => {
		});
    };
    
	updateItem() {
		const editedItem = {
			name: this.state.name,
			price: this.state.price,
			image_url: this.state.image_url
		};

        axios.put('/api/product/' + this.state.currentId, editedItem)
            .then(() => {
		});
	}
	render() {
		const addOrUpdate = this.state.currentId ? (
			<button onClick={() => this.updateItem()}>Save Changes</button>
		) : (
			<button onClick={() => this.addItem()}>Add to inventory</button>
		);
		return (
			<div className='Form'>
				<img
                className='productImage'
					src={
						this.state.image_url === '' ? (
							'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXh6vH////5+vrl7fPv8/f0+fzt9Pbf6vD+/f/j6/Lf6vL///3//vvr8fbf6fLy9vl2vi5YAAACcElEQVR4nO3c63ajIBRAYVEzKRLw/d92GM0kXMSmy0EPs/b3N9pm9yik6aXrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByTK5zZ+ncdEWiHc9jrwjsenWenkIKKaSQQgopvLzwVy1iCod7HYOUQjNU+gyDobAuCo+jsDYKj2u+8M8bMLsaLxzmvp/9mXrnkJYLh/Vsc9sJbLnwrvv1yT9Ur7viO4UtF87q5VY+rJFC7XS2oLyfulc+u5HCyaohSXRjEKjG4qlNFGof6MeU3GpzOMO57fvQWb+a+CPiKf4/hesEVTpFZ8PC8s8kGij0gWZ5liaeog4Ldcsz9IGvkChxfD9QXmjEF+rXBJeDwgv17ub1IaPmhl+1uXCC6RSd/Vqeub3vfAbZhfEEsyn6l2rDaL/5wafswimdoMo2jfCbp83LQHLhsk1khfnW/+Qv6HHKb0jJhetGn0u3/idrHsrmj8gtfG/0H03RrUfbbIpyC7NFJhjixhSXO9afYNN4uYUbi0w4xTjxNW+TvX4TWphvE8kU4wv1veYuU4wuVKGF2Ua/P8XwjjXJciOy8LsJJlOMvxzpFEUWbm30G41/p5iuufFyI7CwtNHnlinmF7SJNg2BhVNhoy9M0W58MR7BFAUW6o/m95yiK7wsMJJn2H1eaNRYWJHM66MJLPzJDMvtkmdIIYUUUkghhRRSSCGFFJ5SqL6OU6IL937D6VNacuE/RmFtFB5HYW0UHiemUGk31eC0klJohzqsmML6KKSQQgoppJDCqwrn/naWfr4iUHfTaf8natr7Gz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOl+A5PRQkZqfYBrAAAAAElFTkSuQmCC'
						) : (
							this.state.image_url
						)
					}
					alt={this.state.name}
				/>
				<div>
					<p>Image URL:</p>
					<input value={this.state.image_url} onChange={(e) => this.handleChange(e, 'image_url')} />
					<p>Product Name:</p>
					<input value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
					<p>Price:</p>
					<input value={this.state.price} onChange={(e) => this.handleChange(e, 'price')} />
					<div>
						<Link to="/"><button>Cancel</button>
						</Link>
						<Link to="/">{addOrUpdate}</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Form;
