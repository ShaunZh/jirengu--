/*
* @Author: Marte
* @Date:   2017-07-31 10:09:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 11:41:36
*/

import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    return <input type="text" defaultValue = {this.props.content} onKeyPress={this.submit}/>
  }
  submit(e) {
    if (e.key === 'Enter') {
      console.log('用户按回车了');
    }
  }
}