import 'normalize.css';
import './reset.css';
import './App.css';
import './TodoItem.css'
import './TodoInput.css'

import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import UserDialog from './UserDialog'
import {getCurrentUser, signOut, TodoModel} from './leanCloud';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      newTodo: '',
      todoList: []
    };

    //let user = getCurrentUser();
    //console.log(user);
    // if (user) {
    //   TodoModel.getByUser(user, (todos) => {

    //     let stateCopy = JSON.parse(JSON.stringify(this.state))
    //     stateCopy.todoList = todos;
    //     console.log(todos);
    //     this.setState(stateCopy)
    //   })
    // }
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
        <h1>{this.state.user.username || '我'}的待办
          {this.state.user.id ? <button onClick={this.signOut.bind(this)}>登出</button>: null}
        </h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
          onChange={this.changeTitle.bind(this)}
          onSubmit={this.addTodo.bind(this)}/>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id ?
          null :
          <UserDialog
            onSignUp={this.onSignUpOrSignIn.bind(this)}
            onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    );
  }

  signOut() {
    signOut();
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = {};
    stateCopy.todoList = [];    // 退出登录后，要将显示的数据清除
    this.setState(stateCopy);
  }

  reloadTodoList(user) {
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos;
        this.setState(stateCopy)
      });
    }
  }
  onSignUpOrSignIn(user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = user;
    this.setState(stateCopy);
    // 登录或注册完成后，加载用户数据
    this.reloadTodoList(user);
  }
  componentDidUpdate() {

  }

  toggle(e, todo) {
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed';
    console.log('todo.status');
    console.log(todo.status);
    TodoModel.update(todo, () => {
      this.setState(this.state);
    }, (error) => {
      todo.status = oldStatus;
      this.setState(this.state);
    })

   }

  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    });
  }

  addTodo(event) {
    let newTodo = {
      title: event.target.value,
      status: '',
      deleted: false
    };

    TodoModel.create(newTodo, (id) => {
      newTodo.id = id;
      this.state.todoList.push(newTodo);
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      });
    }, (error) => {
      console.log(error);
    })
   }

  delete(event, todo) {
    console.log(todo);
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true;
      this.setState(this.state);
    });
   }
}

export default App;
