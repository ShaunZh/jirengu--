import _ from 'lodash'
import j from 'jquery'
import foo from './foo'

function component() {
   var element = j('<div></div>');

   // _.join 中的 " _ " 实际上是lodash暴露的全局变量
   element.html(_.join(['HELLO', 'WEBPACK'], ' '));

   return element.get(0);
}

document.body.appendChild(component());
console.log(foo);
console.log(foo());
