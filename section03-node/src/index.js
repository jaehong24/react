
// common.js 와 es모듈 같이 못 쓴다 .
// const moduleData = require("./math")
// default 함수는 이름을 마음대로 사용가능
import mul from "./math.js";
import {add,sub} from "./math.js"
import randomColor from "randomcolor";

// console.log(moduleData);
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));

const color =randomColor();
console.log(color)