/*
* @Author: Marte
* @Date:   2017-07-31 21:54:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-01 00:10:37
*/

import React, { Component } from 'react';
import './UserDialog.css';

export default class UserDialog extends Component {
  render() {
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav>
            <input type="radio" /> 注册
            <input type="radio" /> 登录
          </nav>

          <div className="panes">
            <form className="signUp"> { /*注册*/ }
              <div className="row">
                <label>用户名</label>
                <input type="text" />
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password" />
              </div>
              <div className="row active">
                <button type="submit">注册</button>
              </div>
            </form>
            <form className="signIn"> {/*登录*/}
              <div className="row">
                <label>用户名</label>
                <input type="text" />
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password" />
              </div>
              <div className="row active">
                <button type="subtmit">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}