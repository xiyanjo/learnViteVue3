// 1 指定默认值
// let [foo = true] = [1, 23];

// 2 数组按顺序取值，对象按属性名取值
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz)

let foo;
({ foo } = { foo: 1 }); // 成功

// 3 声明y,在对象内取x的值
var {x:y = 3} = {x: 5};
// y // 5
// 4 等号右边的值不是对象或数组就先将其转为对象

// 函数参数的解构赋值
([[1, 2], [3, 4]]).map(([a=1, b=1],ind) => {
  console.log(a,b,ind)
  return a + b
});
//为变量x,y设置默认值
function move({ x = 0, y = 0 } = {}) {
  console.log('move----',x,y)//3,0
  return [x, y];
}
// 为函数的参数指定默认值
function move2({ x, y } = { x: 0, y: 0 }) {
  console.log('move2----',x,y)//3 undefined
  return [x, y];
}

move({ x: 3 });
move2({ x: 3, });

/** 不能使用圆括号情况
 * 1 变量声明 
 * 2 函数参数
 * 3 赋值语句 模式的一部分
 */
/** 解构赋值应用
 * 1 交换变量的值  [x,y]=[y,x]
 * 2 取出数组或对象的某个值
 * 3 函数参数的定义
 * 4 提取JSON
 * 5 函数参数的默认值
 * 6遍历map结构
 * 7 加载模块时指定哪些方法
 */

let arrData = [1, 2, 3, [5, 6]], obj = { objName: { val: 88 }, age: 18 };
// 数组像对象一样解构赋值
let { 0: first, [arrData.length - 1]: last } = arrData;
let { objName } = obj
// 3函数参数的定义及 5函数参数的默认值
function defaultF([x=0, y=2, z=9]) { console.log(x,y,z)  }// 参数是一组有次序的值
defaultF([1, 2]);
function defaultF2({x='x', y, z}) {  console.log(x,y,z) }// 参数是一组无次序的值
defaultF2({z: 3, y: 2});

