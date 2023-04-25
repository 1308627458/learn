<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input type="text" class="new-todo" placeholder="想干的事" @keyup.enter="addTodo" v-model="newTodo">
    </header>

    <section class="main">
      <input type="checkbox" class="toggle-all" id="toggle-all" v-model="allDone">
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        <li class="todo" v-for="(todo) in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="todo.completed">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>

      </ul>
    </section>


    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong> left
      </span>

      <button class="clear-completed" @click="removeDone">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  setup() { // 入口函数

    const state = reactive({
      newTodo: '',
      todos: [
        { id: '1', title: '吃饭', completed: true },
        { id: '2', title: '睡觉', completed: false }
      ]
      
    })

    const addTodo = () => {
      // if (e.keyCode === 13) {
      //   console.log(e.keyCode);
      // }
      // console.log(state.newTodo);
      if (!state.newTodo) return
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
      })
      state.newTodo = ''
    }

    const removeTodo = (item) => {
      // state.todos.splice(idx, 1)
      state.todos = state.todos.filter(todo => todo.id !== item.id)
    }

    const removeDone = () => {
      state.todos = state.todos.filter(todo => todo.completed === false ) 
    }

    const remaining = computed(
      () => state.todos.filter(todo => !todo.completed).length
    
    )
 

    const allDone = computed({ // 当计算属性传入一个对象时
      get: function () { // 默认值
        return remaining.value === 0
      },
      set: function (value) {
        state.todos.forEach((todo) => {
          todo.completed = value
        })
      }
    })

    // console.log(allDone.value);

    return {
      ...toRefs(state), // newTodo  todos
      addTodo,
      removeTodo,
      allDone,
      removeDone
    }

  }
}
</script>

<style></style>