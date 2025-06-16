# ⚡ `capitalize` - 首字母大写转换

`capitalize` 是一个简单高效的工具函数，用于将字符串的首字母转换为大写，同时保持字符串的其余部分不变。它适用于格式化文本、规范化用户输入或生成显示文本等场景。

它具有以下特点：

- **🚀 高效转换**：快速将字符串首字母转换为大写，性能优越。
- **🛡️ 健壮可靠**：对非字符串或空字符串进行严格检查，返回空字符串，确保稳定性。
- **✨ 使用简单**：接口直观，易于集成到各种应用场景。
- **🌍 纯函数**：不修改输入字符串，符合现代编程范式。

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

通过 ES6 模块导入 `capitalize` 函数。

JavaScript

```javascript
import { capitalize } from 'your-package-name';

// 测试不同字符串
console.log(capitalize('hello')); // 输出: Hello
console.log(capitalize('world')); // 输出: World
console.log(capitalize('javascript')); // 输出: Javascript
console.log(capitalize('')); // 输出: ''
```

### 异常处理示例

函数能够处理各种边缘情况：

JavaScript

```javascript
const testCases = [
    'apple', // 正常字符串
    'Banana', // 已包含大写
    '', // 空字符串
    123, // 非字符串
    null, // null 值
    undefined // undefined 值
];

testCases.forEach(value => {
    console.log(`Input: ${JSON.stringify(value)} => Output: ${capitalize(value)}`);
});
/*
输出:
Input: "apple" => Output: Apple
Input: "Banana" => Output: Banana
Input: "" => Output: ''
Input: 123 => Output: ''
Input: null => Output: ''
Input: undefined => Output: ''
*/
```

## 实现思路

`capitalize` 的核心是通过 JavaScript 字符串方法实现首字母大写转换，逻辑简洁且高效。

1. **输入验证**：
   - 使用 `typeof str !== 'string' || str.length === 0` 检查输入是否为字符串且非空。如果不满足条件，返回空字符串 `''`，确保函数健壮性。

2. **首字母转换**：
   - 使用 `str.charAt(0).toUpperCase()` 获取字符串的首字母并转换为大写。
   - 使用 `str.slice(1)` 获取字符串的剩余部分。

3. **拼接与返回**：
   - 将大写的首字母与剩余部分拼接，形成最终字符串并返回。

通过这种方式，`capitalize` 以安全且高效的方式完成字符串首字母大写转换。

## API 参考

### `capitalize(str)`

#### 参数说明

| **参数** | **类型** | **必需** | **描述**           |
| -------- | -------- | -------- | ------------------ |
| `str`    | `string` | 是       | 需要转换的字符串。 |

#### 返回值

| **类型** | **描述**                                             |
| -------- | ---------------------------------------------------- |
| `string` | 返回首字母大写的字符串。如果输入无效，返回空字符串。 |