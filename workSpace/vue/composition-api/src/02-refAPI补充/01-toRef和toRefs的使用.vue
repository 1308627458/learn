<template>
    <div>
<h2>{{ name }} -- {{ age }}</h2>
<button @click="addAge">+age</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

    export default {
        setup() {
            const info = reactive({
                name: '大帅',
                age: 18
            })
            //  let {name, age} = info    解构  不使用这种方式
            // let name = toRef(info, 'name')
            // let age = toRef(info, 'age')  
            
            // let {name,age} = toRefs(info)

            const addAge = () => {
             info.age++
            }
           

            return {
                ...toRefs(info),
                addAge
            }
        }
    }
</script>

<style  scoped>

</style>