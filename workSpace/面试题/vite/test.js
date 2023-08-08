export function foo (s){
  var a = 1
  eval(s)
  console.log(b);
}

foo('var b = 2;')