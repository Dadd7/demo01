(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{701:function(e,t,r){"use strict";r.r(t);var a=r(6),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"关闭检查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关闭检查"}},[e._v("#")]),e._v(" 关闭检查")]),e._v(" "),r("p",[e._v("dubbo缺省会在启动时检查依赖的服务器是否可用, 不可用时会抛出异常, 阻止Spring初始化完成, 以便上线时, 能及早发现问题, 默认"),r("code",[e._v("check=true")]),e._v(". 通过"),r("code",[e._v("check=false")]),e._v("关闭检查, 比如测试时, 有些服务不关心, 或者出现了循环依赖, 必须有一方先启动")]),e._v(" "),r("p",[e._v("比如, 关闭某个服务器的启动时检查")]),e._v(" "),r("p",[r("code",[e._v('<dubbo:reference interface="com.foo.BarService" check="false" />')])]),e._v(" "),r("p",[e._v("比如, 关闭注册中心启动时检查")]),e._v(" "),r("p",[r("code",[e._v('<dubbo:registry check="false" />')])]),e._v(" "),r("h2",{attrs:{id:"超时时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超时时间"}},[e._v("#")]),e._v(" 超时时间")]),e._v(" "),r("p",[e._v("由于网络服务端不可靠, 会导致调用出现一种不确定的中间状态(超时), 为了避免超时导致客户端资源(线程)挂起耗尽, 必须设置超时时间. "),r("code",[e._v("timeout")]),e._v(": 调用远程服务超时时间(毫秒)")]),e._v(" "),r("p",[r("img",{attrs:{src:"F:/TyporePicture/image-20220408172329578.png",alt:"image-20220408172329578"}})])])}),[],!1,null,null,null);t.default=c.exports}}]);