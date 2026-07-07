type UserTuple = [id:number,name:string,isVip:boolean,hobby?:string]

// 传概念createUser
function createUser(id:number,name:string):UserTuple{
    let result:UserTuple=[id,name,false]
    return result
}

// 调用，并解构

let [id, studentName, score,hobby] = createUser(12, "michael")
console.log(`id是${id},studentname:${studentName}，score：${score},hobby:${hobby}`);


export {}