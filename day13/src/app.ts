// let str: string = 'hello world bye';

// let num: number;
// num = 99;

// let isDone: boolean = true;
// isDone = false;


// 定义数组
// let arr = [4, 'gg', false];
// let arr: Array<string> = ['a', 'b', 'c'];
// let arr2: number[] = [1, 2, 3];


// 定义元组  Tuple   用来规定数组的长度，以及里面的每一项的类型
// let arr: [number, string, boolean] = [4, 'gg', false];
// arr.split('')  // 不能使用数组没有的方法
// console.log(arr[3])  // 不能越界访问


// 枚举类型 Enum
// enum Color {
//   Red = 5, Green = 8, Blue = 20
// }
// let c: Color = Color.Green;
// console.log(c);
// let c2: string = Color[20];
// console.log(c2);


// 自动类型推断和any类型  any是指任何类型
// let num = 8;
// num = true;
// let arr: any[] = ['a', 8, true];
// arr[2] = 5
// let str: any = '4';
// str = 4;


// 联合类型
// let str: number | string | boolean = '5';
// str = 5;
// str = true;


// void  没有任何类型，一般用在函数，没有返回值
// function fn(): void {
//   console.log(111)
//   return
// }


// never  用于死循环或者抛出异常
// function err(): never {
//   throw new Error()
// }
// function loop(): never {
//   while(true) {}
// }



// null,undefined 类型  ，   他们是任何类型的子类型
// let str: string = '5';
// str = null;
// let a:null = null;



// 函数
// function add(x: number, y: string): string {
//   return x + y;
// }
// // ?是指可选参数
// let add2: (x: number, y?: number) => number = function(x: number, y: number = 4): number {
//   return x + y;
// }
// add2(3)


// 接口  interface   多个类的行为的抽象（给对象提供类型）
// interface Person {
//   name: string;
//   age: number;
//   sex?: number;
//   // 索引签名
//   [propname: string]: any;
//   [propname2: number]: any;
// }

// let obj: Person = {
//   name: 'zhangsan',
//   age: 30,
//   sdf: 43,
//   fff: 'feerger',
//   6: 'fg'
// }



// 类
class Animal {
  // name: string = 'zhangsan';
  // constructor是类里面一个特殊的函数，只要实例化就会执行这个方法
  // 还可以做实例化传参
  constructor(public name: string) {
    // console.log(123)
    this.name = name
  }
  sayName() {
    return this.name
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
}

let cat = new Cat('lisi');
console.log(cat.sayName())