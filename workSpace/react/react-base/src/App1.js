// JSX 模版语法， ejs vue-template
// JavaScript XML  

import './app.css'
import { Component } from 'react'
const songs = [
  { id: 1, name: '等你下课' },
  { id: 2, name: '罗刹海市' },
  { id: 3, name: '像风一样' },
]

const flag = true

const styleObj = {
  color: 'blue'
}
// function App() {
//   return (
//     <div className="App">
//       <ul>
//         {
//           songs.map( item => {
//             return <li key={item.id}>{item.name}</li>
//           })
//         }
//       </ul>

//       {flag ? 'react真有趣' : 'vue真有趣'}
//       {flag ? <span>这是一个标签</span> : null}


//       <div style={{color: "red"}}>this is a div</div>
//       <div style={styleObj}>this is a div2</div>
//       <div className='title'>this is a div3</div>
//       <div className={flag ? 'title' : ''}>this is a div4</div>

//     </div>
//   )
// }
function Hello() {
  const clickHandler = (e) => {
    console.log('Hello 组件被点击了', e);
  }

  return (
    <div>
      <p>这是一个函数组件</p>
      <button onClick={clickHandler}>点我</button>
    </div>
  )
}

class World extends Component {
  constructor(props) {
    super()
  }
  render() {
    return <div>这是一个类组件</div>
  }
}

function App() {
  return (
    <div className='App'>
      <Hello></Hello>
      <World></World>
    </div>
  )
}

export default App