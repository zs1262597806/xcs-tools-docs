# ✨ `uniqueArray` - 高效的数组去重工具

`uniqueArray` 是一个轻量、高效的辅助函数，用于从数组中移除所有重复的元素，并返回一个全新的、不含重复值的新数组。

它具有以下特点：

- **🚀 高效简洁**：基于 ES6 `Set` 实现，代码量少且性能卓越。
- **🛡️ 不可变性**：始终返回一个新数组，绝不会修改原始输入数组。
- **💪 类型安全**：在处理前会检查输入是否为数组，如果不是，则返回一个空数组，避免程序出错。

## 快速上手

### 1. 安装

Bash

```bash
# npm
npm install your-package-name

# yarn
yarn add your-package-name
```

### 2. 使用

你可以通过 ES6 模块导入 `uniqueArray` 函数。

JavaScript

```javascript
import { uniqueArray } from 'your-package-name';

// 示例 1: 处理数字数组
const numbers = [1, 2, 2, 3, 4, 3, 5];
const uniqueNumbers = uniqueArray(numbers);
console.log(uniqueNumbers); // 输出: [1, 2, 3, 4, 5]
console.log(numbers);       // 输出: [1, 2, 2, 3, 4, 3, 5] (原始数组未被改变)

// 示例 2: 处理字符串和混合类型数组
const mixedArray = ['apple', 'banana', 'apple', 10, true, 10];
const uniqueMixed = uniqueArray(mixedArray);
console.log(uniqueMixed); // 输出: ['apple', 'banana', 10, true]

// 示例 3: 处理非数组输入
const invalidInput = 'not an array';
const result = uniqueArray(invalidInput);
console.log(result); // 输出: []
```

## 实现思路

`uniqueArray` 函数的实现思路非常现代和简洁，主要依赖于 ES6 引入的两个核心特性：**`Set` 数据结构** 和 **展开语法（Spread Syntax）**。

1. 输入验证：

   函数首先通过 Array.isArray(arr) 检查传入的参数 arr 是否为一个真正的数组。如果不是，它会立即返回一个空数组 []。这是一个健壮性设计，可以防止后续操作因错误的输入类型而导致程序崩溃。

2. 利用 Set 去重：

   Set 是 ES6 提供的一种新的数据结构，它类似于数组，但其所有成员的值都是唯一的，没有重复值。当我们将一个数组传递给 new Set() 构造函数时，它会自动遍历该数组，并将所有元素添加到一个新的 Set 实例中。在这个过程中，所有重复的元素都会被自动忽略。

3. 转换回数组：

   通过 new Set(arr) 我们得到了一个不含重复值的 Set 对象。但函数需要返回一个数组，因此我们使用展开语法 ...，它可以将一个可迭代对象（如 Set）“展开”成独立的元素序列。将它放在方括号 [] 中，[...new Set(arr)]，即可轻松地将 Set 对象转换回一个新的数组。

整个过程高效且声明式，完美地利用了 JavaScript 语言的新特性来解决常见问题。

## API 参考

### `uniqueArray(arr)`

#### 参数说明

| **参数** | **类型** | **必需** | **描述**                 |
| -------- | -------- | -------- | ------------------------ |
| `arr`    | `Array`  | 是       | 需要进行去重操作的数组。 |

#### 返回值

| **类型** | **描述**                                                     |
| -------- | ------------------------------------------------------------ |
| `Array`  | 返回一个移除了重复元素的新数组。如果输入不是数组，则返回一个空数组。 |