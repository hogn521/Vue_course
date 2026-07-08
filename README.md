# Vue 课程学习仓库

个人前端学习笔记与代码练习，涵盖 JavaScript 基础、TypeScript 入门以及 Vue 3 全家桶实战。

---

## 📁 目录结构

```
Vue_course/
├── Javascript/          # JavaScript 基础练习
│   ├── web_APIS/        # DOM 操作、事件处理
│   ├── 防抖/            # 手写 debounce（lodash 对比）
│   ├── 节流/            # 手写 throttle（lodash 对比）
│   ├── 字符串/          # 字符串常用方法
│   ├── Promise异步函数/ # Promise 与异步编程
│   ├── this的指向/      # this 绑定规则
│   ├── Anonymous_function/  # 匿名函数、回调、数组方法
│   └── course1/         # JS 事件练习
│
├── Typescript/          # TypeScript 入门练习
│   ├── 01/              # 基础类型、枚举、元组
│   ├── data_type/       # 类型练习与习题
│   └── class/           # 类、继承、接口
│
├── Course/              # Vue 3 主项目（Vite + Router + Pinia）
│   ├── src/
│   │   ├── views/       # 页面组件
│   │   ├── components/  # 通用组件 + 图标
│   │   ├── router/      # Vue Router 路由配置
│   │   └── stores/      # Pinia 状态管理
│   └── ...
│
└── todolist/            # 早期 Vue 3 练习项目（Bootstrap UI）
```

---

## ⚙️ 技术栈

| 项目 | 技术 | 构建工具 |
|------|------|---------|
| `Course/` | Vue 3.5 + Router + Pinia | Vite 8 |
| `todolist/` | Vue 3.0 + Bootstrap 4 | Vite 1 |
| `Javascript/` | 原生 JS（ES6+） | — |
| `Typescript/` | TypeScript | `tsx` / `tsc` |

---

## 🚀 快速开始

### Course 主项目

```bash
cd Course
npm install
npm run dev       # 启动开发服务器 → http://localhost:3000
```

### todolist 项目

```bash
cd todolist
npm install
npm run dev
```

### TypeScript 练习

```bash
cd Typescript

# 运行 .ts 文件
npx tsx 01/data_type.ts

# 类型检查（不生成输出）
npx tsc --noEmit 01/data_type.ts
```

---

## 📝 笔记索引

### JavaScript
- [防抖与节流](Javascript/防抖/) — 手写实现 + lodash 对比
- [this 指向](Javascript/this的指向/) — 普通函数 vs 箭头函数
- [Web APIs](Javascript/web_APIS/) — 获取元素、事件监听
- [Promise](Javascript/Promise异步函数/) — 异步编程

### TypeScript
- [基础类型与枚举](Typescript/01/) — `any`/`unknown`/`enum`/元组
- [类与接口](Typescript/class/) — `class`/`extends`/`interface`
- [类型练习](Typescript/data_type/) — 元组习题

---

> 持续更新中 🚧
