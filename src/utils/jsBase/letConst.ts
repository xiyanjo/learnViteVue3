// 1 不存在变量提升，只能在let声明块内有效
{
  let a = 10, b = 1;
  var c = 2;
}
console.log(c)
// console.log(a, b)//a is not defined
// 3 for循环部分父作用域，内部子作用域
let a = [];
for (let i = 0; i < 6; i++) {//父作用域
  // let i = '5';//子作用域
  a[i] = function () {
    console.log('a[6]-i-', i);
  }
  console.log('inner-i-', i);
  // 4 暂时性死区
  // name = '暂时性死区';//error
  // typeof name;//error
  let name = '变量生命签不可以用';
}

a[5]();
// console.log('out-i-',i);//i is not defined
// 5 不允许重复声明
function func(arg:any) {
  // let arg; // 报错
}
function func2(arg:any) {
  {
    let arg; // 不报错
  }
}

// es5中  if内部tmp变量提升到f函数顶部
var tmp = new Date();
(function () {
  console.log('tmp----', tmp);// undefined
  if (false) {
    var tmp = 'hello world';
  }
})();
// 6 块级作用域
(function () {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log('n---', n); // 5
})();

// 7 块级作用域内函数声明----类似var,推荐使用函数表达式
function f() { console.log('I am outside!')};
(function () {
  if (false) {
    function f() {
      console.log('I am inside!');
    }
    let f2 =function () {
      console.log('I am inside!');
    }
  }
  // f();//error
  // f2();//f2 is not defined 
}())


/**彻底冻结一个对象
 *  1 先冻结对象
 *  2 遍历对象，如果对象的某个属性为对象调用冻结对象方法
 */
let constantize = obj => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'object') {
      constantize(obj[key]);
    }
  })
  return obj;
}
// ？？？？？？？递归哪种好
/* function constantize(obj){
  // return obj => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
      if (typeof obj[key] === 'object') {
        constantize(obj[key]);
      }
    })
    return obj;
  // }
}  */
// 1 const声明一个常量，值不可变，其他同let
// 2 const保证 变量指向内存地址不得改动，它指向的数据结构是可变的
const foo = constantize({ name: { code: 6666 } });
// foo.age = 18;//error
// foo.name.code = 'lili';//error

// 顶层对象

var aaa = 1;
console.log('aa',window.aaa) // 浏览器-1 代码里-undefined
let bbb = 1;
console.log(window.bbb) // undefined