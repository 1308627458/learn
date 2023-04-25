<template>
    <div>
        <h2>{{ counter.num }}</h2>
        <h2>{{ message }}</h2>
        <button @click="add">+</button>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    props:{
        msg:{
            type: String,
            required: true
        }
    },
    setup(props) {
        let counter = reactive({
            num: 1
        })
        let message = props.msg + 'world'

        const add = () =>{
            counter.num++
        }
        return {
            counter,
            message,
            add
        }
    },

    
    methods: {
       
    }
}
</script>

<style  scoped></style>