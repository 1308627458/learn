let person = null

console.log(person);

setTimeout(() => {
  person = '小明'
  foo() 
},1000)

function foo() {
  console.log(`${person} 今天真开心`);
}

