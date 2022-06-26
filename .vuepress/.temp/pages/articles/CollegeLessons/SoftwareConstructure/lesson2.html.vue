<template><div><h1 id="read2-java基础" tabindex="-1"><a class="header-anchor" href="#read2-java基础" aria-hidden="true">#</a> read2 java基础</h1>
<h2 id="_1-课程目标" tabindex="-1"><a class="header-anchor" href="#_1-课程目标" aria-hidden="true">#</a> 1.课程目标</h2>
<p>学习java的基本语法</p>
<h2 id="_2-快照图" tabindex="-1"><a class="header-anchor" href="#_2-快照图" aria-hidden="true">#</a> 2.快照图</h2>
<p>为了弄清楚一些隐秘的问题，我们会画一些图来进行结束i。快照图能代表程序运行时的各种状态--它的栈（即方法和局部变量）和它的堆（即现在存在的对象）。</p>
<blockquote>
<p>快照图有如下优点：</p>
<ul>
<li>在课堂、会议上交流</li>
<li>解释一些概念</li>
<li>解释工程的设计思想</li>
</ul>
</blockquote>
<p>一个对象用一个圆圈表示，对象内部会有很多区域，这些区域又指向他们对应的值，同时这些区域也是又他们的类型的，例如int x.</p>
<p><img src="https://i.loli.net/2021/06/06/efL749iRvkwgE2h.png" alt="屏幕截图 2021-06-06 003933.png"></p>
<h2 id="_3-可更改的值、可被重新赋值的改变" tabindex="-1"><a class="header-anchor" href="#_3-可更改的值、可被重新赋值的改变" aria-hidden="true">#</a> 3.可更改的值、可被重新赋值的改变</h2>
<p>通过快照图，我们可以视图化可更改的值和可重新赋值的改变之间的区别：</p>
<ul>
<li>当你给一个变量或者一个区域赋值的时候，你实际上时改变了它指向的方向，即指向了另一个值。</li>
<li>当你修改一个可被更改的值的时候--例如数组或者列表，你真正修改了这个值本身，区域的指向并没有改变。</li>
</ul>
<h4 id="重新赋值和不可改变的值" tabindex="-1"><a class="header-anchor" href="#重新赋值和不可改变的值" aria-hidden="true">#</a> 重新赋值和不可改变的值：</h4>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token string">"b"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>String就是一种不可改变的值，这种类型的值在第一次确定后就不能改变。
不可更改的对象在快照图中以双圆圈的边框表示，例如上面的例子。</p>
<p><img src="https://i.loli.net/2021/06/06/i3j58lOuUXeC2fb.png" alt="屏幕截图2021-06-06 004653.png"></p>
<p>通过IDEA，我们可以看到String s在字符串连接操作后，指向的区域不同。一开始指向区域497，之后指向区域499.</p>
<p><img src="https://i.loli.net/2021/06/06/TYHznZ9J7QKUCM1.png" alt="屏幕截图 2021-06-06 005529.png">
<img src="https://i.loli.net/2021/06/06/srQep9qdEgDv7ja.png" alt="屏幕截图 2021-06-06 005715.png"></p>
<h4 id="可更改的值" tabindex="-1"><a class="header-anchor" href="#可更改的值" aria-hidden="true">#</a> 可更改的值</h4>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/06/5mLwEqenMfYKGuX.png" alt="屏幕截图 2021-06-06 004913.png"></p>
<p>通过IDEA，我们可以看到sb在初始化后指向497，在添加一个元素'b'后，指向的区域仍为497.
<img src="https://i.loli.net/2021/06/06/OiCNBVf9WKm8xrR.png" alt="屏幕截图 2021-06-06 005130.png">
<img src="https://i.loli.net/2021/06/06/41BRbZu8m6IzSwe.png" alt="屏幕截图 2021-06-06 005352.png"></p>
<h4 id="不可更改的引用" tabindex="-1"><a class="header-anchor" href="#不可更改的引用" aria-hidden="true">#</a> 不可更改的引用</h4>
<p>java也提供了不可更改的引用：final声明，变量一旦被赋值就不能再次改变它的引用（指向的值或者对象）
<img src="https://i.loli.net/2021/06/06/qdLIDapAiv8Kwfr.png" alt="屏幕截图 2021-06-06 005950.png"></p>
<p>在快照图中，不可更改的引用（final）用双箭头表示，如图中的id，person的id引用不可改变，但是age时可以改变的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在IDEA中实践，试图将e修改为20，此时编译器会报错.</p>
<p>final为不可更改的引用提供了静态检查。</p>
<p><img src="https://i.loli.net/2021/06/06/YReU8F1HbCds9Kt.png" alt="屏幕截图 2021-06-06 002636.png"></p>
<p>注意：</p>
<p>final知识限定了引用不可变，我们可以将其引用到一个可更改的值。</p>
<p>例如final StringBuilder sb，虽然引用不变，但引用对象本身的内容可以改变。</p>
<p>在IDEA中实践以下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list_int <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list_int<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list_int<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，虽然list_int的引用不变，但引用对象的本身的内容可以改变，我们可以在IDEA中debug，探索list_int的引用。</p>
<p><img src="https://i.loli.net/2021/06/06/YtkHwIqOj2Bc8DR.png" alt="屏幕截图 2021-06-06 010703.png"></p>
<p><img src="https://i.loli.net/2021/06/06/UrlcxmbaV4AyC3Z.png" alt="屏幕截图 2021-06-06 010755.png"></p>
<p><img src="https://i.loli.net/2021/06/06/VEIuwt86BnJspy2.png" alt="屏幕截图 2021-06-06 010809.png"></p>
<p>我们可以看到虽然，此时list_int指向的都是495区域，但其引用的内容本身可以改变。</p>
<h2 id="_4-java聚合类型" tabindex="-1"><a class="header-anchor" href="#_4-java聚合类型" aria-hidden="true">#</a> 4.Java聚合类型</h2>
<p>本节主要描述列表、集合、映射，List、Set、Map都是接口，他们定义了类型的工作，但是他们不提供具体的实现代码。</p>
<ul>
<li>列表</li>
</ul>
<p><img src="https://i.loli.net/2021/06/06/G8SKi652gJ3osmy.png" alt="屏幕截图 2021-06-06 014333.png"></p>
<p>列表的声明与创建：</p>
<p>若用Arrays.asList创建List，则其长度固定</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span> array1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"b"</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用ArrayList、LinkedList、Vector等实现List,java要求元素的普遍性，我们不能直接使用原始类型作为元素的类型，例如List&lt;int&gt;，但是每个原始类型都有对应的对象类型，我们可以用其对应的对象的类型声明。</p>
<p>若左右两边类型的参数相同，java可以自动识别。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//a List of String</span>
<span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//a List of Integer</span>
<span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">></span></span> list3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//a List of Double</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>集合</li>
</ul>
<p><img src="https://i.loli.net/2021/06/06/5i9KLh2yn4lpQeW.png" alt="屏幕截图 2021-06-06 014533.png"></p>
<p>集合的声明与创建：</p>
<p>对于集合，集合没有顺序概念，我们默认使用HashSet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Set</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span><span class="token string">"hello"</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"set中是否含有"</span><span class="token operator">+</span>str1<span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SortedSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//也可以使用TreeSet实例化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集合的遍历，这种foreach语句实际上用到了Iterator，java也提供了数字索引，但可能会引起一些难以发现的bug：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> string <span class="token operator">:</span> set<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>string<span class="token operator">+</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Map映射关系</li>
</ul>
<p><img src="https://i.loli.net/2021/06/06/oYIKEsJka8A34qc.png" alt="屏幕截图 2021-06-06 014502.png"></p>
<p>常见Map类型：HashMap（无序）、LinkedHashMap（有序，记录插入顺序）、TreeMap（有序）。映射默认使用HashMap。注意此时Map类型的k必须为不可变类型。
映射的声明与创建：</p>
<p>我们此处构建了HashMap与LinkedHashMap，并为其赋相同的映射关系。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Map</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//构建Integer、String的HashMap</span>
<span class="token class-name">Map</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//构建Integer、String的LinkedHashMap</span>
<span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> k <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> string1 <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> string2 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> string3 <span class="token operator">=</span> <span class="token string">"world!"</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>string1<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span>string2<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>string3<span class="token punctuation">)</span><span class="token punctuation">;</span>
map1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>string1<span class="token punctuation">)</span><span class="token punctuation">;</span>
map1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span>string2<span class="token punctuation">)</span><span class="token punctuation">;</span>
map1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>string3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历：</p>
<p>对于map我们可以根据key对Map遍历</p>
<p>通过Map.KeySet方法，获取map中的所有键名</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> integer<span class="token operator">:</span>map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> integer<span class="token operator">:</span>map1<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过IDEA测试以上代码，可以发现，linkset有顺序的区分。（上为HashMap、下为LinkedHashMap）</p>
<p><img src="https://i.loli.net/2021/06/06/yxArLg36I8msqVf.png" alt="屏幕截图 2021-06-06 013734.png"></p>
<p>我们也可以直接对Map的键值遍历，并通过IDEA测试：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> string <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/06/dHkiUW8Nl6f4hoP.png" alt="屏幕截图 2021-06-06 014028.png"></p>
<h2 id="_5-枚举类型" tabindex="-1"><a class="header-anchor" href="#_5-枚举类型" aria-hidden="true">#</a> 5.枚举类型</h2>
<blockquote>
<p>有时候一种类型中会存在一个既小又有限的不可变的值的集合，例如：</p>
<ul>
<li>一年中的月份：January、February、...、December</li>
<li>一周中的每一天：Monday、Tuesday、...、Sunday</li>
<li>方向：North、South、East、West</li>
<li>颜色：Red、Yello、Blue</li>
</ul>
</blockquote>
<p>当不可变的集合满足“小“和”有限“这两个条件时，将这个集合中的所有值统一定义为一个命名常量就是有意义的。
在Java中，这样的命名常量就成为enumeration（枚举类型）并使用关键字enum来构造。</p>
<ul>
<li>例如，我们可以按照如下构造enum类型。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Month</span> 
<span class="token punctuation">{</span>
    <span class="token class-name">January</span><span class="token punctuation">,</span><span class="token class-name">February</span><span class="token punctuation">,</span><span class="token class-name">March</span><span class="token punctuation">,</span><span class="token class-name">April</span><span class="token punctuation">,</span><span class="token class-name">May</span><span class="token punctuation">,</span><span class="token class-name">June</span><span class="token punctuation">,</span><span class="token class-name">July</span><span class="token punctuation">,</span>
    <span class="token class-name">August</span><span class="token punctuation">,</span><span class="token class-name">September</span><span class="token punctuation">,</span><span class="token class-name">October</span><span class="token punctuation">,</span><span class="token class-name">Novembr</span><span class="token punctuation">,</span><span class="token class-name">December</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Day</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Monday</span><span class="token punctuation">,</span><span class="token class-name">Tuesday</span><span class="token punctuation">,</span><span class="token class-name">Wednesday</span><span class="token punctuation">,</span><span class="token class-name">Friday</span><span class="token punctuation">,</span><span class="token class-name">Saturday</span><span class="token punctuation">,</span><span class="token class-name">Sunday</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>你可以在声明变量或函数的时候使用例如Month这样的枚举型类型名</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Month</span> month<span class="token punctuation">;</span>
month <span class="token operator">=</span> <span class="token class-name">Month<span class="token punctuation">.</span>August</span><span class="token punctuation">;</span>    <span class="token comment">//像引用一个静态常量一样来引用枚举类型的值</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要强调的是，枚举类型是一个独特的新类型，枚举型变量更加安全，因为它可以发现一些类型错误，如类型不匹配。</p>
<p>IDEA会报如下错误：</p>
<p><img src="https://i.loli.net/2021/06/06/tXgejPxDzWo375G.png" alt="屏幕截图 2021-06-06 122210.png"></p>
</div></template>
