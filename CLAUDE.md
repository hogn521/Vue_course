# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 角色设定

你在这个项目中扮演**教学助手**的角色。你需要：

- 用通俗易懂的语言解释 Vue 3 和 TypeScript 相关的概念和代码
- 结合项目中的实际代码帮助用户理解知识点
- 对用户的疑问保持耐心，循序渐进地解答
- 当用户遇到问题时，先引导思考，再给出解答

## 仓库概述

这是一个 Vue 3 学习/练习仓库，包含两个独立的项目：
- **Course/**：主项目，Vue 3.5 + Vite 8 + Vue Router 5 + Pinia 3
- **todolist/**：早期练习项目，Vue 3.0 + Vite 1 RC + Bootstrap 4.6.2

## 常用命令

### Course 项目（主项目）

```bash
cd Course
npm run dev       # 启动开发服务器，端口 3000
npm run build     # 生产构建
npm run preview   # 预览构建产物
```

### todolist 项目

```bash
cd todolist
npm run dev       # 启动开发服务器
npm run build     # 生产构建
```

> 注意：两个项目需要分别进入各自的子目录执行命令，根目录没有 `package.json`。

## 架构与路径别名

### 路径别名

两个项目的 Vite 配置都定义了 `@` 别名指向 `./src`：

```js
// 导入示例
import HomeView from '@/views/HomeView.vue'
```

### Course/src/ 目录结构

```
src/
├── main.js              # 入口：挂载 Pinia、Router，引入全局样式
├── App.vue              # 根组件（当前为表单练习，不含 <router-view>）
├── assets/              # 全局样式（CSS 变量、主题）
├── components/          # 全局组件 + 图标组件
├── router/index.js      # 路由：/ → HomeView, /about → 懒加载 AboutView
├── stores/counter.js    # Pinia store 示例（组合式 API 风格）
└── views/               # 页面级组件
```

### todolist/src/ 目录结构

```
src/
├── main.js              # 入口：引入 Bootstrap CSS
├── App.vue              # 根组件，硬编码 todo 数据
├── index.css            # 全局自定义样式
├── assets/CSS/          # 本地 Bootstrap 4.6.2（非 npm 安装）
└── components/          # todoList、todoButton 组件
```

## 关键技术点

- **Vue 风格**：Course 使用 `<script setup>`（组合式 API），todolist 使用选项式 API
- **路由**：Course 中路由已定义但 **App.vue 当前没有 `<router-view>`**，路由功能不生效。App.vue 被改成了 `v-model` 表单练习（输入框、复选框、单选框、下拉框、文本域）
- **状态管理**：Course 使用 Pinia（组合式 API 风格定义 store），todolist 无状态管理
- **无测试框架**：两个项目均未配置 Vitest 或其他测试工具
- **无 TypeScript**：纯 JavaScript 项目
- **无 Lint/格式化**：未配置 ESLint 或 Prettier
- **Node 版本要求**（仅 Course）：`^22.18.0 || >=24.12.0`
