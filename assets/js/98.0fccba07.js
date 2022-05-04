(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{692:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"什么是el表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是el表达式"}},[t._v("#")]),t._v(" 什么是EL表达式")]),t._v(" "),e("ol",[e("li",[t._v("EL 表达式的全称是：Expression Language。是表达式语言。")]),t._v(" "),e("li",[t._v("EL 表达式的什么作用：EL 表达式主要是代替 jsp 页面中的表达式脚本在 jsp 页面中进行数据的输出。")]),t._v(" "),e("li",[t._v("因为 EL 表达式在输出数据的时候，要比 jsp 的表达式脚本要简洁很多")]),t._v(" "),e("li",[t._v("EL 表达式的格式是："),e("code",[t._v("${表达式}")])]),t._v(" "),e("li",[t._v("EL 表达式在输出 null 值的时候，输出的是空串。jsp 表达式脚本输出 null 值的时候，输出的是 null 字")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n\t<%\n\t\trequest.setAttribute("key","值");\n\t%>\n\t表达式脚本输出 key 的值是：\n<%=request.getAttribute("key1")==null?"":request.getAttribute("key1")%><br/>\n\tEL 表达式输出 key 的值是：${key1}\n</body>\n')])])]),e("h2",{attrs:{id:"搜索域数据的顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索域数据的顺序"}},[t._v("#")]),t._v(" 搜索域数据的顺序")]),t._v(" "),e("ol",[e("li",[t._v("EL 表达式主要是在 jsp 页面中输出数据。 主要是输出域对象中的数据。")]),t._v(" "),e("li",[t._v("当四个域中都有相同的 key 的数据的时候，EL 表达式会按照四个域的从小到大的顺序去进行搜索，找到就输出。")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n\t<%\n\t\t//往四个域中都保存了相同的 key 的数据。\n\t\trequest.setAttribute("key", "request");\n\t\tsession.setAttribute("key", "session");\n\t\tapplication.setAttribute("key", "application");\n\t\tpageContext.setAttribute("key", "pageContext");\n\t%>\n\t${ key }\n</body>\n')])])]),e("h2",{attrs:{id:"普通bean-数组bean-list集合-map集合属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通bean-数组bean-list集合-map集合属性"}},[t._v("#")]),t._v(" 普通Bean|数组Bean|List集合|map集合属性")]),t._v(" "),e("p",[t._v("需求——输出 Person 类中普通属性，数组属性。list 集合属性和 map 集合属性。")]),t._v(" "),e("p",[e("strong",[t._v("Person 类")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//普通Bean")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" phones"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数组Bean")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cities"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//List集合")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//map集合")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方法")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("输出的代码")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n\t<%\n\t\tPerson person = new Person();\n\t\tperson.setName("国哥好帅！");\n\t\tperson.setPhones(new String[]{"18610541354","18688886666","18699998888"});\n\t\tList<String> cities = new ArrayList<String>();\n\t\tcities.add("北京");\n\t\tcities.add("上海");\n\t\tcities.add("深圳");\n\t\tperson.setCities(cities);\n\t\tMap<String,Object> map = new HashMap<>();\n\t\tmap.put("key1","value1");\n\t\tmap.put("key2","value2");\n\t\tmap.put("key3","value3");\n\t\tperson.setMap(map);\n\t\tpageContext.setAttribute("p", person);\n\t%>\n\t输出 Person：${ p }<br/>\n\t输出 Person 的 name 属性：${p.name} <br>\n\t输出 Person 的 pnones 数组属性值：${p.phones[2]} <br>\n\t输出 Person 的 cities 集合中的元素值：${p.cities} <br>\n\t输出 Person 的 List 集合中个别元素值：${p.cities[2]} <br>\n\t输出 Person 的 Map 集合: ${p.map} <br>\n\t输出 Person 的 Map 集合中某个 key 的值: ${p.map.key3} <br>\n\t输出 Person 的 age 属性：${p.age} <br>\n</body>\n')])])]),e("h2",{attrs:{id:"运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[t._v("#")]),t._v(" 运算")]),t._v(" "),e("h3",{attrs:{id:"关系运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系运算"}},[t._v("#")]),t._v(" "),e("strong",[t._v("关系运算")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("关系运算符")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("范例")]),t._v(" "),e("th",[t._v("结果")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("== 或 eq")]),t._v(" "),e("td",[t._v("等于")]),t._v(" "),e("td",[t._v("${ 5 == 5 } 或 ${ 5 eq 5 }")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("!= 或 ne")]),t._v(" "),e("td",[t._v("不等于")]),t._v(" "),e("td",[t._v("${ 5 !=5 } 或 ${ 5 ne 5}")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("< 或 lt")]),t._v(" "),e("td",[t._v("小于")]),t._v(" "),e("td",[t._v("${ 3 < 5 }  或 ${ 3 lt 5}")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v(">或 gt")]),t._v(" "),e("td",[t._v("大于")]),t._v(" "),e("td",[t._v("${ 2 > 10 } 或 ${ 2 gt 10 }")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("<= 或 le")]),t._v(" "),e("td",[t._v("小于等于")]),t._v(" "),e("td",[t._v("${ 5 <= 12 } 或 ${ 5 le 12 }")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v(">= 或 ge")]),t._v(" "),e("td",[t._v("大于等于")]),t._v(" "),e("td",[t._v("${ 3 >= 5 } 或 ${ 3 ge 5 }")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"逻辑运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算"}},[t._v("#")]),t._v(" "),e("strong",[t._v("逻辑运算")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("逻辑运算符")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("范例")]),t._v(" "),e("th",[t._v("结果")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("&& 或 and")]),t._v(" "),e("td",[t._v("与运算")]),t._v(" "),e("td",[t._v("${ 12 == 12 && 12 < 11 } 或 ${ 12 == 12 and 12 < 11 }")]),t._v(" "),e("td",[t._v("flase")])]),t._v(" "),e("tr",[e("td",[t._v("|| 或 or")]),t._v(" "),e("td",[t._v("或运算")]),t._v(" "),e("td",[t._v("${ 12 == 12 || 12 < 11 } 或 { 12 == 12 or 12 < 11}")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("! 或not")]),t._v(" "),e("td",[t._v("取反运算")]),t._v(" "),e("td",[t._v("${ !true } 或 $ { not true }")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"算术运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术运算"}},[t._v("#")]),t._v(" "),e("strong",[t._v("算术运算")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("算数运算符")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("范例")]),t._v(" "),e("th",[t._v("结果")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("+")]),t._v(" "),e("td",[t._v("加法")]),t._v(" "),e("td",[t._v("${ 12 + 18 }")]),t._v(" "),e("td",[t._v("30")])]),t._v(" "),e("tr",[e("td",[t._v("-")]),t._v(" "),e("td",[t._v("减法")]),t._v(" "),e("td",[t._v("${ 18 - 8 }")]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("*")]),t._v(" "),e("td",[t._v("乘法")]),t._v(" "),e("td",[t._v("${ 12 * 12 }")]),t._v(" "),e("td",[t._v("144")])]),t._v(" "),e("tr",[e("td",[t._v("/ 或 div")]),t._v(" "),e("td",[t._v("除法")]),t._v(" "),e("td",[t._v("${ 144 / 12 } 或 ${ 144 div 12 }")]),t._v(" "),e("td",[t._v("12")])]),t._v(" "),e("tr",[e("td",[t._v("% 或 mod")]),t._v(" "),e("td",[t._v("取模")]),t._v(" "),e("td",[t._v("${ 144 % 10 } 或 ${ 144 mod 10 }")]),t._v(" "),e("td",[t._v("4")])])])]),t._v(" "),e("p",[e("strong",[t._v("empty运算")])]),t._v(" "),e("p",[t._v("empty 运算可以判断一个数据是否为空，如果为空，则输出 true,不为空输出 false。")]),t._v(" "),e("p",[t._v("以下几种情况为空：")]),t._v(" "),e("ol",[e("li",[t._v("值为 null 值的时候，为空")]),t._v(" "),e("li",[t._v("值为空串的时候，为空")]),t._v(" "),e("li",[t._v("值是 Object 类型数组，长度为零的时候")]),t._v(" "),e("li",[t._v("list 集合，元素个数为零")]),t._v(" "),e("li",[t._v("map集合，元素个数为零")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n\t<%\n\t\t// 1、值为 null 值的时候，为空\n\t\trequest.setAttribute("emptyNull", null);\n\t\t// 2、值为空串的时候，为空\n\t\trequest.setAttribute("emptyStr", "");\n\t\t// 3、值是 Object 类型数组，长度为零的时候\n\t\trequest.setAttribute("emptyArr", new Object[]{});\n\t\t// 4、list 集合，元素个数为零\n\t\tList<String> list = new ArrayList<>();\n\t\t// list.add("abc");\n\t\trequest.setAttribute("emptyList", list);\n\t\t// 5、map 集合，元素个数为零\n\t\tMap<String,Object> map = new HashMap<String, Object>();\n\t\t// map.put("key1", "value1");\n\t\trequest.setAttribute("emptyMap", map);\n\t%>\n\t${ empty emptyNull } <br/>\n\t${ empty emptyStr } <br/>\n\t${ empty emptyArr } <br/>\n\t${ empty emptyList } <br/>\n\t${ empty emptyMap } <br/>\n</body>\n')])])]),e("p",[e("strong",[t._v("三元运算")])]),t._v(" "),e("p",[t._v("表达式 1？表达式 2：表达式 3")]),t._v(" "),e("p",[t._v("如果表达式 1 的值为真，返回表达式 2 的值，如果表达式 1 的值为假，返回表达式 3 的值。")]),t._v(" "),e("p",[t._v("示例："),e("code",[t._v('${ 12 != 12 ? "国哥帅呆":"国哥又骗人啦"')])]),t._v(" "),e("p",[e("strong",[t._v("“.”点运算 和 [] 中括号运算符")])]),t._v(" "),e("p",[t._v(".点运算，可以输出 Bean 对象中某个属性的值。")]),t._v(" "),e("p",[t._v("[]中括号运算，可以输出有序集合中某个元素的值。并且[]中括号运算，还可以输出 map 集合中 key 里含有特殊字符的")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n\t<%\n\t\tMap<String,Object> map = new HashMap<String, Object>();\n\t\tmap.put("a.a.a", "aaaValue");\n\t\tmap.put("b+b+b", "bbbValue");\n\t\tmap.put("c-c-c", "cccValue");\n\t\trequest.setAttribute("map", map);\n\t%>\n\t${ map[\'a.a.a\'] } <br>\n\t${ map["b+b+b"] } <br>\n\t${ map[\'c-c-c\'] } <br>\n</body>\n')])])]),e("h2",{attrs:{id:"_11个隐含对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11个隐含对象"}},[t._v("#")]),t._v(" 11个隐含对象")]),t._v(" "),e("p",[e("strong",[t._v("EL 个达式中 11 个隐含对象，是 EL 表达式中自己定义的，可以直接使用。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("变量")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("pageContext")]),t._v(" "),e("td",[t._v("PageContextImpl")]),t._v(" "),e("td",[t._v("它可以获取 jsp 中的九大内置对象")])]),t._v(" "),e("tr",[e("td",[t._v("pageScope")]),t._v(" "),e("td",[t._v("Map<String, Object>")]),t._v(" "),e("td",[t._v("它可以获取 pageContext 域中的数据")])]),t._v(" "),e("tr",[e("td",[t._v("requestScope")]),t._v(" "),e("td",[t._v("Map<String, Object>")]),t._v(" "),e("td",[t._v("它可以获取 Request 域中的数据")])]),t._v(" "),e("tr",[e("td",[t._v("sessionScope")]),t._v(" "),e("td",[t._v("Map<String, Object>")]),t._v(" "),e("td",[t._v("它可以获取 Session 域中的数据")])]),t._v(" "),e("tr",[e("td",[t._v("applicationScope")]),t._v(" "),e("td",[t._v("Map<String, Object>")]),t._v(" "),e("td",[t._v("它可以获取 ServletContext 域中的数据")])]),t._v(" "),e("tr",[e("td",[t._v("param")]),t._v(" "),e("td",[t._v("Map<String, String>")]),t._v(" "),e("td",[t._v("它可以获取请求参数的值")])]),t._v(" "),e("tr",[e("td",[t._v("paramValues")]),t._v(" "),e("td",[t._v("Map<String, String[]>")]),t._v(" "),e("td",[t._v("它也可以获取请求参数的值，获取多个值的时候使用")])]),t._v(" "),e("tr",[e("td",[t._v("header")]),t._v(" "),e("td",[t._v("Map<String, String>")]),t._v(" "),e("td",[t._v("它可以获取请求头的信息")])]),t._v(" "),e("tr",[e("td",[t._v("headerValues")]),t._v(" "),e("td",[t._v("Map<String, String[]>")]),t._v(" "),e("td",[t._v("它可以获取请求头的信息，它可以获取多个值的情况")])]),t._v(" "),e("tr",[e("td",[t._v("cookie")]),t._v(" "),e("td",[t._v("Map<String, Cookie>")]),t._v(" "),e("td",[t._v("它可以获取当前请求的 Cookie 信息")])]),t._v(" "),e("tr",[e("td",[t._v("initParam")]),t._v(" "),e("td",[t._v("Map<String, String>")]),t._v(" "),e("td",[t._v("它可以获取在 web.xml 中配置的上下文参数")])])])]),t._v(" "),e("p",[e("strong",[t._v("EL 获取四个特定域中的属性")])]),t._v(" "),e("ol",[e("li",[t._v("pageScope ====== pageContext 域")]),t._v(" "),e("li",[t._v("requestScope ====== Request 域")]),t._v(" "),e("li",[t._v("sessionScope ====== Session 域")]),t._v(" "),e("li",[t._v("applicationScope ====== ServletContext  域")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n    <%\n        pageContext.setAttribute("key1", "pageContext1");\n        pageContext.setAttribute("key2", "pageContext2");\n        request.setAttribute("key2", "request");\n        session.setAttribute("key2", "session");\n        application.setAttribute("key2", "application");\n    %>\n    ${ applicationScope.key2 }\n</body>\n')])])]),e("p",[e("strong",[t._v("pageContext 对象的使用")])]),t._v(" "),e("ol",[e("li",[t._v("协议：")]),t._v(" "),e("li",[t._v("服务器 ip：")]),t._v(" "),e("li",[t._v("服务器端口：")]),t._v(" "),e("li",[t._v("获取工程路径：")]),t._v(" "),e("li",[t._v("获取请求方法：")]),t._v(" "),e("li",[t._v("获取客户端 ip 地址：")]),t._v(" "),e("li",[t._v("获取会话的 id 编号")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<body>\n    <%--\n    request.getScheme() 它可以获取请求的协议\n    request.getServerName() 获取请求的服务器 ip 或域名\n    request.getServerPort() 获取请求的服务器端口号\n    getContextPath() 获取当前工程路径\n    request.getMethod() 获取请求的方式（GET 或 POST）\n    request.getRemoteHost() 获取客户端的 ip 地址\n    session.getId() 获取会话的唯一标识\n    --%>\n    <%\n    \tpageContext.setAttribute("req", request);\n    %>\n    <%=request.getScheme() %> <br>\n    1.协议： ${ req.scheme }<br>\n    2.服务器 ip：${ pageContext.request.serverName }<br>\n    3.服务器端口：${ pageContext.request.serverPort }<br>\n    4.获取工程路径：${ pageContext.request.contextPath }<br>\n    5.获取请求方法：${ pageContext.request.method }<br>\n    6.获取客户端 ip 地址：${ pageContext.request.remoteHost }<br>\n    7.获取会话的 id 编号：${ pageContext.session.id }<br>\n</body>\n')])])]),e("p",[e("strong",[t._v("EL 表达式其他隐含对象的使用")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("param Map<String，string> 它可以获取请求参数的值")]),t._v(" "),e("p",[t._v("paramValues Map<String，String[]> 它也可以获取请求参数的值，获取多个值的时候使用")])])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输出请求参数 username 的值：${ param.username } <br>\n输出请求参数 password 的值：${ param.password } <br>\n输出请求参数 username 的值：${ paramValues.username[0] } <br>\n输出请求参数 hobby 的值：${ paramValues.hobby[0] } <br>\n输出请求参数 hobby 的值：${ paramValues.hobby[1] } <br>\n")])])]),e("p",[t._v("请求地址：http://localhost:8080/09_EL_JSTL/other_el_obj.jsp?username=wzg168&password=666666&hobby=java&hobby=cpp")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("header Map<String, String> 它可以获取请求头的信息")]),t._v(" "),e("p",[t._v("headerValues Map<String, String> 它可以获取请求头的信息，它可以获取多个值的情况")])])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输出请求头【User-Agent】的值：${ header['User-Agent'] } <br>\n输出请求头【Connection】的值：${ header.Connection } <br>\n输出请求头【User-Agent】的值：${ headerValues['User-Agent'][0] } <br>\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("cookie Map<String, String> 它可以获取当前请求的 Cookie 信息")])]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("获取 Cookie 的名称：${ cookie.JSESSIONID.name } <br>\n获取 Cookie 的值：${ cookie.JSESSIONID.value } <br>\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("initParam Map<String, String> 它可以获取在 web.xml 中配置的<context-param>上下文参数")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("context-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("username"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("root"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("context-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("context-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("url"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jdbc:mysql:///test"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("context-param")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输出&lt;Context-param&gt;username 的值：${ initParam.username } <br>\n输出&lt;Context-param&gt;url 的值：${ initParam.url } <br>\n")])])]),e("hr"),t._v(" "),e("p",[t._v("【资料】尚硅谷王振国")])])}),[],!1,null,null,null);a.default=n.exports}}]);