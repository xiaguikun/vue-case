let obj = {
  name: 'zhangsan',
  likes: {
    man: 'lilei',
    women: 'hanmeimei'
  }
}

var proxy = new Proxy(obj, {
  get: function(target, propertyKey, receiver) {
    return target[propertyKey];
  },
  set: function(obj, prop, value, receiver) {
    obj[prop] = value
  }
});

proxy.likes.man = 'kkk'
console.log(proxy.likes)