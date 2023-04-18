function instance_of(L, R) {
    let left = L.__proto__
    let right = R.prototype
    while(left !== null) {
        if(left === right) return true
        left = left.__proto__ 
    }
    return false
}


instance_of([], Array)  // true
instance_of([], Object) 