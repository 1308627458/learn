
import React from 'react'

function Son(props) {

  const handleChange = () => {
    console.log(props);
    props.getData('这是子组件的数据')
  }


  return (
    <div>
      <span>{props.msg}</span>
      <button onClick={handleChange}>change</button>
    </div>
  )
}




class App extends React.Component {
  state = {
    message: 'Hello'
  }

  getData = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <div>父组件</div>
        <Son msg={this.state.message} data={this.getData}/>
      </div>
    )
  }

}





export default App