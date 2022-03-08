<template>
  <div>
    <input type="text" v-model="state2.stu.id">
    <input type="text" v-model="state2.stu.name">
    <button @click="add">add</button>
    <ul>
      <li v-for="item in state.list" :key="item.id">
        {{ item.id }} - {{ item.name }} - 
        <button @click="del(item.id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import remove from './assets/remove';
import append from './assets/append';

export default {
  setup() {
    let { state, del } = remove()

    let { state2, add } = append(state)

    return { state, del, state2, add }
  }
}

</script>