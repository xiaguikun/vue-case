<template>
  <div>
    <h3>类组件</h3>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    <button @click="clickMe(3, 5)">点我！</button>
    <p>{{ gsm }}</p>
    <p>{{ p1 }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// 引入接口
import { Person } from '../types/index';

// 需要引入修饰器，将类转换成真正的组件
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({})

export default class ClassComponent extends Vue {
  // 响应式数据  =>  类内的实例属性
  msg: string = 'hello';
  msg2: number = 6;
  msg3: Person = {
    name: 'zhangsan',
    age: 20
  };

  // 生命周期函数
  mounted(): void {
   console.log('来自类组件的123') 
  };

  // 事件  => 类内的实例方法
  clickMe(x: number, y: number): void {
    console.log('类组件的clickme,结果是' + (x + y))
  };

  // 计算属性  =>  类内的实例方法
  get gsm(): string {
    return this.msg.split('').reverse().join('')
  };

  // 属性props  => 需要有一个Prop装饰器
  @Prop({default: '我自己有prop'}) readonly p1!: string;
  
  // 侦听器 watch  => 需要一个Watch装饰器
  @Watch('msg')
  msgChange(newValue: string, oldValue: string): void {
    console.log(newValue);
  }

  @Watch('msg3', { deep: true })
  msg3Change(newValue: Person, oldValue: Person): void {
    console.log(newValue);
    console.log(oldValue);
  }
}

</script>