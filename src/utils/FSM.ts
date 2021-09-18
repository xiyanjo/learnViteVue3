 /** 状态机书写（Mealy)
  * //每个函数是一个状态：
  * function state(input){
  *   //处理每个状态的逻辑
  *   return next;//返回值作为下一个状态
  * }
  * //调用
  * while(input){
  *   state = state(input)
  * }
  */


// 使用状态机思想实现：在字符串中找到abcdef
function matchABC(){
  // 普通的实现
  let matchABC = function(str:string){
    // 定义一个标志的变量
    let foundA = false;
    // for of循环字符串
    for(let c of str){
      // 有a将foundA=true,
      if(c=='a'){
        foundA = true;
      } else if(foundA==true && c=='b'){
         // 下一个看是否为b,
        return true;
      }else{
        // 不为b则重置 foundA 
        foundA = false;
      }
    }
    // 都找到不到返回false
    return false;
  }
  // console.log(matchABC('asfb'));
  // console.log(matchABC('asfdefefe'));
  // console.log(matchABC('addsabdfd'));
  // 状态机开始
  let matchStr=function(str){
    // 状态机设置开始状态
    let state=start;
    // 遍历对象调用state
    for(let c of str){
      state=state(c);
    }
    // 当state==end时 找到所有的元素
    return state===end;
  }
  // 开始的状态： 符合条件，将state的状态更为查找b或查找a
  function start(c){
    if(c=='a') return foudB;
    return start
  }
  // 查找b
  function foudB(c){
    // 处理 aabc方案一
   /*  if(c=='a') return foudB;
    if(c=='b') return fondC;
    return start */
    // 处理 aabc方案二
    if(c=='b') return fondC;
    return start(c);
  }
  // 查找c
  function fondC(c){
    if(c=='c') return end;
    return start;
  }
   // 结束的状态
  function end(c){
    return end;
  }
  console.log(matchStr('abcd'));
  console.log(matchStr('asdaabcsd'));
  console.log(matchStr('addsabdfd'));
}
// matchABC();

function matchABABX(){
  let matchABAB = function(str){
    let state= start;
    for(let c of str){
      state = state(c);
    }
    return state ===end;
  }
  function start(c){
    if(c=='a') return foundB1;
    return start;
  }
  function foundB1(c){
    if(c=='b') return foundA2;
    return start;
  }
  function foundA2(c){
    if(c=='a') return foundB2;
    return start;
  }
  function foundB2(c){
    if(c=='b') return foundX1;
    return start;
  }
  function foundX1(c){
    if(c=='x') return end;
    return start;
  }
  function end(c){
    return end;
  }
  console.log(matchABAB('ababxdfd'));
}
// matchABABX();