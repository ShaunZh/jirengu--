/*
* @Author: Marte
* @Date:   2017-07-31 11:00:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 11:08:25
*/
import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    return <div>{this.props.todo.title}</div>
  }
}