import _ from 'lodash'
import j from 'jquery'

function component() {
   var element = j('<div></div>');

   // _.join 中的 " _ " 实际上是lodash暴露的全局变量
   element.html(_.join(['Hello', 'webpack'], ' '));

   return element.get(0);
}

document.body.appendChild(component());
