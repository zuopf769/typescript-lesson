// 全局作用域下已经声母了个name字段，没有底部的export {} 会报错
let name: string = "hello world";

/***** 类型推导 ******/
// 基本数据类型，类型都是小写的
let age: number = 30;
// 自动类型推导
let age1 = 30;

let handsome: boolean = true;
// 自动类型推导
let handsome2 = true;

/***** 类型推导 END ******/

/***** 包装类 ******/
// 大写的类型都是包装类型，包装类
class Dog {}
let dog: Dog = new Dog();

let s1: string = "abc";
// String是包装类
let s2: String = new String();
// string是基元，但String是包装器对象
let s3: string = new String("abc");
// "abc"表示用String创建的实例，所以实例可以赋值给创建他的类String
let s4: String = "abc";
/***** 包装类 END ******/

/***** 数组 长度随意 ******/
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2", "3"];
let arr3: (number | string)[] = [1, 2, 3, "1", "2", "3"];
let arr4: Array<number | string> = [1, 2, 3, "1", "2", "3"];
/***** 数组 END ******/

/***** 元组 固定长度和类型的数组 元组的优势就是固定长度能循环 ******/
let tuple1 = ["abc", 10, true];
tuple1.push({ name: "张三" });

let tuple2: [string, number, boolean] = ["1", 2, true];
tuple2[0] = 100;
tuple2[1] = "100";
tuple2[2] = false;
tuple2[100] = 1000;

// 元组可以添加，只能添加元组中存在的类型，不管有没有超出长度
tuple2.push(1);
tuple2.push({});
// 虽然你可以加元素，但是你访问不到，因为不确定这个值是否存在
// 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。ts(2493)
let tr = tuple2[3];

// 为什么pop取最后一个元素，r的类型是 string | number | boolean | undefined
let r = tuple2.pop();
// 因为你可能调用多次， 他不知道你是第几次调用，返回的事第三个，第二个还是第一个，他不能给个确定的类型
let r2 = tuple2.pop();
let r3 = tuple2.pop();
// 甚至你还多调了一次，都取完了，就是undefined了
let r4 = tuple2.pop();

let tuple3: readonly [string, number, boolean] = ["1", 2, true];
// 只读后就不能追加元素了
tuple3.push({});
tuple3[0] = "abc";

/***** 元组 END ******/

// 模块之间的隔离
// 声明一个export，就表示一个单独的模块
// 使用了import, 就表示引入了一个模块，同时这里也是一个模块
export {};
