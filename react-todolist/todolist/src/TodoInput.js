/*
* @Author: Marte
* @Date:   2017-07-31 10:09:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 10:53:40
*/

import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    return <input type="text" value = {this.props.content} />
  }
}