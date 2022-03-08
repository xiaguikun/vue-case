import { reactive } from 'vue'
function append(state) {
  let state2 = reactive({
    stu: {
      id: '',
      name: ''
    }
  })
  function add() {
    state.list.push(Object.assign({}, state2.stu))
  }
  return { state2, add }
}

export default append;