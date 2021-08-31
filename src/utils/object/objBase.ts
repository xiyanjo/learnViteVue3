/**
 * Object.create(新建一个以…为原型，拥有属性data)
 * 第一个参数：原型
 * 第二个参数 拥有属性为data：87的对象  {data:{value:87}}
 *    第二个参数会覆盖原型上个的变量
 */
let proObj = {
  name:'animal',
  getName:function(from) {
    console.log('this.name:', this.name,from);
  }
}
let obj = Object.create(proObj, { name: { value: 'xiaoming' }, age: { value: 18 } });
obj.getName('from-obj');
console.log('obj--',obj)