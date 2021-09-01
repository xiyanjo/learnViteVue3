// 判断条件优化写法：  includes  indexOf
function betterWrite(type: string) {
  let animails = ['cat', 'dog', 'pig'],strs='aabdjfdkdf';
  //arr.includes('a')  判断数组中是否包含某个元素
  if (animails.includes(type)) {
    console.log(type)
  }
  // strs.indexOf('a') 判断字符串是否包含某个元素
  if (strs.indexOf('a') != -1) {
    console.log(strs.indexOf('a'))
  }
}
// betterWrite('cat');

// 提前退出和返回
function earlyReturn( ) {
  let getAnimal= ({type,name,gender}={})=>{
    if (!type) return 'no type';
    if (!name) return 'no name';
    if (!gender) return 'no gender';
    console.log(`${name}+${type}+${gender}`)
    return `${name}+${type}+${gender}`;
  }
  getAnimal({ type: 'cat', name: 'lili', gender: 1 });
}
// earlyReturn()

// 对象的字面量代替switch
function switchByObj () {
  const fruits = {
    red: ['apple'],
    yellov:['banana']
  }
  let printFruits = function (color) {
    console.log(fruits[color]);
    return fruits[color];
  }
  printFruits('red');
}
// switchByObj ()

// Map :支持设置对象为属性
function  aboutMap() {
  var obj1 = { name:'zs'}
  var obj2 = { name:'ts'}
  var obj3 = {
    [obj1]: '11',//属性名不是字符串时，隐式调用toString 即 [object Object]
    [obj2]:'22'
  }
  console.log(obj3)//{'[object Object]':22}
  const objCopy3 = new Map().set(obj1, 'aa').set(obj2, 'bb');
  console.log(objCopy3,objCopy3.get(obj1),objCopy3.get(obj2))
}
// aboutMap()

// Array.some:有符合的返回true  Array.every:所有都符合返回true
function  someEvery() {
  const fruits2 = [
    { name: 'apple', color: 'red' },
    {name:'banana',color:'yellow'},
  ]
  let isEvery = fruits2.every(item => item.color == 'red');
  let isSome = fruits2.some(item => item.color == 'red');
  console.log(isEvery,isSome)
}
// someEvery()
