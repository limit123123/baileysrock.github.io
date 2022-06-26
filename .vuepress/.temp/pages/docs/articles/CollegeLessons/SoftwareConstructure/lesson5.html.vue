<template><div><h1 id="read5-规格说明" tabindex="-1"><a class="header-anchor" href="#read5-规格说明" aria-hidden="true">#</a> read5 规格说明</h1>
<h2 id="_1-课程目标" tabindex="-1"><a class="header-anchor" href="#_1-课程目标" aria-hidden="true">#</a> 1.课程目标</h2>
<ul>
<li>理解方法规格说明中的前置条件和后置条件，并能够写出正确的规格说明</li>
<li>能够针对规格说明写出测试</li>
<li>理解Java中的检查异常和非检查异常</li>
<li>理解如何用异常处理特殊的结果</li>
</ul>
<h2 id="_2-概要" tabindex="-1"><a class="header-anchor" href="#_2-概要" aria-hidden="true">#</a> 2.概要</h2>
<p>规格说明是团队合作的关键点，如果没有规格说明，就没有办法分工实现各种方法。</p>
<p>本篇博客会研究方法中的规格说明，讨论前置条件和后置条件分别是说明，他们对方法的实现者和使用者来说意味着说明。</p>
<h2 id="_3-为什么要使用规格说明" tabindex="-1"><a class="header-anchor" href="#_3-为什么要使用规格说明" aria-hidden="true">#</a> 3.为什么要使用规格说明</h2>
<p>在编程中，很让人抓狂的bug是由于两个地方的代码对于接口行为的理解不一样。</p>
<p>简洁准确的规格说明使我们远离bug，并能更快速发现问题所在。</p>
<p>规格说明对使用者来说也很有用，它们使使用者不必去阅读源码。</p>
<p>例如：以下为BigInteger中的一个方法，API文档中的规格说明。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">BigInteger</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">BigInteger</span> val<span class="token punctuation">)</span>
<span class="token class-name">Returns</span> a <span class="token class-name">BigInteger</span> whose value is <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">+</span> val<span class="token punctuation">)</span><span class="token punctuation">.</span>
<span class="token class-name">Parameters</span> <span class="token operator">:</span>
val <span class="token operator">-</span> value <span class="token keyword">to</span> <span class="token namespace">be</span> added <span class="token keyword">to</span> <span class="token keyword">this</span> <span class="token class-name">BigInteger <span class="token punctuation">.</span>
Returns</span><span class="token operator">:</span>
<span class="token keyword">this</span> <span class="token operator">+</span> val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而Java8中对应的源码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>signum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>signum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>signum <span class="token operator">==</span> signum<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span> <span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>mag<span class="token punctuation">,</span> val<span class="token punctuation">.</span>mag<span class="token punctuation">)</span><span class="token punctuation">,</span> signum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> cmp <span class="token operator">=</span> compareMagnitude <span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> ZERO<span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> resultMag <span class="token operator">=</span> <span class="token punctuation">(</span>cmp <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token function">subtract</span><span class="token punctuation">(</span>mag<span class="token punctuation">,</span> val<span class="token punctuation">.</span>mag<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">subtract</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>mag<span class="token punctuation">,</span> mag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resultMag <span class="token operator">=</span> trustedStripLeadingZeroInts <span class="token punctuation">(</span>resultMag<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span> <span class="token punctuation">(</span>resultMag<span class="token punctuation">,</span> cmp <span class="token operator">==</span> signum <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，通过阅读BigInteger.add的规格说明，客户可以直接了解如何使用BigInteger.add，以及它的行为属性。</p>
<p>如果我们阅读源码，就不得不看BigInteger的构造体，compare Magnitude,subtract以及trusted StripLeadingZero Ints的实现。</p>
<p>同时规格说明对实现者也是很有好处的，它们可以限定一些特殊的输入，这样实现者就可以省略一些麻烦的检查和处理，代码也可以运行的更快。</p>
<p><img src="https://i.loli.net/2021/06/08/RZVxPg6OSnIJeH9.png" alt="屏幕截图 2021-06-08 125908.png"></p>
<p>如上图所示，规格说明就好像一道防火墙一样将客户和实现者隔离开，它使得客户不必知道这个单元是如何运行的(不必阅读源码)，同时也使得实现者不必管这个单元会被如何调用(客户要遵守前置条件)。</p>
<p>这种隔离造成了“解耦”，客户自己的代码和实现者的代码可以独立发生改动，只要双方都遵循规格说明对应的制约。</p>
<h2 id="_4-行为等价" tabindex="-1"><a class="header-anchor" href="#_4-行为等价" aria-hidden="true">#</a> 4.行为等价</h2>
<p>“行为等价”是对于客户来说的。当两个方法的行为是一样的，我们可以将方法的实现在两者中互换。</p>
<p>为了判断“行为等价”，我们必须判断一个方法是否可以替换另一个方法，而程序的行为不发生改变。</p>
<h2 id="_5-规格说明的结构" tabindex="-1"><a class="header-anchor" href="#_5-规格说明的结构" aria-hidden="true">#</a> 5.规格说明的结构</h2>
<p>一个规格说明含有以下两个“条件”：</p>
<ul>
<li>一个前置条件，关键词是requires</li>
<li>一个后置条件，关键词是effects</li>
</ul>
<p>其中前置条件是客户的义务(谁调用的这个方法)，他确保了方法被调用时，所处的状态。</p>
<p><img src="https://i.loli.net/2021/06/08/5bMerYiImp9klyu.png" alt="屏幕截图 2021-06-08 130810.png"></p>
<p>而后置条件是实现者的义务。如果前置条件得到了满足，那么该方法的行为应该符合后置条件的要求，例如返回一个何时的值，抛出一个特定的异常，修改一个特定的对象等等。</p>
<p><img src="https://i.loli.net/2021/06/08/ANqLSihHMrcx4ta.png" alt="屏幕截图 2021-06-08 131109.png"></p>
<p>如果前置条件不满足的话，实现也不需要满足后置条件--方法可以做任何事情，例如不终止而是抛出一个异常、返回一个任意的值、做一个任意的修改等等。</p>
<h2 id="_6-java中的规格说明" tabindex="-1"><a class="header-anchor" href="#_6-java中的规格说明" aria-hidden="true">#</a> 6.Java中的规格说明</h2>
<p>Java的静态检查也是属于一种前置条件和后置条件的检查(编译器)。</p>
<p>不属于数据类型范畴的约束，必须通过注释写在方法的前面，通过人们来检查和保证。</p>
<p>Java对于文档注释有一些传统</p>
<ul>
<li>@param 参数名称 参数描述</li>
<li>@return 返回值描述</li>
</ul>
<p>故应该将前置条件放在@param的地方，后置条件放在@return的地方。</p>
<p>例如，一个规格说明可能是这样：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token keyword">requires</span><span class="token operator">:</span>
 val occurs exactly once in arr
<span class="token operator">-</span> effects<span class="token operator">:</span>
 returns index i such that arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它在Java中可能被注释为这样;</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Find a value in an array.
* <span class="token keyword">@param</span> <span class="token parameter">arr</span> array to search, requires that val occurs exactly once in arr
* <span class="token keyword">@param</span> <span class="token parameter">val</span> value to search for
* <span class="token keyword">@return</span> index i such that arr[i] = val
*/</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java API文档就是通过Java标准库源码中的规格说明注释生成的。</p>
<p>Eclipse也可以根据你的规格说明产生对应的文档，或者产生和Java API一个格式的HTML文档，这对你和你的客户来说都是很有用的信息。</p>
<h2 id="_7-文档注释、一般注释" tabindex="-1"><a class="header-anchor" href="#_7-文档注释、一般注释" aria-hidden="true">#</a> 7.文档注释、一般注释</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 这是文档注释
*/</span>

<span class="token comment">/*
* 这是一般注释
*/</span>

<span class="token comment">// 这是一般注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档注释中需要采用第一种注释方法，测试策略一般采用第二种注释方法，对测试策略中的每种情况测试时，采用第三种注释方法。</p>
<h2 id="_8-null引用" tabindex="-1"><a class="header-anchor" href="#_8-null引用" aria-hidden="true">#</a> 8.null引用</h2>
<p>在Java中，对于对象和数组的引用可以取一个特殊的值null，他表示这个引用还没有指向任何对象。</p>
<p>原始类型不能时null:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>     <span class="token comment">//illegal</span>
<span class="token keyword">double</span> depth <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//illegal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以给非原始类型变量赋予null值：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> points <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在编译的时候，这是合法的，但是如果你尝试调用这个null对象的方法，或者访问它里面对应的数值，会产生一个运行时的错误：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>name<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//throws NullPointerException</span>
points<span class="token punctuation">.</span>length <span class="token comment">//throws NullPointerException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意的是，null并不等于“空”，例如一个空的字符串“”或者一个空的数组。</p>
<p>对于一个空的字符串或者数组，你可以调用它们的方法或者访问其中的数据，只不过它们对应的元素长度是0；</p>
<p>而对于一个指向null的String类型变量，它什么也不是：调用length()会产生一个NullPointerException.</p>
<p>注意：聚合类型例如List可能不指向null，但它的元素可能指向null。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">></span></span> sizes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sizes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/08/ybLIV3TxJAjFwEN.png" alt="屏幕截图 2021-06-08 134221.png"></p>
<p>如果尝试使用这些为null的元素，依然会报错。</p>
<p>使用null值很容易发生错误，同时它们也是不安全的，所以在设计程序的时候尽可能避开它们。</p>
<p>一个约定俗成的规矩：参数和返回值不是null.</p>
<p>每一个方法都隐式的规定了前置条件中的数组或者其他对象不能是null，同时后置条件中的返回对象也不会是null值(除非规格说明显示的说明了可能返回null，不过这通常不是一个好的设计)。总之避免使用null!</p>
<p>在Java中你可以在类型中显示的禁用null，这样会在编译期和运行时自动检查null值：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list1<span class="token punctuation">,</span> <span class="token annotation punctuation">@NonNull</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-规格说明应该说些什么" tabindex="-1"><a class="header-anchor" href="#_9-规格说明应该说些什么" aria-hidden="true">#</a> 9.规格说明应该说些什么</h2>
<p>一个规格说明应该谈到接口的参数和返回的值，但是它不应该谈到局部变量或者私有的(private)内部方法或数据。这些内部的实现应该在规格说明中对读者隐藏。</p>
<p><img src="https://i.loli.net/2021/06/08/AvMlxnPT7QSbo4r.png" alt="屏幕截图 2021-06-08 135011.png"></p>
<p>在Java中，规格说明的读者通常不会接触到实现的源码，应为Javadoc工具通过你的源码自动生成对应的规格说明并渲染成HTML.</p>
<h2 id="_10-测试与规格说明" tabindex="-1"><a class="header-anchor" href="#_10-测试与规格说明" aria-hidden="true">#</a> 10.测试与规格说明</h2>
<p>在测试中，我们谈到了黑盒测试意味着仅仅通过规格说明构建测试，而白盒测试是通过代码实现来构建测试。</p>
<p>但是要特别注意一点：即使是白盒测试也必须遵循规格说明。</p>
<p>实现方法也许很依赖前置条件的满足，否则方法就会有一个未定义的行为。那你的测试是不能以来这种未定义的行为的。</p>
<p>测试用例必须严格遵循规格说明。</p>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token keyword">requires</span><span class="token operator">:</span>
 val occurs in arr
<span class="token operator">-</span> effects<span class="token operator">:</span>
 returns index i such that arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个规格说明以及很明显的要求了前置条件，即val必须在arr中存在，而他的后置条件很弱--没有规定返回哪个索引。</p>
<p>类似的，即使find会在找不到val的时候抛出一个异常，你的测试用例也不能依赖这种行为，因为它不能在违背前置条件的情况下调用find().</p>
<p>因此，白盒测试意味着你可以通过代码的实现去构建符合规格说明的测试用例，以此来测试不同的实现。</p>
<h2 id="_11-测试单元" tabindex="-1"><a class="header-anchor" href="#_11-测试单元" aria-hidden="true">#</a> 11.测试单元</h2>
<p>一个好的单元测试应该仅仅关注于一个规格说明，我们的测试不应该依赖于另一个要测试的单元。</p>
<p>一个好的综合测试(测试多个模块)，它确保的是各个模块之间是兼容的：调用者与被调用者之间的数据输入输出一个是符合要求的。同时综合测试不能取代系统的单元测试，因为各个模块的输出集合很可能在输入空间中没有代表性。</p>
<h2 id="_12-改变对象方法的规格说明" tabindex="-1"><a class="header-anchor" href="#_12-改变对象方法的规格说明" aria-hidden="true">#</a> 12.改变对象方法的规格说明</h2>
<p>我们在之前谈到了可改变的对象和不可改变的对象，但是我们对于find的规格说明(后置条件)并没有告诉我们这个副作用--对象的内容被改变了。</p>
<p>以下是一个告诉了这种作用的规格说明，它来自Java中的List接口。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list1<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list2<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token keyword">requires</span><span class="token operator">:</span>
 list1 <span class="token operator">!=</span> list2
<span class="token operator">-</span> effects<span class="token operator">:</span>
 modifies list1 by adding the elements of list2 <span class="token keyword">to</span> <span class="token namespace">the</span> end of it<span class="token punctuation">,</span> and returns <span class="token boolean">true</span> <span class="token keyword">if</span>
list1 changed as a result of call
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先看看后置条件：它给出了两个限制：list1会被更改，返回值是如何确定的。</p>
<p>前置条件：我们可以发现，如果我们试着将一个列表加到它本身，其结果是未定义的(即规格说明未指出)，若尝试将两个指向同一个对象的列表相加，这样方法可能不会中止。</p>
<p>正如null是隐式的不被允许的，我们也隐式的规定改变对象是不被允许的，除非显示的声明。</p>
<p>例如：改变对象方法的例子，规格说明中显示说明了改变参数对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> lst<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token keyword">requires</span><span class="token operator">:</span>
 nothing
<span class="token operator">-</span> effects<span class="token operator">:</span>
 puts lst in sorted order<span class="token punctuation">,</span> i<span class="token punctuation">.</span>e<span class="token punctuation">.</span> lst<span class="token punctuation">[</span>i<span class="token punctuation">]</span> ≤ lst<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token keyword">for</span> all <span class="token number">0</span> ≤ i <span class="token operator">&lt;</span> j <span class="token operator">&lt;</span> lst<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不改变对象方法的例子，规格说明中没有谈到该方法会不会改变参数对象，即默认不会改变：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> toLowerCase <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> lst<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token keyword">requires</span><span class="token operator">:</span>
 nothing
<span class="token operator">-</span> effects<span class="token operator">:</span>
 returns a <span class="token keyword">new</span> list t where t<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> lst<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>toLowerCase <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-异常" tabindex="-1"><a class="header-anchor" href="#_13-异常" aria-hidden="true">#</a> 13.异常</h2>
<p>异常的处理既能远离bug又易于理解。</p>
<p>一个方法的表示(signature)包含它的名字、参数类型、返回类型，同时也包含该方法能触发的异常。</p>
<h3 id="报告bug的异常" tabindex="-1"><a class="header-anchor" href="#报告bug的异常" aria-hidden="true">#</a> 报告bug的异常</h3>
<p>你可能在java编程中遇到了一些异常，例如ArrayIndexOutOfBoundsException(数组访问越界)或者Null Pointer Exception(访问一个null引用的对象)。这些异常通常都是用来报告你代码里的bug，同时它们报告的信息也能帮助你修复bug。</p>
<h3 id="报告特殊结果的异常" tabindex="-1"><a class="header-anchor" href="#报告特殊结果的异常" aria-hidden="true">#</a> 报告特殊结果的异常</h3>
<p>异常不仅被用来报告bug，它们也被用来提升那些包含特殊结果的代码的结构。</p>
<p>我们可以抛出异常的方法处理特殊结果：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> <span class="token function">lookup</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NotFoundException</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>not found<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotFoundException</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用者使用catch捕获这个异常：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BirthdayBook</span> birthdays <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">LocalDate</span> birthdate <span class="token operator">=</span> birthdays<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token string">"Alyssa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// we know Alyssa's birthday</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NotFoundException</span> nfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// her birthday was not in the birthday book</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方法可以避免使用“特殊“的返回值来通报特殊情况，调用者也不需要再检查返回值。</p>
<h2 id="_14-已检查异常和未检查异常" tabindex="-1"><a class="header-anchor" href="#_14-已检查异常和未检查异常" aria-hidden="true">#</a> 14.已检查异常和未检查异常</h2>
<p>我们看到了两种不同目的的异常：报告特殊的结果或者报告bug。</p>
<p>一个通用的规则是，我们用已检查的异常来报告特殊结果，用未检查的异常来报告bug。</p>
<p>已检查异常这个名字是因为编译器会检查这种异常是否被正确处理：</p>
<ul>
<li>如果一个方法抛出一个已检查异常，这种可能性必须添加到它的表示中，例如NotFoundException就是一个已检查异常，这也是为什么它的生命的结尾有一个throws NotFoundException.</li>
<li>如果一个方法调用一个可能抛出已检查异常的方法，该方法要么处理它，要么在它的表示中说明该异常(交给它的调用者处理).</li>
</ul>
<p>相应的，未检查异常用来报告bug。这些异常并不指望被代码处理，同时这样的异常也不应该被显示抛出，例如边界溢出、null值、非法参数、断言失败等等。</p>
<p>同样编译器不会检查这些异常是否被try-catch处理或者用throws抛给上一层调用者。(Java允许你将未检查的异常作为方法的表示，不过没有什么意义，也不建议这么做)</p>
<p>异常中有可能有和异常相关的信息。</p>
<h2 id="_15-throwable类层次" tabindex="-1"><a class="header-anchor" href="#_15-throwable类层次" aria-hidden="true">#</a> 15.throwable类层次</h2>
<p>为理解Java如何定义一个异常是已检查还是未检查的，让我们看一看Java异常类的层次图：</p>
<p><img src="https://i.loli.net/2021/06/08/ZekNBRDSmg1PMFl.png" alt="屏幕截图 2021-06-08 143519.png"></p>
<p>throwable 是一个能够被抛出和捕获的对象对应的类。throwable的实现记录了栈的结构(异常被抛出的时候)，同时还有一个描述该异常的消息(可选)。任何时候被抛出或者捕获的异常对象都应该是Throwable的子类。</p>
<p>Error是throwable的一个子类，他被保留用于Java运行系统的异常，例如StackflowError和OutOfMemoryError.
Errors应该被认为是不可恢复的，并且一般不会去捕获它。</p>
<p>下面描述了在Java中如何区别已检查异常和未检查异常：</p>
<ul>
<li>RuntimeException,Error,以及它们的子类都是未检查异常。编译器不会要求它们被throws修饰，也不会要求它们被捕获。</li>
<li>所有其他的throwables--throwable,Exception和其他子类都是已检查异常。编译器会要求它们被捕获或者用throws传给调用者处理。</li>
</ul>
<h2 id="_16-设计异常时应该考虑的事情" tabindex="-1"><a class="header-anchor" href="#_16-设计异常时应该考虑的事情" aria-hidden="true">#</a> 16.设计异常时应该考虑的事情</h2>
<p>除了对性能有影响，Java中的异常会带来使用上的开销：如果你要设计一个异常，你必须创建一个新的类。如果你调用一个可能抛出已检查异常的方法，你必须try-catch处理它(即使你知道这个异常一定不会发生)。</p>
<p>所以我们有如下规则：</p>
<ul>
<li>对于意料之外的bug使用未检查的异常，或者对于使用者来说避免异常的产生的情况非常容易(例如检查一个队列是否为空)</li>
<li>其他的情况我们使用已检查异常</li>
</ul>
<p>例如：</p>
<ul>
<li>当队列时空时，Queue.pop()会抛出一个未检查异常，因为检查队列是否为空对于用户来说是容易的。</li>
<li>当无法连接互联网时，Url.getWebPage()抛出一个已检查异常IOException，因为客户可能无法确定调用的时候网络是否可用</li>
<li>当x没有整数开方时，int integerSquareRoot(int x)抛出一个已检查异常NotPerfectSquareException，因为对于调用者来说，判断一个整数是否为平方是困难的。</li>
</ul>
<h2 id="_17-在规格说明中应该如何声明异常" tabindex="-1"><a class="header-anchor" href="#_17-在规格说明中应该如何声明异常" aria-hidden="true">#</a> 17.在规格说明中应该如何声明异常</h2>
<p>因为异常也可以归为方法的输出，所以我们应该在规格说明的后置条件中描述它，Java是以@throws作为Javadoc中异常注释的。Java也可能要求函数声明时用throws标出可能抛出的异常。</p>
<h3 id="非检查异常" tabindex="-1"><a class="header-anchor" href="#非检查异常" aria-hidden="true">#</a> 非检查异常：</h3>
<p>由于它们描述的时意料之外的bug或者失败，不属于后置条件，所以不应该用@throws或throws修饰它们。例如NullPointerException就不应该在规格说明中列出--我们的前置条件已经隐式(显式)的禁止了null值，这意味着如果使用者传入一个null，我们可以没有任何警告的扔出一个异常，例如下面这个规格说明，就没有提到NullPointerException：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* <span class="token keyword">@param</span> <span class="token parameter">lst</span> list of strings to convert to lower case
* <span class="token keyword">@return</span> new list lst' where lst'[i] is lst[i] converted to lowercase
*/</span>
<span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> toLowerCase <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="已检查异常" tabindex="-1"><a class="header-anchor" href="#已检查异常" aria-hidden="true">#</a> 已检查异常：</h3>
<p>对于报告特殊结果的异常，我们应该在Javadoc中用@throws表示出来，并明确什么情况下会导致这个异常的抛出。另外，如果是一个已检查异常，Java会要求函数声明的时候用throws标识出来。</p>
<p>例如，NotPerfectSquareException是一个已检查异常：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Compute the integer square root.
* <span class="token keyword">@param</span> <span class="token parameter">x</span> value to take square root of
* <span class="token keyword">@return</span> square root of x
* <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NotPerfectSquareException</span></span> if x is not a perfect square
*/</span>
<span class="token keyword">int</span> integerSquareRoot <span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NotPerfectSquareException</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报告特殊结果的未检查异常" tabindex="-1"><a class="header-anchor" href="#报告特殊结果的未检查异常" aria-hidden="true">#</a> 报告特殊结果的未检查异常</h3>
<p>对于报告特殊结果的未检查异常，Java允许但是不要求使用throws在声明中标识出，但是这种情况下通常不要使用throws因为这会使得读者困惑(以为他是一个已检查异常).</p>
<p>例如，假设你将EmptyQueueException定义为未检查异常，那么你应该在Javadoc中使用@throws对其进行说明，但是不要在函数声明中将其标识出：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Pops a value from this queue.
* <span class="token keyword">@return</span> next value in the queue, and removes the value from the queue
* <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">EmptyQueueException</span></span> if this queue is empty
*/</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-总结" tabindex="-1"><a class="header-anchor" href="#_18-总结" aria-hidden="true">#</a> 18.总结</h2>
<p>一个规格说明就好像是实现者和使用者之间的防火墙，他使得分开开发成为可能：使用者可以在不理解源代码的情况下使用模块，实现者可以在不知道模块如何被使用的情况下实现模块。</p>
<p>内容与三大目标之间的联系：</p>
<ul>
<li>远离bug：一个好的规格说明会清晰明确的要求实现者和使用者遵守相关的制约。而Bug经常是因为实现者和使用者对于接口的理解冲突导致的，规格说明会明显减少这种可能性。在模块中使用一些能够交由机器检查的特性，例如静态检查、异常等而不是注释会进一步降低bug的可能性。</li>
<li>易读性：一个间接准确的规格说明会比源代码本身更易读易懂。</li>
<li>易改动性：规格说明在实现者和使用者之间建立了一个”契约“--只要这两方遵守这份”契约“，它们可以对自己的代码进行任何改变。</li>
</ul>
</div></template>
