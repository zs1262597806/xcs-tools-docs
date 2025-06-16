# ⚡ `kebabToCamel` - 短横线命名转小驼峰命名

`kebabToCamel` 是一个高效的工具函数，用于将短横线命名（kebab-case）的字符串转换为小驼峰命名（camelCase）。它适用于规范化变量名、属性名或其他需要从 kebab-case 转换为 camelCase 的场景。

它具有以下特点：

- **🚀 高效转换**：通过正则表达式快速完成字符串格式转换。
- **🛡️ 健壮可靠**：对非字符串输入进行检查，返回空字符串，确保稳定性。
- **✨ 使用简单**：接口直观，适合多种命名转换场景。
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

通过 ES6 模块导入 `kebabToCamel` 函数。

JavaScript

```javascript
import { kebabToCamel } from 'your-package-name';

// 测试不同字符串
console.log(kebabToCamel('hello-world')); // 输出: helloWorld
console.log(kebabToCamel('my-variable-name')); // 输出: myVariableName
console.log(kebabToCamel('single')); // 输出: single
console.log(kebabToCamel('')); // 输出: ''
```

### 异常处理示例

函数能够处理各种边缘情况：

JavaScript

```javascript
const testCases = [
    'hello-world', // 标准短横线命名
    'my-long-variable-name', // 多段短横线
    'single', // 无短横线
    '', // 空字符串
    123, // 非字符串
    null, // null 值
    undefined // undefined 值
];

testCases.forEach(value => {
    console.log(`Input: ${JSON.stringify(value)} => Output: ${kebabToCamel(value)}`);
});
/*
输出:
Input: "hello-world" => Output: helloWorld
Input: "my-long-variable-name" => Output: myLongVariableName
Input: "single" => Output: single
Input: "" => Output: ''
Input: 123 => Output: ''
Input: null => Output: ''
Input: undefined => Output: ''
*/
```

## 实现思路

`kebabToCamel` 的核心是利用正则表达式实现短横线命名到小驼峰命名的转换，逻辑高效且简洁。

1. **输入验证**：
    - 使用 `typeof str !== 'string'` 检查输入是否为字符串。如果不是，返回空字符串 `''`，确保函数健壮性。

2. **正则表达式转换**：
    - 使用 `str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase())`：
        - 正则表达式 `/-(\w)/g` 匹配短横线后跟一个单词字符（字母、数字或下划线）。
        - 替换函数将短横线移除，并将捕获的字符（`letter`）转换为大写。
        - `g` 标志确保全局替换所有匹配的短横线。

3. **返回结果**：
    - 返回转换后的字符串，保持原字符串不变。

通过这种方式，`kebabToCamel` 高效地将短横线命名转换为小驼峰命名，适用于各种规范化场景。

## API 参考

### `kebabToCamel(str)`

#### 参数说明

| **参数** | **类型** | **必需** | **描述**                     |
| -------- | -------- | -------- | ---------------------------- |
| `str`    | `string` | 是       | 要转换的短横线命名字符串。   |

#### 返回值

| **类型**  | **描述**                                           |
| --------- | -------------------------------------------------- |
| `string`  | 返回小驼峰命名的字符串。如果输入无效，返回空字符串。 |