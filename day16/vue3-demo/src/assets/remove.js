import { reactive } from 'vue'
function remove() {
  let state = reactive({
    list: [
      { id: 1, name: 'shanqiang' },
      { id: 2, name: 'gaotian' },
      { id: 3, name: 'zhengyang' }
    ]
  })
  function del(id) {
    state.list = state.list.filter((item, index) => item.id !== id)
  }
  return { state, del }
}

export default remove;