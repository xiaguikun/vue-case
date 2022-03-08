<template>
  <div class="wrap">
    <h3>vue3.0</h3>
    <p>{{count}}</p>
    <button @click="addCount">+</button>

    <ul>
      <li v-for="item in state.list" :key="item.id">
        {{item.id}}--{{item.name}}--
        <button @click="dell(item.id)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";
import {reactive} from "vue";

export default {
    setup(){
      let {count,addCount}=add();
      let {state,dell}=dele();

      return {count,addCount,state,dell};
    }
    
}

function add(){
  let count=ref(1);
      function addCount(){
        count.value++;
      }
  return {count,addCount};
}

function dele(){
  let state=reactive({
    list:[
      {id:'1',name:'zhangsan'},
      {id:'2',name:'lisi'},
      {id:'3',name:'wangwu'},
    ]
  });
  function dell(id){
    state.list=state.list.filter((item,index)=>{
      return item.id!=id
    })
  }

  return {state,dell}
}


</script>

<style>
.wrap{
  text-align:center;
}
</style>