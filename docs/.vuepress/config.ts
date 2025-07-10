import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'NijiMTF Wiki',
    description: '🌈 NijiPuchi — 小小的我们，也拥有彩虹的力量。A cozy and inclusive space for MTF-focused open-source ideas and self-expression.',
    base: '/',
    head:[
        ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/NijiPuchi/Wiki_static/refs/heads/main/logo_v1.png' }]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-CZJ8X185MG'
            }
        ],
        [
            "@vuepress/plugin-docsearch",
            {
                apiKey: '4cfe0f33be16c346fed77effff922cf8',
                indexName: 'go-cqhttp',
                algoliaOptions: {
                    facetFilters: ["lang:en-US"],
                },
            }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'Mrs4s/go-cqhttp',
        docsRepo: 'ishkong/go-cqhttp-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        navbar: [
            { text: 'Guide', children: ['/guide/', '/guide/quick_start.md', '/guide/config.md', '/guide/eventfilter.md', '/guide/file.md', '/guide/achieve.md', '/guide/docker.md'] },
            { text: 'API', children: ['/api/', '/api/guild.md'] },
            { text: 'Event', children: ['/event/', '/event/guild.md'] },
            { text: 'CQ Code', link: '/cqcode/' },
            { text: 'Guild', link: '/guild/'},
            { text: 'Reference', children: ['/reference/', '/reference/data_struct.md'] },
            { text: 'Advanced', link: '/advanced/'},
            { text: 'FAQ', link: '/faq/' }
        ],
        sidebar: "auto",
    },

})
