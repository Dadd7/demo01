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
                clean: true,
                }
            ],
            ]
              
    },
  }