/*
* @Author: Marte
* @Date:   2017-08-01 23:40:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-02 09:45:20
*/

import React, {Component} from 'react';

export default class ForgotPasswordForm extends Component {
  render () {
    return (
      <div className="forgotPassword">
        <h3>
          重置密码
        </h3>

        <form className="forgotPassword" onSubmit={this.props.onSubmit} > {/* 登录 */}
        <div className="row">
          <lablel>邮箱</lablel>
          <input type="text" value={this.props.formData.email}
            onChange={this.props.onChange.bind(null, 'email')} />
        </div>
        <div className="row actions">
          <button type="submit">发送重置邮件</button>
          <a href="#" onClick={this.props.onSignIn}>返回登录</a>
        </div>
        </form>
      </div>
    );
  }
}