<template><div><h1 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h1>
<h2 id="_1-自顶向下分析概述" tabindex="-1"><a class="header-anchor" href="#_1-自顶向下分析概述" aria-hidden="true">#</a> 1. 自顶向下分析概述</h2>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_1.png" alt="推导与归约"><br>
规范推导:最右推导<br>
规范归约:最左规约</p>
<h3 id="_1-1-top-down步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-top-down步骤" aria-hidden="true">#</a> 1.1 top_down步骤</h3>
<ol>
<li>消除歧义;</li>
<li>文法改造:<br>
消除左递归<br>
提取左公因子</li>
<li>LL(1)文法的判定，确定性。</li>
</ol>
<h3 id="_1-2-递归下降分析" tabindex="-1"><a class="header-anchor" href="#_1-2-递归下降分析" aria-hidden="true">#</a> 1.2 递归下降分析</h3>
<p>模拟自顶向下建树过程，最左推导。</p>
<ol>
<li>预测分析(确定的分析):LL(1)文法。</li>
<li>需要回溯的分析(不确定的分析)</li>
</ol>
<h2 id="_2-非递归的预测分析法" tabindex="-1"><a class="header-anchor" href="#_2-非递归的预测分析法" aria-hidden="true">#</a> 2. 非递归的预测分析法</h2>
<p>非递归预测分析不需要为每个非终结符编写递归下降过程，根据预测分析表构造自动机，也叫表驱动的预测分析。</p>
<h3 id="_2-1-文法转换" tabindex="-1"><a class="header-anchor" href="#_2-1-文法转换" aria-hidden="true">#</a> 2.1 文法转换</h3>
<p>左递归文法会使递归下降分析器陷入无限循环。<br>
直接左递归的文法:
$$A{\rightarrow} A{\alpha}$$
经过两步或两步以上的推导产生的左递归是间接左递归的。</p>
<h4 id="消除直接左递归" tabindex="-1"><a class="header-anchor" href="#消除直接左递归" aria-hidden="true">#</a> 消除直接左递归:</h4>
<p>$$A{\rightarrow}A{\alpha}|{\beta}(a\not=\epsilon,{\beta}\text{不以A开头})$$
替换为:<br>
$$A{\rightarrow}{\beta}A^{'}$$
$$A^{'}{\rightarrow}{\alpha}A^{'}|\epsilon$$</p>
<p>消除左递归的一般形式:<br>
$$A{\rightarrow}Aa_{1}|Aa_{2}|...|Aa_{3}|{\beta}<em>{1}|{\beta}</em>{2}|...|{\beta}<em>{n}|(a</em>{i}\not=\epsilon,{\beta_{j}}\text{不以A开头})$$<br>
替换为:<br>
$$A{\rightarrow}{\beta}<em>{1}A^{'}|{\beta}</em>{2}A^{'}|...|{\beta}<em>{3}A^{'}$$<br>
$$A^{'}{\rightarrow}a</em>{1}A^{'}|a_{2}A^{'}|...|a_{n}A^{'}|\epsilon$$</p>
<h4 id="消除间接左递归" tabindex="-1"><a class="header-anchor" href="#消除间接左递归" aria-hidden="true">#</a> 消除间接左递归</h4>
<p>$$S{\rightarrow}Aa|b$$
$$A{\rightarrow}Ac|Sd|\epsilon$$</p>
<p>此时将$S$的定义代入$A-$产生式，得:<br>
$$A{\rightarrow}Ac|Aad|bd|\epsilon$$
消除$A-$产生式的直接左递归:<br>
$$A{\rightarrow}bdA^{'}|A^{'}$$
$$A^{'}{\rightarrow}cA^{'}|adA^{'}|\epsilon$$</p>
<h3 id="_2-2-first集、select集、follow集" tabindex="-1"><a class="header-anchor" href="#_2-2-first集、select集、follow集" aria-hidden="true">#</a> 2.2 FIRST集、SELECT集、FOLLOW集</h3>
<p>$FIRST$集的对象是串。可以包含$\epsilon$。<br>
$FOLLOW$集的对象是非终结符。不可以包含$\epsilon$。<br>
$SELECT$集的对象是产生式。不可以包含$\epsilon$。</p>
<ol>
<li>
<p>$FIRST$集<br>
个人理解:$FIRST(A)$为A能够推导出来的所有的终结符串位于串首的终结符构成集合，还要考虑A是否能够推导$\epsilon$。<br>
${\alpha}$的串首终结符集$FIRST({\alpha})$集的定义为:<br>
可以从${\alpha}$推导出来的所有串首终结符构成的集合。
若${\alpha}{\rightarrow}\epsilon$，那么$\epsilon$也在$FIRST({\alpha})$中。</p>
</li>
<li>
<p>$SELECT$集<br>
个人理解:可以选用该产生式进行推导时对应的输入符号集合(终结符集合)。
若${\epsilon}{\notin}FIRST({\alpha})$，那么$SELECT(A{\rightarrow}{\alpha})=FIRST({\alpha})$<br>
若${\epsilon}{\in}FIRST({\alpha})$，
那么$SELECT(A{\rightarrow}{\alpha})=(FIRST({\alpha})-{{}{\epsilon}{}}){\cup}FOLLOW(A)$</p>
</li>
<li>
<p>$FOLLOW$集
个人理解:$FOLLOW(A)$为由A产生的句型中紧跟在A后面的终结符。<br>
定义:<br>
$$FOLLOW(A)={{}a|S{\rightarrow}{\alpha}Aa{\beta},a{\in}V_{T},{\alpha},{\beta}{\in}(V_{T}{\cup}V_{N})^{*}{}}$$<br>
$$\text{若}A\text{是某个句型最右符号，则将结束符}&quot;{$}&quot;\text{添加到FOLLOW}(A)\text{中}$$<br>
算法:</p>
</li>
<li>
<p>将$$$放入$FOLLOW(S)$中，其中$S$为开始符号，$$$为输入右端的结束标记。</p>
</li>
<li>
<p>如果存在一个产生式$A{\rightarrow}{\alpha}B{\beta}$，那么$FIRST({\beta})$中除了$\epsilon$之外的所有符号都在$FOLLOW(B)$中。</p>
</li>
<li>
<p>如果存在一个产生式$A{\rightarrow}{\alpha}B$，或存在产生式$A{\rightarrow}{\alpha}B{\beta}$，且$FIRST({\beta})$包含$\epsilon$，那么FOLLOW(A)中的所有符号都在$FOLLOW(B)$中。</p>
</li>
</ol>
<h3 id="_2-3-ll-1-文法" tabindex="-1"><a class="header-anchor" href="#_2-3-ll-1-文法" aria-hidden="true">#</a> 2.3 LL(1)文法</h3>
<p>简洁定义:<br>
$${\forall}A{\rightarrow}{\alpha}<em>{1}|{\alpha}</em>{2}|...|{\alpha}<em>{n}$$
$$SELECT(A{\rightarrow}{\alpha}</em>{1}){\cap}SELECT(A{\rightarrow}{\alpha}<em>{2}){\cap}...{\cap}SELECT(A{\rightarrow}{\alpha}</em>{n})==\emptyset$$
文法G是LL(1)的，当且仅当G的任意两个具有相同左部的产生式$A{\rightarrow}{\alpha}|{\beta}$满足以下条件
(同一非终结符的各个产生式的可选集互不相交):</p>
<ol>
<li>不存在终结符$a$使得${\alpha}$和${\beta}$都能够推导出以$a$开头的串。</li>
<li>${\alpha}$和${\beta}$至多有一个能推导出${\epsilon}$。</li>
<li>若${\beta}{\rightarrow}\epsilon$，则$FIRST(\alpha){\cap}FOLLOW(A)=\emptyset$<br>
若${\alpha}{\rightarrow}\epsilon$，则$FIRST(\beta){\cap}FOLLOW(A)=\emptyset$</li>
</ol>
<h3 id="_2-4-ll-1-文法非递归下降分析" tabindex="-1"><a class="header-anchor" href="#_2-4-ll-1-文法非递归下降分析" aria-hidden="true">#</a> 2.4 LL(1)文法非递归下降分析</h3>
<p>根据$SELECT$集构造预测分析表，进而实现确定的下降分析。</p>
<h2 id="_3-自底向上的语法分析" tabindex="-1"><a class="header-anchor" href="#_3-自底向上的语法分析" aria-hidden="true">#</a> 3. 自底向上的语法分析</h2>
<h3 id="_3-1-lr分析法" tabindex="-1"><a class="header-anchor" href="#_3-1-lr分析法" aria-hidden="true">#</a> 3.1 LR分析法</h3>
<p>工作过程:<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_2.png" alt="初始化及一般情况"></p>
<ol>
<li>$ACTION[s_{m},a_{i}]=sx$<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_3.png" alt="变化后的格局"></li>
<li>$ACTION[s_{m},a_{i}]=rx$,则用第$x$个产生式$A{\rightarrow}X_{m-(k-1)}...X_{m}$进行归约。<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_4.png" alt="变化后的格局"><br>
$GOTO[s_{m-k},A]=y$<br>
进而有<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_5.png" alt="变化后的格局"></li>
<li>$ACTION[s_{m},a_{i}]=acc$，则表示分析成功。</li>
<li>$ACTION[s_{m},a_{i}]=error$，则表示出现语法错误。</li>
</ol>
<h3 id="_3-2-增广文法" tabindex="-1"><a class="header-anchor" href="#_3-2-增广文法" aria-hidden="true">#</a> 3.2 增广文法</h3>
<p>如果$G$是一个以$S$为开始符号的文法，则$G$的增广文法$G^{'}$就是在$G$中加上新开始符号$S^{'}$和产生式$S^{'}{\rightarrow}S$而得到的文法。<br>
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_6.png" alt="增广文法"><br>
目的:使文法开始符号仅出现在一个产生式的左边，从而使得分析器只有一个接收状态。</p>
<h3 id="_3-3-closure、goto函数及lr-0-项集族" tabindex="-1"><a class="header-anchor" href="#_3-3-closure、goto函数及lr-0-项集族" aria-hidden="true">#</a> 3.3 CLOSURE、GOTO函数及LR(0)项集族</h3>
<p>计算给定项目集的闭包:<br>
$$CLOUSURE(I)=I\cup{{}B{\rightarrow}{\cdot}{\gamma}|A{\rightarrow}{\alpha}{\cdot}B{\beta}{\in}CLOSURE(I),B{\rightarrow}{\gamma}{\in}P{}}$$<br>
返回项目集I对应于文法符号X的后继项目集闭包:<br>
$$GOTO(I,X)=CLOSURE({{}A{\rightarrow}{\alpha}X\cdot{\beta}|A{\rightarrow}{\alpha}X{\beta}{\in}I{}})$$<br>
规范LR(0)项集族:<br>
$$C={{}I_{0}{}}{\cup}{{}I|{\exists}J{\in}C,X{\exists}V_{N}{\cup}V_{T},I=GOTO(J,X)}$$</p>
<h3 id="_3-4-lr-0-分析表构造算法" tabindex="-1"><a class="header-anchor" href="#_3-4-lr-0-分析表构造算法" aria-hidden="true">#</a> 3.4 LR(0)分析表构造算法</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_7.png" alt="LR(0)分析表构造算法"></p>
<h3 id="_3-5-slr分析法" tabindex="-1"><a class="header-anchor" href="#_3-5-slr分析法" aria-hidden="true">#</a> 3.5 SLR分析法</h3>
<p>LR(0)存在移进归约冲突，可以根据$FOLLOW$集进行移进、归约操作。<br>
<strong>与LR(0)的区别</strong>:SLR分析表，只有遇到他的FOLLOW集的元素才进行归约。<br>
以$A{\rightarrow}{\alpha}{\cdot}{\in}I_{i}$且$A{\neq}S^{'}$
LR(0)分析法中，采取归约动作，而SLR分析法中，仅仅对于$FOLLOW$集中的元素归约。<br>
<strong>存在的问题</strong>:SLR仅简单的考察下一个输入符号b是否与归约项目$A{\rightarrow}{\alpha}$相关联的$FOLLOW(A)$，但$b{\in}FOLLOW(A)$只是归约$\alpha$的一个必要条件，而非充分条件。</p>
<h3 id="_3-6-lr-1-分析法" tabindex="-1"><a class="header-anchor" href="#_3-6-lr-1-分析法" aria-hidden="true">#</a> 3.6 LR(1)分析法</h3>
<p><img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_8.png" alt="不同位置，后继符号可能不同"><br>
在特定位置中，A的后继符号集合是$FOLLOW(A)$的子集，如图，分析树中S的右节点R的后继符只能为$$$，而对于L的右节点，只有当下一个符号为=时，才能将L规约为R，我们采用$L{\rightarrow}*R{\cdot},=$。<br>
<strong>规范LR(1)项目</strong>:将一般形式为$[A{\rightarrow}{\alpha}{\cdot}{\beta},a]$称为LR(1)项，其中$[A{\rightarrow}{\alpha}{\beta}$是一个产生式，$a$是一个终结符，($为一个特殊的终结符)，他表示在当前状态下，$A$后面必须紧跟终结符，称为该项的展望符。<br>
<strong>当$A{\rightarrow}{\alpha}{\cdot}{\beta},a$中${\beta}{\neq}{\epsilon}$时，展望符没有任何作用</strong><br>
<strong>对于$A{\rightarrow}{\alpha}{\cdot}{\beta},a$只有在下一个符号为a时，才能进行归约，a总是$FOLLOW(a)$的子集，而且通常为真子集</strong></p>
<p><strong>构造算法</strong>:构造算法，对规约项目，只针对给定的后继符号归约。
<img src="/CollegeLessons/CompileSystem/CompileLesson1/compile1_9.png" alt="LR(1)构造算法"></p>
</div></template>
