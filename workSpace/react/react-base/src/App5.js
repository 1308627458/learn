// 非受控组件 --- 组件的状态不受组件自己的控制


import { Component, createRef } from 'react'

class InputComponent extends Component {
  // 创建了一个存放dom的对象容器
  
  msgRef = createRef()

  changeHandler = () => {
    console.log(this.msgRef.current.value);
  }


  render() {
    return (
      <div>
        <input ref={this.msgRef}></input>
        <button onClick={this.changeHandler}>click</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <InputComponent></InputComponent>
    </div>
  )
}

export default App