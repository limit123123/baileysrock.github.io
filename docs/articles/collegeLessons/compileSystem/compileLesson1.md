---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: page
# 这是文章的标题
title: 语法分析
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-05-05
# 一个页面可以有多个分类
category:
  - 学校课程
# 一个页面可以有多个标签
tag:
  - 学校课程
  - 编译原理
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 语法分析
---

# 语法分析

## 1. 自顶向下分析概述
![推导与归约](/collegeLessons/compileSystem/compileLesson1/compile1_1.png)  
规范推导:最右推导  
规范归约:最左规约  


### 1.1 top_down步骤
1. 消除歧义;
2. 文法改造:  
消除左递归  
提取左公因子  
3. LL(1)文法的判定，确定性。


### 1.2 递归下降分析  
模拟自顶向下建树过程，最左推导。  
1. 预测分析(确定的分析):LL(1)文法。
2. 需要回溯的分析(不确定的分析)





## 2. 非递归的预测分析法
非递归预测分析不需要为每个非终结符编写递归下降过程，根据预测分析表构造自动机，也叫表驱动的预测分析。  


### 2.1 文法转换

左递归文法会使递归下降分析器陷入无限循环。  
直接左递归的文法:
$$A{\rightarrow} A{\alpha}$$ 
经过两步或两步以上的推导产生的左递归是间接左递归的。

#### 消除直接左递归:  
$$A{\rightarrow}A{\alpha}|{\beta}(a\not=\epsilon,{\beta}\text{不以A开头})$$ 
替换为:  
$$A{\rightarrow}{\beta}A^{'}$$
$$A^{'}{\rightarrow}{\alpha}A^{'}|\epsilon$$

消除左递归的一般形式:  
$$A{\rightarrow}Aa_{1}|Aa_{2}|...|Aa_{3}|{\beta}_{1}|{\beta}_{2}|...|{\beta}_{n}|(a_{i}\not=\epsilon,{\beta_{j}}\text{不以A开头})$$  
替换为:  
$$A{\rightarrow}{\beta}_{1}A^{'}|{\beta}_{2}A^{'}|...|{\beta}_{3}A^{'}$$  
$$A^{'}{\rightarrow}a_{1}A^{'}|a_{2}A^{'}|...|a_{n}A^{'}|\epsilon$$  

#### 消除间接左递归
$$S{\rightarrow}Aa|b$$
$$A{\rightarrow}Ac|Sd|\epsilon$$

此时将$S$的定义代入$A-$产生式，得:  
$$A{\rightarrow}Ac|Aad|bd|\epsilon$$
消除$A-$产生式的直接左递归:  
$$A{\rightarrow}bdA^{'}|A^{'}$$
$$A^{'}{\rightarrow}cA^{'}|adA^{'}|\epsilon$$





### 2.2 FIRST集、SELECT集、FOLLOW集
$FIRST$集的对象是串。可以包含$\epsilon$。  
$FOLLOW$集的对象是非终结符。不可以包含$\epsilon$。  
$SELECT$集的对象是产生式。不可以包含$\epsilon$。  

1. $FIRST$集  
个人理解:$FIRST(A)$为A能够推导出来的所有的终结符串位于串首的终结符构成集合，还要考虑A是否能够推导$\epsilon$。  
${\alpha}$的串首终结符集$FIRST({\alpha})$集的定义为:  
可以从${\alpha}$推导出来的所有串首终结符构成的集合。
若${\alpha}{\rightarrow}\epsilon$，那么$\epsilon$也在$FIRST({\alpha})$中。  

2. $SELECT$集  
个人理解:可以选用该产生式进行推导时对应的输入符号集合(终结符集合)。
若${\epsilon}{\notin}FIRST({\alpha})$，那么$SELECT(A{\rightarrow}{\alpha})=FIRST({\alpha})$  
若${\epsilon}{\in}FIRST({\alpha})$，
那么$SELECT(A{\rightarrow}{\alpha})=(FIRST({\alpha})-{\{}{\epsilon}{\}}){\cup}FOLLOW(A)$  

3. $FOLLOW$集
个人理解:$FOLLOW(A)$为由A产生的句型中紧跟在A后面的终结符。  
定义:  
$$FOLLOW(A)={\{}a|S{\rightarrow}{\alpha}Aa{\beta},a{\in}V_{T},{\alpha},{\beta}{\in}(V_{T}{\cup}V_{N})^{*}{\}}$$  
$$\text{若}A\text{是某个句型最右符号，则将结束符}"{\$}"\text{添加到FOLLOW}(A)\text{中}$$  
算法:
1. 将$\$$放入$FOLLOW(S)$中，其中$S$为开始符号，$\$$为输入右端的结束标记。
2. 如果存在一个产生式$A{\rightarrow}{\alpha}B{\beta}$，那么$FIRST({\beta})$中除了$\epsilon$之外的所有符号都在$FOLLOW(B)$中。
3. 如果存在一个产生式$A{\rightarrow}{\alpha}B$，或存在产生式$A{\rightarrow}{\alpha}B{\beta}$，且$FIRST({\beta})$包含$\epsilon$，那么FOLLOW(A)中的所有符号都在$FOLLOW(B)$中。


### 2.3 LL(1)文法
简洁定义:  
$${\forall}A{\rightarrow}{\alpha}_{1}|{\alpha}_{2}|...|{\alpha}_{n}$$
$$SELECT(A{\rightarrow}{\alpha}_{1}){\cap}SELECT(A{\rightarrow}{\alpha}_{2}){\cap}...{\cap}SELECT(A{\rightarrow}{\alpha}_{n})==\emptyset$$
文法G是LL(1)的，当且仅当G的任意两个具有相同左部的产生式$A{\rightarrow}{\alpha}|{\beta}$满足以下条件
(同一非终结符的各个产生式的可选集互不相交):  
1. 不存在终结符$a$使得${\alpha}$和${\beta}$都能够推导出以$a$开头的串。  
2. ${\alpha}$和${\beta}$至多有一个能推导出${\epsilon}$。
3. 若${\beta}{\rightarrow}\epsilon$，则$FIRST(\alpha){\cap}FOLLOW(A)=\emptyset$  
若${\alpha}{\rightarrow}\epsilon$，则$FIRST(\beta){\cap}FOLLOW(A)=\emptyset$



### 2.4 LL(1)文法非递归下降分析
根据$SELECT$集构造预测分析表，进而实现确定的下降分析。


## 3. 自底向上的语法分析

### 3.1 LR分析法
工作过程:  
![初始化及一般情况](/collegeLessons/compileSystem/compileLesson1/compile1_2.png)    
1. $ACTION[s_{m},a_{i}]=sx$  
![变化后的格局](/collegeLessons/compileSystem/compileLesson1/compile1_3.png)  
2. $ACTION[s_{m},a_{i}]=rx$,则用第$x$个产生式$A{\rightarrow}X_{m-(k-1)}...X_{m}$进行归约。  
![变化后的格局](/collegeLessons/compileSystem/compileLesson1/compile1_4.png)  
$GOTO[s_{m-k},A]=y$  
进而有  
![变化后的格局](/collegeLessons/compileSystem/compileLesson1/compile1_5.png)  
3. $ACTION[s_{m},a_{i}]=acc$，则表示分析成功。  
4. $ACTION[s_{m},a_{i}]=error$，则表示出现语法错误。   


### 3.2 增广文法
如果$G$是一个以$S$为开始符号的文法，则$G$的增广文法$G^{'}$就是在$G$中加上新开始符号$S^{'}$和产生式$S^{'}{\rightarrow}S$而得到的文法。  
![增广文法](/collegeLessons/compileSystem/compileLesson1/compile1_6.png)  
目的:使文法开始符号仅出现在一个产生式的左边，从而使得分析器只有一个接收状态。  

### 3.3 CLOSURE、GOTO函数及LR(0)项集族
计算给定项目集的闭包:  
$$CLOUSURE(I)=I\cup{\{}B{\rightarrow}{\cdot}{\gamma}|A{\rightarrow}{\alpha}{\cdot}B{\beta}{\in}CLOSURE(I),B{\rightarrow}{\gamma}{\in}P{\}}$$  
返回项目集I对应于文法符号X的后继项目集闭包:  
$$GOTO(I,X)=CLOSURE({\{}A{\rightarrow}{\alpha}X\cdot{\beta}|A{\rightarrow}{\alpha}X{\beta}{\in}I{\}})$$  
规范LR(0)项集族:  
$$C={\{}I_{0}{\}}{\cup}{\{}I|{\exists}J{\in}C,X{\exists}V_{N}{\cup}V_{T},I=GOTO(J,X)\}$$  

### 3.4 LR(0)分析表构造算法 
![LR(0)分析表构造算法](/collegeLessons/compileSystem/compileLesson1/compile1_7.png)  

### 3.5 SLR分析法
LR(0)存在移进归约冲突，可以根据$FOLLOW$集进行移进、归约操作。    
**与LR(0)的区别**:SLR分析表，只有遇到他的FOLLOW集的元素才进行归约。  
以$A{\rightarrow}{\alpha}{\cdot}{\in}I_{i}$且$A{\neq}S^{'}$
LR(0)分析法中，采取归约动作，而SLR分析法中，仅仅对于$FOLLOW$集中的元素归约。   
**存在的问题**:SLR仅简单的考察下一个输入符号b是否与归约项目$A{\rightarrow}{\alpha}$相关联的$FOLLOW(A)$，但$b{\in}FOLLOW(A)$只是归约$\alpha$的一个必要条件，而非充分条件。

### 3.6 LR(1)分析法  
![不同位置，后继符号可能不同](/collegeLessons/compileSystem/compileLesson1/compile1_8.png)  
在特定位置中，A的后继符号集合是$FOLLOW(A)$的子集，如图，分析树中S的右节点R的后继符只能为$\$$，而对于L的右节点，只有当下一个符号为=时，才能将L规约为R，我们采用$L{\rightarrow}*R{\cdot},=$。  
**规范LR(1)项目**:将一般形式为$[A{\rightarrow}{\alpha}{\cdot}{\beta},a]$称为LR(1)项，其中$[A{\rightarrow}{\alpha}{\beta}$是一个产生式，$a$是一个终结符，(\$为一个特殊的终结符)，他表示在当前状态下，$A$后面必须紧跟终结符，称为该项的展望符。    
**当$A{\rightarrow}{\alpha}{\cdot}{\beta},a$中${\beta}{\neq}{\epsilon}$时，展望符没有任何作用**  
**对于$A{\rightarrow}{\alpha}{\cdot}{\beta},a$只有在下一个符号为a时，才能进行归约，a总是$FOLLOW(a)$的子集，而且通常为真子集**  

**构造算法**:构造算法，对规约项目，只针对给定的后继符号归约。
![LR(1)构造算法](/collegeLessons/compileSystem/compileLesson1/compile1_9.png)  










