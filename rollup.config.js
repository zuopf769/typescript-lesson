import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// module里面没有这两个变量，commonjs环境下才有
// __dirname __filename

// 当前文件的绝对路径
// import.meta.url返回的是file://协议的路径
// console.log(import.meta.url)
// fileURLToPath会把file://去掉，转成绝对路径
const __filename = fileURLToPath(import.meta.url);
// 当前文件所在的文件夹，绝对路径
const __dirname = dirname(__filename);

export default {
  input: resolve(__dirname, "src/index.ts"),
  output: {
    file: resolve(__dirname, "dist/bundle.js"),
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    ts({
      tsconfig: resolve(__dirname, "tsconfig.json"),
    }),
    nodeResolve({
      extensions: [".js", ".ts"], // 引用第三方模块；从node_modules下的ts文件也能找到并解析
    }),
    serve({
      port: 3000,
      open: true,
      openPage: "/public/index.html",
    }),
  ],
};
