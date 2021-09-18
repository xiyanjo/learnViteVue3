// 数组基础
import './array/arrBase';
import './array/flattenArray';//数组扁平化
// // 对象基础
import './object/objBase';
// 异步解决方案
import './asyncScheme/asyncAwait';
import './asyncScheme/promiseLearn';//promise
// 代理
import './proxyReflect/proxyReflect';//代理
import './proxyReflect/reflectLearn'; //reflect
// 继承
import './extends/classLearn';//es6继承
import './extends/extendsEs5'; //es5继承
// js基础
// import './jsBase/letConst'; //let const
import './jsBase/deconstrution';//解构赋值
import './jsBase/cloneLearn';//深拷贝浅拷贝
import './jsBase/debounceThrottle';//防抖节流
import './jsBase/aboutThis';//this
import './jsBase/aoPrecompile';//预编译
import './jsBase/eventLoop';
// 算法
import './algorithm/doublePointer';//双指针算法
import './algorithm/sort';//排序算法
// 设计模式
import './designPattern/singleCase';//单例模式
import './designPattern/strategyMode';//策略模式
import './designPattern/publishSubscribeMode';//发布订阅模式
import './used/flow';//瀑布流
import './used/flow2';//瀑布流,准备写一个从后端请求的瀑布流
import './used/callApplyBind';
// 其他
import './face';
import './optimize'; //优化写法
import './arrowFunction'; //箭头函数
import './base';//ts基础
//状态机实现判断字符串中是否有a
import './FSM';//状态机实现判断字符串中是否有a
import './htmlParse';//html解析器
import './basebasebase.ts';

// 功能

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