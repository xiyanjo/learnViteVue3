 
/**
 * reduce 
 * 接收一个函数作为累加器，最后计算为一个值
 * reduce() 可以作为一个高阶函数，用于函数的 compose。？？？？？？
 */
let totalN = [1, 2, 3, 45, 4].reduce((total: number, num: number) => {
  return total + num;
})
// console.log(totalN)


// 原始的map
let arr = [1, 2, 3, 4, 5], arr2;
arr2= arr.map((item, index) => {
  return index+'---'+item
})
// console.log(arr,arr2)
/** 手写map
 * 接受 一个函数及原始数组
 * 返回函数内操作后的数组
 * 检测参数类型
 */
function mapEasy(arr = [], fn) {
  // console.log(arr)//当传入的值为undefined时,取默认给的参数值
  if (!Array.isArray(arr) || typeof fn != 'function') return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push( fn(arr[i],i,arr))
  }
  return newArr;
}

let arr3 = mapEasy(undefined, (item, index) => {
  return index+'---'+item
})
// console.log(arr3);

// 常用的字符串数组删除增加方法
function changeArr() {
  let oldArr = [0,1, 2, 3, 5, 6, 2, 89, 6];
  // 队尾添加
  oldArr.push('pushItem');
  console.log('push-oldArr', oldArr);
  // 队尾删除
  oldArr.pop();
  console.log('pop-oldArr', oldArr);

  oldArr.unshift('unshiftItem')
  console.log('unshift-oldArr', oldArr);

  oldArr.shift();
  console.log('oldArr', oldArr);

  oldArr.splice(2, 1);
  console.log('splice-删除-oldArr', oldArr);

  oldArr.splice(2, 1,'a');
  console.log('splice-替换-oldArr', oldArr);

  let newArr = oldArr.slice(2, 3);
  console.log('slice-截取-oldArr,不改变oldArr', oldArr, newArr);
  

  let str = '我是aa,今年18岁';
  let strArr = str.split(',')
  console.log('split-字符串到数组-str', str, strArr);

  let newStr = str.slice(1,3)
  console.log('split-截取-str', str, newStr);//是a

  newStr = str.substring(1,3)
  console.log('substring-截取-str', str, newStr);//是a
  
  newStr = str.substr(1,3)
  console.log('substr-截取-str', str, newStr);//是aa

}
// changeArr();

