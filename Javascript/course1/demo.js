// @ts-check
let globalvar = "我是全局的";

function test() {
  console.log(globalvar);
}
function foo() {
  let secret = "我是秘密";
  console.log(secret);
  console.log(secret);
}
