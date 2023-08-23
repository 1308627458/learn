import React, { Component, createRef } from 'react';

function Todo(props) {

  const nRef = createRef()
  const pRef = createRef()

  function add() {
    const name = nRef.current.value
    const price = pRef.current.value
    // console.log(name, price);
    props.getlist(name, price)
  }

  return (
    <>
      <input placeholder='name' ref={nRef}/>
      <input placeholder='price' ref={pRef}/>
      <button onClick={add}>添加</button>
    </>
  )
}


function ListItem(props) {

  const list = props.data
  // console.log(list);
  const deleteList = (id) => {
    // console.log(id);
    props.getId(id)
  } 

  return (
    <>
    {
      list.map(item => (
        <div key={item.id}>
          <h3 style={{ display: 'inline-block' }}>{item.name}</h3>
          <span>{item.price}</span>
          <button onClick={() => {deleteList(item.id)}}>删除</button>
        </div>

      ))


    }
    </>
  )
}


class App extends Component {
  state = {
    list: [
      { id: 1, name: '棒棒糖', price: 1.5 },
      { id: 2, name: '碎碎冰', price: 2 },
      { id: 3, name: '农夫山泉', price: 2.5 }
    ]
  }

  getData = (name, price) => {
  let length =this.state.list.length
  let id = this.state.list[length - 1].id + 1
  // console.log(id);
  let items = {id:id, name:name , price:price}

 
  console.log(items);

    this.state.list.push(items)
    this.setState({
      list : this.state.list
    })
  }

  getId = (id) => {
    let index = this.state.list.findIndex((item) => item.id == id )
    this.state.list.splice(index, 1)

    //  this.state.list.filter((item) => item.id == id)

    this.setState({
      list: this.state.list
    })
  }

  render() {
    return (
      <>
        <Todo getlist={this.getData}/>
        <ListItem data={this.state.list} getId={this.getId}/>
      </>
    )
  }
}

export default App