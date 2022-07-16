var num = 123;
var obj = {
  age: 12,
};

function change(num, obj) {
  num--;
  obj.age--;
  66;
  console.log(num === window.num);
  console.log(obj === window.obj);
}

change(num, obj);
setTimeout(() => {
  console.log(num, obj.age);
}, 1000);
