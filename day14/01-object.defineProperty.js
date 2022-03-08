let obj = {
  title: '湖人总冠军'
}

// Object.defineProperty() 方法会直接在一个对象上定义一个新的属性，或者修改现有的属性，并且返回该对象
// 里面有三个参数
// 1.对象
// 2. 属性
// 3. 一个描述对象

let str = null;

Object.defineProperty(obj, 'title', {
  // 当访问该属性的时候，就会执行get方法
  // 必须要有return，否则是undefined
  get: function() {
    return str
  },
  // 当修改该属性的时候，就会执行set方法
  // 可以接受一个参数，是修改以后的值
  set: function(val) {
    str = val
    // 告诉订阅者这个属性发生了变化，触发监听回调并且重新渲染页面
  }
})

obj.title = 'hahah'
console.log(obj.title)