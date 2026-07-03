// 泛型是typescript中一个强大的特性，它允许我们在定义函数、接口或类的的时候，不预先指定具体的类型，而是在使用的时候再指定类型

// 基本语法是用<T>使用 <T> (通常用 T 作为 Type 的缩写) 来声明泛型参数

// 一个返回任意类型的函数

function  identity<T>(arg:T):T{
    return arg
}

const num = identity<number>(123);
const str = identity<string>("hello");
const bool = identity<boolean>(true);

// 定义元组类型
let person:[string,number,boolean];
person = ["alice",18,true]

// 定义联合类型
let arr:(number | string)[] = [1,2,3,"alice"]


//类型别名
type CustomArray = (string | number)[]
let arr1:CustomArray = [1,2,3,"alcie"]
