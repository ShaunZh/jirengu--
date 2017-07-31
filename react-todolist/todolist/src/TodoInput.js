/*
* @Author: Marte
* @Date:   2017-07-31 10:09:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 13:32:29
*/

import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    return <input type="text" defaultValue = {this.props.content} onKeyPress={this.submit.bind(this)}/>
  }
  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e);
    }
  }
}