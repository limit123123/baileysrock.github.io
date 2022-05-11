---
# 这是侧边栏索引
index: 2
# 这是页面的图标
icon: page
# 这是文章的标题
title: 语法制导翻译
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-05-08
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
footer: 语法制导翻译
---




## SDD的定义
给CFG进一步加上语义属性、语义规则形成SDD。SDD是对CFG的扩展。    
![属性文法](/CollegeLessons/CompileSystem/CompileLesson2/12.png)    
通过对CFG设置语义属性，并设置语义规则，如下图所示。  
![属性文法](/CollegeLessons/CompileSystem/CompileLesson2/13.png)   
语法分析关注的是种别码，语义分析关注的是词法值。  
![属性文法](/CollegeLessons/CompileSystem/CompileLesson2/14.png)   


## 语义属性
### 综合属性
在分析树结点N上的非终结符A的综合属性只能通过N的子节点或N本身的属性值定义。  
![综合属性](/CollegeLessons/CompileSystem/CompileLesson2/1.png)    

> 终结符也可以具有综合属性，终结符的综合属性值是由词法分析器提供的词法值，因此SDD中没有计算终结符属性值的语义规则。   

带有综合属性的SDD:  
![带有综合属性的SDD](/CollegeLessons/CompileSystem/CompileLesson2/3.png)  
### 继承属性
在分析树结点 N上的非终结符A的继承属性只能通过N的父结点、N的兄弟结点或 N本身的属性值来定义。  
![继承属性](/CollegeLessons/CompileSystem/CompileLesson2/2.png)   

>终结符没有继承属性。终结符从词法分析器处获得的属性值被归为综合属性值。  

带有继承属性的SDD(第一条:$D{\rightarrow}T L$对应的语义规则$L.inh=T.type$；第四条:$L{\rightarrow}L_{1},id$对应的语义规则$L_{1}.inh=L.inh$):  
![带有继承属性的SDD](/CollegeLessons/CompileSystem/CompileLesson2/4.png)  

### 属性文法
一个没有副作用的SDD有时也称为属性文法。  

属性文法的规则仅仅通过其它属性值和常量来定义一个属性值。  
例:  
![属性文法](/CollegeLessons/CompileSystem/CompileLesson2/5.png)  



## SDD的求值顺序
SDD为CFG中的文法符号设置**语义属性**。对于给定的输入串x，应用**语义规则**计算分析树中各结点对应的属性值。

### 计算属性值的顺序
语义规则建立了属性之间的依赖关系，在对语法分析树节点的一个属性求值之前，必须首先求出这个属性值所依赖的所有属性值。

### 依赖图
1. 依赖图是一个描述了分析树中结点属性间依赖关系的有向图。  
2. 分析树中每个标号为X的结点的每个属性a都对应着依赖图中的一个结点。   
3. 如果属性X.a的值依赖于属性Y.b的值，则依赖图中有一条从Y.b的结点指向X.a的结点的有向边。  

例(将继承属性放在对应语法树结点的左面，综合属性放在对应语法树结点的右面，我们可以将第四条产生式的副作用看作定义产生式左侧非终结符L的虚综合属性的规则，因此在依赖图中为L设置虚结点):  
![属性文法](/CollegeLessons/CompileSystem/CompileLesson2/6.png)  

### 属性值的计算顺序
可行的求值顺序是满足下列条件的结点序列$N_{1},N_{2},...,N_{k}$，如果依赖图中有一条从结点$N_{i}$到$N_{j}$的边$(N_{i}{\rightarrow}N_{j})$, 那么$i<{j}$,即：在节点序列中，$N_{i}$排在$N_{j}$前面。  

这样的排序将一个有向图变成了一个线性排序，这个排序称为这个图的拓扑排序。  

例:  
![拓扑排序](/CollegeLessons/CompileSystem/CompileLesson2/7.png)  

Tips:  
1. 对于只具有综合属性的SDD ，可以按照任何自底向上的顺序计算它们的值。  
2. 对于同时具有继承属性和综合属性的SDD，不能保证存在一个顺序来对各个节点上的属性进行求值。  
3. 从计算的角度看，给定一个SDD，很难确定是否存在某棵语法分析树，使得SDD的属性之间存在循环依赖关系。  
4. 幸运的是，存在一个SDD的有用子类，它们能够保证对每棵语法分析树都存在一个求值顺序，因为它们不允许产生带有环的依赖图。  
5. S-属性定义(S-SDD)，L-属性定义(L-SDD)，可以和自顶向下及自底向上的语法分析过程一起高效地实现。  

成环的SDD:  
![成环的SDD](/CollegeLessons/CompileSystem/CompileLesson2/8.png)  


## S-属性定义和L-属性定义

![S-SDD](/CollegeLessons/CompileSystem/CompileLesson2/15.png)  


### S-属性定义
**定义**:仅仅使用综合属性的SDD称为S属性的SDD，或S-属性定义、S-SDD。  
例:  
![S-SDD](/CollegeLessons/CompileSystem/CompileLesson2/9.png)  

**计算顺序**:如果一个SDD是S属性的，可以按照语法分析树节点的任何自底向上顺序来计算它的各个属性值。  
S-属性定义可以在**自底向上的语法分析**过程中实现



### L-属性定义
**直观定义**:L-属性定义(也称为L属性的SDD或L-SDD)的直观含义：在一个产生式所关联的各属性之间，依赖图的边可以从左到右，但不能从右到左(因此称为L属性的，L是Left的首字母)。  
**正式定义**:一个SDD是L-属性定义，当且仅当它的每个属性要么是一个综合属性，要么是满足如下条件的继承属性：假设存在一个产生式$A{\rightarrow}X_{1}X_{2}...X_{n}$,其右部符号$X_{i}(1{\leq}i{\leq}n)$的继承属性仅依赖于下列属性：
1. A的继承属性。  
2. 产生式中$X_{i}$左边的符号$X_{1},X_{2},...,X_{i-1}$的属性。  
3. $X_{i}$本身的属性，但$X_{i}$的全部属性不能在依赖图中形成环路。  
为了保证水平方法和竖直方向都不产生循环依赖。  
**每个S-属性定义都是L-属性定义**

L-SDD例:  
![S-SDD](/CollegeLessons/CompileSystem/CompileLesson2/10.png)  
非L-SDD例:  
![S-SDD](/CollegeLessons/CompileSystem/CompileLesson2/11.png)  










