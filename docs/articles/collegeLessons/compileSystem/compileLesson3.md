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


### 例:在自定向上的语法分析栈中实现桌面计算器
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
9. 9号状态为规约状态，根据第2条产生式，此时将stack[top-2]与stack[top]值相加，并存放到stack[top-2]，并将stack[top]、stack[top-1]出栈，将E和对应的值19进栈，此时0号状态遇到E，进入状态1.  
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

### 递归的预测分析过程中进行语义翻译

## LR分析过程中进行语义翻译


























