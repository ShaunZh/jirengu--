/*
* @Author: Marte
* @Date:   2017-07-31 10:09:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 13:54:02
*/

import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    // onChange 和 onKeyPress 是添加事件
    return <input type="text" value = {this.props.content}
    onChange = {this.changeTitle.bind(this)}
    onKeyPress = {this.submit.bind(this)}/>
  }
  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e);
    }
  }

  changeTitle(e) {
    this.props.onChange(e);
  }
}