function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = Career
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '改bug', '跟产品吵架']
      break
    case 'product manager':
      work = ['会议室', '写PRD', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
    //...
  }
  return new User(name, age, career, work)
}