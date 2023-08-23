import React, { Component, createContext } from 'react'

// 创建上下文对象

const { Provider, Consumer } = createContext()

function GrendSon() {
  return (
    <Consumer>
      {value => <div>我是孙子组件 -- {value} </div> }
    </Consumer>
  )
}

function Son() {
  return (
    <div>
      我是子组件
      <GrendSon />
    </div>
  )
}


class App extends React.Component {
  state = {
    message: 'Hello'
  }


  render() {
    return (
      <Provider value={this.state.message}>
        <div className='app'>
          <Son />
        </div>
      </Provider>
    )
  }
}







export default App


