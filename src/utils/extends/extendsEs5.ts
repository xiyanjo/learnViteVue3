/** 继承的原型链
 * let cat = new Animal()  cat.__prototype__ === Animal.prototype
 */



// 父类
function Animal(name) {
  this.name = [name];
}
Animal.prototype.sayHi = function () {
  console.log('hi--i am ' + this.name );
}
/** 原型链继承: 
 * 实现:子类继承父类的实例
 * 缺点: 1多个实例指向一个原型,当原型上的值为引用属性时,互相影响
 *       2 无法实现super(向父类传参)
 */
function ExtendP() {}
ExtendP.prototype = new Animal('ebp');
ExtendP.constructor = ExtendP;
let ebp1 = new ExtendP(), ebp2 = new ExtendP();
ebp1.name[0] = 'dog';
// ebp1.sayHi();
// ebp2.sayHi();
// console.log(ebp1.name, ebp2.name)

/** 构造函数继承
 * 实现: 在子类的构造函数中,执行父类的构造函数并绑定this
 * 缺点:无法继承父类原型上的方法属性
 */
function Parent(name) {
  this.name = [name];
}
Parent.prototype.sayHi = function () {
  console.log('构造函数继承: ' + this.name );
}
function Child(nameC) {
  Parent.call(this, nameC);
}
let c1 = new Child('c1'), c2 = new Child('c2');
// console.log(c1,c2)

/** 组合继承
 * 构造函数继承实现super + 原型继承
 * 缺点:每次都调用Parent new Parent
 */
 function Parent1(name) {
  this.name = [name];
}
Parent1.prototype.sayHi = function () {
  console.log('组合继承: ' + this.name );
}
function Child1(nameC) {
  Parent1.call(this, nameC);
}
Child1.prototype = Parent1.prototype;
Child1.constructor = Child1;

let c11 = new Child1('c11'), c21 = new Child1('c21');
// c11.sayHi();
// c21.sayHi();

/** 寄生组合继承
 * 实现:
 *    方法一: 父子共用一个原型  Child12.prototype = Parent12.prototype;
 *    方法二: 复制一份父的原型
 */
 function Parent12(name) {
  this.name = [name];
}
Parent12.prototype.sayHi = function () {
  console.log('组合继承: ' + this.name );
}
function Child12(nameC) {
  Parent12.call(this, nameC);
}
// 方法一 父子共用一个原型
// Child12.prototype = Parent12.prototype;
// 方法二 浅拷贝
Child12.prototype = Object.create(Parent12.prototype);
// 方法三 
/* function F() { }
F.prototype = Animal.prototype;
Child12.prototype = new F(); */
Child12.constructor = Child12;

let c112 = new Child12('c11-2'), c212 = new Child12('c21-2');

c112.sayHi();
c212.sayHi();

// // 子类


// /**4 寄生组合式继承
//  * 不用实例化父类，直接实例化一个临时副本，实现相同的原型链继承
//  */ 
// function inheritPrototype(Cat, Animal) {
//   function  F() { }
//   F.prototype = Animal.prototype;
//   Cat.prototype = new F();
//   Cat.prototype.constructor = Cat;
// }
// //1 基本模式：继承父类的实例
// // Cat.prototype = new Animal('Cat');//二次调用Animal
// // 4 寄生组合式继承
// inheritPrototype(Cat, Animal);
// Cat.prototype.alertAge = function ( ) {
//   console.log('age---' + this.age);
// }

// //3 原型式继承---对目标对象进行的是浅复制
// function object (o:any) {
//   function  F() { }
//   F.prototype = o;
//   return new F();
// }

// let person = {
//   name: 'init',
//   friends:[1,2,3,4]
// }
// let anotherPerson = object(person);
// anotherPerson.name = 'anotherPerson';
// anotherPerson.friends.push([4, 5, 6,7, 8]);// anotherPerson.friends=[5,5,5,5]
// // es5新增Object.create规范原型式继承
// let anotherPerson2 = Object.create(person, {
//   name:{value:'anotherPerson2'},friends:{value:[11, 22]}
// });

// console.log(person,anotherPerson,anotherPerson2)