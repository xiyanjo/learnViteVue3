
`ts特点：
  类型注解
  接口 interface
  类 class



`


// 数据类型
function tsType() {
  /**数据类型：
   * boolean
   * number
   * string
   * array 
   *    arr:number[]=[]
   *  tuple   arr:Array<number>=[]  -- tuple(数量和类型已知的数组)
   *    arr:any[]=[1,'sd'] 
   * enum
   * any
   * undefined
   * null
   * void
   * never
   * object:非原始值,除number，string，boolean，symbol，null或undefined 
   */
  let b: boolean = false;
  let n: number = 122;
  let str: string = 'ssfd';

  // 数组 三种方式
  function arrType() {
    // 一 指定数组中元素类型
    let arr1: number[] = [1, 2, 3, 4, 5];
    // 二 元组类型
    let arr2: Array<number> = [2, 3, 45, 23];
    // 三 任意类型
    let arr3: any[] = [1, 3, 'dfj'];
    console.log(arr1,arr2,arr3)
  }
  // arrType();

  // 枚举类型：enum 为一组数值赋予友好的名字,编译为双向的键值对对象
  function enumL() {
    // 枚举类型：标识符已经赋值
    enum Flag {
      success = 1,
      error = 0
    }
    let s: Flag = Flag.success, e: Flag = Flag.error;
    console.log(s, e)
    // 枚举类型：标识符未赋值，取下标值
    enum Color {
      blue, red, orang
    }
    // 枚举类型：部分标识符赋值，赋值后面按前面的值取
    enum Car {
      qq, dd, ee = 4, ff
    }
    console.log(Car) //0,1,4,5
  }
  // enumL();

  // 任意类型：any
  let code: any = 'ldfd';

  // undefined
  let nof: undefined;
  let nof2: number | undefined;//有值或undefined
  //null
  let unnull: null | undefined
  
  // void：函数没有返回值
  function get(): void{ }
  // never：从来都不会出现的值

//     // 隐式类型推断
    let age = 18;
    // age = 'jskfjd';//可能报错
    // 类型断言
    let res = 1, num1 = res as number, num2 = <number>res;

}
// tsType();


/**函数
 * 返回值的类型   ():string
 * 函数参数：
 *    参数的类型  name:string
 *    可选参数 age?
 */
function tsFun() {
  // 函数表达式
  let fun = function () :string{
    return 'sus'
  }
  // 函数声明
  function fun2(name: string, age?: number): string{
    if (age) return `name:${name}+age:${age}`;
    return `name:${name}+age:sss`
  }
  console.log(fun2('kuu', 20));
 console.log( fun2('kuu'));
  
}
// tsFun()

/** 类 
 * class 
 *    constructor :属性
 *    方法
 * 继承：class A extends Parent
 *     A constructor(name){ super(name) }
 * 
 * public/protected/private 修饰符
 *    public  公有的 ：  类、子类、类外部
 *    protected 保护类型：类、子类可以访问，类外面不能访问
 *    private  私有的 ： 只能在类的里面访问
 */
function tsClass() {

  class Parent{
    public name: string
    constructor(name:string) {
      this.name = name;
    }
    getName(): string{
      return this.name;
    }
    setName(name: string): void{
      this.name = name;
    }
  }
  let lili = new Parent('lili');
  console.log(lili.getName());
  lili.setName('xiaoming');
  console.log(lili.getName());
  
  class Child extends Parent{
    constructor(name: string) {
      super(name);
    }
    setName(name: string): void{
      this.name=name+'---child'
    }
  }

  let cc = new Child('cc');
  console.log(cc.getName())
  cc.setName('dd');
  console.log(cc.getName())
}
// tsClass();

// 接口


// export default function () {
//   /**类型
//    * 原始值:布尔/字符串/数字/undefined/null/symbol
//    * 非原始值: 数组 array
//    *          元组 tuple
//    *          枚举 enum
//    *          any
//    *          void
//    *          never
//    *          object:非原始值
//    * 函数
//    * 接口 interfaces: 约束对象的结构
//    * 类
//    */
//   function type() {
//     // 数组泛型 Array<元素类型>
//     let list2: Array<number> = [1, 2, 3];

//     // 元组 tuple:一个已知元素数量和类型的数组
//     let x: [string, number];
//     x = ['hello', 10];
//     x[4] = 'world';//可以执行，lint问题吧
//     // x[6] = true;//error
//     console.log(x[0], x[1], x[4],x[6])

//     // 不清楚类型的变量 Any: 不会进行类型检查 选择的包含或移除类型检查
//     let notSure: any = 4;
//     console.log(notSure.toFixed());
//     let prettySure: Object = 4;
//     // console.log(prettySure.toFixed());//error

//     // 添加参数默认值/a?:number可选参数/...arg

//     // 函数作为参数

//     function warnUser(): void{
//       console.log('warn')
//     }
//     warnUser();
//     let unusable: void = undefined;//只能为undefined或null

//     // null和undefined
//     let u: undefined = undefined;
//     let n: null = null;
//     // 默认情况下，两个为所有类型的子类型，可以赋值给其他类型


//   }
//   // type()
// /** 接口-- 约束对象的结构
//  * 可选成员 ?
//  * 只读成员 readonly
//  * 动态成员 
//  */
//   interface post{
//     // title: string
//     // content?: string
//     // readonly sumary: string
//     [key:string]:string
//   }
//   function printPost(post: post) {
//     console.log(post)
//   }
//   // printPost({title:'post',content:'',sumary:'',age:'34'})

// /**类
//  * 类内的属性要先声明
//  * 类成员的访问修饰符
//  * 类和接口
//  * 抽象类---大的类
//  */
//   interface Eat{
//     eat(foo:string):void
//   }
//   interface Run{
//     run(distance:number):void
//   }
//   class Person implements Eat,Run{
//     public name:string
//     private age: number//=18
//     protected gender:string = 'a'//只允许在子类中访问该成员
    
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//     sayhi(msg: string='msg'): void{
//        console.log(this.age)
//        console.log(this.name)
//     }
//     eat(food: string): void {
//       console.log('eat----',food);
//     }
//     run(distance: number): void{
//       console.log('run----',distance);
//     }

//   }
//   const tom = new Person('tom', 19)
//   tom.sayhi();
//   tom.eat('food');
//   tom.run(123455);
//   // console.log('ttt---',tom,tom.age);

//   class Animal implements Run{
//     des:string
//     constructor(des: string) {
//       this.des = des;
//     }
//     run(dis:number):void {
//       console.log(this.des, dis);
//     }
//   }
//   new Animal('hhh').run(87878);

//   /**抽象类
//    * abstract 
//    * 只能被继承不能创建实例
//    * 父类中有抽象方法 abstract ,子类必须实现该方法
//    */
//   /** 泛型:声明时未指定类型,使用的时候指定类型
//    * 
//    */

// /**类型声明
//  * declare function importFn (input:string):string
//  */



//  /**数组解构赋值*/
//   function arrDecon() {
//     let input = [1, 2];
//     //两个变量赋值为input[0],input[1]
//     let [first, second] = input;
//     //交换两个变量的值
//     [first, second] = [second, first];
//     console.log('windowF',first, second);
//     // 作用于函数参数：
//     function f([first, second]: [number, number]) {
//       console.log('f',first, second);
//     }
//     f(input);
//     //...剩余变量
//     let [one, ...rest] = [1, 2, 3, 4];
//     let [oneO, , tree] = [1, 2, 3, 4];//其他元素
//     console.log('...', one, rest);
//     console.log(',,', oneO, tree)
//   }
//   // arrDecon();
//  /**对象解构赋值 */ 
//   function objDecon() {
//     let o = {
//       a1:'a1', a:'aa',b:12,c:'cc'
//     }
//     let { a, b} = o;
//     ( {a,b}={a:'aa1',b:101})
//     console.log(a, b);
//     // ...扩展运输符
//     let { a1, ...passTrough } = o;
//     let total = passTrough.b + passTrough.c.length;
//     console.log(total)
//     // 属性重命名---------这里不是很确定要怎么写??????
//     let { a: newA, b: newB }: { newA: string, newB: number } = o
//     console.log('newName', newA, newB, o);
//     // 默认值
//     function defaultValue() {
//       function keepWhole(wholeObj: { a: string, b?: number }) {
//         let { a, b = 1001 } = wholeObj;
//         console.log(a,b)
//       }
//       keepWhole({a:'wholeA'})
//     }
//     // defaultValue();
//     // 函数声明
//     type C = { a: string, b?: number }
//     function f({ a, b }: C): void{
//       console.log('f',a,b)
//     }
//     f({a:'dfjd',b:30})
//     function f2({ a = '', b = 0 } = {}): void{
//       console.log('f2',a,b)
//     }
//     f2({a:'我是f2的a'})
//   }
//   // objDecon()
//   // 展开操作符
//   function showAll() {
//     let first = [1, 2];
//     let second = [3, 4];
//     let both = [1, ...first, ...second, 8];
//     console.log(both);
//     // 对象的展开操作符会有覆盖问题及自身的可枚举属性
//     let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//     // let search = { ...defaults, food: "rich" };
//     let search = { food: "rich", ...defaults };
//     console.log(search);
//   }
//   // showAll();

//   // 去重
//   let arr = [2, 3, 2, 5, 3];
//   let newArr = [];
//   // 去重方法一
//   // newArr = arr.filter((item, ind) => {
//   //   return  arr.indexOf(item)==ind
//   // })
//   // 去重方法二
//   // arr.forEach(item => {
//   //   if (newArr.indexOf(item) == -1) {
//   //     newArr.push(item);
//   //   }
//   // })
//   // 冒泡排序
//   function toUp(arr:[]) {
//     for (let i = 0; i < arr.length-1; i++){
//       for (let j = 0; j < arr.length - 1 - i; j++){
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
//   // newArr = toUp(arr);
 
//   // 快速排序 ------???????????????
//   // function quickSort(arr) {
//   //   let pre = Math.floor(arr.length / 2);
//   //   let left = [];
//   //   let right = [];
//   //   let pivod = arr.splice(pre, 1)[0];
//   //   for (let i = 0; i < arr.length; i++){
//   //     if (arr[i] < pivod) {
//   //       left.push(arr[i]);
//   //     } else {
//   //       right.push(arr[i])
//   //     }
//   //   }
//   //   return quickSort(left).concat([pivod],quickSort(right))
//   // }
//   // newArr = quickSort(arr);
//   // console.log(newArr);


//   function repeat(n:number) {
//     if (n > 0) {
//       return n+'-'+repeat(n-1)
//     } else {
//       return ''
//     }
//   }
//   console.log(repeat(7));


 



  




  
 

// }