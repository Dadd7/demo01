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
                { text: '主页', link: '/' },
                { text: '笔记', link: '../myPages/about.md'}
            ],
    },
    plugins: [
        [
          "@vuepress-reco/vuepress-plugin-kan-ban-niang",
          {
            theme: ["koharu"],
            clean: true,
          }
        ],
        [
        "@vuepress-plugin-dynamic-title",
        {
        //   showIcon: "/assets/img//favicon.ico'",
          showText: "(/≧▽≦/)咦！又好了！",
        //   hideIcon: "/assets/img//favicon.ico'",
          hideText: "(●—●)喔哟，崩溃啦！",
          recoverTime: 2000
        }
      ]
    ]
      
  }
  