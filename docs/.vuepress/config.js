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
                { text: '日记', link: '/myPages/myDiary/2023.md'},
                { text: '玩意', link: '/myPages/myProject/demo.md'}
            ],
        sidebar: {
            '/myPages/myDiary/': [
                ['2023.md',"二〇二三"],
                ['2022.md',"二〇二二"],
                ['2021.md',"二〇二一"],
            ],
            }
    },
    plugins: [
        [//看板娘
          "@vuepress-reco/vuepress-plugin-kan-ban-niang",
          {
            theme: ["koharu"],
            clean: true,
          }
        ],
        [//彩条子
            'reading-progress'
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",{
              audios: [
                {
                  name: '宝贝',
                  artist: 'Menson',
                  url: '/assets/radio//baby.mp3',
                  cover: '/assets/img//lkqh.jpg'
                },
              ]  
            }
          ],
        [
        "vuepress-plugin-cursor-effects",
        {
            size: 2,                    // size of the particle, default: 2
            shape: 'circle',  // shape of the particle, default: 'star'
            zIndex: 999999999           // z-index property of the canvas, default: 999999999
        }
        ],
    ]
      
  }
  