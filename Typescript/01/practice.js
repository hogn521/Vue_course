// 传概念createUser
function createUser(id, name) {
    let result = [id, name, false];
    return result;
}
// 调用，并解构
let [id, studentName, score, hobby] = createUser(12, "michael");
console.log(`id是${id},studentname:${studentName}，score：${score},hobby:${hobby}`);
export {};
