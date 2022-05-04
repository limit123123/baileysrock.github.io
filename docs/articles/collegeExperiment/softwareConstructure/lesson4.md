---
icon: page
title: 代码评审
author: Baileys
date: 2020-01-01
category:
  - 学校实验
tag:
  - 学校实验
  - 软件构造
sticky: false
star: false
footer: Baileys
---

# read4 代码评审

## 1.代码评审
代码评审是一种系统的对别人代码的研究。
代码评审有两个主要目的：
* 提升代码质量，找出存在及潜在的bug，分析代码的清晰度以及代码是否严格遵循当前工程标准。
* 提升程序员水平，代码评审是提升程序员水平的一个重要方法，通过它可以学习到语言的特性、工程上新的设计以及一些新的实现方法。

## 2.风格标准
大多数公司或者大的项目都会要求代码风格具有同一标准。

Google Java Style：
```java 
if (isOdd(n)) { 
    n = 3*n + 1;
}
```
* 在关键字(if)后面留空格，但是在函数调用(isOdd)后不留空格;
* 在行的末尾写{，而}自己单独一行;
* 无论是空块还是只有一行，都要用{...}包括起来.

有一些代码风格和远离bug、易读性、可改动性。
因此在进行代码评审时，也应该注意这些规则。

## 3.别写重复的代码
重复的代码很不安全。
如果你在两个地方防止了相似的代码，那么一个最基本的风险就是如果一处出现了bug，另一处也非常可能有bug。而修复的时候经常指挥修复一个地方而忽略另一个地方。


## 4.仅在需要的地方注释
一个好的开发者应该在代码中明智的添加注释，好的注释会使得代码易于修改，远离bug，因为一些重要的设想以及写出来了，并且减小了改动的难度。

一种重要的注释就是规格说明，通常出现在方法或者类的前部，一般会描述出类或方法的行为、参数、返回值、用法、例子等等。

### Javadoc标准
(详见lesson3)在Java中，规格说明通常按照Javadoc的标准来写：以/\*\*开始，中间用@标出参数和返回值，最后一\*/结尾。

例如：
```java 
/**
* Compute the hailstone sequence.
* See http://en.wikipedia.org/wiki/Collatz_conjecture#Statement_of_the_problem
* @param n starting number of sequence; requires n > 0.
* @return the hailstone sequence starting at n and ending with 1.
* For example, hailstone(3)=[3,10,5,16,8,4,2,1].
*/
public static List<Integer> hailstoneSequence (int n) {
    ...
}
```
### 标注引用的代码
另一种重要的注释就时标出从哪引用的代码，这在实际编程中是非常重要的，当你从别的网站上引用代码的时候，根据MIT6.031软件构造课程规定，例如：
```java 
// read a web page into a string
// see http://stackoverflow.com/questions/4328711/read-url-to-string-in-few-lines-ofjava-code
String mitHomepage = new Scanner(new URL("http://www.mit.edu" ).openStream (), "UTF8").useDelimiter ("\\A").next();
```
其中一个原因是避免版权纠纷，再Stack Overflow上引用的可能是公共版本协议，但是再别处的代码就未必了。
同时，很多网站的代码可能已经过期，他可能不再符合现有的语言标准或者更好的解决方案。
### 去掉不必要的注释
```java
while (n != 1) { // test whether n is 1 (don't write comments like this!)
    ++i; // increment i
    l.add(n); // add n to l
}
```
但是不易理解的代码应该被注释(例如实现一些特定的算法)：
```java
int sum = n*(n+1)/2; // Gauss's formula for the sum of 1...n
// here we're using the sin x ~= x approximation, which works for very small x
double moonDiameterInMeters = moonDistanceInMeters * apparentAngleInRadians ;
```

## 5.快速报错/失败
快速报错是指代码应该尽可能块的将其中的bug暴露出来。因为问题暴露的越早(越接近)，其修复工作也会越容易。

静态检查比动态检查更早报错，动态检查比产生错误的结果更早报错。

通过对输入检查，发现静态错误或动态错误，可以更早报错。

## 6.避免幻数
除了0和1的常数被称为幻数。

解决幻数的办法：
* 写注释
* 更好的办法是声明一个具有合理名字的变量

同时应当注意：永远不要再代码中硬编码你自己计算的数值，让程序去做所有的数值计算工作。


## 7.远离bug、易读性、易改动性
###存疑
* 远离bug(safe from bugs(SFB))
* 易读性(not easy to understand(ETU))
* 易改动性(not ready for change(RFC))

我们可以看以下一个例子：

```java 
for (int i = 0; i < 5; ++i) {
    turtle.forward(36);
    turtle.turn(72);
}
```
我们可以通过如下修改，增强易改动性(RFC)，当我们需要修改循环次数时，仅需修改x的值即可。
```java 
int x = 5;
for (int i = 0; i < x; ++i) {
    turtle.forward(36);
    turtle.turn(360.0 / x);
}
```
或者通过如下修改，同时增强易读性(ETU)、易改动性(RFC)、远离bug(SFB)
```java 
final double degreesInACircle = 360.0;
final int numSides = 5;
final int sideLength = 36;
for (int i = 0; i < numSides; ++i) {
    turtle.forward(sideLength );
    turtle.turn(degreesInACircle / numSides);
}
```

## 8.每个变量有且只有一个目的
不要重复利用参数，也不要重利用变量。在现在的计算机中，变量不是一个稀缺的资源。当你需要的适合就声明一个(命名一个易理解的名字)，不需要它的时候就停止使用。如果你的变量在前面几行代表一个意思，在后面又代表另一个意思，将会令人很费解。

特别的，方法的参数不应该被修改(这和易改动性(RFC)相关，在未来如果这个方法的一部分想知道参数传进来的初始值，那么我们不能再半路修改它)。
所以应该使用final关键词修饰参数(这样Java编译器就会对它进行静态检查，防止重引用)，然后在方法内部声明其他的变量使用。

例：
```java 
public static int dayOfYear(final int month, final int dayOfMonth , final int year) {
    ...
}
```

## 9.使用好的名称
好的方法名和变量名都是比较长而且能自我解释的。这种时候注释通常都不必要，因为名字就已经解释了它的用途。

例如：
```java
    int secondsPerDay = 86400;
    
    
    //don't do this!
    int tmp = 86400;//tmp is the number of seconds in a day   
```

通常来说，tmp、temp、data这样的变量名是很糟糕的，每一个局部变量都是暂时的，每一个变量也都是数据，所以这些命名都是无意义的，我们应该使用更长、更有描述性的命名。

在Java中的命名通常如下：
* methodsAreNamedWithCamelCaseLikeThis(方法)
* variablesAreAlsoCamelCase(驼峰命名法)
* CONSTANTS_ARE_IN_ALL_CAPS_WITH_UNDERSCORES(常量)
* ClassesAreCapitalized(类)
* packages.are.lowercase.and.separated.by.dots(包)

所有在方法内部声明的方法，包括用final修饰的，都使用camelCaseNames

方法的名字通常都是动词，例如getDate或者isUpperCase。

变量和类的名字通常都是名词，尽量简洁但要避免缩写。

ALL_CAPS_WITH_UNDERSCORES用来表示static final这样的常量。

除了一些固定的表示，例如x、y在用于坐标系的时候就很清晰，i、j用于变量的循环的时候就很清晰。


## 10.使用空白符
注意前后一致的空格缩进。

永远不要使用'\t'，事实上可能编辑器和IDE都会自动把tab按键作为设置好几个连续的空格输入。
而且由于不同的工具显示‘\t'字符的时候长度不一样，有时候是8个字符，有时候是4个字符，有时候是两个，因此要避免使用。

## 11.不要使用全局变量
###变量
全局说明它的值是可以修改的。
###全局的
全局的说明它可以从程序的任何地方访问。

###坏处
Java中，全局变量被声明为public static.public修饰符代表它可以从任何地方访问，而static代表这个变量只会有一个实例化的对象。

然而此时如果加上final关键字，public static final，并且这个变量的类型是不可更改的，那么这个对象就变成了一个全局常量，一个全局常量可以在任何位置读取，但永远不会被赋予新的值或对象，所以就没有风险了。

**全局变量很常见，而且很有用**

通常来说，我们应该使用参数传递和返回值而非全局变量，或者将他们放到你调用方法的所属类中。


## 12.在快照图中的各种变量
* 方法里面的局部变量
* 一个实例化对象中的实例化变量
* 一个类中的静态变量

当方法被调用的时候，局部变量产生，当方法返回时，局部变量消失。

如果一个方法被多次同时调用(例如递归)，这些方法里的局部变量互相独立，彼此不会影响。

当一个对象用new实例化后，对象中实例化的变量产生，当这个对象被垃圾回收时，这个变量消失，每一个实例化对象都有它自己的实例化变量。

例如：当以下类被加载时候，静态变量就产生了，他会一直存活到程序结束。
```java 
class Payment {
    public double value;
    public static double taxRate = 0.05;
    public static void main(String[] args) {
    Payment p = new Payment();
    p.value = 100;
    taxRate = 0.05;
    System.out.println(p.value * (1 + taxRate));
    }
}
```
下面这个快照图描述了各个变量之间的区别：
![屏幕截图 2021-06-08 014005.png](https://i.loli.net/2021/06/08/fPIYCO5QjNJF86x.png)
局部变量p和args显示在一个栈帧中，他们在main函数被调用的时候动态生成，main函数返回时，它们也会跟着消失。

println是在main函数调用它的时候生成的。

实例化变量value会在每一个Payment类型的对象中出现。

静态变量taxRate出现在Payment类型的对象之外，因为他是属于Payment这个类的。

任何数量的Payment类型的对象都可以被创建或销毁(同时它们含有的实例化变量value也会跟着一起创建和销毁)，但时在整个程序中有且仅有一个Payment类，所以这里也有且只有一个Payment.taxRate变量。

System.out是另一个在这段代码中使用到的静态变量，所以在快照图中也将他显示出来了。






## 13.类是何时被加载进虚拟机的
当编写好一个java类并通过编译器编译成class文件后，该类就可以在JVM虚拟机中运行了。我们将，class文件被加载到虚拟机中的过程称为“类加载机制”。“动态加载”就是在程序运行的过程中将class文件加载到虚拟机中。

### 当我们通过“new”关键字创建出一个对象实例时，会将该类加载到虚拟机中。

### 当我们访问一个类的静态方法或者静态属性时，会将该类加载至虚拟机中。

### 当初始化一个类的时候会初始化该类的静态代码块，如果这其中有引用到其它类，那么被引用的类也会进行加载。

### 通过反射(使用Class.forName()方法)，也会导致类加载。

### 当加载子类时，会先加载它的父类。


## 14.方法应该返回，而不是打印
如果一个方法是向控制台输出结果，这意味着如果你想在另一个地方使用它，其中结果可能会做其他的用途，例如参与运算而不是显示出来，程序就得重写。

通常来说，只有最高层的代码才会处理与人/控制台的交互。唯一例外的是debug的时候，你需要将一些关键字打印出来，但是这部分代码不会是你设计的一部分，只有在debug的时候才能出现。
