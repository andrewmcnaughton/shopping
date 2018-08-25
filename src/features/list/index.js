import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			newItem: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			newItem: e.target.value
		});
	}

	render() {
		return (
	        <div className="shopping-list">
	            <h1>Shopping List</h1>
	            <input 
	            	type="text" 
	            	id="listItem" 
	            	placeholder="Add Item"
	            	value={this.state.newItem} 
	            	onChange={this.handleChange}
	            />
	            <button 
	            	type="button" 
	            	onClick={() => {
	            		this.props.add(this.state.newItem);
	            		this.setState({
	            			newItem: '',
	            		});
	            	}}>

	            	Add</button>
	            <ul>
	                {
	                	this.props.list.map((item, index) =>
	                		<li>
	                			{item}
	                			<button
	                				onClick={() => {this.props.remove(index)}}
	                				>x</button>
	                		</li>
	                	)
	                }
	            </ul>
	        </div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		list: state.list,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		add: (value) => {
			dispatch({
				type: 'ADD', payload: value
			});
		},
		remove: (index) => {
			dispatch({
				type: 'REMOVE', payload: index
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)