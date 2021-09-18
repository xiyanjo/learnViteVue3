

/** 单例模式
 * 定义: 1 一个实例 2 可以全局访问
 * 优点: 只有一个实例,减少内存的开销(适合频繁的创建和销毁实例)
 * 场景: 弹窗/首页全局缓存
 * 实现:创建实例的函数, 没有--创建实例,有--返回实例  保持始终有一个实例
 */
// es5的单例模式
function getSingle(fn) {
  let result;
  return function () {
    return result|| (result = fn.apply(this,arguments))
  }
}
/** 创建弹窗的实例*/
 var createDailog = function () {
  let div = document.createElement('div');
  div.innerHTML = 'HELLO';
  div.style.display = 'none';
  div.style.background='pink'
  document.body.appendChild(div);
  return div
}
document.addEventListener('click', function () {
  let divSigle = getSingle(createDailog)(1, 2, 3)
  divSigle.style.display = 'block';
})

function StorageSingleton () {}
StorageSingleton.prototype.getItem = function (key) {
  console.log(localStorage.getItem(key))
    return localStorage.getItem(key)
}
StorageSingleton.prototype.setItem = function (key, value) {
  console.log(localStorage.getItem(key))
  return localStorage.setItem(key, value)
}
function getStorage() {
  return new StorageSingleton();
}
let Storage = getSingle(getStorage);
var a = Storage();
var b = Storage();
// a.setItem('a', 'a');
// b.getItem('a');
// console.log(a,b,a===b)

class Person{
  constructor(name,sex) {
    this.name = name;
    this.sex = sex;
  }
  // 定义在Person.prototype上,person.say===Person.prototype.say
  say() {
    console.log('happy');
  }
  // 静态的方法只能类本身调用, 在Person.prototype.constructor.classMethod(在函数本身上)
  static getInstance(name, sex) {
    if (!this.instance) {
      this.instance = new Person(name, sex);
    }
    return this.instance;
  }
}
// let person1 = Person.getInstance('lili', 18);
// let person2 = Person.getInstance('妹妹', 19);

// person1.say();
// Person.getInstance();
// console.log(Person.prototype);
// console.log(person1, person2);
// person1.classMethd();//error

