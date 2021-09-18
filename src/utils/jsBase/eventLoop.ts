
/**eventloop
 * promise内非resolve是同步的
 * 微任务在事件队列清空后立即执行
 */
function abouteEventLoop(){
  let p = new Promise(resolve => {
    console.log(4);
    resolve(5)
  })
  function fn1() {
    console.log(1)
  }
  function fn2() {
    setTimeout(() => {
      console.log(2)
    }, 0)
    fn1();
    p.then(resolve => {
      console.log(resolve)
    })
    console.log(3);
  }
  fn2();
  async function async1() {
    console.log('async1*S')
    await async2();
    console.log('async1*E')
  }
  async function async2() {
    console.log('async2')
  }
  
  console.log('同步开始');
  async1();
  console.log('同步结束');
}
// abouteEventLoop();

//同步开始--> async1*S --> async2 -->同步结束 -- async1*E

/** async 返回一个promise对象
 * 遇到await会返回,等到触发的异步完成
 * (await后的语句相当于then回调中执行)
 */

//  4 1 3  开始 async1*S  async2  同步结束 5  async1*E     2