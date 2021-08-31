// 执行上下文ao
function test(a,c){
  var a;//p3
  console.log('a',a) //function//1//1
  var a=123;
  // function a(){}//p2

  console.log('b',b)//function//2
  var b=234;

  console.log('b',b)//234//234
  // function b(){}
  console.log('a',a)//123//123
  var b=function(){}
  console.log('b', b)//function//function
  function c() { }
  console.log('c',c)//function
}
test(1, 2)

let obj = { name: 'lili' };
console.log(test.name,obj);

// ao{
//   a:1, function a(){}
//   b:2,function b(){}
// }