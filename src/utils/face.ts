/** 将字符串转为数字
 * 考虑最大最小及溢出
 */
// function toNumber(val) {
//   if (!val) return '';
//   return Number(val)
// }
// 对象的this,对象的函数作为参数的this
function thisFace() {
  var name = 22;
  var a = {
    name: 111,
    say: function () {
      console.log('this----',this.name);
    }
  }
  var fn = a.say;
  fn();//  22
  a.say();//  111
  var b = {
    name: 333,
    say: function (fn) {
      fn()//直接调用函数,执行环境为window
    }
  }
  b.say(a.say);// 22
  b.say = a.say;
  b.say();//333
}
// thisFace()


// 箭头函数的this:定义的时候绑定的(没有this,this是外层代码块this)
var x = 11;
var obj = {
  x: 22,
  say: () => {
    console.log(this.x)//this==window
  }
}
// obj.say();
var obj2 = {
  birth: 1990,
  getAge: function () {
    var b = this.birth;
    var fn = () => new Date().getFullYear() - this.birth;//箭头函数的父级上下文是 obj
    return fn();
  }
}
// console.log(obj2.getAge());//31






