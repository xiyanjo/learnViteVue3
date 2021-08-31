import base from "./base.ts";
// 数组基础
import "./array/arrBase.ts";
import './array/flattenArray.ts'//数组扁平化
// 对象基础
import  './object/objBase.ts';

// 异步解决方案
import "./asyncScheme/asyncAwait.ts";
import "./asyncScheme/promiseLearn.ts";//promise

// 代理
import "./proxyReflect/proxyReflect.ts";//代理
import './proxyReflect/reflectLearn.ts' //reflect

// 继承
import  './extends/classLearn.ts';//es6继承
import './extends/extendsEs5.ts' //es5继承

// js基础
import './jsBase/letConst.ts' //let const
import './jsBase/deconstrution.ts'//解构赋值
import './jsBase/cloneLearn.ts'//深拷贝浅拷贝
import './jsBase/debounceThrottle.ts'//防抖节流
import './jsBase/aboutThis.ts'//this
import './jsBase/aoPrecompile'//预编译
import './jsBase/eventLoop.ts'

// 算法
import './algorithm/twoPoint.ts'//双指针

// 其他
import './face.ts'

// 设计模式
import './algorithm/singleCase.ts'//单例模式
import './algorithm/strategyMode.ts'//策略模式
import './designPattern/publishSubscribeMode'//发布订阅模式

// base()


/* class Example extends React.Component {
  constructor() {
    super(); this.state = { val: 0 };
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val);
    // 第 1 次 log 
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val);
    // 第 2 次 log 
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);
      // 第 3 次 log 
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val);
      // 第 4 次 log
    }, 0);
  }
  render() { return null; }
} */