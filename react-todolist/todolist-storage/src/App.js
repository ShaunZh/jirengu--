import 'normalize.css';
import './reset.css';
import './App.css';
import './TodoItem.css'
import './TodoInput.css'

import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import * as localStore from './localStore'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoList: localStore.load('todoList') || []
    };
  }

  render() {
    let todos = this.state.todoList
      .filter((item) => !item.deleted)
      .map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)} />
        </li>
      );
    });

    // onChange 和 onSubmit 是传递括号里面的参数
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
          onChange={this.changeTitle.bind(this)}
          onSubmit={this.addTodo.bind(this)}/>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    );
  }

  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed';
    this.setState(this.state);
    localStore.save('todoList', this.state.todoList);
  }

  changeTitle(event) {
    console.log('hhh');
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    });
  }

  addTodo(event) {
    console.log('aaa');
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    });

    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    });
    localStore.save('todoList', this.state.todoList);
  }

  delete(event, todo) {
    todo.deleted = true;
    this.setState(this.state);
    localStore.save('todoList', this.state.todoList);
  }
}

export default App;

let id = 0;
function idMaker() {
  id += 1;
  return id;
}
