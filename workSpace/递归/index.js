// 递归   找规律   找出口

// 求阶乘
function mul (n) {
    // var num = 1
    // for(let i = 1; i<=n; i++){
    //     num *= i
    // }
    // return num

    // n! = n*(n-1)!;
    if(n == 1){
        return 1
    }
    return n * mul(n-1)    
}
console.log(mul(5));

// mul(5) ==> 5*mul(4)
// mul(4) ==> 4*mul(3)
// mul(3) ==> 3*mul(2)
// mul(2) ==> 2*mul(1)
// mul(1) == 1 
