
function TestComponent() {
  const list = [
    { id: 1001, name: 'react' },
    { id: 1002, name: 'vue' }
  ]

  const delHandeler = (id) => {
    console.log(id);
    for(let i = 0; i < list.length; i++) {
      let item = list[i]
      if(item.id === id) {
        list.splice(i, 1)
      }
    }
  }

  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => delHandeler(item.id)}>x</button>
          </li>
        ))

      }
    </ul>
  )
}




function App() {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  )
}

export default App