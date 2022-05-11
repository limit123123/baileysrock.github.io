---
icon: page
title: java基础
author: Baileys
date: 2020-01-01
category:
  - 学校课程
tag:
  - 学校课程
  - 软件构造
sticky: false
star: false
footer: Baileys
---

# read2 java基础

## 1.课程目标
学习java的基本语法

## 2.快照图
为了弄清楚一些隐秘的问题，我们会画一些图来进行结束i。快照图能代表程序运行时的各种状态--它的栈（即方法和局部变量）和它的堆（即现在存在的对象）。

>快照图有如下优点：
> * 在课堂、会议上交流
> * 解释一些概念
> * 解释工程的设计思想

一个对象用一个圆圈表示，对象内部会有很多区域，这些区域又指向他们对应的值，同时这些区域也是又他们的类型的，例如int x.

![屏幕截图 2021-06-06 003933.png](https://i.loli.net/2021/06/06/efL749iRvkwgE2h.png)


## 3.可更改的值、可被重新赋值的改变

通过快照图，我们可以视图化可更改的值和可重新赋值的改变之间的区别：
* 当你给一个变量或者一个区域赋值的时候，你实际上时改变了它指向的方向，即指向了另一个值。
* 当你修改一个可被更改的值的时候--例如数组或者列表，你真正修改了这个值本身，区域的指向并没有改变。

#### 重新赋值和不可改变的值：

例如：
``` java
String s = "a";
s = s + "b";
```
String就是一种不可改变的值，这种类型的值在第一次确定后就不能改变。
不可更改的对象在快照图中以双圆圈的边框表示，例如上面的例子。

![屏幕截图2021-06-06 004653.png](https://i.loli.net/2021/06/06/i3j58lOuUXeC2fb.png)

通过IDEA，我们可以看到String s在字符串连接操作后，指向的区域不同。一开始指向区域497，之后指向区域499.

![屏幕截图 2021-06-06 005529.png](https://i.loli.net/2021/06/06/TYHznZ9J7QKUCM1.png)
![屏幕截图 2021-06-06 005715.png](https://i.loli.net/2021/06/06/srQep9qdEgDv7ja.png)
#### 可更改的值
例如：
``` java
StringBuilder sb = new StringBuilder("a");
sb.append("b");
```
![屏幕截图 2021-06-06 004913.png](https://i.loli.net/2021/06/06/5mLwEqenMfYKGuX.png)

通过IDEA，我们可以看到sb在初始化后指向497，在添加一个元素'b'后，指向的区域仍为497.
![屏幕截图 2021-06-06 005130.png](https://i.loli.net/2021/06/06/OiCNBVf9WKm8xrR.png)
![屏幕截图 2021-06-06 005352.png](https://i.loli.net/2021/06/06/41BRbZu8m6IzSwe.png)

#### 不可更改的引用
java也提供了不可更改的引用：final声明，变量一旦被赋值就不能再次改变它的引用（指向的值或者对象）
![屏幕截图 2021-06-06 005950.png](https://i.loli.net/2021/06/06/qdLIDapAiv8Kwfr.png)

在快照图中，不可更改的引用（final）用双箭头表示，如图中的id，person的id引用不可改变，但是age时可以改变的。
``` java
final int e = 10;
```
在IDEA中实践，试图将e修改为20，此时编译器会报错.

final为不可更改的引用提供了静态检查。

![屏幕截图 2021-06-06 002636.png](https://i.loli.net/2021/06/06/YReU8F1HbCds9Kt.png)

注意：

final知识限定了引用不可变，我们可以将其引用到一个可更改的值。

例如final StringBuilder sb，虽然引用不变，但引用对象本身的内容可以改变。

在IDEA中实践以下代码：
``` java
final List<Integer> list_int = new ArrayList<Integer>();
list_int.add(30);
list_int.add(40);
```
此时，虽然list_int的引用不变，但引用对象的本身的内容可以改变，我们可以在IDEA中debug，探索list_int的引用。

![屏幕截图 2021-06-06 010703.png](https://i.loli.net/2021/06/06/YtkHwIqOj2Bc8DR.png)

![屏幕截图 2021-06-06 010755.png](https://i.loli.net/2021/06/06/UrlcxmbaV4AyC3Z.png)

![屏幕截图 2021-06-06 010809.png](https://i.loli.net/2021/06/06/VEIuwt86BnJspy2.png)

我们可以看到虽然，此时list_int指向的都是495区域，但其引用的内容本身可以改变。


## 4.Java聚合类型

本节主要描述列表、集合、映射，List、Set、Map都是接口，他们定义了类型的工作，但是他们不提供具体的实现代码。

* 列表

![屏幕截图 2021-06-06 014333.png](https://i.loli.net/2021/06/06/G8SKi652gJ3osmy.png)

列表的声明与创建：

若用Arrays.asList创建List，则其长度固定
``` java
List array1 = Arrays.asList("a","b","c");
```
用ArrayList、LinkedList、Vector等实现List,java要求元素的普遍性，我们不能直接使用原始类型作为元素的类型，例如List&lt;int&gt;，但是每个原始类型都有对应的对象类型，我们可以用其对应的对象的类型声明。

若左右两边类型的参数相同，java可以自动识别。
``` java
List <String> list1 = new LinkedList<String>();  //a List of String
List <Integer> list2 = new ArrayList<>();  //a List of Integer
List <Double> list3 = new Vector<>();      //a List of Double
```
* 集合

![屏幕截图 2021-06-06 014533.png](https://i.loli.net/2021/06/06/5i9KLh2yn4lpQeW.png)

集合的声明与创建：

对于集合，集合没有顺序概念，我们默认使用HashSet
``` java
Set <String> set = new HashSet<>();
String str1 ="hello";
set.add(str1);
System.out.println("set中是否含有"+str1+":"+set.contains(str1));
SortedSet<Integer> set1 = new TreeSet<>();  //也可以使用TreeSet实例化
```
集合的遍历，这种foreach语句实际上用到了Iterator，java也提供了数字索引，但可能会引起一些难以发现的bug：
``` java
for(String string : set)
{
    System.out.println(string+"\n");
}
```

* Map映射关系

![屏幕截图 2021-06-06 014502.png](https://i.loli.net/2021/06/06/oYIKEsJka8A34qc.png)

常见Map类型：HashMap（无序）、LinkedHashMap（有序，记录插入顺序）、TreeMap（有序）。映射默认使用HashMap。注意此时Map类型的k必须为不可变类型。
映射的声明与创建：
    
我们此处构建了HashMap与LinkedHashMap，并为其赋相同的映射关系。

``` java
Map <Integer,String> map = new HashMap();            //构建Integer、String的HashMap
Map <Integer,String> map1 = new LinkedHashMap<>();   //构建Integer、String的LinkedHashMap
Integer i = 10;
Integer j = 20;
Integer k = 30;
String string1 = "hello world";
String string2 = "hello";
String string3 = "world!";
map.put(i,string1);
map.put(j,string2);
map.put(k,string3);
map1.put(i,string1);
map1.put(j,string2);
map1.put(k,string3);
```
遍历：

对于map我们可以根据key对Map遍历

通过Map.KeySet方法，获取map中的所有键名
``` java
for(Integer integer:map.keySet())
{
    System.out.println(map.get(integer));
}
System.out.println("\n");
for(Integer integer:map1.keySet())
{
    System.out.println(map1.get(integer));
}
```
通过IDEA测试以上代码，可以发现，linkset有顺序的区分。（上为HashMap、下为LinkedHashMap）

![屏幕截图 2021-06-06 013734.png](https://i.loli.net/2021/06/06/yxArLg36I8msqVf.png)

我们也可以直接对Map的键值遍历，并通过IDEA测试：

``` java
for (String string : map.values())
{
    System.out.println(string);
}
```

![屏幕截图 2021-06-06 014028.png](https://i.loli.net/2021/06/06/dHkiUW8Nl6f4hoP.png)



## 5.枚举类型
>有时候一种类型中会存在一个既小又有限的不可变的值的集合，例如：
> * 一年中的月份：January、February、...、December
> * 一周中的每一天：Monday、Tuesday、...、Sunday
> * 方向：North、South、East、West
> * 颜色：Red、Yello、Blue

当不可变的集合满足“小“和”有限“这两个条件时，将这个集合中的所有值统一定义为一个命名常量就是有意义的。
在Java中，这样的命名常量就成为enumeration（枚举类型）并使用关键字enum来构造。

* 例如，我们可以按照如下构造enum类型。
```java
public enum Month 
{
    January,February,March,April,May,June,July,
    August,September,October,Novembr,December;
}
public enum Day
{
    Monday,Tuesday,Wednesday,Friday,Saturday,Sunday;
}
```
* 你可以在声明变量或函数的时候使用例如Month这样的枚举型类型名
```java
Month month;
month = Month.August;    //像引用一个静态常量一样来引用枚举类型的值

```
需要强调的是，枚举类型是一个独特的新类型，枚举型变量更加安全，因为它可以发现一些类型错误，如类型不匹配。

IDEA会报如下错误：

![屏幕截图 2021-06-06 122210.png](https://i.loli.net/2021/06/06/tXgejPxDzWo375G.png)



