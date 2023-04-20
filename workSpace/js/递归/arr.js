let arr = [1,2,[3,4,[5]]]  //多维数组
// [1,2,3,4,5] 数组扁平化

// let newArr = arr.flat(Infinity)
// console.log(newArr);



function flat(arr) {
let arr2 = []
for(let i = 0 ; i < arr.length; i++) {
    if( Array.isArray(arr[i]) == true){
        arr2 = arr2.concat(flat(arr[i])) //[3,4,5]
    }else{
        // 不为数组则直接加到 arr2 中
        arr2.push(arr[i])
    }
}  
    return arr2
}
 
console.log(flat(arr));
