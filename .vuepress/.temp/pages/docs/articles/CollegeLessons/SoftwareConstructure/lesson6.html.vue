<template><div><h1 id="read6-抽象数据类型" tabindex="-1"><a class="header-anchor" href="#read6-抽象数据类型" aria-hidden="true">#</a> read6 抽象数据类型</h1>
<h2 id="_1-java的访问控制" tabindex="-1"><a class="header-anchor" href="#_1-java的访问控制" aria-hidden="true">#</a> 1.Java的访问控制</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Wallet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> amount<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loanTo</span><span class="token punctuation">(</span><span class="token class-name">Wallet</span> that<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// put all of this wallet's money into that wallet</span>
        <span class="token comment">/*A*/</span> 
        that<span class="token punctuation">.</span>amount <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>amount<span class="token punctuation">;</span>
        <span class="token comment">/*B*/</span> 
        amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*C*/</span> 
        <span class="token class-name">Wallet</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*D*/</span> 
        w<span class="token punctuation">.</span>amount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token comment">/*E*/</span> 
        w<span class="token punctuation">.</span><span class="token function">loanTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Wallet</span> w<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNetWorth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*F*/</span> 
        <span class="token keyword">return</span> w<span class="token punctuation">.</span>amount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isBroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*G*/</span> 
        <span class="token keyword">return</span> <span class="token class-name">Wallet</span><span class="token punctuation">.</span>amount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于语句/*A*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>that<span class="token punctuation">.</span>amount <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>amount<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在Java中允许对this.amount的索引</li>
<li>在Java中允许对that.amount的索引</li>
</ul>
<p>关于语句/*B*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在Java中允许对amount的索引</li>
</ul>
<p>关于语句/*C*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Wallet</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在Java中允许对Wallet()构造函数的调用</li>
</ul>
<p>关于语句/*D*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>w<span class="token punctuation">.</span>amount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在Java中允许对w.amount的索引</li>
</ul>
<p>关于语句/*E*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>w<span class="token punctuation">.</span><span class="token function">loanTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在Java中允许对loanTo()的调用</li>
<li>在这句代码执行之后，w指向的Wallet对象的金额将会是0</li>
</ul>
<p>关于语句/*F*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">return</span> w<span class="token punctuation">.</span>amount<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>这里关于w.amount的索引不会被允许，因为amount是在另一个类中的私有区域</li>
<li>这个非法访问会被静态捕捉</li>
</ul>
<p>关于语句/*G*/,</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">return</span> <span class="token class-name">Wallet</span><span class="token punctuation">.</span>amount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>这里关于Wallet.amount的索引不会被允许，因为amount是一个私有地址</li>
<li>这里关于Wallet.amount的索引不会被允许，因为amount是一个实例变量</li>
<li>这个非法访问会被静态捕捉</li>
</ul>
<h2 id="_2-什么是抽象" tabindex="-1"><a class="header-anchor" href="#_2-什么是抽象" aria-hidden="true">#</a> 2.什么是抽象</h2>
<p>抽象数据类型是软件工程中一个普遍原则的实例，从他衍生出很多意思相近的名词。这里列出了几个能够表达其中思想的词：</p>
<ul>
<li>抽象：忽略底层的细节而在高层思考</li>
<li>模块化：将系统分为一个模块，每个模块可以单独的进行设计、实现、测试、推倒，并且在剩下的开发中进行复用</li>
<li>封装：在模块的外部建立起一道”围墙“，使它只对自己内部的行为负责，并且系统别处的bug不会影响到它内部的正确性</li>
<li>信息隐藏：将模块的实现细节隐藏，使未来更改模块内部时不必改变外部代码</li>
<li>功能分离：一个模块仅仅负责一个特性/功能，而不是将一个特性运用在很多模块上或一个模块拥有很多特性</li>
</ul>
<p>这些思想的本质目的都是为了实现我们的三个目标：远离bug、易于理解、可改动。</p>
<p>事实上，我们在设计方法和规格说明的时候，就已经接触过这些思想：</p>
<ul>
<li>抽象：规格说明使得使用者只需要弄懂规格说明并遵守前置条件，而不是让他们去弄懂底层的代码实现</li>
<li>模块化：单元测试和规格说明都帮助了将方法模块化</li>
<li>封装：方法中的局部变量都是被封装的，因为它们仅仅可以在方法内部使用。与此相对的是全局变量和指向可变对象的别名，它们会对封装带来很大损害。</li>
<li>信息隐藏：规格说明就是一种信息隐藏，它使得实现者可以自由的更改实现代码</li>
<li>功能分离：一个规格说明应该是逻辑明确的，即它不能有很多特性，而应该完成好一个功能</li>
</ul>
<h2 id="_3-用户定义类型" tabindex="-1"><a class="header-anchor" href="#_3-用户定义类型" aria-hidden="true">#</a> 3.用户定义类型</h2>
<p>对数据进行抽象的核心思想就是类型通过其对应的操作来区分：</p>
<ul>
<li>一个整形就是你能对它进行加法和乘法的东西</li>
<li>一个布尔型就是你能对它进行取反的东西</li>
<li>一个字符串就是你能对它进行连接或者取子字符串的东西</li>
</ul>
<p>真正使得抽象类型变得新颖不同的是对操作的强调：用户不用管这个类型里面的数据是怎么保存表示的，就好像是程序员不用管编译器是怎么存储整数一样。起作用的只是类型对应的操作。</p>
<p>和很多现代语言一样，在Java中内置类型和用户定义类型之间的关系很模糊。例如在java.lang中的类Integer和Boolean就是内置的--Java标准中规定它们必须存在，但是它们的定义和用户定义类型的方法是一样的。</p>
<h2 id="_4-类型和操作的分类" tabindex="-1"><a class="header-anchor" href="#_4-类型和操作的分类" aria-hidden="true">#</a> 4.类型和操作的分类</h2>
<p>类型分为可改变和不可变两种。</p>
<p>其中可改变类型的对象能够被改变：它们提供了改变对象内容的操作，这样的操作执行后可以改变其他对该对象操作的返回值。</p>
<p>String是不可改变的，因为它的操作符都是创建一个新的String对象而不是改变现有的这个。</p>
<p>有时候，一个类型会提供两种形式，一种是可改变的一种是不可改变的。例：StringBuilder就是一种可改变的字符串类型。</p>
<p>抽象类型的操作符大致分类：</p>
<ul>
<li>创建者creator：创建一个该类型的新对象。一个创建者可能会接受一个对象作为参数，但是这个对象的类型不能是它创建对象对应的类型。</li>
<li>生产者producer：通过接受同类型的对象创建新的对象。例如String类里面的concat方法就是一个生产者，它接受两个字符串然后据此产生一个新的字符串。</li>
<li>观察者observer：接受一个同类型的对象然后返回一个不同类型的对象/值。例如List的size方法，它返回一个int。</li>
<li>改造者mutator：改变对象的内容，例如List的add方法，它会在列表中添加一个元素。</li>
</ul>
<h2 id="_5-抽象数据类型的例子" tabindex="-1"><a class="header-anchor" href="#_5-抽象数据类型的例子" aria-hidden="true">#</a> 5.抽象数据类型的例子</h2>
<p>int 是Java中的原始整数类型，它是不可变类型，没有改造者</p>
<ul>
<li>creators:字面量0,1,2,...</li>
<li>producers:算术符+,-,*,/</li>
<li>observers:比较符号==,!=,&lt;,&gt;</li>
<li>mutators:无</li>
</ul>
<p>List是Java中的列表类型，他是可更改类型。另外，List也是一个接口，所以对于它的实现 可以有很多类，例如ArrayList和LinkedList.</p>
<ul>
<li>creators:ArrayList和LinkedList的构造函数,Collections.singletonList</li>
<li>producersl:Collections.unmodifiableList</li>
<li>observers:size,get</li>
<li>mutators:add,remove,addAll,Collections.sort</li>
</ul>
<p>String是Java中的字符串类型，它是不可变类型</p>
<ul>
<li>creators:String构造函数，valueOf静态方法</li>
<li>producers：concat，substring，toUpperCase</li>
<li>observers:length,charAt</li>
<li>mutators:无</li>
</ul>
<p>对于复杂的数据类型，有些操作可能既是生产者，也是改造者。</p>
<p>例如：BufferedReader.readLine()是改造者。</p>
<h2 id="_6-抽象类型是通过它的操作定义的" tabindex="-1"><a class="header-anchor" href="#_6-抽象类型是通过它的操作定义的" aria-hidden="true">#</a> 6.抽象类型是通过它的操作定义的</h2>
<p>这一节的重要思想是抽象类型是通过它的操作定义的。</p>
<p>对于类型T来说，它的操作集合和规格说明完全定义和构造了它的特性。</p>
<p>例如：当我们谈到List类型时，我们并没有特指一个数组或者链接链表，而是一些列模糊的值--哪些对象可以是List类型--满足该类型的规格说明和操作规定，例如get(),size(),等等。</p>
<p><img src="https://i.loli.net/2021/06/08/DnHELGFygchRdMw.png" alt="屏幕截图 2021-06-08 182038.png"></p>
<p><strong>模糊的值是指我们不能检查数据具体是在类型中怎么存储的，而是要通过特定的操作取处理。例如上图中画出的，通过规格说明这道防火墙，我们将类型中具体的实现和这些实现共享的私有数据封装起来，而用户只能看到和使用接口上的操作。</strong></p>
<h2 id="_7-设计抽象类型" tabindex="-1"><a class="header-anchor" href="#_7-设计抽象类型" aria-hidden="true">#</a> 7.设计抽象类型</h2>
<p>设计一个抽象类型包括选择合适的操作以及它们对应的行为，这里列出了几个重要的原则。</p>
<ul>
<li>设计少量、简单，可以组合实现强大功能的操作而非设计很多复杂的操作</li>
<li>每个操作都应该有一个被明确定义的目的，并且应该设计为对不同的数据结构有一直的行为，而不是针对某些特殊情况。</li>
<li>操作集合应该充分的考虑到用户的需求，也就是说，用户可以用这个操作集合做它们可能想做的计算。</li>
<li>抽象类型可以是通用的：例如，列表、集合，或者图。或者它可以是适用于特定领域的：一个街道的地图，一个员工数据库，一个电话簿。但是一个抽象类型不能兼有上述二者的特性。</li>
</ul>
<h2 id="_8-表示独立" tabindex="-1"><a class="header-anchor" href="#_8-表示独立" aria-hidden="true">#</a> 8.表示独立</h2>
<p>表示独立性：client使用ADT时无需考虑其内部如何实现，ADT内部表示的变化不应影响外部spec和客户端。</p>
<p>特别地，一个好的抽象数据类型应该是表示独立的，这意味着它的使用和它的内部表示(实际的数据结构和实现)无关，所以内部表示的改变将对外部的代码没有影响。
例如List，它的使用与是用数组还是链表实现无关。</p>
<p>如果一个操作完全在规格说明中定义了前置条件和后置条件，使用者就知道他应该依赖说明，而你也可以安全的对内部实现进行更改。</p>
<p>例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Represents a family that lives in a household together.
* A family always has at least one person in it.
* Families are mutable.
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Family</span> <span class="token punctuation">{</span>
    <span class="token comment">// the people in the family, sorted from oldest to youngest, with no duplicates.</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> people<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
    * <span class="token keyword">@return</span> a list containing all the members of the family, with no duplicates.
    */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> <span class="token function">getMembers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> people<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个使用者的代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">client1</span><span class="token punctuation">(</span><span class="token class-name">Family</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// get youngest person in the family</span>
    <span class="token class-name">Person</span> baby <span class="token operator">=</span> f<span class="token punctuation">.</span>people<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>people<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设所有的代码都能顺利运行(Family和client1)并通过测试。</p>
<p>当Family的数据表示从List变为了Set，</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* Represents a family that lives in a household together.
* A family always has at least one person in it.
* Families are mutable.
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Family</span> <span class="token punctuation">{</span>
    <span class="token comment">// the people in the family</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> people<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * <span class="token keyword">@return</span> a list containing all the members of the family, with no duplicates.
    */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> <span class="token function">getMembers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>people<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client1依赖与Family的数据表示，并且这种依赖会导致静态错误。</p>
<h2 id="_9-测试抽象数据类型" tabindex="-1"><a class="header-anchor" href="#_9-测试抽象数据类型" aria-hidden="true">#</a> 9.测试抽象数据类型</h2>
<p>当我们测试一个抽象数据类型的时候，我们分别测试它的各个操作。
而这些测试不可避免的要交互：我们只能通过观察者来判断其他的操作的测试是否成功，而测试观察者的唯一方法时创建对象然后使用观察者。</p>
<h2 id="_10-总结" tabindex="-1"><a class="header-anchor" href="#_10-总结" aria-hidden="true">#</a> 10.总结</h2>
<ul>
<li>抽象数据类型(ADT)时通过它们对应的操作区分的。</li>
<li>操作可以分类为创建者、生产者、观察者、改造者。</li>
<li>ADT的表示由它的操作集合和规格说明组成。</li>
<li>一个好的ADT应该是简单，逻辑明确并且表示独立。</li>
<li>对于ADT的测试应该对每一个操作进行测试，并同时利用到创建者、生产者、观察者、改造者。</li>
</ul>
</div></template>
