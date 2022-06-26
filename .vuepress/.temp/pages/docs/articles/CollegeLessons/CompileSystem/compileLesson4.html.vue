<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/3.png" alt="SDT"></p>
<h2 id="声明语句的翻译" tabindex="-1"><a class="header-anchor" href="#声明语句的翻译" aria-hidden="true">#</a> 声明语句的翻译</h2>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/4.png" alt="声明语句的翻译"></p>
<h3 id="类型表达式" tabindex="-1"><a class="header-anchor" href="#类型表达式" aria-hidden="true">#</a> 类型表达式</h3>
<h4 id="基本类型是类型表达式。" tabindex="-1"><a class="header-anchor" href="#基本类型是类型表达式。" aria-hidden="true">#</a> 基本类型是类型表达式。</h4>
<ol>
<li>integer</li>
<li>real</li>
<li>char</li>
<li>boolean</li>
<li>type_error</li>
<li>void</li>
</ol>
<h4 id="可以为类型表达式命名-类型名也是类型表达式。" tabindex="-1"><a class="header-anchor" href="#可以为类型表达式命名-类型名也是类型表达式。" aria-hidden="true">#</a> 可以为类型表达式命名，类型名也是类型表达式。</h4>
<h4 id="将类型构造符-type-constructor-作用于类型表达式可以构成新的类型表达式。" tabindex="-1"><a class="header-anchor" href="#将类型构造符-type-constructor-作用于类型表达式可以构成新的类型表达式。" aria-hidden="true">#</a> 将类型构造符(type constructor)作用于类型表达式可以构成新的类型表达式。</h4>
<ol>
<li>
<p>数组构造符$array$，若$T$是类型表达式，则$array(I,T)$是类型表达式($I$是一个整数)，例:<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/1.png" alt="数组构造符"></p>
</li>
<li>
<p>指针构造符$pointer$<br>
若T是类型表达式，则$pointer(T)$是类型表达式，它表示一个指针类型。</p>
</li>
<li>
<p>笛卡尔乘积构造符$\times$<br>
若$T_{1}$和$T_{2}$是类型表达式，则笛卡尔乘积$T_{1}{\times}T_{2}$是类型表达式</p>
</li>
<li>
<p>函数构造符${\rightarrow}$<br>
若$T_{1}$、$T_{2}$、$…$、$T_{n}$和$R$是类型表达式，则$T_{1}{\times}T_{2}{\times}…{\times}T_{n}{\rightarrow}R$是类型表达式。</p>
</li>
<li>
<p>记录构造符$record$<br>
若有标识符$N_{1}$、$N_{2}$、$...$、$N_{n}$与类型表达式$T_{1}$、$T_{2}$、$...$、$T_{n}$， 则$record((N_{1}{\times}N_{2}){\times}(N_{2}{\times}T_{2}){\times}...{\times}(N_{n}{\times}T_{n}))$是一个类型表达式。</p>
</li>
</ol>
<p><strong>举例</strong>:<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/2.png" alt="声明语句"></p>
<h3 id="局部变量的存储分配" tabindex="-1"><a class="header-anchor" href="#局部变量的存储分配" aria-hidden="true">#</a> 局部变量的存储分配</h3>
<p>对于声明语句，语义分析的主要任务就是收集标识符的类型等属性信息，并为每一个名字分配一个相对地址:</p>
<ol>
<li>从类型表达式可以知道该类型在运行时刻所需的存储单元数量称为类型的宽度(width)</li>
<li>在编译时刻，可以使用类型的宽度为每一个名字分配一个相对地址</li>
</ol>
<p>名字的类型和相对地址信息保存在相应的符号表记录中。</p>
<h3 id="变量声明的sdt" tabindex="-1"><a class="header-anchor" href="#变量声明的sdt" aria-hidden="true">#</a> 变量声明的SDT</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/5.png" alt="声明语句"></p>
<h2 id="赋值语句的翻译" tabindex="-1"><a class="header-anchor" href="#赋值语句的翻译" aria-hidden="true">#</a> 赋值语句的翻译</h2>
<p>赋值语句的语法:<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/6.png" alt="赋值语句的语法"></p>
<p>赋值语句翻译的主要任务:<br>
生成对表达式求值的三地址码。<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/7.png" alt="赋值语句的语法"></p>
<h3 id="赋值语句的sdt" tabindex="-1"><a class="header-anchor" href="#赋值语句的sdt" aria-hidden="true">#</a> 赋值语句的SDT</h3>
<p>code表示三地址码，E的addr表示表达式的存放地址。<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/8.png" alt="赋值语句的语法"></p>
<h2 id="数组引用的翻译" tabindex="-1"><a class="header-anchor" href="#数组引用的翻译" aria-hidden="true">#</a> 数组引用的翻译</h2>
<h3 id="赋值语句的文法" tabindex="-1"><a class="header-anchor" href="#赋值语句的文法" aria-hidden="true">#</a> 赋值语句的文法</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/9.png" alt="数组引用的语法"></p>
<h3 id="数组元素寻址" tabindex="-1"><a class="header-anchor" href="#数组元素寻址" aria-hidden="true">#</a> 数组元素寻址</h3>
<p>将数组引用翻译成三地址码时要解决的主要问题是确定数组元素的存放地址，也就是数组元素的寻址。</p>
<ol>
<li>
<p>一维数组<br>
假设每个数组元素的宽度是$w$，则数组元素$a[i]$的相对地址是:$base+i{\times}w$，其中，$base$是数组的基地址，$i{\times}w$是偏移地址。</p>
</li>
<li>
<p>二维数组<br>
假设一行的宽度是$w_{1}$，同一行中每个数组元素的宽度是$w_{2}$，则数组元素$a[i_{1}][i_{2}]$的相对地址是: $base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}$。</p>
</li>
<li>
<p>k维数组
数组元素$a[i_{1}][i_{2}]...[i_{k}]$的相对地址是: $base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}+...+i_{k}{\times}w_{k}$。其中，$w_{1}$是$a[i_{1}]$的宽度($a[i_{1}]$是一个$k-1$维数组)，$w_{2}$是$a[i_{1}][i_{2}]$的宽度，...,$w_{k}$是$a[i_{1}][i_{2}]...[i_{k}]$的宽度。</p>
</li>
</ol>
<p>例:<br>
假设:$type(a)=array(3,array(5,array(8,int)))$.<br>
一个整形变量占用4个字节，则$addr(a[i_{1}][i_{2}][i_{3}])=base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}+i_{3}{\times}w_{3}=base+i_{1}{\times}160+i_{2}{\times}32+i_{3}{\times}4$，其中$a[i_{1}]$的宽度为160，$a[i_{1}][i_{2}]$的宽度为32，$a[i_{1}][i_{2}][i_{3}]$的宽度为4.</p>
<h3 id="带有数组引用的赋值语句的翻译" tabindex="-1"><a class="header-anchor" href="#带有数组引用的赋值语句的翻译" aria-hidden="true">#</a> 带有数组引用的赋值语句的翻译</h3>
<p>例1: 假设
$type(a)=array(n,int)$<br>
源程序片段:
$c=a[i];$<br>
三地址码:
$t_{1}=i{\cdot}4$<br>
$t_{2}=a[t_{1}]$<br>
$c=t_{2}$</p>
<p>例2: 假设<br>
$type(a)=array(3,array(5,int))$<br>
源程序片段:
$c=a[i_{1}][i_{2}];$<br>
三地址码:
$t_{1}=i_{1}{\cdot}20$<br>
$t_{2}=i_{2}{\cdot}4$<br>
$t_{3}=t_{1}+t_{2}$<br>
$t_{4}=a[t_{3}]$<br>
$c=t_{4}$</p>
<h3 id="数组引用的sdt" tabindex="-1"><a class="header-anchor" href="#数组引用的sdt" aria-hidden="true">#</a> 数组引用的SDT</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/10.png" alt="数组引用的SDT"></p>
<p>数组引用的SDT举例:<br>
设置type属性: 计算宽度<br>
设置offset属性: 累积公式中的偏移地址<br>
设置array属性: 传递数组的基地址<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/11.png" alt="数组引用的SDT举例"></p>
<p>由于部分内容在声明的时候就已经有了信息，可以将信息存放在符号表里。</p>
<p>例，基本属性(直接存放在符号表中)+扩展属性(动态申请内存):<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/12.png" alt="符号表"></p>
<h2 id="控制流语句的翻译" tabindex="-1"><a class="header-anchor" href="#控制流语句的翻译" aria-hidden="true">#</a> 控制流语句的翻译</h2>
<h3 id="控制流语句的基本文法" tabindex="-1"><a class="header-anchor" href="#控制流语句的基本文法" aria-hidden="true">#</a> 控制流语句的基本文法</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/13.png" alt="控制流语句的基本文法"></p>
<h3 id="控制流语句的代码结构" tabindex="-1"><a class="header-anchor" href="#控制流语句的代码结构" aria-hidden="true">#</a> 控制流语句的代码结构</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/14.png" alt="控制流语句的代码结构"></p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/15.png" alt="控制流语句的代码结构"></p>
<h3 id="控制流语句的sdt" tabindex="-1"><a class="header-anchor" href="#控制流语句的sdt" aria-hidden="true">#</a> 控制流语句的SDT</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/16.png" alt="控制流语句的SDT"></p>
<p><strong>例</strong><br>
<img src="/CollegeLessons/CompileSystem/CompileLesson4/17.png" alt="控制流语句的SDT"></p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/18.png" alt="控制流语句的SDT"></p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/19.png" alt="控制流语句的SDT"></p>
<h3 id="编写要点" tabindex="-1"><a class="header-anchor" href="#编写要点" aria-hidden="true">#</a> 编写要点</h3>
<ol>
<li>分析每一个非终结符之前：先计算继承属性，再观察代码结构图中该非终结符对应的方框顶部是否有导入箭头。如果有，调用label( )函数。</li>
<li>上一个代码框执行完不顺序执行下一个代码框时，生成一条显式跳转指令。</li>
<li>有自下而上的箭头时，设置begin属性。且定义后直接调用label( )函数绑定地址。</li>
</ol>
<h2 id="布尔表达式的翻译" tabindex="-1"><a class="header-anchor" href="#布尔表达式的翻译" aria-hidden="true">#</a> 布尔表达式的翻译</h2>
<h3 id="布尔表达式的基本文法" tabindex="-1"><a class="header-anchor" href="#布尔表达式的基本文法" aria-hidden="true">#</a> 布尔表达式的基本文法</h3>
<p>在跳转代码中，逻辑运算符&amp;&amp;、|| 和 ! 被翻译成跳转指令。运算符本身不出现在代码中，布尔表达式的值是通过代码序列中的位置来表示的。</p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/20.png" alt="布尔表达式的基本文法"></p>
<h3 id="布尔表达式的sdt" tabindex="-1"><a class="header-anchor" href="#布尔表达式的sdt" aria-hidden="true">#</a> 布尔表达式的SDT</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/21.png" alt="布尔表达式的SDT"></p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/22.png" alt="布尔表达式的SDT"></p>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson4/23.png" alt="布尔表达式的SDT"></p>
</div></template>
