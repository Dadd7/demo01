(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{675:function(t,n,e){"use strict";e.r(n);var i=e(6),v=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("查看虚拟网络编辑器")])]),t._v(" "),e("ol",[e("li",[t._v("在VMware左上角，点击【编辑】，点击【虚拟网络编辑器】")]),t._v(" "),e("li",[t._v("修改虚拟网卡ip地址，在最上面选择自己的虚拟机，在最下面修改【子网】的IP")]),t._v(" "),e("li",[t._v("查看网关，在【VMnet信息】有【NAT设置】按钮，修改【网关IP】")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("查看Windows环境中VMnet网络配置")])]),t._v(" "),e("ol",[e("li",[t._v("打开【网络和Internet设置】，打开【网络和共享中心】，打开【更改适配器设置】")]),t._v(" "),e("li",[t._v("点击【VMnet8】右键【属性】")]),t._v(" "),e("li",[t._v("此连接实用下列项目【Internet 协议版本 4 (ICP/IPv4)】，点【属性】")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("ping")])]),t._v(" "),e("p",[t._v("【"),e("code",[t._v("ping 目的主机")]),t._v("】测试当前服务器是否可以连接目的主机")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 测试当前服务器是否可以连接到百度\n[root@hadoop 桌面]# ping www.baidu.com\n")])])]),e("hr"),t._v(" "),e("ul",[e("li",[t._v("linux网络环境配置")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("自动获取")]),t._v(" "),e("p",[t._v("登录后，通过界面的设置自动获取ip。Linux启动后会自动获取IP，缺点是每次自动获取的ip地址可能不一样。这个不适合做服务器，因为我们的服务器的ip需要是固定的")]),t._v(" "),e("p",[t._v("Linux【桌面】，点【首选项】的【网络连接】，选【System eth0】点【编辑】，选上【自动连接】，点击右下角【应用】")])]),t._v(" "),e("li",[e("p",[t._v("指定固定ip")]),t._v(" "),e("p",[t._v("直接修改配置文件来指定IP，并可以连接到外网")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 将ip地址配置的静态的ip地址为192.168.184.130\n// 进入终端\n[root@hadoop1 桌面]# vim /etc/sysconfig/network-scripts/ifcfg-eth0\n//文件修改下面这几行\nONBOOT=yes\nBOOTPROTO=static  //改为static\nIPADDR=xxx.xxx.xxx.xxx //必须有接下来这三行\nGATEWAY=xxx.xxx.xxx.x\nDNS1=xxx.xxx.xxx.x\n")])])])])])])}),[],!1,null,null,null);n.default=v.exports}}]);