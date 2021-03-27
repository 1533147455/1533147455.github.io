module.exports = {
    title: '灯火可亲',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title: '基础',
                collapsable: false, // 可折叠，默认为true
                sidebarDepth: 1,    // 默认为1，可提取h2。最大值为2，可提取h2和h3
                children: [
                    { title: 'HTML and CSS', path: '/basis/HTML+CSS'},
                    { title: 'JavaScript', path: '/basis/JavaScript'},
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                sidebarDepth: 1,
                initialOpenGroupIndex: -1,// 可选的, 默认值是 0
                children: [
                    { title: 'Vue', path: '/Vue/Vue',collapsable: true },
                ]
            },
            {
                title: '工具',
                collapsable: false,
                sidebarDepth: 1,
                initialOpenGroupIndex: -1,
                children: [
                    { title: 'Git', path: '/tool/Git',collapsable: true },
                    { title: 'HTTP协议', path: '/tool/网络协议',collapsable: true },
                    { title: '踩坑记录', path: '/tool/踩坑记录',collapsable: true },
                ]
            }
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://hub.fastgit.org/1533147455' },
            {
                text: '资源',
                items: [
                    {
                        text: '基础',
                        items: [
                            { text: '现代JavaScript教程', link: 'https://zh.javascript.info' },
                            { text: '网道', link: 'https://wangdoc.com/' },
                            { text: '后盾人博客', link: 'https://houdunren.gitee.io/note/' }
                        ]
                    },
                    {
                        text: 'Vue',
                        items: [
                            { text: 'Vue3', link: 'https://vue3js.cn' },
                            // { text: '单例', link: '/language/chinese'},
                        ]
                    },
                ]
            }
        ],
    }
}
