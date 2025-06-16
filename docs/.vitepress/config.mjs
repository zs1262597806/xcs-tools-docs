import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "小仓桑Tools",
    description: "小仓桑Tools工具集",
    lang: 'zh-CN',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {
                text: '函数库',
                items: [
                    {text: '数组', link: '/array/uniqueArray'},
                    {text: '对象', link: '/object/arrayToObject'},
                    {text: '字符', link: '/string/capitalize'},
                ]
            },
            {text: 'API文档', link: '/api/spec'}
        ],

        sidebar: {
            '/array/': [
                {
                    text: '数组工具',
                    items: [
                        {text: '移除数组中的重复元素', link: '/array/uniqueArray'},
                    ]
                }
            ],
            '/object/': [
                {
                    text: '对象工具',
                    items: [
                        {text: '数组转键值映射对象', link: '/object/arrayToObject'},
                        {text: '检查一个值是否为空', link: '/object/isEmpty'}
                    ]
                }
            ],
            '/string/': [
                {
                    text: '字符工具',
                    items: [
                        {text: '首字母大写转换', link: '/string/capitalize'},
                        {text: '短横线命名转小驼峰命名', link: '/string/kebabToCamel'},
                        {text: '生成随机字符串', link: '/string/generateRandomString'},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zs1262597806/xcs-tools'},
            {icon: 'gitlab', link: 'https://github.com/zs1262597806/xcs-tools'},
        ],

        lastUpdated: {
            text: '📅 最后更新于',
            format: 'YYYY-MM-DD HH:mm:ss'
        },

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索'
                            },
                            modal: {
                                displayDetails: '显示详情',
                                resetButtonTitle: '重置搜索',
                                backButtonTitle: '返回',
                                noResultsText: '没有找到相关内容',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '导航',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        outlineTitle: "页面导航",
    },
})
