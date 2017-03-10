import React from 'react';
import { connect } from 'react-redux';

import TodoActions from './TodoActions';

export class AllTodos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(this.renderTodo.bind(this))}
      </ul>
    );
  }

  renderTodo(todoData) {
    return (
      <li key={todoData.text}>
        <input type="checkbox" checked={todoData.done} onChange={ () => this.props.toggleTodoState(todoData.text) } />
        {todoData.text}
      </li>);
  }
}

function mapStateToProperties(state) {
  console.log(state)
  return {
    todos: state.todos
  };
}
export const actionCreators = {
  toggleTodoState: (text) => { return { type: TodoActions.todoStateToggled, text: text }}
}

export const AllTodosContainer = connect(mapStateToProperties, actionCreators)(AllTodos);
