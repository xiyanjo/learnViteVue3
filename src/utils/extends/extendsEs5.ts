/** 继承的原型链
 * let cat = new Parent()  cat.__prototype__ === Parent.prototype
 */
/** 原型链继承: 
 * 实现:子类继承父类的实例
 * 缺点: 1 多个实例指向一个原型,当原型上的值为引用属性时,互相影响
 *       2 无法实现super(向父类传参)
 */
function prototypeExtend() {
  // 父类
  function Parent(name) {
    this.name = [name];
  }
  Parent.prototype.sayHi = function () {
    console.log('hi--i am ' + this.name );
  }
  // 子类
  function Child() {}
  Child.prototype = new Parent('ebp');
  Child.constructor = Child;
  // 实例
  let ebp1 = new Child(), ebp2 = new Child();
  ebp1.name[0] = 'dog';
  ebp1.sayHi();
  ebp2.sayHi();
  console.log(ebp1.name, ebp2.name)
}
// prototypeExtend();


/** 构造函数继承
 * 实现: 在子类的构造函数中执行父类的构造函数 并绑定this
 * 缺点:无法继承父类原型上的方法属性
 */
function constructExtend(){
  // 父类
  function Parent(name) {
    this.name = [name];
  }
  Parent.prototype.sayHi = function () {
    console.log('构造函数继承: ' + this.name );
  }
  // 子类中调用父类的this，并绑定子类的this
  function Child(nameC) {
    Parent.call(this, nameC);
  }
  let c1 = new Child('c1'), c2 = new Child('c2');
  console.log(c1,c2)
}
// constructExtend();

/** 组合继承
 * 构造函数继承实现super + 原型继承
 * 缺点:每次都调用Parent new Parent
 */
function makeupExtend() {
  function Parent(name) {
    this.name = [name];
  }
  Parent.prototype.sayHi = function () {
    console.log('组合继承: ' + this.name );
  }
  function Child(nameC) {
  // 构造函数继承
    Parent.call(this, nameC);
  }
  // 原型继承
  Child.prototype =new Parent(444);
  Child.constructor = Child;
  
  let c11 = new Child('c11'), c21 = new Child('c21');
  c11.sayHi();
  c21.sayHi();
}
// makeupExtend();
 
/** 寄生组合继承
 * 实现:
 *    方法一: 父子共用一个原型  Child.prototype = Parent.prototype;
 *    方法二: 复制一份父的原型
 */
function  betterExtend() {
  function Parent(name) {
    this.name = [name];
  }
  Parent.prototype.sayHi = function () {
    console.log('寄生组合继承: ' + this.name );
  }

  // 构造函数继承
  function Child(nameC) {
    Parent.call(this, nameC);
  }
  // 原型继承
  // 方法一 父子共用一个原型
  // Child.prototype = Parent.prototype;
  // 方法二 浅拷贝 ----better 
  Child.prototype = Object.create(Parent.prototype);
  // 方法三 
  // function F() { }
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();
  Child.constructor = Child;

  let c1 = new Child('c1 '), c2 = new Child('c2 ');
  c1.sayHi();
  c2.sayHi();
}
betterExtend();

