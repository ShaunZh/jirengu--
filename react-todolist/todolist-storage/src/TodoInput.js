/*
* @Author: Marte
* @Date:   2017-07-31 10:09:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-02 10:38:30
*/

import React from 'react';

function submit (props, e) {
 if (e.key === 'Enter') {
      props.onSubmit(e);
    }
}

function changeTitle(props, e) {
  props.onChange(e);
}

export default function(props) {

    // onChange 和 onKeyPress 是添加事件
    return <input type="text" value = {props.content}
    className="TodoInput"
    onChange = {changeTitle.bind(this)}
    onKeyPress = {submit.bind(this)}/>

}