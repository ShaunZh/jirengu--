import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: '', status: '', deleted: ''}
      ]
    };
  }

  render() {
    let todos = this.state.todoList.forEach((item, index) => {
      return <li>{item.title}</li>
    });

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrap">
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
