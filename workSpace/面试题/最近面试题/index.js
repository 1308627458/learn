
let a = {
  name: 'test',
  like: {
    sport: "swimming",
    study: "math"
  },
  age: 18
}
let b = {
  name: 'test',
  like: {
    sport: "swimming",
    study: "math"
  },
  age: 18
}

function isSame(a,b) {
  const a1 = JSON.stringify(a)
  const b1 = JSON.stringify(b)
  if (a1 === b1){
    return true
  }
  console.log(a1,b1);
}

console.log(isSame(a,b))