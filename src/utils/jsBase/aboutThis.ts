// 概述
function thisInd() {
  window.name='lili'
 // 作为函数直接调用
 function sayHi(age) {
   console.log(this&&this.name,age)
 }
 // 相当于 sayHi.call(window,'18');
 sayHi('18');//undefined 18

 // 作为对象的方法调用
 let obj = {
   name: 'xiaoming',
   sayHi:sayHi
 }
 obj.sayHi(20);//xiaoming 20
}
// thisInd()

// 经典面试题： 对象的this,对象的函数作为参数的this
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
function arrowThis() {
  var x = 1;
  var obj = {
    x: 2,
    say: () => {
      console.log(this.x)//this==window
    }
  }
  // obj.say();//es6中找不到this报错
  var obj2 = {
    birth: 1990,
    getAge: function () {//箭头函数中使用this
      var b = this.birth;
      //箭头函数的父级上下文是 obj
      var fn = () => new Date().getFullYear() - this.birth;
      return fn();
    }
  }
  console.log(obj2.getAge());//31
}
arrowThis()