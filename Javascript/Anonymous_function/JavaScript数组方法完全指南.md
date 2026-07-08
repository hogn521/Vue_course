# JavaScript 数组方法完全指南

## 目录
- [1. 数组创建和初始化](#1-数组创建和初始化)
- [2. 增删改方法（改变原数组）](#2-增删改方法改变原数组)
- [3. 查找和访问方法（不改变原数组）](#3-查找和访问方法不改变原数组)
- [4. 遍历和转换方法（不改变原数组）](#4-遍历和转换方法不改变原数组)
- [5. 累积和归约方法](#5-累积和归约方法)
- [6. 数组转换和判断](#6-数组转换和判断)
- [7. 实战应用示例](#7-实战应用示例)
- [8. 方法速查表](#8-方法速查表)

---

## 1. 数组创建和初始化

### 创建数组的各种方式

```javascript
// 1. 数组字面量（推荐）
const arr1 = [1, 2, 3, 4, 5];
console.log("数组字面量:", arr1);

// 2. Array 构造函数
const arr2 = new Array(1, 2, 3, 4, 5);
console.log("Array 构造函数:", arr2);

// 3. Array.of（ES6，创建包含指定元素的数组）
const arr3 = Array.of(1, 2, 3, 4, 5);
console.log("Array.of:", arr3);

// 4. Array.from（从类数组创建数组）
const str = "hello";
const arr4 = Array.from(str);
console.log("Array.from:", arr4); // ['h', 'e', 'l', 'l', 'o']

// 5. 创建指定长度数组并填充
const arr5 = new Array(5).fill(0);
console.log("fill 填充:", arr5); // [0, 0, 0, 0, 0]
```

---

## 2. 增删改方法（改变原数组）

### push() - 在数组末尾添加元素

```javascript
// 语法：数组.push(元素1, 元素2, ...)
// 返回值：新数组的长度

const fruits = ['苹果', '香蕉'];
const newLength = fruits.push('橙子', '葡萄');
console.log("push 后:", fruits); // ['苹果', '香蕉', '橙子', '葡萄']
console.log("返回长度:", newLength); // 4
```

### pop() - 删除数组末尾元素

```javascript
// 语法：数组.pop()
// 返回值：被删除的元素

const fruits = ['苹果', '香蕉', '橙子'];
const removed = fruits.pop();
console.log("pop 后:", fruits); // ['苹果', '香蕉']
console.log("删除的元素:", removed); // '橙子'
```

### shift() - 删除数组开头元素

```javascript
// 语法：数组.shift()
// 返回值：被删除的元素

const fruits = ['苹果', '香蕉', '橙子'];
const removed = fruits.shift();
console.log("shift 后:", fruits); // ['香蕉', '橙子']
console.log("删除的元素:", removed); // '苹果'
```

### unshift() - 在数组开头添加元素

```javascript
// 语法：数组.unshift(元素1, 元素2, ...)
// 返回值：新数组的长度

const fruits = ['香蕉', '橙子'];
const newLength = fruits.unshift('苹果');
console.log("unshift 后:", fruits); // ['苹果', '香蕉', '橙子']
console.log("返回长度:", newLength); // 3
```

### splice() - 删除、插入、替换元素

```javascript
// 语法：数组.splice(开始位置, 删除个数, 要添加的元素...)
// 返回值：被删除的元素组成的数组

const fruits = ['苹果', '香蕉', '橙子', '葡萄'];

// 删除元素：从索引1开始删除2个元素
const deleted = fruits.splice(1, 2);
console.log("删除后:", fruits); // ['苹果', '葡萄']
console.log("删除的元素:", deleted); // ['香蕉', '橙子']

// 插入元素：在索引1处插入元素（删除个数为0）
fruits.splice(1, 0, '香蕉', '橙子');
console.log("插入后:", fruits); // ['苹果', '香蕉', '橙子', '葡萄']

// 替换元素：从索引1开始替换1个元素
fruits.splice(1, 1, '芒果');
console.log("替换后:", fruits); // ['苹果', '芒果', '橙子', '葡萄']
```

### sort() - 对数组进行排序

```javascript
// 语法：数组.sort(比较函数)
// 注意：会改变原数组

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// 数字排序（升序）
numbers.sort((a, b) => a - b);
console.log("升序排序:", numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// 数字排序（降序）
numbers.sort((a, b) => b - a);
console.log("降序排序:", numbers);

// 对象数组排序
const users = [
  { id: 3, name: '张三' },
  { id: 1, name: '李四' },
  { id: 2, name: '王五' }
];
users.sort((a, b) => a.id - b.id);
console.log("对象排序:", users);
```

### reverse() - 反转数组顺序

```javascript
// 语法：数组.reverse()
// 返回值：反转后的数组引用

const fruits = ['苹果', '香蕉', '橙子'];
fruits.reverse();
console.log("反转后:", fruits); // ['橙子', '香蕉', '苹果']
```

---

## 3. 查找和访问方法（不改变原数组）

### slice() - 提取数组片段

```javascript
// 语法：数组.slice(开始位置, 结束位置)
// 注意：不包含结束位置
// 返回值：新数组

const fruits = ['苹果', '香蕉', '橙子', '葡萄', '芒果'];

// 获取前3个
const first3 = fruits.slice(0, 3);
console.log("前3个:", first3); // ['苹果', '香蕉', '橙子']

// 获取最后2个
const last2 = fruits.slice(-2);
console.log("最后2个:", last2); // ['葡萄', '芒果']

// 获取中间部分
const middle = fruits.slice(1, -1);
console.log("中间部分:", middle); // ['香蕉', '橙子', '葡萄']
```

### concat() - 连接数组

```javascript
// 语法：数组.concat(数组1, 数组2, ...)
// 返回值：新数组

const fruits = ['苹果', '香蕉'];
const moreFruits = ['橙子', '葡萄'];
const allFruits = fruits.concat(moreFruits, '芒果');
console.log("连接后:", allFruits); // ['苹果', '香蕉', '橙子', '葡萄', '芒果']
```

### indexOf() - 查找元素索引

```javascript
// 语法：数组.indexOf(要查找的元素, 开始位置)
// 返回值：索引或 -1（找不到）

const fruits = ['苹果', '香蕉', '橙子', '香蕉'];
console.log(fruits.indexOf('香蕉'));      // 1
console.log(fruits.indexOf('西瓜'));      // -1
console.log(fruits.indexOf('香蕉', 2));   // 3（从索引2开始查找）
```

### includes() - 检查是否包含元素

```javascript
// 语法：数组.includes(要查找的元素, 开始位置)
// 返回值：true 或 false

const fruits = ['苹果', '香蕉', '橙子'];
console.log(fruits.includes('香蕉'));    // true
console.log(fruits.includes('西瓜'));    // false
```

---

## 4. 遍历和转换方法（不改变原数组）

### forEach() - 遍历数组

```javascript
// 语法：数组.forEach(回调函数)
// 回调函数参数：(元素, 索引, 原数组)
// 返回值：undefined

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`索引${index}: ${num}`);
});
// 输出：
// 索引0: 1
// 索引1: 2
// 索引2: 3
// 索引3: 4
// 索引4: 5

// 对象数组遍历
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 }
];

users.forEach(user => {
  console.log(`${user.name} - ${user.age}岁`);
});
```

### map() - 转换数组

```javascript
// 语法：数组.map(回调函数)
// 回调函数参数：(元素, 索引, 原数组)
// 返回值：新数组（长度与原数组相同）

const numbers = [1, 2, 3, 4, 5];

// 每个元素乘以2
const doubled = numbers.map(num => num * 2);
console.log("乘以2:", doubled); // [2, 4, 6, 8, 10]

// 对象数组转换
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 }
];
const names = users.map(user => user.name);
console.log("用户名:", names); // ['张三', '李四']

// 重要：map 必须有返回值
const result = numbers.map(num => {
  return num * 2; // 必须有 return
});
```

### filter() - 过滤数组

```javascript
// 语法：数组.filter(回调函数)
// 回调函数参数：(元素, 索引, 原数组)
// 返回值：满足条件的新数组

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 过滤偶数
const evens = numbers.filter(num => num % 2 === 0);
console.log("偶数:", evens); // [2, 4, 6, 8, 10]

// 过滤大于5的数
const bigNumbers = numbers.filter(num => num > 5);
console.log("大于5:", bigNumbers); // [6, 7, 8, 9, 10]

// 对象数组过滤
const users = [
  { id: 1, name: '张三', age: 25, isActive: true },
  { id: 2, name: '李四', age: 30, isActive: false },
  { id: 3, name: '王五', age: 28, isActive: true }
];
const activeUsers = users.filter(user => user.isActive);
console.log("活跃用户:", activeUsers);
```

### find() - 查找单个元素

```javascript
// 语法：数组.find(回调函数)
// 返回值：第一个满足条件的元素或 undefined

const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 3, name: '王五', age: 28 }
];

// 查找年龄大于28的用户
const foundUser = users.find(user => user.age > 28);
console.log("找到的用户:", foundUser); // { id: 2, name: '李四', age: 30 }

// 查找特定ID的用户
const user = users.find(user => user.id === 3);
console.log("ID为3的用户:", user); // { id: 3, name: '王五', age: 28 }
```

### findIndex() - 查找元素索引

```javascript
// 语法：数组.findIndex(回调函数)
// 返回值：第一个满足条件的元素索引或 -1

const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num > 3);
console.log("索引:", index); // 3（数字4的索引）
```

### every() - 检查是否所有元素都满足条件

```javascript
// 语法：数组.every(回调函数)
// 返回值：true 或 false

const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);
console.log("都是偶数:", allEven); // true

const allGreaterThanFive = numbers.every(num => num > 5);
console.log("都大于5:", allGreaterThanFive); // false
```

### some() - 检查是否有元素满足条件

```javascript
// 语法：数组.some(回调函数)
// 返回值：true 或 false

const numbers = [1, 3, 5, 7, 9];

const hasEven = numbers.some(num => num % 2 === 0);
console.log("有偶数:", hasEven); // false

const hasGreaterThanFive = numbers.some(num => num > 5);
console.log("有大于5的:", hasGreaterThanFive); // true
```

---

## 5. 累积和归约方法

### reduce() - 数组归约（最强大的数组方法）

```javascript
// 语法：数组.reduce(回调函数, 初始值)
// 回调函数参数：(累积值, 当前元素, 索引, 原数组)
// 返回值：累积结果

const numbers = [1, 2, 3, 4, 5];

// 求和
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("求和:", sum); // 15

// 求积
const product = numbers.reduce((total, num) => total * num, 1);
console.log("求积:", product); // 120

// 找最大值
const max = numbers.reduce((max, num) => Math.max(max, num), 0);
console.log("最大值:", max); // 5

// 数组分组
const people = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 },
  { name: '王五', age: 25 }
];

const groupedByAge = people.reduce((groups, person) => {
  const age = person.age;
  if (!groups[age]) {
    groups[age] = [];
  }
  groups[age].push(person);
  return groups;
}, {});

console.log("按年龄分组:", groupedByAge);
// {
//   25: [{ name: '张三', age: 25 }, { name: '王五', age: 25 }],
//   30: [{ name: '李四', age: 30 }]
// }

// 数组转对象
const fruits = ['苹果', '香蕉', '橙子'];
const fruitObject = fruits.reduce((obj, fruit, index) => {
  obj[index] = fruit;
  return obj;
}, {});

console.log("水果对象:", fruitObject);
// { 0: '苹果', 1: '香蕉', 2: '橙子' }
```

---

## 6. 数组转换和判断

### join() - 数组转字符串

```javascript
// 语法：数组.join(分隔符)
// 返回值：字符串

const fruits = ['苹果', '香蕉', '橙子'];

// 默认使用逗号分隔
const result1 = fruits.join();
console.log("默认分隔符:", result1); // '苹果,香蕉,橙子'

// 使用自定义分隔符
const result2 = fruits.join(' - ');
console.log("自定义分隔符:", result2); // '苹果 - 香蕉 - 橙子'

// 无分隔符
const result3 = fruits.join('');
console.log("无分隔符:", result3); // '苹果香蕉橙子'

// 构建文件路径
const pathParts = ['home', 'user', 'documents', 'file.txt'];
const filePath = pathParts.join('/');
console.log("文件路径:", filePath); // 'home/user/documents/file.txt'
```

### toString() - 数组转字符串

```javascript
// 语法：数组.toString()
// 返回值：字符串

const fruits = ['苹果', '香蕉', '橙子'];
console.log(fruits.toString()); // '苹果,香蕉,橙子'
```

### isArray() - 检查是否为数组

```javascript
// 语法：Array.isArray(值)
// 返回值：true 或 false

Array.isArray([1, 2, 3));     // true
Array.isArray({ a: 1 });       // false
Array.isArray('hello');       // false
```

### flat() - 数组扁平化

```javascript
// 语法：数组.flat(扁平化层数)
// 返回值：新数组

const nested = [1, [2, [3, [4, 5]]]];

// 扁平一层
const flat1 = nested.flat();
console.log("扁平一层:", flat1); // [1, 2, [3, [4, 5]]]

// 扁平两层
const flat2 = nested.flat(2);
console.log("扁平两层:", flat2); // [1, 2, 3, [4, 5]]

// 完全扁平
const flatAll = nested.flat(Infinity);
console.log("完全扁平:", flatAll); // [1, 2, 3, 4, 5]
```

---

## 7. 实战应用示例

### 购物车功能

```javascript
const cart = [
  { id: 1, name: '手机', price: 1999, quantity: 2 },
  { id: 2, name: '耳机', price: 299, quantity: 1 },
  { id: 3, name: '充电宝', price: 99, quantity: 3 }
];

// 计算总价
const totalPrice = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
console.log("购物车总价:", totalPrice); // 4594

// 获取商品名称列表
const itemNames = cart.map(item => item.name);
console.log("商品名称:", itemNames); // ['手机', '耳机', '充电宝']

// 找到价格超过100的商品
const expensiveItems = cart.filter(item => item.price > 100);
console.log("昂贵商品:", expensiveItems);

// 检查是否所有商品都有库存
const allInStock = cart.every(item => item.quantity > 0);
console.log("所有商品有库存:", allInStock); // true

// 检查是否有价格超过500的商品
const hasExpensive = cart.some(item => item.price > 500);
console.log("有昂贵商品:", hasExpensive); // true
```

### 用户数据处理

```javascript
const users = [
  { id: 1, name: '张三', age: 25, city: '北京', isActive: true },
  { id: 2, name: '李四', age: 30, city: '上海', isActive: false },
  { id: 3, name: '王五', age: 28, city: '北京', isActive: true },
  { id: 4, name: '赵六', age: 35, city: '广州', isActive: true },
  { id: 5, name: '钱七', age: 22, city: '北京', isActive: false }
];

// 1. 找出所有北京的用户
const beijingUsers = users.filter(user => user.city === '北京');
console.log("北京用户:", beijingUsers);

// 2. 获取活跃用户的名称（链式调用）
const activeUserNames = users
  .filter(user => user.isActive)
  .map(user => user.name);
console.log("活跃用户名称:", activeUserNames); // ['张三', '王五', '赵六']

// 3. 按城市分组用户
const usersByCity = users.reduce((groups, user) => {
  const city = user.city;
  if (!groups[city]) {
    groups[city] = [];
  }
  groups[city].push(user);
  return groups;
}, {});
console.log("按城市分组:", usersByCity);

// 4. 计算活跃用户的平均年龄
const activeUsers = users.filter(user => user.isActive);
const averageAge = activeUsers.reduce((sum, user) => sum + user.age, 0) / activeUsers.length;
console.log("活跃用户平均年龄:", averageAge); // 29.33

// 5. 创建用户ID到姓名的映射
const userIdToName = users.reduce((map, user) => {
  map[user.id] = user.name;
  return map;
}, {});
console.log("ID映射:", userIdToName);
// { 1: '张三', 2: '李四', 3: '王五', 4: '赵六', 5: '钱七' }
```

### 数据统计和分析

```javascript
const scores = [85, 90, 78, 92, 88, 76, 95, 89, 84, 91];

// 计算平均分
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("平均分:", average); // 86.8

// 找最高分和最低分
const maxScore = scores.reduce((max, score) => Math.max(max, score), 0);
const minScore = scores.reduce((min, score) => Math.min(min, score), 100);
console.log("最高分:", maxScore); // 95
console.log("最低分:", minScore); // 76

// 统计及格人数（>=80分）
const passingCount = scores.filter(score => score >= 80).length;
console.log("及格人数:", passingCount); // 7

// 检查是否所有人都及格（>=60分）
const allPassing = scores.every(score => score >= 60);
console.log("所有人都及格:", allPassing); // true

// 找到第一个不及格的人
const firstFailing = scores.find(score => score < 80);
console.log("第一个不及格分数:", firstFailing); // 78
```

### 表单数据处理

```javascript
const formData = [
  { field: 'username', value: 'zhangsan', required: true },
  { field: 'email', value: 'zhangsan@example.com', required: true },
  { field: 'age', value: '25', required: false },
  { field: 'phone', value: '', required: true }
];

// 检查所有必填字段是否都有值
const allRequiredFilled = formData
  .filter(field => field.required)
  .every(field => field.value !== '');

console.log("所有必填字段已填写:", allRequiredFilled); // false

// 找到未填写的必填字段
const emptyRequiredFields = formData
  .filter(field => field.required && field.value === '')
  .map(field => field.field);

console.log("未填写的必填字段:", emptyRequiredFields); // ['phone']

// 获取所有字段名
const fieldNames = formData.map(field => field.field);
console.log("字段名:", fieldNames); // ['username', 'email', 'age', 'phone']
```

---

## 8. 方法速查表

### 增删改方法（改变原数组）

| 方法 | 功能 | 返回值 | 示例 |
|------|------|--------|------|
| `push()` | 末尾添加元素 | 新长度 | `arr.push(4, 5)` |
| `pop()` | 删除末尾元素 | 删除的元素 | `arr.pop()` |
| `shift()` | 删除开头元素 | 删除的元素 | `arr.shift()` |
| `unshift()` | 开头添加元素 | 新长度 | `arr.unshift(1, 2)` |
| `splice()` | 删除/插入/替换 | 删除的元素数组 | `arr.splice(1, 2, 'new')` |
| `sort()` | 排序数组 | 排序后的数组引用 | `arr.sort((a,b) => a-b)` |
| `reverse()` | 反转数组 | 反转后的数组引用 | `arr.reverse()` |

### 查找和访问方法（不改变原数组）

| 方法 | 功能 | 返回值 | 示例 |
|------|------|--------|------|
| `slice()` | 提取数组片段 | 新数组 | `arr.slice(1, 3)` |
| `concat()` | 连接数组 | 新数组 | `arr.concat([4, 5])` |
| `indexOf()` | 查找元素索引 | 索引或 -1 | `arr.indexOf(3)` |
| `includes()` | 检查包含元素 | true/false | `arr.includes(3)` |
| `join()` | 转换为字符串 | 字符串 | `arr.join(',')` |

### 遍历和转换方法（不改变原数组）

| 方法 | 功能 | 返回值 | 示例 |
|------|------|--------|------|
| `forEach()` | 遍历数组 | undefined | `arr.forEach(x => console.log(x))` |
| `map()` | 转换数组 | 新数组 | `arr.map(x => x * 2)` |
| `filter()` | 过滤数组 | 新数组 | `arr.filter(x => x > 3)` |
| `find()` | 查找单个元素 | 元素或 undefined | `arr.find(x => x > 3)` |
| `findIndex()` | 查找元素索引 | 索引或 -1 | `arr.findIndex(x => x > 3)` |
| `every()` | 检查所有元素 | true/false | `arr.every(x => x > 0)` |
| `some()` | 检查是否有元素 | true/false | `arr.some(x => x > 3)` |

### 累积和归约方法

| 方法 | 功能 | 返回值 | 示例 |
|------|------|--------|------|
| `reduce()` | 数组归约 | 累积结果 | `arr.reduce((sum, x) => sum + x, 0)` |
| `reduceRight()` | 从右向左归约 | 累积结果 | `arr.reduceRight((sum, x) => sum + x, 0)` |

### 数组转换和判断

| 方法 | 功能 | 返回值 | 示例 |
|------|------|--------|------|
| `join()` | 转换为字符串 | 字符串 | `arr.join('-')` |
| `toString()` | 转换为字符串 | 字符串 | `arr.toString()` |
| `isArray()` | 检查是否为数组 | true/false | `Array.isArray(arr)` |
| `flat()` | 数组扁平化 | 新数组 | `arr.flat(2)` |

---

## 学习建议

### 重点掌握的方法（最常用）
1. **map()** - 数据转换
2. **filter()** - 数据过滤
3. **reduce()** - 数据累积和复杂操作
4. **forEach()** - 数据遍历
5. **find()** - 查找元素

### 方法选择指南
- **需要转换数据** → `map()`
- **需要筛选数据** → `filter()`
- **需要累积计算** → `reduce()`
- **需要执行操作** → `forEach()`
- **需要查找元素** → `find()`
- **需要检查条件** → `every()` / `some()`

### 性能考虑
- **简单遍历** → `for` 循环最快
- **复杂操作** → `reduce()` 可以避免多次遍历
- **链式调用** → `map()` + `filter()` 等组合使用

### 常见错误
1. **忘记返回值**：`map()` 和 `filter()` 必须有返回值
2. **修改原数组**：注意区分改变和不改变原数组的方法
3. **this 绑定**：在回调函数中注意 `this` 的指向
4. **初始值设置**：`reduce()` 记得设置初始值

---

## 实战练习建议

### 基础练习
1. 使用 `map()` 将数字数组转换为字符串数组
2. 使用 `filter()` 过滤出偶数
3. 使用 `reduce()` 计算数组总和
4. 使用 `find()` 查找特定元素

### 进阶练习
1. 链式调用：先 `filter()` 再 `map()` 处理数据
2. 使用 `reduce()` 进行数据分组
3. 使用 `every()` 和 `some()` 进行数据验证
4. 组合使用多个方法解决复杂问题

### 实战项目
1. 购物车系统（添加、删除、计算总价）
2. 用户管理系统（筛选、搜索、排序）
3. 数据分析工具（统计、分组、可视化）
4. 表单验证系统（检查必填项、格式验证）

掌握这些数组方法将大大提升你的 JavaScript 编程能力！