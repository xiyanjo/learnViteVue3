`
浅拷贝:
  1 concat
  2 ...
  3 Object.assign(target,source):多层只能拷贝引用
  4 赋值
深拷贝:
  1 JSON.parse(JSON.stringify()):正则 函数 error 无法拷贝
  2 递归拷贝所有属性
  3 jq的extend
  4 lodash
  5 Reflect法
`
// js的深浅拷贝和赋值
var person = {
  name: 'lili',
  color: [1, 2, 3],
  date:new Date('1990')
}
var person2 = person;
//浅拷贝 循环person,取出obj的每一项值,赋值给person2
// Object.prototype.bar = 88;

/**...实现浅拷贝 */
let personPoint = { ...person, name: 'point' };
// personPoint.color = ['point'];
personPoint.color.push('pp')
// console.log('personPoint', person, personPoint);

// let personCreate = Object.create(person, { name: { value: 'personCreate' } });
let personCreate = Object.create(person);
personCreate.color.push('personCreate');
// console.log('personCreate', person, personCreate);

// concat

/** 递归
 * let cloneA = {};
 * 某个条件下返回值
 * 循环对象,obj[i]=deepClone(obj[i])
 * return cloneA
 */

/** 递归实现深拷贝
 * 根据new obj.constructor()--创建一个对象/数组
 * 当前遍历项不为对象时 返回本身
 * typeof null ===object true
 * a instanceof b --- b.prototype是否在a的原型链上
 * for in 遍历obj 
 *    hasOwnProperty检测对象是否有某个属性,过滤掉继承的属性
 *    cloneObj[i] = deepClone(obj[i])
 * return cloneObj
 */
function deepClone(obj) {
  let cloneObj = new obj.constructor();
  if(obj===null) return obj;
  // if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      cloneObj[i] = deepClone(obj[i]);
    }
  }
  return cloneObj;
}
let personDeep2 = deepClone(person);
personDeep2.color.push(6);
// personDeep.color = [3, 2];
personDeep2.name = 'meimei2';
// console.log(person, personDeep2);


/** 深拷贝--JSON.parse(JSON.stringfy())
 * 正则和日期无法拷贝
 * 函数无法拷贝
 */


 
