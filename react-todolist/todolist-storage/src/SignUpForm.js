/*
* @Author: Marte
* @Date:   2017-08-01 21:16:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-02 10:23:07
*/

// import React, {Component} from 'react';

export default function(props) {
  render () {
    return (
      <form className="signUp" onSubmit={props.onSubmit.bind(this)}>{/* 注册 */}
        <div className="row">
          <label>用户名</label>
          <input type="text" value={props.formData.username}
            onChange={props.onChange.bind(null, 'username')} />
        </div>

        <div className="row">
          <label>邮箱</label>
          <input type="text" value={props.formData.email}
            onChange={props.onChange.bind(null, 'email')} />
        </div>

        <div className="row">
          <label>密码</label>
          <input type="password" value={props.formData.password}
            onChange={props.onChange.bind(null, 'password')} />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    );
  }
}