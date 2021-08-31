//根据name获取sym的promise，有名字resolve
function getStockSymbol(name: string) {
  return new Promise((resolve,reject) => {
    if (name) {
      setTimeout(() => {
        resolve(name)
      }, 1000);
    } else {
      reject('Symerror')
    }
  })
}
// 根据sym获取price
function getPrice(sym: string) {
  return new Promise((resolve, reject) => {
    if (sym) {
      setTimeout(() => {
        resolve(sym + '-price');
      }, 500);
    } else {
      reject('priceError')
    }
  })
}
/** async/await 先获取sym,取到值后获取price
 *  返回值为promise，then的参数
 *  try{}catch{},try出错则会走catch,后面的代码可以继续执行
 *  多个await可以放一个try……catch中
 */
async function getName(name:string) {
  let symmbol = '';
  try {
    symmbol = await getStockSymbol(name);
  } catch {
    symmbol = 'other';
  }
  let [stockPrice,timeout3] = await  Promise.all([getPrice(symmbol),timeout(1200)]);
  console.log(symmbol, stockPrice,timeout3);
  return stockPrice
}
// async/await 抛异常可以在then/catch中捕获
function asyncPromise() {
  getName('dog').then(res => {
    console.log('res',res);
  })
  getName('').then(res => {
    console.log('res',res);
  }, e => {
    console.log('asyncGetError',e)
  })
  //   .catch(e => {
  //   console.log('e',e)
  // })
}
asyncPromise();

// async/await 返回的promise需要手动赋值，否则为空
async function timeout(ms:number) {
  await new Promise(resolve => {
    setTimeout(resolve, ms);
  })
  return 'timeOk'
}
async function asyncPrint(value: string, ms: number) {
  // await timeout(ms);//等待timeout返回
  let fromTime = await timeout(ms);
  console.log('v',fromTime,value)
}
// asyncPrint('kkkk',1000)

