// 受控组件 --- 组件的状态受组件自己的控制


import { Component } from 'react'

class InputComponent extends Component {
  // 声明组件的状态
  state = {
    messgae: 'this is a message'
  }

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      messgae: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.messgae} onChange={this.changeHandler}></input>
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