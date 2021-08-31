// promise内返回promise
function p1(type = true) {
  return new Promise((resolve,reject) => {
    if (type == true) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    } else {
      reject ('fail--p1')
    }
  })
}
// 一个promie内resolve另一个promise
function p2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(p1)
    },500)
  })
}
// p2()
//   .then(resFun => {
//     // console.log('p2res', resFun)
//     resFun(false).then(res => {
//       // console.log('p1res', res)
//     }).catch(err => {
//       console.log(err)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })
// promise的链式调用,返回resolve的promise p1,就可以链式调用
// p2().then(resFun => {
//   let p1Res = resFun(false)
//   return p1Res ;// console.log('p2res', resFun)
// }).then(res => {
//   console.log('--res', res)
// }).catch(err => {
//   console.log(222,err)
// })
 
// Promise.prototype.done = function (onful, onreject) {
//   this.then(onful, onreject)
//     .catch(function (res) {
//       setTimeout(()=>{throw res},0)
//     })
//   }
var promise = new Promise(function(resolve, reject) {
  resolve('ok');
  //resolve下面的代码也会执行
  setTimeout(function () { throw new Error('test') }, 0)
  console.log(777777)
});
promise
  .then(function (value) { console.log(value) })
  .catch(e => { console.log(e) });

