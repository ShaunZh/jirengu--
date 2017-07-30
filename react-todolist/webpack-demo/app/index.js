import _ from 'lodash';


function component() {
   var element = document.createElement('div');

   // _.join 中的 " _ " 实际上是lodash暴露的全局变量
   element.innerHTML = _.join(['Hello', 'webpack'], ' ' );

   return element;
}

document.body.appendChild(component());
