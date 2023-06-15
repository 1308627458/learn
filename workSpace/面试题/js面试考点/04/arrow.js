// function a() {
//   return () =>{
//     return () => {
//       console.log(this.b);
//     }
//   }
// }

// let obj = {
//   b: 1,
//   foo: a()()
// }
// obj.foo()


const Foo = () => {

}

const f = new Foo()
console.log(f);
