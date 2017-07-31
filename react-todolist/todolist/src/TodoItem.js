/*
* @Author: Marte
* @Date:   2017-07-31 11:00:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 15:19:01
*/
import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked = {this.props.todo.status === 'completed'}
        onChange = {this.toggle.bind(this)}/>
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>
    )
  }
  toggle(e) {
    this.props.onToggle(e, this.props.todo);
  }

  delete(e) {
    this.props.onDelete(e, this.props.todo);
  }
}