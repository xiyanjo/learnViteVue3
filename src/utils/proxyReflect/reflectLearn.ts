// set集合
const queuedObservers = new Set();
// 添加观察者函数到set
const observe = fn => queuedObservers.add(fn);

// 给所有对象添加代理
const observable = obj => new Proxy(obj, {get, set});
// get拦截
function get(target, key, receiver) {
  if (key in target) return target[key];
}
// set拦截
function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value+'**', receiver);
  // 数据改变时，自动执行所有观察者
  queuedObservers.forEach(observer => observer())
  console.log('result---set--',result,target,key,value,receiver)
  return result;
}

const person = observable({
  name:'张三',age:18
})
function print() {
  console.log(person.name + '--1--' + person.age);
}
function print2() {
  console.log(person.name + '--2--' + person.age);
}
observe(print);
observe(print2);
person.name = 'lili';
console.log(person.name)