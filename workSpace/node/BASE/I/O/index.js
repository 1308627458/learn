var count = 0

function a (){
    setTimeout(() =>{
    count = 1
},1000)
}

function b (){
    console.log(count);
}

a()
b()