/***** 枚举 ******/

// 枚举类型，自带类型的对象，自动增长，数字类型的枚举可以反举
/**
 *
 *   var USER_ROLE;
 *  (function (USER_ROLE) {
 *      USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
 *      USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
 *      USER_ROLE[USER_ROLE["MANAGER"] = 2] = "MANAGER";
 *  })(USER_ROLE || (USER_ROLE = {}));
 *
 *
 **
 **/

/**
 *
 *
 * 反举 USER的值是0，通过值0也能找到USER
 * {
 *  "0": "USER",
 *  "1": "ADMIN",
 *  "2": "MANAGER",
 *  "USER": 0,
 *  "ADMIN": 1,
 *  "MANAGER": 2
 * }
 *
 **
 **/
enum USER_ROLE {
  USER,
  ADMIN,
  MANAGER,
}
console.log(USER_ROLE);
// 通过key获取value
console.log(USER_ROLE.USER);
// 反举-通过value获取key
console.log(USER_ROLE[0]);

// 数字类型的枚举： 中间可以隔断，但仍然只自动增长的
enum USER_ROLE2 {
  USER, // 0
  ADMIN = 6, // 6, 后面从6开始增长
  MANAGER,
}

// 数字类型的枚举，字符串类型枚举混合
enum USER_ROLE3 {
  USER,
  ADMIN = 6,
  MANAGER,
  BOSS = "BOSS", // 异构枚举
}

// 既有字符串又有数字，异构类型
// 中间可以隔断，前面是数字，后端是字符串，但是字符串后面的必须指定值
enum USER_ROLE4 {
  USER,
  ADMIN = 6,
  MANAGER,
  BOSS = "BOSS",
  // OTHER,
}

enum USER_ROLE5 {
  USER,
  ADMIN = 6,
  MANAGER,
  BOSS = "BOSS", // 字符串后面的字段必须指定值
  OTHER = 0, // 会覆盖USER
}

// O反举的话；USER会被Other覆盖
console.log(USER_ROLE5[0]);

// 常量枚举 - 如果不需要对象，只是使用值，可以采用常量枚举，否则用普通枚举
// 不会生成对象，也不能反举
const enum USER_ROLE6 {
  USER,
  ADMIN,
  MANAGER,
}
console.log(USER_ROLE6.USER);

/***** 包装类 ******/

export {};
