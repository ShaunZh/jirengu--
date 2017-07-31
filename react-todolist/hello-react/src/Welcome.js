/*
* @Author: Marte
* @Date:   2017-07-30 17:36:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 08:49:22
*/


import React from 'react';
// 创造组件的方式
// 方式一：使用class
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// 方式二：使用函数
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// export default Welcome
//
// state的使用
// 组件不能改变得到的props，组件中可以变得东西放在哪呢？
// 答案：放在state中（函数形式的组件不支持state）
class Welcome extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
    setInterval(()=>{
      this.setState({
        date: new Date(),
        test: 'setInterval'
      })
    }, 5000);
    console.log('我已经在 constructor 里将 props 和 state初始化好了')
  }

  componenntWillMount(){
    this.setState({
      date: new Date(),
      test: 'componentWillMount'
    });
    console.log('运行到这里的话，说明马上就要 render 了');

  }

  render() {
    console.log('这里是render');

    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
      </div>
    )
  }

  componentDidMount() {
    console.log('已经挂载到页面里了');
    this.setState({
        date: new Date()
      })
  }
}

export default Welcome