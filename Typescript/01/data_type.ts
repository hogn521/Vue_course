// ============================================================
//  TypeScript 类型练习：any  ·  unknown  ·  元组
//  运行命令：npx tsx data_type.ts
//  做类型检查：npx tsc --noEmit data_type.ts
// ============================================================

// ============================================================
//  一、any 类型 —— "别管我，跳过检查"
// ============================================================



// ============================================================
//  四、综合练习思考题
// ============================================================

/*
 * 题目：
 *   1. 用 type 定义一个元组类型 UserTuple = [id: number, name: string, isVip: boolean, hobby?: string]
 *   2. 写一个函数 createUser，接收 id 和 name，返回 UserTuple
 *      （isVip 默认 false，hobby 不传）
 *   3. 调用 createUser，解构拿到各个字段，打印出来
 *
 * 提示：参考上面 3.4 的 getStudentInfo 写法
 */

// ---- 在下面写你的答案 ✍️ ----

// type UserTuple = ...

// function createUser(id: number, name: string): UserTuple {
//     ...
// }

// let [...] = createUser(...);
// console.log(...

// ============================================================
//  速查口诀
// ============================================================
//  any      → "别管我"      跳过检查，写时爽，调试火葬场
//  unknown  → "先查再用"     编译时就拦住你，更安全
//  元组     → "套餐组合"     每个位置类型固定，长度固定



enum Direction{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);
console.log(Direction[0]);

// 手动指定起始值
enum Status{
    pending =1,
    Done,
    Failed
}

// 字符串枚举
enum Colors{
    Red = "red",
    Green = "green",
    Blue= "blue"
}


// 当函数参数调用
function handleStatus(status:Status) :string{
    switch(status){
        case Status.pending:return "处理中"
        case Status.Done:return "完成了"
        case Status.Failed:return "失败了"
    }
}

console.log(handleStatus(Status.Done));




export {}
