

function sort(){
  let arr = [3,4,2,6,5,2,6,4];
/** 快速排序
 * 取一个默认的最大值max,i>max 放右边, i<max放左边
 * 空间复杂度
 */
  function  quickSort(arr){
    if(arr.length<=1) return arr ;
    let max = arr.splice(0,1),leftArr=[],rightArr=[];
    for(let i of arr){
      if(i<max){
        leftArr.push(i);
      }else{
        rightArr.push(i);
      }
    }
    return  quickSort(leftArr).concat(max,quickSort(rightArr))
  }
  // console.log(  quickSort(arr))
  /**原地快排  移动
   * 基准值x  
   * 第一次 从右向左找到小于x的放到l=0的位置
   * 第二次 从左向右找到大于x的放到刚刚的r的位置
   * 第三次 从右向左找到小于x的放到l的位置
   * 第n次
   */
  // function  quickSortPlace(arr){
  //   // debugger
  //   let l=0,r=arr.length-1,max=arr[l];
  //   while(l<=r){
  //     // 从右边起，寻找比基数小的数
  //     while(arr[r]>max){
  //       r--
  //     }
  //     // arr[l] = arr[r];
  //     // 从左边起，寻找比基数大的数
  //     while(arr[l]<max){
  //       l++
  //     }
  //     if(l<=r){
  //       [arr[l],arr[r]]=[arr[l],arr[r]];
  //       l++;
  //       r--;
  //     }
  //   }
  //   console.log(2222,arr);
  // }
  // quickSortPlace( [3,4,6,5,2]);

  var quickSort_New = function(ary, left, right) {
    if(left >= right) {
        return ary;
    }
    let i = left,
        j = right,
        base = ary[left];
    while (i < j) {
        // 从右边起，寻找比基数小的数
        while (i<j && ary[j] >= base) {
            j--;
          console.log('j',j)
        }
        // 从左边起，寻找比基数大的数
        while (i<j && ary[i] <= base) {
            i++
          console.log('i',i)
        } 
        if (i<j) {
            // let temp = ary[i];
            // ary[i] = ary[j];
            // ary[j] = temp;
            [arr[i],arr[j]]=[arr[j],arr[i]]
        console.log(i,j,ary);
        }
    }
    ary[left] = ary[i];
    ary[i] = base;
    quickSort_New(ary, left, i-1); 
    quickSort_New(ary, i+1, right);
    return ary;
  }
  // console.log(quickSort_New(arr,0,arr.length-1))
}
sort();