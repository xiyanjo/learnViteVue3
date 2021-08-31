`小红买鞋子,没有鞋,到商店订阅`
/** 发布订阅
 * 订阅中心: 实现订阅者向dep中添加订阅事件,发布者发布事件的功能
 * 订阅者: 订阅事件
 * 发布者: 发布事件
 */
/** 订阅中心
 * subs:{}  保存订阅者的事件
 * add方法  根据key 将订阅者的事件fn 添加到dep[key]
 *    key 订阅者
 *    fn  订阅者的事件
 * notify方法  发布的方法--遍历 subs[key],执行其中方法(即订阅者的事件) 
 * remove方法  取消某个订阅
 */
// 订阅中心
class Dep{
  subs: Object;
  constructor(subs:{}={}) {
    this.subs = subs;
  }
  add(key: any, fn: Function) {
    if (!this.subs[key]) this.subs[key] = [];
    this.subs[key].push(fn);
  }
  notify() {
    let key = Array.prototype.shift.call(arguments);
    this.subs[key].forEach(fn =>  fn(...arguments))
  }
  remove(key: any, fn: Function) {
    // let key = Array.prototype.shift.call(this, arguments);
    if (!this.subs[key] || !fn) return false;
    this.subs[key].forEach((itemF, i) => {
      if (itemF == fn) this.subs[key].splice(i, 1);
    })
  }
}

export default  new Dep();

// 实例一个订阅中心
// let ShopWatcher = new Dep();
// 订阅者方法
// let subColor = function (color) {
//   console.log('color----',color);
// }
// let subSize = function (size) {
//   console.log('size----',size);
// }
// // 订阅者向调度中心添加订阅事件
// ShopWatcher.add('subColor', subColor);
// ShopWatcher.add('subSize', subSize);

// // 发布者调用订阅中心的发布事件方法
// ShopWatcher.notify('subColor', 'pink');
// ShopWatcher.notify('subColor', 'black');
// ShopWatcher.notify('subSize', '23');

// ShopWatcher.remove('subSize',subSize)
// ShopWatcher.notify('subSize', '12');


 
 
