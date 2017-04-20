/**
 * This component should render a controlled input for text
 */
import React, { Component } from 'react';

export default (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<input
				type="text"
				value={props.value}
				onChange={props.onChange}
			/>
		</form>
	)
}
