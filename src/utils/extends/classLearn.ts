/* function OldAnimal(x: number, y: number) {
  [this.x, this.y] = [x, y];
}
OldAnimal.prototype.toString=function() {
  return `oldAnimal${this.x}--${this.y}`;
}
console.log(new OldAnimal(1,2).toString()) */
const des =
  `本质上es6的类只是es5的构造函数的一层包装`+
  `
   this的差别
   es5：先创建子类的实例对象this，然后将父类的方法添加到this上
   es6：先创造父类的实例对象this，然后再用子类的构造函数修改this
  `+
  `es5的__proto__  prototype
   一条继承链：
   1 Child.prototype.__proto__===Parent.prototype
   构造函数中调用父构造函数绑定this
   2 Parent.call(this)
  `
  +
  `es6的__proto__  prototype
   两条继承链：
   1 Child.__proto__===Parent    (子类.__proto__:表示构造函数的继承，总是指向父类)
   2 Child.prototype.__proto__===Parent.prototype   (子类prototype.__proto__:表示方法的继承，总是指向父类.prototype
  `
class Parent{
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log('hi', this.name);
  }
}
class Child extends Parent{
  constructor(name,age) {
    super(name);
    this.age = age;
  }
  sayAge() {
    console.log('age',this.age)
  }
}
let child = new Child('lii', 20);
child.sayAge();  child.sayHi();

console.log(Child.__proto__ === Parent);//true
console.log(Child.prototype.__proto__ === Parent.prototype);//true

/** 定义类
 * constructor--构造方法，this--实例对象
 *      默认返回实例对象this,也可以指定返回对象
 * 类的方法
 *      不需要function,方法间不需要逗号
 *      所有方法都定义在类的prototype上，在类的实例上调用方法其实就是调用原型上的方法
 * 构造函数的语法糖
 * 实例  
 *      生成类的实例使用new命令
 *      实例的属性除非显式定义在其本身(this)，其他都在原型(class)上
 *      类的所有实例共享同一个原型对象
 */
/** 为class添加方法的方式
 * 1 class内添加
 * 2 Animal.prototype上添加  Object.assign(Animal.prototype,{a(){}})
 * 3 p.__proto__添加 (影响所有实例)
 */
/** 与es5差别
 * 1类的内部定义的方法--不可枚举// Object.keys(Animal.prototype);//[]
 * 2类的属性名可以用表达式 
 * 3调用必须使用new
 * 4不存在变量提升，子类必须在父类之后定义
 * 5允许继承原生构造函数定义子类
 */
   /** es不提供私有方法
 * 1 通过命名上区别 _Cat私有方法(外部仍可以访问)
 * 2 将私有属性移除模块，通过call改变this
 * 3 利用sumbol值得唯一性
 */
function selfCat(name:any) {
  return this._name = name;
}
const _symbolBar = Symbol('_symbolBar');
const _symbolFn = Symbol('_symbolFn');
class Animal{
  // 构造方法
  constructor(x:any, y:any) {
    [this.x, this.y] = [x, y];
    //给类的方法绑定this
    this.printAge = this.printAge.bind(this);
    // 箭头函数貌似有问题？？？？？？？？？
    // this.pirntAge = (text) => {
    //   this.print('hello-----' + text);
    // }
  }
 /*  //也有get和set拦截？？？？？？？？？？有问题
  get prop() {
    return 4;
  }
  set prop(val:any) {
    console.log('setter----' + val);
    return val
  } */
  /** class的静态方法
   * staic--该方法不会被实例继承，通过类来调用
   * 父类的静态方法可以被子类继承
   * 通过super调用
   */
  /** class的静态属性（es7)
   * class.propName---不是定义在实例对象(this)上的属性
   */
  static toString(arg:any){
    console.log('static-tostring-',arg)
  }
  toString(arg:any) {
    console.log('instance-tostring-',arg)
    return `${this.x}>>${this.y}`
  }
  //私有变量方法二： 将私有属性移除模块，通过call改变this  *****
  _getSelfName(val:any) {
    selfCat.call(this, val);
  }
   
  //私有变量方法三：symbol ??????// 类的属性名可以用表达式
  [_symbolFn](arg:any) {
    return this[_symbolBar] = arg;
  }
  /**单独使用类里面的方法this容易出问题
   * 方法1 在constructor中绑定this
   * 方法2 使用箭头函数
   */
  printAge(text:any) {
    this.print('hello-----' + text);
  }
  print(text:any) {
    console.log(text);
  }
}
//  一次给类添加多个方法 ,通过 p.toValue();
Object.assign(Animal.prototype, {
  toValue() {
    console.log(this.x)
  }
})
/** extends 实现继承
 *  1 constructor中super(x,y)调用父类的constructor
 *        子类没有自己的this对象，继承父类的this,再加工
 *  2 静态方法中 super代表父类，普通方法中指向父类的原型对象
 *        super调用父类的方法时，super绑定子类的this
 *        super要显示表明super的数据作为对象还是函数使用
 */
class Cat extends Animal{
  constructor(x:any,y:any,val:any) {
    super(x, y);//调用父类的constructor(x,y)
    this.color = val;
    super.sex = "others";
  }
  static toString(arg) {
    //super指向父类
    return this.color + '---' + super.toString(arg);
  }
  toString(arg) {
    //super指向父类的原型
    return this.color + '---' + super.toString(arg);
  }
}
/** 子类.__proto__.__proto__ === 父类.__proto__   子类原型的原型是父类的原型
 * 
 */
Cat.toString('sss');
// 使用子类Cat生成实例
let creatByCat = new Cat(5,6,7);
creatByCat.toString('inin');
creatByCat._getSelfName('creatByCat');

// 使用Animal类生成实例
let p = new Animal(1, 2);
p._getSelfName('p');
p.prop= 34
// console.log(p.prop);
// p.Symbol('_symbolFn')('symbol')

/* //直接调用类的方法
const { printAge } = p;
printAge('uuuuuu'); */

// console.log( p,p.toString())
// console.log(Animal.prototype, Animal === Animal.prototype.constructor);
// console.log('constructor', p.constructor === Animal.prototype.constructor);

console.log('p--',p,'creatByCat---',creatByCat)


//es6 非new Object形式调用的会忽略参数