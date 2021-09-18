let a=0.1,b=0.2;
const memory = new Float64Array(1);
memory[0]=a;

/* const intarr = new Uint8Array(memory.buffer);
console.log('intarr',intarr)
for(let i=0;i<8;i++){
  let s = intarr[i].toString(2);
  console.log( new Array(9-s.length).join('0'),'---',s)
} */


function za(){
  Math.abs(0.1+0.2-0.3)<=Number.EPSILON//比较0.1+0.2===0.3
  console.log(97 .toString(2))
  console.log('\\转义符：\'--b:\b---f:\f--n:\n---t:\t')
}
// za();
// new.target 判断函数是否被new调用
function aboutNewTarget() {
  class Foo{
    constructor(){
      console.log('new.target-----',new.target);
      console.log('this-----',this)
    }
  }
  // new Foo();
  class fackFoo extends Foo{
    constructor(){
      super();
    }
  }
  // new fackFoo();

  function Foo2(){
    console.log('new.target-----',new.target);
    console.log('this-----',this)
  }
  let fackFoo2={};
  // 给fackFoo设置原型
  Object.setPrototypeOf(fackFoo2,Foo2.prototype);
  fackFoo2.constructor = Foo2;
  Foo2.apply(fackFoo2);
}
// aboutNewTarget();


// 关于字符串模板
function aboutStr(){
  let name='liili';
  function foo(){
    console.log(arguments);
  }
  foo(`hello${name}!`);
  foo`hello${name}!`;
}
// aboutStr()

// new 运算符优先级
function oboutNewPrio(){
  function cls1(s1){
    console.log('s1',s1)
    this.b=s1;
  }
  function cls2(s2){
    console.log('s2',s2)
    return cls1
  }
  // 参数优先传给cls2
  // new new cls2('lili');

  new cls1('zhangsan')['b'];
  new cls1('zhangsan2').b;

}
// oboutNewPrio();

// 创建一个立即执行函数保存i
function aboutIIFE(){
  for(var i = 0;i<8;i++){
    let btn =document.createElement('button');
    document.body.appendChild(btn);
    btn.innerHTML = i;
    // (function(i){
    //   btn.onclick=function(){
    //     console.log(i)
    //   } 
    // })(i)
    void function(i){
      btn.onclick=function(){
        console.log(i)
      } 
    }(i)
  } 
}
// aboutIIFE()

function boxingUnboxing(){
  // 装箱
  new String(1)//String {'1'}
  String(1)//'1'
  new Boolean(1)//Boolean {true}
  Boolean(1)//true
  new Number('1')//Number {1}
  Number('1')//1
  Symbol(1)//Symbol(1)
  Object(Symbol(1))//Symbol {Symbol(1)}


  // 拆箱
  //分别给对象添加valueOf和toString、[Symbol.toPrimitive]方法，隐式转移时会拆箱
  1 + {};//'1[object Object]'
  1 + { valueOf(){return 2} };//3
  1 + { toString(){return 2} };//3
  1 + { toString(){return '4'} };//'14'
  1+ { valueOf(){return 1} , toString(){return '3'} };//2
  '1'+{ valueOf(){return 1}, toString(){return 3} };//'11'
  '1'+{ toString(){return 3}, valueOf(){return 1} };//'11'
  '1'+{[Symbol.toPrimitive](){return {}},valueOf(){return 1},toString(){return '2'}};//Uncaught TypeError: Cannot convert object to primitive value
  '1'+{[Symbol.toPrimitive](){return 3},valueOf(){return 1},toString(){return '2'}};  //'13'
  1+{[Symbol.toPrimitive](){return 3},valueOf(){return 1},toString(){return '2'}};  // 4

  
}
// boxingUnboxing()



// StringToNumer
function converseSN(str:string){
  let chars = str.split(''),number=0;
  // for(let i=0;i<chars.length;i++){
  //   number=number*10
  //   // 1.codePointAt(0):返回的是码点的十进制值
  //   number+=chars[i].codePointAt(0)-'0'.codePointAt(0);
  //   console.log(chars[i].codePointAt(0),'0'.codePointAt(0))
  // }
  while(i<chars.length && chars[i]!='.'){
    number=number*x;

  }
  console.log(number)
  return number
}
// converseSN('12345')
// NumberToString


// 循环基本使用
function learnIteration(){
  let  i=2;
/*   while(i<6){
    if(i==2){
      i++;
      continue;//退出本次循环，继续下一次循环
      console.log('continue',i)
    }
    // if(i==3){
    //   i++;
    //   console.log('return',i)
    //   return i;//退出循环
    //   console.log('return2',i)
    // }
    // if(i==3){
    //   i++;
    //   console.log('break--退出循环',i)
    //   break;//退出循环
    //   console.log('break2',i)
    // }
    if(i==3){
      i++;
      throw i;//中断循环
      console.log('throw',i)
    }
    i++;
    console.log('我是条件外的i',i);
  } */


  // for(这里是一个作用域)
 /*  for(let i=1;i<6;i++){
    let i = 2;
    console.log(i)
    if(i==1){
      continue;
      console.log('continue',i)
    }
    // if(i==2){
    //   console.log('break--退出循环',i)
    //   break;//退出循环
    //   console.log('break2--退出循环',i)
    // }
    // if(i==2){
    //   console.log('return',i)
    //   return i;//退出循环
    //   console.log('return2',i)
    // }
    // if(i==2){
    //   i++;
    //   throw i;//中断循环
    //   console.log('throw',i)
    // }
  } */
  /** 循环的基本使用
   * for in 遍历的是key,适合对象
   * for of 遍历的值，适合数组
   */
  /* let arr  = [2,3,4,5,5],obj = {name:'lili',age:13}
  for(let i in obj){
    console.log('in--obj',i)
  }
  // 遍历对象的属性
  for(let i of Object.keys(obj)){
    console.log('Object.keys',i);
  }
  // 遍历数组的值
  for(let i of arr){
    console.log('of-arr----',i)
  }
  // 遍历数组的索引
  for(let i in arr){
    console.log('in-arr---',i)
  } */

  // for of 可以循环 genrator 
  function *g(){
    yield 0;
    yield 1;
    yield 2;
  }
  for(let i of g()){
    console.log('*g--',i)
  }
}
// learnIteration();

function generator(){
    // 使用genrator写一个无限循环的
    function *g(){
      yield 0;
      yield 1;
      yield 2;
      let i =2;
      while(true){
        yield i++;
      }
    }
    let gen = g();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
}
function learnTry(){
  let e = 8;
  try{
    throw 'error';
  }catch(e){
    console.log(e);
  }finally{

  }
  console.log('e',e)
}
// learnTry();

function learnAsync(){
  //promise
  function sleep(t){
    return new Promise(resolve=>setTimeout(resolve,t))
  }
/*   let i = 0;
  function tick(){
    console.log(i++)
    setTimeout(tick,50000);
  }
  // tick(); */

 
  // async和promise
/*   void async function ( ) {
    let i = 0;
    while(true){
      console.log('async',i++);
      await sleep(2000);
    }
  }() */

  // async和generator :一个异步 无限循环的generator
/*   async function *Foo( ) {
    let i = 0;
    while(true){
      await sleep(2000);
      console.log('yield',i);
      yield i++;
    }
  }
  void async function () {
    let gen = Foo();
    await gen.next();
    await gen.next();
    // 遍历 await generator
    for await(let e of gen){
      console.log('e',e);
    }
  }(); */

}
// learnAsync();
function learVar(){
  var x = 0;
  function foo(){
    console.log('x1',x)

    var  o={x:1};
    x=2;
    console.log('x2',x)
    {
      var x=3; //没有块级作用域，存在变量提升，定义了foo内的x
      let age =18;
    }
    // console.log('age',age);//error   let 有块级作用域，外层无法访问
    console.log('x3',x);
  }
  foo();
  console.log(x);
}
// learVar()

function learnPromise(){
  /*Q1*/
  // async function  foo() {
  //   console.log('async--0');
  //   await new Promise(resolve=>resolve());
  //   console.log('await--1')
  // }
  // foo();
  // new Promise(resolve=>{
  //   console.log('innerPromise--2')
  //   resolve();
  // }).then(()=>{console.log('then--3')});

  // setTimeout(() => {
  //   new Promise(resolve=>{
  //     console.log('setTimeInnerPromise---4')
  //     resolve();
  //   }).then(()=>{console.log('setTimeThen---5')});
  //   console.log('setTime--6')
  // }, 3000);
  // setTimeout(()=>{
  //   console.log('8')
  // },10)
  // console.log('window---7');

  /*Q2*/
  // new Promise(res=>res()).then(
  //   ()=>setTimeout(()=>console.log(1),1000),console.log(2)
  // )
  // console.log(3)
}
// learnPromise(); //0,2,7,1,3,4,6,5 //231

