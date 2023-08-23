
import React from 'react'


class Son extends React.Component {
  render() {
    return (
      <div>
        子组件 -- {this.props.msg}
      </div>
    )
  }


}

function Son2 (props) {
  // console.log(props);
  return (
    <div>
      子组件2 --- {props.msg}
    </div>
  )
}



class App extends React.Component {
  state = {
    message: 'Hello'
  }

  render() {
    return (
      <div>
        <div>父组件</div>
        <Son msg={this.state.message}></Son>
        <Son2 msg={this.state.message}/>
      </div>
    )
  }

}





export default App