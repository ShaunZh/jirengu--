/*
* @Author: Marte
* @Date:   2017-07-31 17:33:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-02 09:50:42
*/
import AV from 'leancloud-storage';

var APP_ID = 'z4xch4Exr8u8GEfhGO2lndxC-gzGzoHsz';
var APP_KEY = 'BT2W1RyXotxlyoeOs6nwcBFv';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


export default AV

export function signUp(email, username, password, successFn, errorFn) {
  // 新建 AVUser 对象实例
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username);
  // 设置邮箱
  user.setEmail(email);
  // 设置密码
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser);
    successFn.call(null, user);
  }, function(error) {
    errorFn.call(null, error);
  });

  return undefined;
}

export function signIn(username, password, successFn, errorFn) {
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser);
    successFn.call(null, user);
  }, function (error) {
    errorFn.call(null, error);
  })
}

export function getCurrentUser() {
  let user = AV.user.current();
  if (user) {
    return getUserFromAVUser(user);
  } else {
    return null;
  }
}

export function signOut() {
  AV.User.logOut();
  return undefined;
}

export function sendPasswordResetEmail(email, successFn, errorFn) {
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call();
  }, function(error) {
    errorFn.call(null, error);
  })
}

function getUserFromAVUser(AVUser) {
  return {
    id: AVUser.id,
    // ES6语法，表示导出AVUser.attributes
    ...AVUser.attributes
  }
}

