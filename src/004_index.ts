/***** null 和undefined ******/
// null 和undefined是任何类型的子类
// 一般情况下都是严格模式； null只能赋值null， undefefined只能赋值给undefined
let str: string;

// 没开启严格模式，会报错
// let str: string = null;
// let str: string = undefined;

/***** null 和undefined end ******/

/***** void 只能作为函数的返回值类型 ******/
// 没有任何类型，一般用于函数没有返回值
function fn(): void {
  console.log("fn");
}

function fn2(): undefined {}

// undefined可以赋值给void， undefined是任何类型的子类
function fn3(): void {
  return undefined;
}

// null不可以赋值给void
function fn4(): void {
  // return null;
}

function fn5(): null {
  return null;
}
/***** void end ******/

/***** never ******/

// never类型表示永远不存在的值的类型
// 一般用于抛出异常或无限循环
function fn6(): never {
  throw new Error("fn6");
}

// function fn7(): never {}

function fn8() {
  throw new Error("fn6");
}

function fn9(): void {
  throw new Error("fn6");
}

// 无限循环,代码永远达不到
function fn10(): never {
  while (true) {}
}

// never的另一个作用就是类型保护，保障程序的不缺失，完整性保护（保护代码的完整性）
function validata(val: never) {}
function getResult(stringOrNumberOrBoolean: string | number | boolean) {
  // typeof 可以有收窄的功能
  if (typeof stringOrNumberOrBoolean === "string") {
    return stringOrNumberOrBoolean.toUpperCase();
  }

  // never应该是永远都不会走到这里，但是前面的代码由于类型判断的缺少，可能到走到这里
  // validata(stringOrNumberOrBoolean);
}

function getResult2(stringOrNumberOrBoolean: string | number | boolean) {
  if (typeof stringOrNumberOrBoolean === "string") {
    return stringOrNumberOrBoolean.toUpperCase();
  }

  if (typeof stringOrNumberOrBoolean === "number") {
    return stringOrNumberOrBoolean;
  }

  // 上面的代码没处理boolean类型，所以会走到这里， boolean不能赋值给never
  // validata(stringOrNumberOrBoolean);
}

function getResult3(stringOrNumberOrBoolean: string | number | boolean) {
  if (typeof stringOrNumberOrBoolean === "string") {
    // 对string类型的处理
    return stringOrNumberOrBoolean.toUpperCase();
  }

  if (typeof stringOrNumberOrBoolean === "number") {
    // 对number类型的处理
    return stringOrNumberOrBoolean;
  }

  if (typeof stringOrNumberOrBoolean === "boolean") {
    // 对boolean类型的处理
    return stringOrNumberOrBoolean;
  }

  // 上面三种类型都处理了，所以这里不会走到
  validata(stringOrNumberOrBoolean);
}

// never和其他类型做联合类型最终是不显示的
let union: string | number | boolean | never;

/***** never end ******/

/***** object类型 ******/
// object类型，字面量类型，new了一个Object类型产生了一个小object类型
// object {}
// Object是类

// object是非基础类型，而是实例类型
let obj: object = {};
// 不能将其他类型赋值给object
// obj = 111;

// Object和{}一般不会采用，偶尔会采用{}表示对象上无任何属性，都可以将任何值赋值给{}或者Object

let obj1: Object = {};
obj1.constructor;
// Object是任何类型的父类，虽然是111，但是也是Object的子类型
let obj2: Object = 111;
obj2.constructor;
// 可以将任意值赋值给Objct类型
obj2 = "string";
// 空对象类型， {}表示对象上无任何属性
let obj3: {} = {};
// 可以将任意值赋值给{}类型
obj3 = "string";
// 可以将任意值赋值给{}类型
obj3 = 111;

/***** object类型 end ******/

/***** symbol类型 **********/

let s1: symbol = Symbol("1");
let s2: symbol = Symbol("1");
// 两个symbol类型不相等
console.log(s1 === s2);

let s3: symbol = Symbol.for("1");
let s4: symbol = Symbol.for("1");
console.log(s3 === s4);

/***** symbol类型 end ******/

/***** BigInt类型 **********/
let big1: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100);
/***** BigInt类型 end ******/

/***** any类型 **********/

// any 任何类型  有时候需要对类型进行转换，无法直接转化

// 声明一个变量没有类型就是any
let any1;
// 类型推断
let any2 = 1;
/***** any类型 end ******/

// string number boolean null undefined array tuple never object symbole bigint any void

export {};
