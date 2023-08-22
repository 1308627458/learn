import { Component } from 'react'


class TestComponent extends Component {
  state = {
    count: 0,
  }
  
  setCount = () => {
    
   this.setState({
    count: this.state.count + 1
   })
   
  }

 


  render() {
    return (
      <div>
        <button onClick={this.setCount}>计数器{this.state.count}</button>
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <TestComponent></TestComponent>
    </div>
  )
}


export default App