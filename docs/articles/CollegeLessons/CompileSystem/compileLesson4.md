---
# 这是侧边栏索引
index: 4
# 这是页面的图标
icon: page
# 这是文章的标题
title: 中间代码生成
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-05-13
# 一个页面可以有多个分类
category:
  - 学校课程
# 一个页面可以有多个标签
tag:
  - 学校课程
  - 编译原理
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在首页的文章板块中
star: false
# 你可以自定义页脚
footer: 中间代码生成
---
## 简介
![SDT](/CollegeLessons/CompileSystem/CompileLesson4/3.png)  



## 声明语句的翻译

![声明语句的翻译](/CollegeLessons/CompileSystem/CompileLesson4/4.png)  


### 类型表达式

#### 基本类型是类型表达式。  

1. integer  
2. real  
3. char  
4. boolean  
5. type_error  
6. void  

#### 可以为类型表达式命名，类型名也是类型表达式。  

#### 将类型构造符(type constructor)作用于类型表达式可以构成新的类型表达式。  

1. 数组构造符$array$，若$T$是类型表达式，则$array(I,T)$是类型表达式($I$是一个整数)，例:  
![数组构造符](/CollegeLessons/CompileSystem/CompileLesson4/1.png)  

2. 指针构造符$pointer$   
若T是类型表达式，则$pointer(T)$是类型表达式，它表示一个指针类型。  

3. 笛卡尔乘积构造符$\times$   
若$T_{1}$和$T_{2}$是类型表达式，则笛卡尔乘积$T_{1}{\times}T_{2}$是类型表达式  

4. 函数构造符${\rightarrow}$  
若$T_{1}$、$T_{2}$、$…$、$T_{n}$和$R$是类型表达式，则$T_{1}{\times}T_{2}{\times}…{\times}T_{n}{\rightarrow}R$是类型表达式。  

5. 记录构造符$record$  
若有标识符$N_{1}$、$N_{2}$、$...$、$N_{n}$与类型表达式$T_{1}$、$T_{2}$、$...$、$T_{n}$， 则$record((N_{1}{\times}N_{2}){\times}(N_{2}{\times}T_{2}){\times}...{\times}(N_{n}{\times}T_{n}))$是一个类型表达式。  


**举例**:  
![声明语句](/CollegeLessons/CompileSystem/CompileLesson4/2.png)  

### 局部变量的存储分配

对于声明语句，语义分析的主要任务就是收集标识符的类型等属性信息，并为每一个名字分配一个相对地址:  
1. 从类型表达式可以知道该类型在运行时刻所需的存储单元数量称为类型的宽度(width)  
2. 在编译时刻，可以使用类型的宽度为每一个名字分配一个相对地址  

名字的类型和相对地址信息保存在相应的符号表记录中。


### 变量声明的SDT
![声明语句](/CollegeLessons/CompileSystem/CompileLesson4/5.png)  


## 赋值语句的翻译
赋值语句的语法:  
![赋值语句的语法](/CollegeLessons/CompileSystem/CompileLesson4/6.png)  

赋值语句翻译的主要任务:  
生成对表达式求值的三地址码。  
![赋值语句的语法](/CollegeLessons/CompileSystem/CompileLesson4/7.png)  


### 赋值语句的SDT
code表示三地址码，E的addr表示表达式的存放地址。    
![赋值语句的语法](/CollegeLessons/CompileSystem/CompileLesson4/8.png)  


## 数组引用的翻译  

### 赋值语句的文法  
![数组引用的语法](/CollegeLessons/CompileSystem/CompileLesson4/9.png)  

### 数组元素寻址
将数组引用翻译成三地址码时要解决的主要问题是确定数组元素的存放地址，也就是数组元素的寻址。  

1. 一维数组  
假设每个数组元素的宽度是$w$，则数组元素$a[i]$的相对地址是:$base+i{\times}w$，其中，$base$是数组的基地址，$i{\times}w$是偏移地址。  

2. 二维数组  
假设一行的宽度是$w_{1}$，同一行中每个数组元素的宽度是$w_{2}$，则数组元素$a[i_{1}][i_{2}]$的相对地址是: $base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}$。   

3. k维数组
数组元素$a[i_{1}][i_{2}]...[i_{k}]$的相对地址是: $base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}+...+i_{k}{\times}w_{k}$。其中，$w_{1}$是$a[i_{1}]$的宽度($a[i_{1}]$是一个$k-1$维数组)，$w_{2}$是$a[i_{1}][i_{2}]$的宽度，...,$w_{k}$是$a[i_{1}][i_{2}]...[i_{k}]$的宽度。  


例:  
假设:$type(a)=array(3,array(5,array(8,int)))$.  
一个整形变量占用4个字节，则$addr(a[i_{1}][i_{2}][i_{3}])=base+i_{1}{\times}w_{1}+i_{2}{\times}w_{2}+i_{3}{\times}w_{3}=base+i_{1}{\times}160+i_{2}{\times}32+i_{3}{\times}4$，其中$a[i_{1}]$的宽度为160，$a[i_{1}][i_{2}]$的宽度为32，$a[i_{1}][i_{2}][i_{3}]$的宽度为4.  


### 带有数组引用的赋值语句的翻译
例1: 假设
$type(a)=array(n,int)$  
源程序片段: 
$c=a[i];$   
三地址码: 
$t_{1}=i{\cdot}4$    
$t_{2}=a[t_{1}]$  
$c=t_{2}$  

例2: 假设  
$type(a)=array(3,array(5,int))$  
源程序片段: 
$c=a[i_{1}][i_{2}];$   
三地址码: 
$t_{1}=i_{1}{\cdot}20$  
$t_{2}=i_{2}{\cdot}4$  
$t_{3}=t_{1}+t_{2}$   
$t_{4}=a[t_{3}]$  
$c=t_{4}$  

### 数组引用的SDT

![数组引用的SDT](/CollegeLessons/CompileSystem/CompileLesson4/10.png)  

数组引用的SDT举例:  
设置type属性: 计算宽度  
设置offset属性: 累积公式中的偏移地址  
设置array属性: 传递数组的基地址  
![数组引用的SDT举例](/CollegeLessons/CompileSystem/CompileLesson4/11.png)  

由于部分内容在声明的时候就已经有了信息，可以将信息存放在符号表里。  

例，基本属性(直接存放在符号表中)+扩展属性(动态申请内存):  
![符号表](/CollegeLessons/CompileSystem/CompileLesson4/12.png)  



## 控制流语句的翻译


### 控制流语句的基本文法

![控制流语句的基本文法](/CollegeLessons/CompileSystem/CompileLesson4/13.png)  

### 控制流语句的代码结构

![控制流语句的代码结构](/CollegeLessons/CompileSystem/CompileLesson4/14.png)  

![控制流语句的代码结构](/CollegeLessons/CompileSystem/CompileLesson4/15.png)  

### 控制流语句的SDT

![控制流语句的SDT](/CollegeLessons/CompileSystem/CompileLesson4/16.png)  

**例**  
![控制流语句的SDT](/CollegeLessons/CompileSystem/CompileLesson4/17.png)  

![控制流语句的SDT](/CollegeLessons/CompileSystem/CompileLesson4/18.png)  

![控制流语句的SDT](/CollegeLessons/CompileSystem/CompileLesson4/19.png)  

### 编写要点
1. 分析每一个非终结符之前：先计算继承属性，再观察代码结构图中该非终结符对应的方框顶部是否有导入箭头。如果有，调用label( )函数。  
2. 上一个代码框执行完不顺序执行下一个代码框时，生成一条显式跳转指令。  
3. 有自下而上的箭头时，设置begin属性。且定义后直接调用label( )函数绑定地址。



## 布尔表达式的翻译

### 布尔表达式的基本文法
在跳转代码中，逻辑运算符&&、|| 和 ! 被翻译成跳转指令。运算符本身不出现在代码中，布尔表达式的值是通过代码序列中的位置来表示的。  

![布尔表达式的基本文法](/CollegeLessons/CompileSystem/CompileLesson4/20.png)  


### 布尔表达式的SDT

![布尔表达式的SDT](/CollegeLessons/CompileSystem/CompileLesson4/21.png)  

![布尔表达式的SDT](/CollegeLessons/CompileSystem/CompileLesson4/22.png)  

![布尔表达式的SDT](/CollegeLessons/CompileSystem/CompileLesson4/23.png)  











