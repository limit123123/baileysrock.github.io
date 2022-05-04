---
icon: page
title: 抽象数据类型
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

# read6 抽象数据类型

## 1.Java的访问控制
```java 
class Wallet {
    private int amount;
    public void loanTo(Wallet that) {
        // put all of this wallet's money into that wallet
        /*A*/ 
        that.amount += this.amount;
        /*B*/ 
        amount = 0;
    }
    public static void main(String[] args) {
        /*C*/ 
        Wallet w = new Wallet();
        /*D*/ 
        w.amount = 100;
        /*E*/ 
        w.loanTo(w);
    }
}
class Person {
    private Wallet w;
    public int getNetWorth() {
        /*F*/ 
        return w.amount;
    }
    public boolean isBroke() {
        /*G*/ 
        return Wallet.amount == 0;
    }
}
```

关于语句/\*A\*/,
```java 
that.amount += this.amount;
```
* 在Java中允许对this.amount的索引
* 在Java中允许对that.amount的索引

关于语句/\*B\*/,
```java
amount = 0;
```
* 在Java中允许对amount的索引

关于语句/\*C\*/,
```java
Wallet w = new Wallet();
```
* 在Java中允许对Wallet()构造函数的调用

关于语句/\*D\*/,
```java
w.amount = 100;
```
* 在Java中允许对w.amount的索引

关于语句/\*E\*/,
```java
w.loanTo(w);
```
* 在Java中允许对loanTo()的调用
* 在这句代码执行之后，w指向的Wallet对象的金额将会是0

关于语句/\*F\*/,
```java
return w.amount;
```
* 这里关于w.amount的索引不会被允许，因为amount是在另一个类中的私有区域
* 这个非法访问会被静态捕捉

关于语句/\*G\*/,
```java
return Wallet.amount == 0;
```
* 这里关于Wallet.amount的索引不会被允许，因为amount是一个私有地址
* 这里关于Wallet.amount的索引不会被允许，因为amount是一个实例变量
* 这个非法访问会被静态捕捉


## 2.什么是抽象
抽象数据类型是软件工程中一个普遍原则的实例，从他衍生出很多意思相近的名词。这里列出了几个能够表达其中思想的词：
* 抽象：忽略底层的细节而在高层思考
* 模块化：将系统分为一个模块，每个模块可以单独的进行设计、实现、测试、推倒，并且在剩下的开发中进行复用
* 封装：在模块的外部建立起一道”围墙“，使它只对自己内部的行为负责，并且系统别处的bug不会影响到它内部的正确性
* 信息隐藏：将模块的实现细节隐藏，使未来更改模块内部时不必改变外部代码
* 功能分离：一个模块仅仅负责一个特性/功能，而不是将一个特性运用在很多模块上或一个模块拥有很多特性

这些思想的本质目的都是为了实现我们的三个目标：远离bug、易于理解、可改动。

事实上，我们在设计方法和规格说明的时候，就已经接触过这些思想：
* 抽象：规格说明使得使用者只需要弄懂规格说明并遵守前置条件，而不是让他们去弄懂底层的代码实现
* 模块化：单元测试和规格说明都帮助了将方法模块化
* 封装：方法中的局部变量都是被封装的，因为它们仅仅可以在方法内部使用。与此相对的是全局变量和指向可变对象的别名，它们会对封装带来很大损害。
* 信息隐藏：规格说明就是一种信息隐藏，它使得实现者可以自由的更改实现代码
* 功能分离：一个规格说明应该是逻辑明确的，即它不能有很多特性，而应该完成好一个功能

## 3.用户定义类型
对数据进行抽象的核心思想就是类型通过其对应的操作来区分：
* 一个整形就是你能对它进行加法和乘法的东西
* 一个布尔型就是你能对它进行取反的东西
* 一个字符串就是你能对它进行连接或者取子字符串的东西

真正使得抽象类型变得新颖不同的是对操作的强调：用户不用管这个类型里面的数据是怎么保存表示的，就好像是程序员不用管编译器是怎么存储整数一样。起作用的只是类型对应的操作。

和很多现代语言一样，在Java中内置类型和用户定义类型之间的关系很模糊。例如在java.lang中的类Integer和Boolean就是内置的--Java标准中规定它们必须存在，但是它们的定义和用户定义类型的方法是一样的。


## 4.类型和操作的分类
类型分为可改变和不可变两种。

其中可改变类型的对象能够被改变：它们提供了改变对象内容的操作，这样的操作执行后可以改变其他对该对象操作的返回值。

String是不可改变的，因为它的操作符都是创建一个新的String对象而不是改变现有的这个。

有时候，一个类型会提供两种形式，一种是可改变的一种是不可改变的。例：StringBuilder就是一种可改变的字符串类型。

抽象类型的操作符大致分类：
* 创建者creator：创建一个该类型的新对象。一个创建者可能会接受一个对象作为参数，但是这个对象的类型不能是它创建对象对应的类型。
* 生产者producer：通过接受同类型的对象创建新的对象。例如String类里面的concat方法就是一个生产者，它接受两个字符串然后据此产生一个新的字符串。
* 观察者observer：接受一个同类型的对象然后返回一个不同类型的对象/值。例如List的size方法，它返回一个int。
* 改造者mutator：改变对象的内容，例如List的add方法，它会在列表中添加一个元素。


## 5.抽象数据类型的例子
int 是Java中的原始整数类型，它是不可变类型，没有改造者
* creators:字面量0,1,2,...
* producers:算术符+,-,*,/
* observers:比较符号==,!=,<,>
* mutators:无

List是Java中的列表类型，他是可更改类型。另外，List也是一个接口，所以对于它的实现 可以有很多类，例如ArrayList和LinkedList.
* creators:ArrayList和LinkedList的构造函数,Collections.singletonList
* producersl:Collections.unmodifiableList
* observers:size,get
* mutators:add,remove,addAll,Collections.sort

String是Java中的字符串类型，它是不可变类型
* creators:String构造函数，valueOf静态方法
* producers：concat，substring，toUpperCase
* observers:length,charAt
* mutators:无

对于复杂的数据类型，有些操作可能既是生产者，也是改造者。

例如：BufferedReader.readLine()是改造者。

## 6.抽象类型是通过它的操作定义的
这一节的重要思想是抽象类型是通过它的操作定义的。

对于类型T来说，它的操作集合和规格说明完全定义和构造了它的特性。

例如：当我们谈到List类型时，我们并没有特指一个数组或者链接链表，而是一些列模糊的值--哪些对象可以是List类型--满足该类型的规格说明和操作规定，例如get(),size(),等等。

![屏幕截图 2021-06-08 182038.png](https://i.loli.net/2021/06/08/DnHELGFygchRdMw.png)

**模糊的值是指我们不能检查数据具体是在类型中怎么存储的，而是要通过特定的操作取处理。例如上图中画出的，通过规格说明这道防火墙，我们将类型中具体的实现和这些实现共享的私有数据封装起来，而用户只能看到和使用接口上的操作。**

## 7.设计抽象类型
设计一个抽象类型包括选择合适的操作以及它们对应的行为，这里列出了几个重要的原则。
* 设计少量、简单，可以组合实现强大功能的操作而非设计很多复杂的操作
* 每个操作都应该有一个被明确定义的目的，并且应该设计为对不同的数据结构有一直的行为，而不是针对某些特殊情况。
* 操作集合应该充分的考虑到用户的需求，也就是说，用户可以用这个操作集合做它们可能想做的计算。
* 抽象类型可以是通用的：例如，列表、集合，或者图。或者它可以是适用于特定领域的：一个街道的地图，一个员工数据库，一个电话簿。但是一个抽象类型不能兼有上述二者的特性。

## 8.表示独立

表示独立性：client使用ADT时无需考虑其内部如何实现，ADT内部表示的变化不应影响外部spec和客户端。

特别地，一个好的抽象数据类型应该是表示独立的，这意味着它的使用和它的内部表示(实际的数据结构和实现)无关，所以内部表示的改变将对外部的代码没有影响。
例如List，它的使用与是用数组还是链表实现无关。

如果一个操作完全在规格说明中定义了前置条件和后置条件，使用者就知道他应该依赖说明，而你也可以安全的对内部实现进行更改。

例：
```java 
/**
* Represents a family that lives in a household together.
* A family always has at least one person in it.
* Families are mutable.
*/
class Family {
    // the people in the family, sorted from oldest to youngest, with no duplicates.
    public List<Person> people;
    
    /**
    * @return a list containing all the members of the family, with no duplicates.
    */
    public List<Person> getMembers() {
        return people;
    }
}
```
下面是一个使用者的代码：
```java 
void client1(Family f) {
    // get youngest person in the family
    Person baby = f.people.get(f.people.size()-1);
    ...
}
```
假设所有的代码都能顺利运行(Family和client1)并通过测试。

当Family的数据表示从List变为了Set，
```java 
/**
* Represents a family that lives in a household together.
* A family always has at least one person in it.
* Families are mutable.
*/
class Family {
    // the people in the family
    public Set<Person> people;
    /**
    * @return a list containing all the members of the family, with no duplicates.
    */
    public List<Person> getMembers() {
        return new ArrayList<>(people);
    }
}
```
client1依赖与Family的数据表示，并且这种依赖会导致静态错误。

## 9.测试抽象数据类型
当我们测试一个抽象数据类型的时候，我们分别测试它的各个操作。
而这些测试不可避免的要交互：我们只能通过观察者来判断其他的操作的测试是否成功，而测试观察者的唯一方法时创建对象然后使用观察者。



## 10.总结
* 抽象数据类型(ADT)时通过它们对应的操作区分的。
* 操作可以分类为创建者、生产者、观察者、改造者。
* ADT的表示由它的操作集合和规格说明组成。
* 一个好的ADT应该是简单，逻辑明确并且表示独立。
* 对于ADT的测试应该对每一个操作进行测试，并同时利用到创建者、生产者、观察者、改造者。







