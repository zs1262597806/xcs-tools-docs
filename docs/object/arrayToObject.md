# ⚡ `arrayToObject` - 数组转对象查找表

`arrayToObject` 是一个非常实用的数据转换工具，它能将一个对象数组（Array of Objects）转换为一个以指定属性值为键（Key）的对象。转换后的对象可以作为一个高效的查找表（Lookup Table），让你能够通过键值快速访问到目标对象，从而避免了频繁地遍历数组。

它具有以下特点：

- **🚀 查询高效**：将 O(n) 的数组遍历查询提升为 O(1) 的对象属性访问。
- **🛡️ 健壮可靠**：在转换过程中会进行严格的检查，跳过不规范的元素（如 `null`、非对象或缺少指定 `key` 的元素），确保程序的稳定性。
- **✨ 结构清晰**：将列表结构转换为键值映射结构，使数据关系更明确，易于管理。
- **🌍 纯函数**：不修改原始输入数组，符合现代编程范式。

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

通过 ES6 模块导入 `arrayToObject` 函数。

JavaScript

```javascript
import { arrayToObject } from 'your-package-name';

const users = [
    { id: 101, name: 'Alice', role: 'Admin' },
    { id: 102, name: 'Bob', role: 'User' },
    { id: 103, name: 'Charlie', role: 'Moderator' }
];

// 使用 'id' 作为 key，将数组转换为对象
const usersMap = arrayToObject(users, 'id');

console.log(usersMap);
/*
输出:
{
  "101": { id: 101, name: 'Alice', role: 'Admin' },
  "102": { id: 102, name: 'Bob', role: 'User' },
  "103": { id: 103, name: 'Charlie', role: 'Moderator' }
}
*/

// 现在可以快速查找 id 为 102 的用户，无需遍历
const bob = usersMap[102];
console.log(bob); // 输出: { id: 102, name: 'Bob', role: 'User' }
```

### 异常处理示例

函数会自动处理不规范的数据：

JavaScript

```javascript
const messyData = [
    { id: 'a', value: 1 },
    null, // 会被跳过
    { id: 'b', value: 2 },
    { value: 3 }, // 缺少 'id' key，会被跳过
    'not an object' // 会被跳过
];

const dataMap = arrayToObject(messyData, 'id');
console.log(dataMap);
/*
输出:
{
  "a": { id: 'a', value: 1 },
  "b": { id: 'b', value: 2 }
}
*/
```

## 实现思路

`arrayToObject` 的核心是利用了 JavaScript 数组的 `reduce` 方法来聚合数据，并构建最终的对象。

1. 输入验证：

   函数入口处，首先通过 Array.isArray(arr) 判断输入是否为数组。如果不是，直接返回一个空对象 {}，这是保障函数健壮性的第一道防线。

2. 使用 reduce 进行累积：

   arr.reduce() 方法接收一个回调函数和一个初始值（这里是空对象 {}），对数组中的每个元素执行该回调函数，并将其结果汇总，成为单个返回值。

   - `acc` (Accumulator)：累加器。在我们的例子中，它就是最终要构建的对象。它的初始值是 `reduce` 的第二个参数 `{}`。
   - `current` (Current Value)：数组中正在处理的当前元素。

3. 处理每个元素：

   对于数组中的每一个 current 元素，回调函数会执行以下逻辑检查：

   - `current && typeof current === 'object'`: 确保当前元素不是 `null` 或 `undefined`，并且它是一个对象。
   - `key in current`: 检查这个对象是否确实拥有我们指定的 `key` 属性。
   - 如果以上所有条件都满足，说明这是一个有效的元素。于是，我们将 `current` 对象本身作为值，`current[key]`（即该对象中 `key` 属性对应的值）作为键，存入累加器 `acc` 中：`acc[current[key]] = current;`。

4. 返回结果：

   在遍历完所有数组元素后，reduce 方法返回最终的 acc 对象，这个对象就是我们需要的查找表。

通过这种方式，`arrayToObject` 以一种安全且高效的方式，将数组的线性结构转换成了对象的哈希映射结构。

## API 参考

### `arrayToObject(arr, key)`

#### 参数说明

| **参数** | **类型**        | **必需** | **描述**                                          |
| -------- | --------------- | -------- | ------------------------------------------------- |
| `arr`    | `Array<Object>` | 是       | 需要转换的对象数组。                              |
| `key`    | `string`        | 是       | 数组中每个对象里，将用作新对象键（Key）的属性名。 |

#### 返回值

| **类型** | **描述**                                                     |
| -------- | ------------------------------------------------------------ |
| `Object` | 返回一个以指定 `key` 的值作为键的查找表对象。如果输入 `arr` 不是数组，则返回空对象。 |