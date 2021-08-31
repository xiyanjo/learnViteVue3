/**防抖
 * 1 事件触发
 * 2 n秒未触发--执行函数
 * 3 n秒再次触发--重新计时--走2
 * 绑定函数this和e对象
 */
function debounce(n, fn) {
  let timer;
  return function (e) {// console.log(this,e,arguments[0])//e == arguments[0]
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this,e)
    },n)
  }
}
document.querySelector('body').addEventListener('click', debounce(1500, print))

/**节流
 * 事件触发
 * 没有定时器设置定时器，n秒后执行函数，timer置空
 * 绑定函数this和e对象
 */
function throttle(n, fn) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this,arguments[0]);
        timer=null
      },n)
    }
  }
}
// document.querySelector('body').addEventListener('click', throttle(1000, print))


function print(e) {
  console.log(44444,this,e)
}