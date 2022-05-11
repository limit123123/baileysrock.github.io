---
# 这是侧边栏索引
index: 3
# 这是页面的图标
icon: page
# 这是文章的标题
title: 语法制导翻译方案
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
footer: 语法制导翻译方案
---

## 语法制导翻译方案SDT

语法制导翻译方案(SDT)是在产生式右部中嵌入了程序片段(称为语义动作)的CFG。  
例:  

![SDT](/CollegeLessons/CompileSystem/CompileLesson3/1.png)  

SDT可以看作为SDD的具体实施方案。  
SDD:各属性的计算方法(计算规则)。怎么算?    
SDT:各属性的计算时机(计算顺序)。怎么算？+何时算？  


## 将S-SDD转换为SDT
将一个S-SDD转换为SDT的方法:将每个语义动作都放在产生式的最后。  

![S-SDD转换为SDT](/CollegeLessons/CompileSystem/CompileLesson3/2.png)  

如果一个S-SDD的基本文法可以使用LR分析技术，那么它的SDT可以在LR语法分析过程中实现。  
例:  

![LR分析](/CollegeLessons/CompileSystem/CompileLesson3/3.png)  


### 扩展的LR语法分析栈
分析栈中使用一个附加的域来存放综合属性的值  

![扩展的LR语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/4.png)  

如何支持多个属性:栈记录变得足够大、在栈记录中存放指针。  

### 将语义动作抽象定义改写为具体可执行的栈操作

![改写为具体可执行的栈操作](/CollegeLessons/CompileSystem/CompileLesson3/5.png)  


### 例:在自底向上的语法分析栈中实现桌面计算器

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/6.png)  

1. 初始状态为0，遇到数字3，进入状态5，并记录属性值为3.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/7.png)  

2. 5号状态为归约状态，根据产生式7，F的属性值等于digit的属性值。此时只需要将栈顶的d和状态5出栈，将F入栈。此时状态0遇到F，进入状态3.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/8.png)  

3. 3号状态为归约状态，将栈顶F和状态5弹出，将T入栈，此时0号状态遇到T，进入状态2.2号状态遇到*，采取移入动作，进入7号状态，*没有对应的属性值。7号状态遇到5，采取移入动作，进入5号状态。  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/9.png)  

4. 5号状态为归约状态，将栈顶d和状态5出栈，将F入栈，此时状态7遇到F，进入状态10.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/10.png)  

5. 10号状态为归约状态，根据第4条产生式，此时将stack[top-2]与stack[top]值相乘，并存放到stack[top-2]，并将stack[top]、stack[top-1]出栈，将T和对应的值15进栈，此时0号状态遇到T，进入状态2.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/11.png)  

6. 2号状态遇到+时进行归约，将栈顶T弹出，将E入栈，此时0号状态遇到E，进入1号状态。1号状态遇到+，将+入栈，此时进入状态6，状态6遇到4，将4和d入栈，此时变为5号状态。

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/12.png)  

7. 5号状态为归约状态，将栈顶d和状态5出栈，将F入栈，此时状态6遇到F，进入状态3.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/13.png)  

8. 3号状态为归约状态，将栈顶F和状态3出栈，将T入栈，此时状态6遇到T，进入状态9.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/14.png)  

9. 9号状态为规约状态，根据第2条产生式，此时将stack[top-2]与stack[top]值相加，并存放到stack[top-2]，并将stack[top]、stack[top-1]出
栈，将E和对应的值19进栈，此时0号状态遇到E，进入状态1.  

![桌面计算器](/CollegeLessons/CompileSystem/CompileLesson3/15.png)  

10. 1号状态遇到$，成功接收。  







## 将L-SDD转换为SDT
### 规则
1. 将计算某个非终结符号A的继承属性的动作插入到产生式右部中紧靠在A的本次出现之前的位置上。  
2. 将计算一个产生式左部符号的综合属性的动作放置在这个产生式右部的最右端。  

**例**  
1. 产生式1的第一条语义规则为对应$T^{'}$的继承属性，所以将动作插入到$T^{'}$的左侧。  
产生式1的第二条语义规则为对应$T$的综合属性，所以将动作插入到产生式右部的最右端。
2. 产生式2的第一条语义规则为对应$T_{1}^{'}$的继承属性，所以将动作插入到$T_{1}^{'}$的左侧。  
产生式2的第二条语义规则为对应$T^{'}$的综合属性，所以将动作插入到产生式右部的最右端。  
3. 产生式3的语义规则对应$T^{'}$的综合属性，所以将动作插入到产生式右部的最右端。  
4. 产生式4的语义规则对应$F$的综合属性，所以将动作插入到产生式右部的最右端。  

![L-SDD转换为SDT](/CollegeLessons/CompileSystem/CompileLesson3/16.png)  


### L-属性定义的SDT实现
如果一个L-SDD的基本文法可以使用LL分析技术，那么它的SDT可以在LL或LR语法分析过程中实现。  

例:根据SELECT集判断是否可以使用LL分析技术。  

![L-SDD举例](/CollegeLessons/CompileSystem/CompileLesson3/17.png)   









## LL分析过程中进行语义翻译

### 非递归的预测分析过程中进行语义翻译
**规则**:综合记录出栈时，要将综合属性值复制给后面特定的语义动作，
变量展开时（即变量本身的记录出栈时），如果其含有继承属性，则要将继承属性值复制给后面特定的语义动作。

例:  
![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/31.png) 


扩展语法分析栈：非终结符A的综合属性和继承属性继承时机不同，A的继承属性在它即将出现的时候计算，A的综合属性在它所有子节点分析完后才会计算，因此将A的综合属性和继承属性存在不同的记录中。

如下图所示，A的继承属性存放在它本身的记录中，并增加综合记录Asyn记录A的综合属性    

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/18.png)   

例:如图所示。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/19.png)  

采用自顶向下，分析栈顶在左侧，栈底在右侧。从$T$开始，由于$T$的继承属性为空，所以T本身的属性字段为空。由于T有综合属性，因此$T_{syn}$用于记录T的综合属性的value。    

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/20.png)  

根据第一条产生式，将T出栈，但是$T_{syn}$不能出栈，其记录的value要等子节点都分析完毕才能计算。此时将$F$和$T^{'}$入栈。由于$T^{'}$存在继承属性，因此$T^{'}$记录的value为$inh$。

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/21.png)  

根据第四条产生式，将$F$出栈，将digit入栈，由于digit为终结符，其综合属性值为由此法分析器提供的值。因此综合属性记录在digit记录的value。再将digit后连接的语义动作$a_{6}$，将使用digit的value来计算F的value，因此digit出栈前要将值备份到$a_{6}$中。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/22.png)  

由于$a_{6}$的任务为利用备份的digit的值计算F的综合属性值，并将结果记录在F的综合记录中。F后的语义动作$a_{1}$要使用F的综合属性值，因此再将$F_{syn}$出栈前，将值备份到$a_{1}$的字段中。        
 
![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/23.png)  

$a_{1}$计算$T^{'}$的综合属性的值。并将计算后的值保存到$T^{'}$的继承属性的value。且由于$T^{'}$出站后，$a_{3}$会入栈，$a_{3}$中会利用$T^{'}$的继承属性，因此要将$T^{'}$的值被分到$a_{3}$的记录中。此时$*F{\{}a_{3}{\}}T_{1}^{'}{\{}a_{4}{\}}$进栈。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/24.png)  

其中$*$匹配成功，将栈顶$F$弹出，将$digit{\{}a_{6}{\}}$入栈。

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/25.png)  

栈顶的$digit$匹配成功，将$digit$出栈，要注意的是将$digit$出栈时，要将$digit$的值保存到$a_{6}$的value中。接下来执行$a_{6}$，计算$F$的综合属性，计算后保存到$F_{syn}$的value中。在将$F_{syn}$出栈前，要将其备份。执行$a_{3}$，并将结果保存到$T_{1}$的value中。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/26.png)  

将$T_{1}^{'}$出栈，$a_{5}$进栈。由于$a_{5}$需要使用$T_{1}^{'}$的综合属性。因此将其备份。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/27.png)  

执行$a_{5}$计算$T_{1}^{'}$的综合属性的值。并在出栈前，将其保存的value备份到$a_{4}$对应的字段中。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/28.png)  

执行$a_{4}$计算$T^{'}_{syn}$，出栈后将值保存到$a_{2}$记录的value中。  

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/29.png)  

执行$a_{2}$后，可以得到$T_{syn}$的value。

![扩展后的语法分析栈](/CollegeLessons/CompileSystem/CompileLesson3/30.png)  







### 递归的预测分析过程中进行语义翻译

算法:
1. 为每个非终结符A构造一个函数，A的每个继承属性对应该函数的一个形参，函数的返回值是A的综合属性值。对出现在A产生式中的每个文法符号的每个属性都设置一个局部变量.  
2. 非终结符A的代码根据当前的输入决定使用哪个产生式.  
3. 与每个产生式有关的代码执行如下动作：从左到右考虑产生式右部的词法单元、非终结符及语义动作:  
>1. 对于带有综合属性$x$的词法单元$X$，把$x$的值保存在局部变量$X.x$中；然后产生一个匹配$X$的调用，并继续输入。  
>2. 对于非终结符$B$，产生一个右部带有函数调用的赋值语句$c := B(b_{1}, b_{2} , …, b_{k})$，其中，b_{1}, b_{2} , …, b_{k}是代表$B$的继承属性的变量，$c$是代表$B$的综合属性的变量。  
>3. 对于每个语义动作，将其代码复制到语法分析器，并把对属性的引用改为对相应变量的引用。  




## L-属性定义的自底向上翻译

给定一个以LL文法为基础的L-SDD，可以修改这个文法，并在LR语法分析过程中计算这个新文法之上的SDD。  


例:在如下的SDT中存在两个内嵌的语法导致无法直接自底向上翻译。使用$M$和$N$来替换。  
![L-属性定义](/CollegeLessons/CompileSystem/CompileLesson3/32.png)  



























