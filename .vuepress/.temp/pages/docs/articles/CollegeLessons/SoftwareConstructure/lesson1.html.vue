<template><div><h1 id="read1-静态检查" tabindex="-1"><a class="header-anchor" href="#read1-静态检查" aria-hidden="true">#</a> read1 静态检查</h1>
<h2 id="_1-课程目标" tabindex="-1"><a class="header-anchor" href="#_1-课程目标" aria-hidden="true">#</a> 1.课程目标</h2>
<p>学习静态类型
了解好的软件应该具有的三个属性</p>
<h2 id="_2-类型" tabindex="-1"><a class="header-anchor" href="#_2-类型" aria-hidden="true">#</a> 2.类型</h2>
<blockquote>
<p>java有五种原始类型：int、long、boolean、double、char.</p>
</blockquote>
<blockquote>
<p>java也有对象类型，例如：String、BigInteger.</p>
</blockquote>
<p>从java的传统来说，原始类型一般采用小写字母，对象类型的起始字母用大写.</p>
<p>java中有一些操作符可以对不同类型的对象进行操作，这是我们就称之为可重载(overloaded)，例如java中算数运算符+、-、*、/ 都是可重载的。
一些函数也是可重载的，大多数编程语言都有不同程度的重载性。</p>
<h2 id="_3-静态类型" tabindex="-1"><a class="header-anchor" href="#_3-静态类型" aria-hidden="true">#</a> 3.静态类型</h2>
<p>java是一种静态类型的语言。所有变量的类型在编译的时候就已经直知道了（程序还没有运行），所以编译器也可以推测出每一个表达式的类型。例如，如果a和b是int类型的，那么编译器就可以知道a+b的结果也是int类型的。</p>
<p>在动态类型的语言中（例如python），这种类型检查发生在程序运行时候。</p>
<p>静态类型是静态检查的一种，检查发生在编译的时候。</p>
<h2 id="_4-静态检查、动态检查、无检查" tabindex="-1"><a class="header-anchor" href="#_4-静态检查、动态检查、无检查" aria-hidden="true">#</a> 4.静态检查、动态检查、无检查</h2>
<p>静态检查：bug在程序运行前发现，通常可以发现语法错误、错误的名字、参数的个数不对、参数的类型不对、错误的返回类型等错误。静态检查倾向于类型错误，与特定值无关的错误。</p>
<p>动态检查：bug在程序运行中发现，通常可以发现非法的变量值、无法表示的返回值、越界访问、使用null对象解引用等错误。</p>
<p>无检查：编程语言本身不帮助你发现错误，必须通过特定条件，检查代码正确性。</p>
<h2 id="_5-变化的值、可被赋值的改变" tabindex="-1"><a class="header-anchor" href="#_5-变化的值、可被赋值的改变" aria-hidden="true">#</a> 5.变化的值、可被赋值的改变</h2>
<blockquote>
<p>final提供了不变索引的静态检查</p>
</blockquote>
<p>final：java为我们提供了不变的索引，只要变量被初始化后就不能被再次赋值--只要在声明的时候加上final。</p>
<p>在IDEA中测试final，发现编译器会报错：无法将值赋给final变量'e'</p>
<p><img src="https://i.loli.net/2021/06/06/YReU8F1HbCds9Kt.png" alt="屏幕截图 2021-06-06 002636.png"></p>
</div></template>
