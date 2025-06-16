# ⚡ `generateRandomString` - 生成随机字符串

`generateRandomString` 是一个高效的工具函数，用于生成指定长度的随机字符串。它适用于生成唯一标识符、临时密码或测试数据等场景。

它具有以下特点：

- **🚀 高效生成**：快速生成包含大小写字母和数字的随机字符串。
- **🛡️ 健壮可靠**：支持自定义长度，默认长度为 10，确保灵活性和稳定性。
- **✨ 使用简单**：接口直观，易于集成到各种应用场景。
- **🌍 纯函数**：无副作用，生成结果独立于输入，符合现代编程范式。

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

通过 ES6 模块导入 `generateRandomString` 函数。

JavaScript

```javascript
import { generateRandomString } from 'your-package-name';

// 生成默认长度（10）的随机字符串
console.log(generateRandomString()); // 输出示例: X7bPqW9zT2

// 生成指定长度（5）的随机字符串
console.log(generateRandomString(5)); // 输出示例: kM4nR

// 生成较长字符串（15）
console.log(generateRandomString(15)); // 输出示例: aB9xPqW3zT2mY8n
```

### 异常处理示例

函数能够处理各种边缘情况：

JavaScript

```javascript
const testCases = [
    undefined, // 使用默认长度 10
    5, // 自定义长度
    0, // 空字符串
    -1, // 负数仍返回空字符串
    'invalid' // 非数字仍使用默认长度
];

testCases.forEach(value => {
    console.log(`Input length: ${JSON.stringify(value)} => Output: ${generateRandomString(value)}`);
});
/*
输出示例:
Input length: undefined => Output: Kj9mPqW3zT
Input length: 5 => Output: xY7nR
Input length: 0 => Output: ''
Input length: -1 => Output: ''
Input length: "invalid" => Output: aB8xPqW3zT
*/
```

## 实现思路

`generateRandomString` 的核心是通过循环和随机选择字符生成指定长度的字符串，逻辑简单且高效。

1. **字符集定义**：
    - 定义一个包含大写字母、小写字母和数字的字符集 `characters`，确保生成的字符串具有多样性。

2. **输入处理**：
    - 使用默认参数 `length = 10`，如果未提供长度或提供无效值，则使用默认值。
    - 循环 `length` 次，每次从字符集中随机选择一个字符。

3. **随机生成**：
    - 使用 `Math.random()` 生成随机索引，结合 `Math.floor()` 和 `characters.length` 选择字符。
    - 通过 `charAt` 获取字符并追加到结果字符串。

4. **返回结果**：
    - 返回生成的随机字符串。如果 `length` 小于或等于 0，返回空字符串。

通过这种方式，`generateRandomString` 高效生成随机字符串，适用于多种场景。

## API 参考

### `generateRandomString([length])`

#### 参数说明

| **参数** | **类型** | **必需** | **描述**                              |
| -------- | -------- | -------- | ------------------------------------- |
| `length` | `number` | 否       | 生成的字符串长度，默认为 10。         |

#### 返回值

| **类型**  | **描述**                                           |
| --------- | -------------------------------------------------- |
| `string`  | 返回指定长度的随机字符串。如果长度无效，返回空字符串。 |