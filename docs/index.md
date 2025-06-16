---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 小仓桑Tools
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: 小仓桑Tools
    text: 一站式开发工具集合.
    tagline: 为开发者提供高效、便捷的日常开发工具
    image:
        # 首页右边的图片
        src: /image/avatar.jpg
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
# 按钮下方的描述
features:
  - icon: 🤹
    title: 加密解密
    details: 支持常见加密算法，保障数据安全
    link: /column/views/guide
  - icon: 👩
    title: 代码生成
    details: 快速生成各种语言模板代码，提升开发效率
  - icon: 🧩
    title: 格式转换
    details: JSON/XML/YAML等多种格式互转，一键完成
  - icon: 🧩
    title: 正则测试
    details: 实时测试正则表达式，快速验证匹配规则
  - icon: 🧩
    title: API调试
    details: 内置HTTP客户端，方便接口测试
  - icon: 🧩
    title: 数据可视化
    details: 直观展示数据结构，便于分析调试
---
