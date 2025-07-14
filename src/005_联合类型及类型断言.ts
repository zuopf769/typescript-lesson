// 类型推断 以赋予的值的结果 阿里推导内容

let name = "string";
let age = 30;

// let和const的区别
// 如果是常量，自动推导类型就是字面类型
const age2 = 30;

/***** 联合类型 ******/
let union1: string | number;
// 联合类型，没有赋值之前，可以调用公共的方法，why,为了安全 所以只能访问公共的属性

// 没赋值之前不能调用方法，需要用！做非空判断
// strictNullChecks: false 也可以把tsConfig里面的改属性配置成false
union1!.toLocaleString();
union1!.toString();

// 赋值后会推动类型
union1 = "string";
union1.toLocaleUpperCase();

// 赋值后会推动类型
union1 = 123;
union1.toFixed();

// 联合类型 一般我们会用联合类型 来扩展额外的类型

//字面量类型 type可以声明一个类型
type Direction = "up" | "down" | "left" | "right";
let direction: Direction = "up";

// type中定义的是类型，不是JS中的对象
type women =
  | {
      wealthy: true;
      waste: string;
    }
  | {
      wealthy: false;
      norality: string;
    };

// 如果wealthy: true, 已经推断出是联合类型的第一个字面量值了, 第一个字面量类型里面没有norality字段
// let richWomen: women = {
//   wealthy: true,
//   norality: "勤俭持家", // 可以用联合类型来做到属性直接的互斥（可辨识联合类型）
// };

let poorWomen: women = {
  wealthy: false,
  norality: "勤俭持家",
};

/***** 联合类型 end ******/

/***** 非空断言 ******/
// 断言 （非空断言，这个值一定不为空）
// let ele = document.getElementById("app");
let ele: HTMLElement | null = document.getElementById("app");
// ele.style.background = "red";
// !非空断言是ts的语法
ele!.style.background = "red";

// ?可选链，用于取值表达式，不能用于赋值表达式
// ?可选链，js语法，不是类型
// ele?.style.background = "red";
ele?.style.background;

// ?? 可选链操作符 js语法，不是ts语法
// let a = null ?? 1; // 除了null和undefined都会返回左边的值
// a = undefined ?? 1;

/***** 非空断言 end ******/

/***** as断言  ******/

// as断言 可以强制把某个类型断言成已经存在的某个类型
// 断言出问题了，后果需要自己负责， 有可能会出问题（只是你觉得不会出问题）
let ele1 = document.getElementById("app");
ele1 as HTMLHtmlElement;
(ele1 as HTMLHtmlElement).style.background = "red";
// 不推荐，和jsx的语法会冲突
(<HTMLElement>ele1).style.background = "red";
// 断言成已经存在的某个类型，不能是范围外的一个类型
// ele1 as boolean;

let ele2: Element | null = document.querySelector(".app");
ele2 as Element;
// 可以往小了断言
ele2 as HTMLElement;

/***** as断言 end ******/

/***** as双重断言  ******/

let str: string | number;
// 直接强制断言不行
// str! as boolean;
//
str! as any as boolean;

/***** as双重断言  end ******/

export {};
