function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder'
  this.work = ['写代码', '改bug', '跟产品吵架']
}

function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product manager'
  this.work = ['会议室', '写PRD', '催更']
}


function Factory (name, age, career) {
  switch(career) {
    case 'coder': 
      return new Coder(name, age)
      break
    case 'product manager':
      return new ProductManager(name, age)
      break
    //...
  }
  
}