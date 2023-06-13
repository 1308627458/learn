// console.log(typeof('hello'));
// console.log(typeof(123));
// console.log(typeof(false));
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof(Symbol(123)));
// console.log(typeof(123n));



// null => 0000000000
// console.log(typeof{});
// console.log(typeof[]);
// console.log(typeof (new Map()));

// console.log(typeof(function fn() {}));

// console.log( [] instanceof Array);
// console.log({} instanceof Object);
// let m = new Map();
// console.log( m instanceof Map);

let obj = Object.create(null)
console.log(obj instanceof Object);
