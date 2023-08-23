import React, { Component } from 'react'


function SonA(props) {
  return (
    <div>SonA--- {props.msg}</div>
  )
}


function SonB(props) {
  const msgB = 'B组件中的数据'
  function push() {
    props.data(msgB)
  }

  return (
    <div>SonB
      <button onClick={push}>click</button>
    </div>
  )
}

class App extends Component {

  state = {
    message: 'Hello'
  }

  getData = (data) => {
    this.setState({
     message : data
    })

  }

  render() {
    return (
      <>
      <SonA msg={this.state.message}/>
      <SonB data={this.getData}/>
      </>
    )
  }
}

export default App