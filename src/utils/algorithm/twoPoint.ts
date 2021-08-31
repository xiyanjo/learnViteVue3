
// 快慢指针
/**求链表中倒数第n个节点 */
function getLinkTable(n = 1, linkTable = []) {
  let i = 1;
  while (linkTable[i-1 ]) {
    if(i == n) {
      console.log('target', linkTable[0]);
    }
    if (i - n > 0) {
      // 没有办法从下标取,只能循环到最后
      for (let j = 0; j <= i - n; j++){
       console.log('target', linkTable[i - n])
      }
    }
    i += 1;
  }
}
let linkTable = [11, 22,33,44,55,66];
// getLinkTable(4, linkTable);


// 碰撞指针
/** 1翻转数组
 *  plan1 双指针：il,r 当il<ir时交换位置
 *  plan2 s.reverse();
 */
let s = ['h', 'e', 'l', 'l', 'o'];//O(n)
function reverseStr(s: []) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l += 1;
    r -= 1;
  }
  console.log(l, r);
  return s;
}
// reverseStr(s);

/**两数之和:升序排列的有序数组，找到 num1+num2==target
 * 返回所有符合规则的， index1 < index2，
 */
let upArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function twoSum(arr,target) {
  let l = 0, r = upArr.length - 1,sum=0;
  while (l < r) {
    sum = arr[l] + arr[r];
    if (sum < target) {
      l += 1;
    }else if (sum > target) {
      r -= 1;
    } else {
      console.log([l, r])
      r -= 1;
    }
  }
}
// twoSum(upArr, 8);

/**剩最多的水
 * 两边循环，max(area,x*最小高度)
 * 将最小的边向里移动，有可能取到更大的高度
 */
function maxArea() {
  let arr = [1, 3,7,9,6,4];
  let l = 0, r = arr.length - 1, area=1;
  while (l < r) {
    if (arr[l] <= arr[r]) {
      area = Math.max(area, (r - 1) * arr[l]);
      l += 1;
    } else {
      area = Math.max(area, (r - l) * arr[r]);
      r -= 1;
    }
  }
  return area;
}
/**救生艇 第i个人体重people[i],船最大承重limit,最多两人，多少只船
 * 1 排序 
 * 2 l,r people[j]>limit 拒载
 * 2 people[i]<limit  limit-people[i]== people[x];  i,x移除
 * 
 */
function lessBoats(limit = 5) {
  let arr = [1, 2,3, 5, 4, 8, 4, 3, 2];
  arr = arr.sort((a,b)=>a-b);

  let l = 0, r = arr.length - 1;
  let num = 0;
  while (l < r) {
    if (arr[r] >= limit) {
      r -= 1;
    } else {
      console.log(arr[r],arr[l])

      if (arr[r] + arr[l] > limit) {
        num += 1;
        r-=1
      } else {
        num += 1;
        l += 1;
        r -= 1;
      }
    }
  }
  return num;
}
console.log(lessBoats())

/**将数组奇数拍前面，偶数排后面
 * il偶 ir奇  -- 交换位置,l+=1;r-=1;
 * il奇 ir偶  -- 不需要操作,l+=1;r-=1;
 * il奇 ir奇  -- ir移动到il后面，il+=2;
 * il偶 ir偶  -- il移动到ir前面，ir-=2;
 */
function evenOdd() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let l = 0, r = arr.length - 1;
  while (l < r) {
    // il奇
    if (arr[l] % 2 != 0) {
      if (arr[r] % 2 == 0) {//ir偶
        l += 1; r -= 1;
      } else {//ir奇
        arr.splice(l, 0, arr.splice(r, 1)[0]);
        l += 2;
      }
    } else {
      if (arr[r] % 2 == 0) {
        arr.splice(r, 0, arr.splice(l, 1)[0]);
        r += 2;
      } else {
        [arr[r], arr[l]] = [arr[l], arr[r]];
        l += 1; r -= 1;
      }
    }
    arr[l]%2==0
  }
  return arr;
}


/** 1,2,5---10多少种组合 ???????
 * 
 */
function threeSum(target) {
  let arr = [1, 2, 5];
  
}

// 原地删除有序数组nums重复的原素，返回新数组长度
function removeDuplicates(nums) {
  
}

