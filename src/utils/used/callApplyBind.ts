/** call apply bind
 * call/apply 立即执行 bind()()
 * call/bind:arguments  apply:array
 * 伪数组调用数组的一些方法
 */
function base(params: type) {
  let obj = {
    name:'lili'
  }
  class Child{
    name:''
    constructor(name) {
      this.name = name;
    }
    getName() {
      console.log(this.name);
    }
  }
  let hh = new Child('hh');
  hh.getName();
  hh.getName.call(obj);

  let arr = [1, 3, 4, 5, 74, 3, 12];
  console.log(Math.max.call(null, ...arr));
  console.log(Math.max.apply(null, arr));
  console.log(Math.max.bind(null, ...arr)());
}
// base();

function used(params: type) {
  // 将类数组转为数组
  let toArray=function(){
    let obj = {
      0: 'a',
      1: 'b',
      length:2
    }
    console.log(Array.prototype.slice.call(obj));
  }
  // toArray();
  
  // 将arr2的值加到arr1
  let concatArr=function() {
    let arr1 = [1, 2,3, 4], arr2 = [5, 6];
    // console.log(arr1.concat(arr2));
    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);
  }
  // concatArr();

  // 判断数据类型：Object.prototype.toString.callObject.prototype.toString.call
  let judgeType = function () {
    let arr = [], obj = {},b=false;
    function f() {}
    console.log(Array.isArray(arr));
    //方法三 Object.prototype.toString.call 判断所有类型   ---better
    obj = {
      obj:  Object.prototype.toString.call(obj),//[object Object]
      arr: Object.prototype.toString.call(arr),//[object Array]
      null:Object.prototype.toString.call(null),//[object Null]
      undefined: Object.prototype.toString.call(undefined),//[object Undefined]
      b: Object.prototype.toString.call(b),//[object Boolean]
      f: Object.prototype.toString.call(f)//[object Function]
    }
    console.log('Object.prototype.toString.call', obj);

    // //方法一 typeof 无法区分object/array
    obj = {
      obj: typeof (obj),//object
      arr: typeof (arr),//object
      null: typeof (null),//object
      undefined:typeof(undefined),//undefineds
      b:typeof(b),//boolean
      f:typeof(f)//function
    }
    // console.log('typeof', obj);
    
    // //方法二 aa.toString(); undefined/null没有toSctring方法
    obj = {
      obj:  obj.toString(),//object  object
      arr: arr.toString(),//'' 1,2
      // null:null.toString(),//error
      // undefined: undefined.toString(),//error
      b: b.toString(),//false
      f: f.toString()//函数体
    }
    // console.log('toString', obj);

    // 方法四 constructor 无法判断null/undefined
    obj = {
      obj:  obj.constructor.name,// {}
      arr: arr.constructor.name,//[]
      // null:null.constructor.name,//error
      // undefined: undefined.constructor.name,//error
      b: b.constructor.name,//false
      f: f.constructor.name//空的函数体
    }
    // console.log('constructor', obj);
  }
  judgeType();
}
// used();
