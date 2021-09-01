let obj = {
  name:'lili'
}
function Child(name) {
  this.name = name;
}
Child.prototype.getName=function () {
  console.log(this.name);
}
let hh = new Child('hh');
hh.getName();
hh.getName.call(obj);


let arr = [1, 3, 4, 5, 74, 3, 12];
console.log(Math.max.call(null, ...arr));
console.log(Math.max.apply(null, arr));
console.log(Math.max.bind(null, ...arr)());
