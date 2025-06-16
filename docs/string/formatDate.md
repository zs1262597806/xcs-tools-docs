# ⚡ `formatDate` - 格式化日期输出

`formatDate` 是一个功能强大的工具函数，用于将日期（Date 对象、时间戳或日期字符串）格式化为指定的字符串格式。它支持多种日期格式模板，适用于国际化、日志记录或用户界面显示等场景。

它具有以下特点：

- **🚀 灵活格式化**：支持多种日期格式模板，包括年、月、日、时、分、秒、毫秒、星期和时区等。
- **🛡️ 健壮可靠**：对无效日期或空输入进行严格检查，返回空字符串，确保稳定性。
- **✨ 使用简单**：提供直观的格式模板，易于定制和使用。
- **🌍 纯函数**：不修改输入日期，符合现代编程范式。

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

通过 ES6 模块导入 `formatDate` 函数。

JavaScript

```javascript
import { formatDate } from 'your-package-name';

const date = new Date('2025-06-16T14:30:45.123');

// 默认格式
console.log(formatDate(date)); // 输出: 2025-06-16 14:30:45

// 自定义格式
console.log(formatDate(date, 'yyyy/MM/dd HH:mm:ss')); // 输出: 2025/06/16 14:30:45
console.log(formatDate(date, 'yyyy年MM月dd日 HH时mm分ss秒')); // 输出: 2025年06月16日 14时30分45秒
console.log(formatDate(date, 'EEE, dd MMM yyyy HH:mm:ss z')); // 输出: 一, 16 六 2025 14:30:45 GMT+0800
console.log(formatDate(date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')); // 输出: 2025-06-16T14:30:45.123Z
```

### 异常处理示例

函数能够处理各种边缘情况：

JavaScript

```javascript
const testCases = [
    new Date('2025-06-16T14:30:45'), // 正常 Date 对象
    1623919845123, // 时间戳
    '2025-06-16', // 日期字符串
    '', // 空字符串
    null, // null 值
    'invalid-date', // 无效日期
    undefined // undefined 值
];

testCases.forEach(value => {
    console.log(`Input: ${JSON.stringify(value)} => Output: ${formatDate(value)}`);
});
/*
输出示例:
Input: "2025-06-16T14:30:45.000Z" => Output: 2025-06-16 14:30:45
Input: 1623919845123 => Output: 2021-06-17 15:30:45
Input: "2025-06-16" => Output: 2025-06-16 00:00:00
Input: "" => Output: ''
Input: null => Output: ''
Input: "invalid-date" => Output: ''
Input: undefined => Output: ''
*/
```

## 实现思路

`formatDate` 的核心是通过正则表达式和映射表将日期对象转换为指定的字符串格式，逻辑清晰且高效。

1. **输入验证**：
    - 检查输入 `date` 是否存在。如果为空（`null` 或 `undefined`），返回空字符串 `''`。
    - 将输入转换为 `Date` 对象（`new Date(date)`），并通过 `isNaN(d.getTime())` 检查日期是否有效。如果无效，返回空字符串 `''`.

2. **辅助函数**：
    - 定义 `pad` 函数，将单数字符补齐为两位（如 `5` 转为 `05`）。
    - 定义 `pad3` 函数，将毫秒补齐为三位（如 `5` 转为 `005`）。

3. **映射表**：
    - 创建 `map` 对象，包含格式化所需的日期组件：
        - `yyyy`：四位年份
        - `MM`：两位月份
        - `dd`：两位日期
        - `HH`：两位小时
        - `mm`：两位分钟
        - `ss`：两位秒
        - `SSS`：三位毫秒
        - `EEE`：中文星期（如“日”到“六”）
        - `MMM`：中文月份（如“一”到“十二”）
        - `z`：简短时区格式（如 `GMT+0800`）
        - `zzz`：完整时区格式（如 `GMT+08:00`）

4. **格式化**：
    - 使用正则表达式 `/(yyyy|MMM|MM|dd|HH|mm|ss|SSS|EEE|zzz|z)/g` 匹配格式模板中的占位符。
    - 将匹配的占位符替换为对应的 `map` 值，非占位符部分（如分隔符）保持不变。

5. **返回结果**：
    - 返回格式化后的字符串。

通过这种方式，`formatDate` 提供灵活且可靠的日期格式化功能。

## API 参考

### `formatDate(date, [format])`

#### 参数说明

| **参数** | **类型**            | **必需** | **描述**                            |
| -------- | ------------------- | -------- |-----------------------------------|
| `date`   | `Date|number|string` | 是       | 要格式化的日期（Date 对象、时间戳或字符串）。 |
| `format` | `string`            | 否       | 格式模板，默认为 `yyyy-MM-dd HH:mm:ss`<br/>支持：<br/>- `yyyy-MM-dd HH:mm:ss`<br/>- `yyyy/MM/dd HH:mm:ss`<br/>- `yyyy.MM.dd HH:mm:ss`<br/>- `yyyy年MM月dd日 HH时mm分ss秒`<br/>- `yyyy-MM-dd`<br/>- `yyyy/MM/dd`<br/>- `yyyy.MM.dd`<br/>- `HH:mm:ss`<br/>- `HH时mm分ss秒`<br/>- `yyyy-MM-dd HH:mm`<br/>- `yyyy-MM-dd HH:mm:ss.SSS`<br/>- `yyyyMMddHHmmss`<br/>- `yyyyMMddHHmmssSSS`<br/>- `yyyyMMdd`<br/>- `EEE, dd MMM yyyy HH:mm:ss z`<br/>- `EEE MMM dd HH:mm:ss zzz yyyy`<br/>- `yyyy-MM-dd'T'HH:mm:ss'Z'`<br/>- `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`<br/>- `yyyy-MM-dd'T'HH:mm:ssZ`<br/>- `yyyy-MM-dd'T'HH:mm:ss.SSSZ` |

#### 返回值

| **类型**  | **描述**                                           |
| --------- | -------------------------------------------------- |
| `string`  | 返回格式化后的日期字符串。如果输入无效，返回空字符串。 |