// 抽象工厂
class MobilePhoneFactory {
  createOS() {

  }
  createHardWare() {

  }
}

class PiniaFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS()
  }
  createHardWare() {
    return new QualcommHardWare()
  }
}

// ------------------------------------------------------
class OS {
  constrolHardWare () {
    throw new Error('抽象方法')
  }
}

class AndroidOS extends OS {
  constrolHardWare() {
    console.log('我会以安卓的方式来操作硬件');
  }
}

// ------------------------------------------------------

class HardWare {
  operateByOrder() {
    throw new Error('抽象方法')
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder(){
  console.log('我会用高通的方式运行');
}
}

class MiHardWare extends HardWare {
  operateByOrder(){
  console.log('我会用小米的方式运行');
}
}


const myPhone = new PiniaFactory() 
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.constrolHardWare()
myHardWare.operateByOrder()


class OrangeFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS()
  }
  createHardWare() {
    return new QualcommHardWare()
  }
}