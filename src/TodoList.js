/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      inputValue: '',
    };
  }

  addItem = evt => {
    evt.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          text: this.state.inputValue,
          checked: false,
        },
      ],
      inputValue: '',
    });
  };

  checkItem = (text) => {
		this.setState({
			items: this.state.items.map(item => {
				if (item.text === text) {
					return {
						...item,
						checked: !item.checked
					};
				} else {
					return item;
				}
			})
		})
	};

  changeValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <TodoItem
								text={item.text}
								checked={item.checked}
								onClick={this.checkItem}
							/>
            </li>
          ))}
        </ul>
        <TodoInput
          value={this.state.inputValue}
          onChange={this.changeValue}
          onSubmit={this.addItem}
        />
      </div>
    );
  }
}

export default TodoList;
