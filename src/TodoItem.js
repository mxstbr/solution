/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React, { Component } from 'react';

class TodoItem extends Component {
	onChange = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return (
			<label>
				<input
					type="checkbox"
					checked={this.props.checked}
					onChange={this.onChange}
				/>
				{this.props.text}
			</label>
		)
	}
}

export default TodoItem;
