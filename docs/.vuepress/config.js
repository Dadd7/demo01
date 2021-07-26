module.exports = {
    title:"小网站",
    description:"一个无聊的小网站",
    head:[
        ['link',{rel:'icon',href:'/assets/img//favicon.ico'}],
        ['meta',{name:'author',content:'Dadd7'}],
        ['meta',{name:'keywords',content:'无聊，小网站'}],
    ],
    themeConfig: {
        lastUpdated: '更新时间', 
        logo: '/assets/img/logo.png',
        nav: [
                { text: '主页', link: 'https://www.dadd7.com/' },
                {
                    text: 'Languages',
                    ariaLabel: 'Language Menu',
                    items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                    ]
                }
            ],
        plugins: [
            [
                "@vuepress-reco/vuepress-plugin-kan-ban-niang",
                {
                theme: ["blackCat"],
                clean: false,
                messages: {
                    welcome: '我是lookroot欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见哦'
                }
                }
            ],
            ]
              
    },
  }