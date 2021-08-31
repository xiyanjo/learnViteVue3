/**
 * 1 生成proxy实例： // let proxy = new Proxy(t, handlerandle);
 *    t:要拦截的目标对象
 *    handlerandler:定制拦截行为的对象
 *    操作proxy实例，如果handlerandle没有设置拦截等价于直接通向原对象
 * 2 作为其他对象的原型对象 Object.create(proxy)
 */

// handler里面的属性，t目前没有,同一个拦截器可以拦截多个操作
/**
 * get:target上有的属性返回，没有的属性报错
 * set:
 * apply:作为函数调用返回第一个入参
 * construct:作为构造函数调用返回第二个入参
 */
 let handler = {
  // 拦截对象的读取
  get: function (target: any, prop: string,receiver:any) {
    // 如果没有设置拦截会返回undefined
    if (prop in target) {
      return target[prop];
    } else {
      throw new ReferenceError('property '+prop+' not exist')
    }
  },
  // 拦截对象属性的设置
  set: function (target:any,prop:any,value:any,receiver:any) {
    // return target[prop]=value//这个也可以
    return Reflect.set(target, prop, value);
  },
  // 拦截作为函数调用
  apply: function (target: object, thandlerisBingding: any, args: any) {
    return args[0]
  },
  // 拦截作为构造函数调用
  construct: function (target: object, args: any) {
    return {value:args[1]}
  }
}
function creatProxy(obj: object) {
  let target = obj;
  return new Proxy(target, handler);
}
let proxy = creatProxy({});
proxy.a = 'b';
// console.log('proxy', proxy,proxy.a);//target上如果没有a,拦截报错
/**2 proxy作为obj原型使用 */
let obj = Object.create(proxy,{b:{value:'newB'},data:{value:87}});
// console.log('obj.a---', obj.a,obj.data,obj.b)
// console.log(obj.c)//obj上没有c，查找proxy原型，拦截报错




/* //直接访问object.proxy
// let object = { proxy: new Proxy({},{}) }; */
 
/* //作为函数和构造函数使用的例子
let fproxy = new Proxy(function (x:number, y:number) {
  return x + y;
}, handler)
// console.log(fproxy(1, 2));
// console.log(new fproxy(1, 2)); */

/**箭头函数语法糖 */
var countFuns = {
  double: n => n * 2,
  pow: n => n * n,
  reverseInt:n => n.toString().split("").reverse().join("") | 0
}
// var double = n => n * 2;
// var pow = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;
var pipe = function (value: any) {
  // 闭包写法
  // return function (value) {
    let funcStack:[] = [];
  let oproxy: any = new Proxy({}, {
        /** 获取拦截
     * 添加函数到数组
     * 当为get时，reduce数组
     */
      get: function (pipeObject, fnName) {
        console.log('fnName', fnName)
        if (fnName === 'get') {
          console.log('funcStack', funcStack);
          return funcStack.reduce(function (val:any, fn:any) {
            console.log('val',val,fn)
            return fn(val);
          },value);
        }
        funcStack.push(countFuns[fnName]);
        return oproxy;
      }
    });
    return oproxy;
  }
// }();
// console.log(pipe(3).double.pow.reverseInt.get);

 
// this的问题
let tar = {
  m:function () {
    console.log(this == proxyThis,this.name);
  },
  name:'tar'
}
let proxyThis = new Proxy(tar, {});
// tar.m();
// proxyThis.m();



