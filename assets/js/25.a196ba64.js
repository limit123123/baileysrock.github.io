(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{378:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"read4-代码评审"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read4-代码评审"}},[t._v("#")]),t._v(" read4 代码评审")]),t._v(" "),s("h2",{attrs:{id:"_1-代码评审"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码评审"}},[t._v("#")]),t._v(" 1.代码评审")]),t._v(" "),s("p",[t._v("代码评审是一种系统的对别人代码的研究。\n代码评审有两个主要目的：")]),t._v(" "),s("ul",[s("li",[t._v("提升代码质量，找出存在及潜在的bug，分析代码的清晰度以及代码是否严格遵循当前工程标准。")]),t._v(" "),s("li",[t._v("提升程序员水平，代码评审是提升程序员水平的一个重要方法，通过它可以学习到语言的特性、工程上新的设计以及一些新的实现方法。")])]),t._v(" "),s("h2",{attrs:{id:"_2-风格标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-风格标准"}},[t._v("#")]),t._v(" 2.风格标准")]),t._v(" "),s("p",[t._v("大多数公司或者大的项目都会要求代码风格具有同一标准。")]),t._v(" "),s("p",[t._v("Google Java Style：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在关键字(if)后面留空格，但是在函数调用(isOdd)后不留空格;")]),t._v(" "),s("li",[t._v("在行的末尾写{，而}自己单独一行;")]),t._v(" "),s("li",[t._v("无论是空块还是只有一行，都要用{...}包括起来.")])]),t._v(" "),s("p",[t._v("有一些代码风格和远离bug、易读性、可改动性。\n因此在进行代码评审时，也应该注意这些规则。")]),t._v(" "),s("h2",{attrs:{id:"_3-别写重复的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-别写重复的代码"}},[t._v("#")]),t._v(" 3.别写重复的代码")]),t._v(" "),s("p",[t._v("重复的代码很不安全。\n如果你在两个地方防止了相似的代码，那么一个最基本的风险就是如果一处出现了bug，另一处也非常可能有bug。而修复的时候经常指挥修复一个地方而忽略另一个地方。")]),t._v(" "),s("h2",{attrs:{id:"_4-仅在需要的地方注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-仅在需要的地方注释"}},[t._v("#")]),t._v(" 4.仅在需要的地方注释")]),t._v(" "),s("p",[t._v("一个好的开发者应该在代码中明智的添加注释，好的注释会使得代码易于修改，远离bug，因为一些重要的设想以及写出来了，并且减小了改动的难度。")]),t._v(" "),s("p",[t._v("一种重要的注释就是规格说明，通常出现在方法或者类的前部，一般会描述出类或方法的行为、参数、返回值、用法、例子等等。")]),t._v(" "),s("h3",{attrs:{id:"javadoc标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javadoc标准"}},[t._v("#")]),t._v(" Javadoc标准")]),t._v(" "),s("p",[t._v("(详见lesson3)在Java中，规格说明通常按照Javadoc的标准来写：以/**开始，中间用@标出参数和返回值，最后一*/结尾。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* Compute the hailstone sequence.\n* See http://en.wikipedia.org/wiki/Collatz_conjecture#Statement_of_the_problem\n* @param n starting number of sequence; requires n > 0.\n* @return the hailstone sequence starting at n and ending with 1.\n* For example, hailstone(3)=[3,10,5,16,8,4,2,1].\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hailstoneSequence "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"标注引用的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标注引用的代码"}},[t._v("#")]),t._v(" 标注引用的代码")]),t._v(" "),s("p",[t._v("另一种重要的注释就时标出从哪引用的代码，这在实际编程中是非常重要的，当你从别的网站上引用代码的时候，根据MIT6.031软件构造课程规定，例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// read a web page into a string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// see http://stackoverflow.com/questions/4328711/read-url-to-string-in-few-lines-ofjava-code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" mitHomepage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.mit.edu"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openStream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("useDelimiter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("其中一个原因是避免版权纠纷，再Stack Overflow上引用的可能是公共版本协议，但是再别处的代码就未必了。\n同时，很多网站的代码可能已经过期，他可能不再符合现有的语言标准或者更好的解决方案。")]),t._v(" "),s("h3",{attrs:{id:"去掉不必要的注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去掉不必要的注释"}},[t._v("#")]),t._v(" 去掉不必要的注释")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test whether n is 1 (don't write comments like this!)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// increment i")]),t._v("\n    l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add n to l")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但是不易理解的代码应该被注释(例如实现一些特定的算法)：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gauss's formula for the sum of 1...n")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here we're using the sin x ~= x approximation, which works for very small x")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" moonDiameterInMeters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moonDistanceInMeters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" apparentAngleInRadians "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-快速报错-失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-快速报错-失败"}},[t._v("#")]),t._v(" 5.快速报错/失败")]),t._v(" "),s("p",[t._v("快速报错是指代码应该尽可能块的将其中的bug暴露出来。因为问题暴露的越早(越接近)，其修复工作也会越容易。")]),t._v(" "),s("p",[t._v("静态检查比动态检查更早报错，动态检查比产生错误的结果更早报错。")]),t._v(" "),s("p",[t._v("通过对输入检查，发现静态错误或动态错误，可以更早报错。")]),t._v(" "),s("h2",{attrs:{id:"_6-避免幻数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-避免幻数"}},[t._v("#")]),t._v(" 6.避免幻数")]),t._v(" "),s("p",[t._v("除了0和1的常数被称为幻数。")]),t._v(" "),s("p",[t._v("解决幻数的办法：")]),t._v(" "),s("ul",[s("li",[t._v("写注释")]),t._v(" "),s("li",[t._v("更好的办法是声明一个具有合理名字的变量")])]),t._v(" "),s("p",[t._v("同时应当注意：永远不要再代码中硬编码你自己计算的数值，让程序去做所有的数值计算工作。")]),t._v(" "),s("h2",{attrs:{id:"_7-远离bug、易读性、易改动性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-远离bug、易读性、易改动性"}},[t._v("#")]),t._v(" 7.远离bug、易读性、易改动性")]),t._v(" "),s("p",[t._v("###存疑")]),t._v(" "),s("ul",[s("li",[t._v("远离bug(safe from bugs(SFB))")]),t._v(" "),s("li",[t._v("易读性(not easy to understand(ETU))")]),t._v(" "),s("li",[t._v("易改动性(not ready for change(RFC))")])]),t._v(" "),s("p",[t._v("我们可以看以下一个例子：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("turn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们可以通过如下修改，增强易改动性(RFC)，当我们需要修改循环次数时，仅需修改x的值即可。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("turn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("360.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("或者通过如下修改，同时增强易读性(ETU)、易改动性(RFC)、远离bug(SFB)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" degreesInACircle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("360.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numSides "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sideLength "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" numSides"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sideLength "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    turtle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("turn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("degreesInACircle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" numSides"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8-每个变量有且只有一个目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-每个变量有且只有一个目的"}},[t._v("#")]),t._v(" 8.每个变量有且只有一个目的")]),t._v(" "),s("p",[t._v("不要重复利用参数，也不要重利用变量。在现在的计算机中，变量不是一个稀缺的资源。当你需要的适合就声明一个(命名一个易理解的名字)，不需要它的时候就停止使用。如果你的变量在前面几行代表一个意思，在后面又代表另一个意思，将会令人很费解。")]),t._v(" "),s("p",[t._v("特别的，方法的参数不应该被修改(这和易改动性(RFC)相关，在未来如果这个方法的一部分想知道参数传进来的初始值，那么我们不能再半路修改它)。\n所以应该使用final关键词修饰参数(这样Java编译器就会对它进行静态检查，防止重引用)，然后在方法内部声明其他的变量使用。")]),t._v(" "),s("p",[t._v("例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayOfYear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" dayOfMonth "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_9-使用好的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用好的名称"}},[t._v("#")]),t._v(" 9.使用好的名称")]),t._v(" "),s("p",[t._v("好的方法名和变量名都是比较长而且能自我解释的。这种时候注释通常都不必要，因为名字就已经解释了它的用途。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondsPerDay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//don't do this!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//tmp is the number of seconds in a day   ")]),t._v("\n")])])]),s("p",[t._v("通常来说，tmp、temp、data这样的变量名是很糟糕的，每一个局部变量都是暂时的，每一个变量也都是数据，所以这些命名都是无意义的，我们应该使用更长、更有描述性的命名。")]),t._v(" "),s("p",[t._v("在Java中的命名通常如下：")]),t._v(" "),s("ul",[s("li",[t._v("methodsAreNamedWithCamelCaseLikeThis(方法)")]),t._v(" "),s("li",[t._v("variablesAreAlsoCamelCase(驼峰命名法)")]),t._v(" "),s("li",[t._v("CONSTANTS_ARE_IN_ALL_CAPS_WITH_UNDERSCORES(常量)")]),t._v(" "),s("li",[t._v("ClassesAreCapitalized(类)")]),t._v(" "),s("li",[t._v("packages.are.lowercase.and.separated.by.dots(包)")])]),t._v(" "),s("p",[t._v("所有在方法内部声明的方法，包括用final修饰的，都使用camelCaseNames")]),t._v(" "),s("p",[t._v("方法的名字通常都是动词，例如getDate或者isUpperCase。")]),t._v(" "),s("p",[t._v("变量和类的名字通常都是名词，尽量简洁但要避免缩写。")]),t._v(" "),s("p",[t._v("ALL_CAPS_WITH_UNDERSCORES用来表示static final这样的常量。")]),t._v(" "),s("p",[t._v("除了一些固定的表示，例如x、y在用于坐标系的时候就很清晰，i、j用于变量的循环的时候就很清晰。")]),t._v(" "),s("h2",{attrs:{id:"_10-使用空白符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-使用空白符"}},[t._v("#")]),t._v(" 10.使用空白符")]),t._v(" "),s("p",[t._v("注意前后一致的空格缩进。")]),t._v(" "),s("p",[t._v("永远不要使用'\\t'，事实上可能编辑器和IDE都会自动把tab按键作为设置好几个连续的空格输入。\n而且由于不同的工具显示‘\\t'字符的时候长度不一样，有时候是8个字符，有时候是4个字符，有时候是两个，因此要避免使用。")]),t._v(" "),s("h2",{attrs:{id:"_11-不要使用全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-不要使用全局变量"}},[t._v("#")]),t._v(" 11.不要使用全局变量")]),t._v(" "),s("p",[t._v("###变量\n全局说明它的值是可以修改的。\n###全局的\n全局的说明它可以从程序的任何地方访问。")]),t._v(" "),s("p",[t._v("###坏处\nJava中，全局变量被声明为public static.public修饰符代表它可以从任何地方访问，而static代表这个变量只会有一个实例化的对象。")]),t._v(" "),s("p",[t._v("然而此时如果加上final关键字，public static final，并且这个变量的类型是不可更改的，那么这个对象就变成了一个全局常量，一个全局常量可以在任何位置读取，但永远不会被赋予新的值或对象，所以就没有风险了。")]),t._v(" "),s("p",[s("strong",[t._v("全局变量很常见，而且很有用")])]),t._v(" "),s("p",[t._v("通常来说，我们应该使用参数传递和返回值而非全局变量，或者将他们放到你调用方法的所属类中。")]),t._v(" "),s("h2",{attrs:{id:"_12-在快照图中的各种变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-在快照图中的各种变量"}},[t._v("#")]),t._v(" 12.在快照图中的各种变量")]),t._v(" "),s("ul",[s("li",[t._v("方法里面的局部变量")]),t._v(" "),s("li",[t._v("一个实例化对象中的实例化变量")]),t._v(" "),s("li",[t._v("一个类中的静态变量")])]),t._v(" "),s("p",[t._v("当方法被调用的时候，局部变量产生，当方法返回时，局部变量消失。")]),t._v(" "),s("p",[t._v("如果一个方法被多次同时调用(例如递归)，这些方法里的局部变量互相独立，彼此不会影响。")]),t._v(" "),s("p",[t._v("当一个对象用new实例化后，对象中实例化的变量产生，当这个对象被垃圾回收时，这个变量消失，每一个实例化对象都有它自己的实例化变量。")]),t._v(" "),s("p",[t._v("例如：当以下类被加载时候，静态变量就产生了，他会一直存活到程序结束。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Payment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" taxRate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Payment")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    taxRate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" taxRate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下面这个快照图描述了各个变量之间的区别：\n"),s("img",{attrs:{src:"https://i.loli.net/2021/06/08/fPIYCO5QjNJF86x.png",alt:"屏幕截图 2021-06-08 014005.png"}}),t._v("\n局部变量p和args显示在一个栈帧中，他们在main函数被调用的时候动态生成，main函数返回时，它们也会跟着消失。")]),t._v(" "),s("p",[t._v("println是在main函数调用它的时候生成的。")]),t._v(" "),s("p",[t._v("实例化变量value会在每一个Payment类型的对象中出现。")]),t._v(" "),s("p",[t._v("静态变量taxRate出现在Payment类型的对象之外，因为他是属于Payment这个类的。")]),t._v(" "),s("p",[t._v("任何数量的Payment类型的对象都可以被创建或销毁(同时它们含有的实例化变量value也会跟着一起创建和销毁)，但时在整个程序中有且仅有一个Payment类，所以这里也有且只有一个Payment.taxRate变量。")]),t._v(" "),s("p",[t._v("System.out是另一个在这段代码中使用到的静态变量，所以在快照图中也将他显示出来了。")]),t._v(" "),s("h2",{attrs:{id:"_13-类是何时被加载进虚拟机的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-类是何时被加载进虚拟机的"}},[t._v("#")]),t._v(" 13.类是何时被加载进虚拟机的")]),t._v(" "),s("p",[t._v("当编写好一个java类并通过编译器编译成class文件后，该类就可以在JVM虚拟机中运行了。我们将，class文件被加载到虚拟机中的过程称为“类加载机制”。“动态加载”就是在程序运行的过程中将class文件加载到虚拟机中。")]),t._v(" "),s("h3",{attrs:{id:"当我们通过-new-关键字创建出一个对象实例时-会将该类加载到虚拟机中。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当我们通过-new-关键字创建出一个对象实例时-会将该类加载到虚拟机中。"}},[t._v("#")]),t._v(" 当我们通过“new”关键字创建出一个对象实例时，会将该类加载到虚拟机中。")]),t._v(" "),s("h3",{attrs:{id:"当我们访问一个类的静态方法或者静态属性时-会将该类加载至虚拟机中。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当我们访问一个类的静态方法或者静态属性时-会将该类加载至虚拟机中。"}},[t._v("#")]),t._v(" 当我们访问一个类的静态方法或者静态属性时，会将该类加载至虚拟机中。")]),t._v(" "),s("h3",{attrs:{id:"当初始化一个类的时候会初始化该类的静态代码块-如果这其中有引用到其它类-那么被引用的类也会进行加载。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当初始化一个类的时候会初始化该类的静态代码块-如果这其中有引用到其它类-那么被引用的类也会进行加载。"}},[t._v("#")]),t._v(" 当初始化一个类的时候会初始化该类的静态代码块，如果这其中有引用到其它类，那么被引用的类也会进行加载。")]),t._v(" "),s("h3",{attrs:{id:"通过反射-使用class-forname-方法-也会导致类加载。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过反射-使用class-forname-方法-也会导致类加载。"}},[t._v("#")]),t._v(" 通过反射(使用Class.forName()方法)，也会导致类加载。")]),t._v(" "),s("h3",{attrs:{id:"当加载子类时-会先加载它的父类。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当加载子类时-会先加载它的父类。"}},[t._v("#")]),t._v(" 当加载子类时，会先加载它的父类。")]),t._v(" "),s("h2",{attrs:{id:"_14-方法应该返回-而不是打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-方法应该返回-而不是打印"}},[t._v("#")]),t._v(" 14.方法应该返回，而不是打印")]),t._v(" "),s("p",[t._v("如果一个方法是向控制台输出结果，这意味着如果你想在另一个地方使用它，其中结果可能会做其他的用途，例如参与运算而不是显示出来，程序就得重写。")]),t._v(" "),s("p",[t._v("通常来说，只有最高层的代码才会处理与人/控制台的交互。唯一例外的是debug的时候，你需要将一些关键字打印出来，但是这部分代码不会是你设计的一部分，只有在debug的时候才能出现。")])])}),[],!1,null,null,null);a.default=e.exports}}]);