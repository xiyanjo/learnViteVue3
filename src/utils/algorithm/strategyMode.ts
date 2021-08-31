/**策略模式:定义一系列的算法,并且可以相互替换*/

/** 策略模式思路
 * 1 定义策略
 * 2 方法一 根据入参调用策略 
 *   方法二 定义一个对象保存策略,添加策略的函数,调用策略的函数
 */
//  一个复杂版的策略实现--start
// 1 算法实现
var pS = function () { }
pS.prototype.calculate = function (salary) {
  return salary * 4;
}
var pA = function () { }
pA.prototype.calculate = function (salary) {
  return salary *3;
}
var pB = function () { }
pB.prototype.calculate = function (salary) {
  return salary *2;
}
/** 2 创建一个类
 * 类上保存 声明变量及策略
 * 类的原型上  
 *       设置变量的初始值的方法    this.salary = salary 
 *       设置采用的策略的方法    this.stra
 *       根据变量计算目标值并返回的方法  return 
 */
var Bouns = function () {
  this.salary = null;//初始薪水
  this.strategy = null;//策略方法
}
//3 设置初始值
Bouns.prototype.setSalary = function (salary) {
  this.salary = salary;
}
//4 设置策略
Bouns.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}
//5 调用策略计算
Bouns.prototype.getBouns = function () {
  return this.setStrategy.calculate(this.salary)
}

var bouns = new Bouns();
bouns.setSalary(1000);
bouns.setStrategy(new pS());
// console.log(bouns.getBouns());
//  一个复杂版的策略实现--end

// 一个js版的策略实现 --start
let strategies = {
  pS: function (salary) {
    return salary*4
  },
  pA: function (salary) {
    return salary*3
  },
  pB: function (salary) {
    return salary*2
  }
}
function Bouns2(salary,strategy) {
  return strategies[strategy](salary);
}
// console.log(Bouns2(1000,'pS'))

/** 表单验证使用策略模式封装
 * 
 */


let regRules = {
  isNull: function (val,errorMsg) {
    if (!val) return errorMsg;
  },
  inNumber: function (val,errorMsg) {
    if (!/^[0-9]*$/.test(val)) return errorMsg;
  }
}
/** 有一个Validate构造函数
 *  空数组保存校验;
 *  原型上向空数组内添加校验的方法
 *  原型上 启动校验的方法
 */
let Validate = function () {
  this.cache = [];
}
// 数组中保存: 以策略的执行结构为返回值的函数,返回函数可以占位置
Validate.prototype.add = function (value, rules, errorMsg) {
  this.cache.push(function () {
      return regRules[rules](value,errorMsg)
  });
}
//启动:遍历数据获取校验的值
Validate.prototype.start = function () {
  // 写法二
  for (let i = 0, cacheFn; cacheFn = this.cache[i]; i++){
    if(cacheFn()) return cacheFn()
  }
  // // 写法一
  // for (let i = 0; i < this.cache.length; i++){
  //   if (this.cache[i]()) return this.cache[i]();
  // }
}

// 使用校验类--每次调用都创建新的实例
function validateForm(valArr) {
  let formValidate = new Validate();
  for (let i = 0; i < valArr.length; i++){
    if (i > 1) {
      formValidate.add(valArr[i], 'isNull','不能为空');
    } else {
      formValidate.add(valArr[i], 'inNumber','输入数字');
    }
  }
  return formValidate.start();
}
let valArr1 =  ['', 1, 2, ''], valArr2 =['lili2',1, 2, '女'];
validateForm(valArr1);
validateForm(valArr2)//添加到同一个实例上,验证8个,无法拆分


 