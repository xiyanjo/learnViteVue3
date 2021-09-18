/** 数组扁平化
 * 1 arr.flat(Infinity)
 * 2 正则
 * 3 递归
 * 4 reduce+递归
 */
//  1 arr.flat(Infinity)
let arr = [1, 2, 3, [34, 434, [2, 1, 4]]];
// console.log(arr.flat(Infinity));
// 2 正则
let arr2 =JSON.parse('['+ JSON.stringify(arr).replace(/\[|\]/g, '')+']');
// console.log(arr2)
// 3 递归
let newArr = [];
let repeat = function (arr) {
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      repeat(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
};
// console.log(repeat(arr));


let repeat2 = function (arr) {
  // debugger
  let newArr = [];
  if (!Array.isArray(arr)) return arr
  for (let i in arr) {
    // if (Array.isArray(arr[i])) {
    // }
    newArr.concat( repeat2(arr[i]));
  }
  return newArr;
};
// console.log(repeat2(arr));

// console.log('....',arr.concat(...arr))