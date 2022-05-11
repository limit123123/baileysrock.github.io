---
icon: page
title: 抽象函数与表示不变量
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

# read7 抽象函数与表示不变量

## 1.不变量
好的ADT的最重要一点就是他会保护/保留自己的不变量。

不变量是一种属性，他在程序运行的时候总是一种状态。


## 2.不变性
不变性：一旦一个不变类型的对象被创建，它总是代表一个不变的值。当一个ADT能够确保它内部的不变量恒定不变，我们就说这个ADT保护/保留自己的不变量。

例：
```java 
/**
* This immutable data type represents a tweet from Twitter.
*/
public class Tweet {
    public String author;
    public String text;
    public Date timestamp;
    
    /**
    * Make a Tweet.
    * @param author Twitter user who wrote the tweet
    * @param text text of the tweet
    * @param timestamp date/time when the tweet was sent
    */
    public Tweet(String author, String text, Date timestamp) {
    this.author = author;
    this.text = text;
    this.timestamp = timestamp;
    }
}
```

我们怎么做才能保证Tweet对象是不可变的(一旦被创建，author，message和date都不能被改变)




## 3.表示暴露(Rep exposure)
第一个威胁就是使用者直接可以访问Tweet内部的数据，例如：
```java 
Tweet t = new Tweet("justinbieber",
                    "Thanks to all those beliebers out there inspiring me every day",
                    new Date());
t.author = "rbmllr";
```

此时，类外部的代码可以直接修改类内部存储的数据。上面的表示暴露不仅影响到了不变量，也影响到了表示独立性。

处理表示暴露的方法：
```java
public class Tweet {
    private final String author;
    private final String text;
    private final Date timestamp;
    public Tweet(String author, String text, Date timestamp) {
        this.author = author;
        this.text = text;
        this.timestamp = timestamp;
    }
    /** @return Twitter user who wrote the tweet */
    public String getAuthor() {
        return author;
    }
    /** @return text of the tweet */
    public String getText() {
        return text;
    }
    /** @return date/time when the tweet was sent */
    public Date getTimestamp() {
        return timestamp;
    }
}
```
其中，`private`表示这个区域只能由同类进行访问；而`final`确保了该变量的索引不会被更改，对于不可变的类型来说，就是确保了变量的值不可变。

但是仍然存在暴露的风险：
```java 
/** @return a tweet that retweets t, one hour later*/
public static Tweet retweetLater(Tweet t) {
    Date d = t.getTimestamp();
    d.setHours(d.getHours()+1);
    return new Tweet("rbmllr", t.getText(), d);
}
```
retweetLater希望接受一个Tweet对象然后修改Date后返回一个新的Tweet对象。

getTimestamp调用返回一个一样的Date对象，它会被t.timestamp和d同时索引。所以当我们调用d.setHours()后，t也会受到影响，如下图所示：

![屏幕截图 2021-06-08 232802.png](https://i.loli.net/2021/06/08/U4a8qu5RNYzA1yf.png)

这样Tweet的不变性就被破坏了，这里的问题就在于Tweet将自己的内部对于可变对象的索引泄露了出来，因此整个对象都变成可变的了。

我们可以通过防御性赋值来弥补这个问题。


## 4.防御性复制
防御性复制在返回的时候，复制一个新的对象，而不会返回原对象的索引。
```java 
public Date getTimestamp() {
    return new Date(timestamp.getTime());
}
```
可变类型通常都有一个专门用来复制的构造者，你可以通过它产生一个一摸一样的复制对象。

另一个复制可变对象的方法是使用clone()，但是它没有被很多类支持(标准库里面只有5%支持)

同时我们也应该对创建者也进行防御性编程：
```java 
public Tweet(String author, String text, Date timestamp) {
    this.author = author;
    this.text = text;
    this.timestamp = new Date(timestamp.getTime());
}
```

你需要特别注意ADT操作的参数和返回值。如果它们之中有可变类型的对象，确保你的代码没有直接使用索引或者直接返回索引。

这种防御性编程一般在迫不得已的时候使用--例如，这个可变对象的数据量非常大，如果进行防御性复制的话，会花费很多资源，如果不是极端情况，确保ADT会保留/保护自己的不变量总比通过规格说明来限定使用者要好。

更好的解决方案是使用不可变类型。


## 5.可变类型的不可变包装
Java的collections类提供了一种有趣的“折中“：不可变包装

Collections.unmodifiableList()会接受一个(可变)List然后将其包装为一个不可变对象--它的set(),add(),remove()，等操作都会抛出异常。所以你可以将一个List包装为不可变对象(记得将以前对于List的索引丢掉)，然后将它传入其他地方使用。

这种方法的缺点就是你只能在运行时获得不可变性，而不是编译时。

Java不会在编译时候对你对不可变列表的修改提出警告。


## 6.表示不变量和抽象函数
表示域(space of representation values)里面包含的是值具体的实现实体。在简单的情况下，一个抽象类型只需要实现为单个的对象，但是更常见的情况是使用一个很多对象的网阔。

抽象域里面包含的则是类型设计时支持使用的值。这些值是由表示域“抽象/想像”出来的，也是使用者关注的。例如，一个无限整数对象的抽象域是整个整数域，但是它的实现域可能时一个由原始整数类型(有限)组成的数组实现的，而使用者值关注抽象域。

但是实现者是非常在一表示域(和抽象域)的，因为实现者的责任就是实现表示域到抽象域的转换(映射)。

例如，我们选择用字符串来表示一个字符集合：
```java 
public class CharSet {
    private String s;
    ...
}
```
![屏幕截图 2021-06-09 131401.png](https://i.loli.net/2021/06/09/17XBDRpvltYPsT5.png)

如上图所示，表示域R包含的是我们的实现实体(字符串)，而抽象域里面是抽象类型表示的字符集合，我们用箭头表示这两个域之间的映射关系。
* 每一个抽象值都是由表示值映射而来。抽象类型的意义在于支持对于抽象值的操作，即我们需要能够创建和管理所有的抽象值，因此它们也必须是可表示的。
* 一些抽象值是被多个表示值映射而来的，这是因为表示方法并不是固定的，我们可以灵活表示一个抽象值。
* 不是所有的表示值都能映射到抽象域。在上面这个例子中，“abbc”就没有被映射。因为我们已经确定了表示值的字符串中不能含有重复的字符。

## 7.抽象函数、表示不变量
### 定义及举例
抽象函数是表示值到其对应的抽象值的映射：

`AF:R -> A`

快照图中的箭头表示的就是抽象函数，可以看出，这种映射是满射，但不一定是单射(不一定是双射)

表示不变量rep invariant是表示值到布尔值的映射：

`RI:R -> boolean`

对于表示值r，当且仅当r被AF映射到了A，RI(r)为真，且AF只在RI(r)为真的部分上由定义。

![屏幕截图 2021-06-09 132310.png](https://i.loli.net/2021/06/09/fAz15cs7KI8Bwy2.png)

例如上图，CharSet这种类型的实现禁止由重复字符，所以RI("a")=true,RI("ac")=true,RI("acb")=true,但RI("aa")=false,RI("abbc")=false.

其中假的集合用红色区域表示，合法(为真)的字符串集合用绿色表示。
### 注释
表示不变量和抽象函数都应该在表示声明后注释出来：
```java 
public class CharSet {
    private String s;
    // Rep invariant:
    // s contains no repeated characters
    // Abstraction function:
    // AF(s) = {s[i] | 0 <= i < s.length()}
    ...
}
```
注意：
* 抽象域不能独立决定AF和RI，例：对于一个字符集合，我们既可以用字符串来表示，也可以用比特向量来表示，对于这两种情况，显然我们需要两个不同的抽象函数来表示这两种不同的映射。
* 表示域和抽象域也不能决定AF和RI，当我们确定表示域后，我们并不能决定拿一些表示值是合法的，以及如果它是合法的，他会被怎么解释/映射。
* 即使是同样的抽象域和表示域以及同样的表示不变量，我们也可能由不同的解释方法/抽象函数。


因此一个ADT的实现不仅是选择表示域(规格说明)和抽象域(具体实现)，同时也要决定哪一些表示值是合法的(表示不变量)，合法表示会被怎么解释/映射(抽象函数)。


## 举例(存疑)
假设louis是这样表示CharSet的：
```java 
public class CharSet {
    private String s;
    ...
}
```
存在以下四种可能的AF/RI对：

SortedRep:
```java 
// AF(s) = {s[i] | 0 <= i < s.length()}
// RI: s[0] < s[1] < ... < s[s.length()-1]
```
SortedRangeRep:
```java 
// AF(s) = union of { c | s[2i] <= c <= s[2i+1] }
// for all 0 <= i < s.length()/2
// RI: s.length() is even, and s[0] <= s[1] <= ... <= s[s.length()-1]
```
NoRepeatsRep:
```java
// AF(s) = {s[i] | 0 <= i < s.length()}
// RI: s contains no character more than once
```
AnyRep:
```java 
// AF(s) = {s[i] | 0 <= i < s.length()}
// RI: true
```
对于下面add()的实现，哪一种AF/RI是可以对的上的(AnyRep)
```java 
/**
* Modifies this set by adding c to the set.
* @param c character to add
*/
public void add(char c) {
    s = s + c;
}
```
对于下面remove()的实现，哪一种AF/RI是可以对的上的(SortedRep、NoRepeatsRep)
```java 
/**
* Modifies this set by removing c, if found.
* If c is not found in the set, has no effect.
* @param c character to remove
*/
public void remove(char c) {
    int position = s.indexOf(c);
    if (position >= 0) {
    s = s.substring(0, position) + s.substring(position+1, s.length());
    }
}
```
对于下面contains()的实现，哪一种AF/RI是可以对的上的(SortedRangeRep)
```java 
/**
* Test for membership.
* @param c a character
* @return true iff this set contains c
*/
public boolean contains(char c) {
    for (int i = 0; i < s.length(); i += 2) {
        char low = s.charAt(i);
        char high = s.charAt(i+1);
        if (low <= c && c <= high) {
        return true;
        }
    }
    return false;
}
```

## 9.举例-有理数
![屏幕截图 2021-06-09 140816.png](https://i.loli.net/2021/06/09/wQmn2LW9rJHVd35.png)

```java 
public class RatNum {
    private final int numerator;
    private final int denominator;
    // Rep invariant:
    // denominator > 0
    // numerator/denominator is in reduced form
    // Abstraction function:
    // AF(numerator, denominator) = numerator/denominator
    /** Make a new RatNum == n.
    * @param n value 
    */
    public RatNum(int n) {
        numerator = n;
        denominator = 1;
        checkRep();
    }
    /** Make a new RatNum == (n / d).
    * @param n numerator
    * @param d denominator
    * @throws ArithmeticException if d == 0 
    */
    public RatNum(int n, int d) throws ArithmeticException {
        // reduce ratio to lowest terms
        int g = gcd(n, d);
        n = n / g;
        d = d / g;
        // make denominator positive
        if (d < 0) {
            numerator = -n;
            denominator = -d;
        } 
        else {
            numerator = n;
            denominator = d;
        }
        checkRep();
    }
}
```

## 10.检查表示不变量
表示不变量不仅是一个简洁的数学概念，你还可以通过断言检查它的不变属性来动态捕捉bug。例如上面的RatNum，这里就举出了一种检查的方法：
```java 
// Check that the rep invariant is true
// *** Warning: this does nothing unless you turn on assertion checking
// by passing -enableassertions to Java
private void checkRep() {
    assert denominator > 0;
    assert gcd(Math.abs(numerator), denominator) == 1;
}
```
**注意**
* 你应该在每一个创建或者改变表示数据的操作后调用checkRep()检查不变量，在使用创建者、生产者、改造者后。
* 观察者通常不需要使用checkRep()进行检查，但这也是个不错的主义，在每一个操作中调用checkRep()检查不变量更能够帮助你捕捉因为表示暴露而带来的bug。



## 11.不要在表示中使用Null
我们应该在编程中尽可能避免Null，没有特殊说明，前置条件、后置条件中都隐式的包含不会有null值出现。

现在我们将这种限制扩展到抽象函数类型的表示中，默认情况下，我们不允许表示中的索引出现null值。

例：
```java 
class CharSet{
    String s;
}
```
那么表示不变量中默认就会有s != null --你不需要专门在表示不变量的注释中说明。

当你在实现检查表示不变量的checkRep()时，你应该显示的检查s!=null，确保当s是null的时候会快速失败。通常情况来说，这种检查会是自动的，因为很多操作在内容是null时会自动抛出异常，例如：
```java 
private void checkRep(){
    assert s.length() % 2 == 0;
    ...
}
```
这个时候就不需要使用assert s != null，因为对s.length()的调用会在s为null是自动失败报错，但是如果没有对null的自动检查，你就需要显示的使用assert s ！= null 了。


## 12.友善改动
不可变类型：对象一旦被创建其值不会发生更改。现在我们学习了抽象数据类型中的表示域和抽象域，我们可以将这个定义更加细化一下:

对象一旦被创建，其抽象值不会发生改变。对于使用者来说，其代表的值是不会改变的，但是实现者可以在底层对表示域做一些改动，这些不会影响到抽象域的改动就称为友善改动(beneficent mutation)

例如:
```java 
public class RatNum {
    private int numerator;
    private int denominator;
    // Rep invariant:
    // denominator != 0
    // Abstraction function:
    // AF(numerator, denominator) = numerator/denominator
    /**
    * Make a new RatNum == (n / d).
    * @param n numerator
    * @param d denominator
    * @throws ArithmeticException if d == 0
    */
    public RatNum(int n, int d) throws ArithmeticException {
        if (d == 0) throw new ArithmeticException();
        numerator = n;
        denominator = d;
        checkRep();
    }
    ...
}
```
我们可以对其进行简化，例：
```java 
/**
* @return a string representation of this rational number
*/
@Override
public String toString() {
    int g = gcd(numerator, denominator);
    numerator /= g;
    denominator /= g;
    if (denominator < 0) {
        numerator = -numerator;
        denominator = -denominator;
    }
    checkRep();
    return (denominator > 1) ? (numerator + "/" + denominator)
                             : (numerator + "");
}

```
此时toString实现了更改私有区域numerator和denominator，他改变了表示域--虽然这还是一个观察者。

但是这种改动并没有改变映射到的抽象值。所以这种改动是无害的，也就是"友善"的。

## 13.AF,RI以及表示暴露安全性的注解
应该在抽象类型(私有的)表示声明后写上对于抽象函数和表示不变量的注解。

在描述抽象函数和表示不变量的时候，注意要清晰明确：
* 对于RI(表示不变量)，仅仅宽泛的说什么区域是合法的并不够，你应该说明是什么使他合法/不合法
* 对于AF(抽象函数)来说，仅仅宽泛的说抽象域表示了什么并不够。抽象函数的作用是规定合法的表示值会如何被解释到抽象域。作为一个函数，我们应该清晰的知道从一个输入到一个输入是怎么对应的。
* 同时还需要将暴露的安全性注释出来。它们为什么不会发生暴露，特别是处理的表示的参数输入和返回部分(这也是表示暴露发生的部分)

下面是一个例子：
```java 
// Immutable type representing a tweet.
public class Tweet {
    private final String author;
    private final String text;
    private final Date timestamp;
    // Rep invariant:
    // author is a Twitter username (a nonempty string of letters, digits,underscores)
    // text.length <= 140
    // Abstraction function:
    // AF(author, text, timestamp) = a tweet posted by author, with content text,
    // at time timestamp
    // Safety from rep exposure:
    // All fields are private;
    // author and text are Strings, so are guaranteed immutable;
    // timestamp is a mutable Date, so Tweet() constructor and getTimestamp()
    // make defensive copies to avoid sharing the rep's Date object with clients.
    // Operations (specs and method bodies omitted to save space)
    public Tweet(String author, String text, Date timestamp) { ... }
    public String getAuthor() { ... }
    public String getText() { ... }
    public Date getTimestamp() { ... }
}
```
注意，我们并没有对timestamp的表示不变量进行要求(除了之前默认的timestamp != null)，但我们依然要对timestamp的表示暴露的安全性进行说明，因为整个类型的不变性依赖于所有的成员变量的不变性。

下面是关于RatNum的另一个例子：
```java 
// Immutable type representing a rational number.
public class RatNum {
    private final int numerator;
    private final int denominator;
    // Rep invariant:
    // denominator > 0
    // numerator/denominator is in reduced form, i.e. gcd(|numerator|,denominator) = 1
    // Abstraction function:
    // AF(numerator, denominator) = numerator/denominator
    // Safety from rep exposure:
    // All fields are private, and all types in the rep are immutable.
    // Operations (specs and method bodies omitted to save space)
    public RatNum(int n) { ... }
    public RatNum(int n, int d) throws ArithmeticException { ... }
    ...
}
```
可以看到，对于不可变类型的表示，表示暴露的安全性说明会简单很多。


## 14.一个ADT的规格说明应该写什么
由于我们已经讲了如何对表示不变量和抽象函数做注解，现在我们就来更新一下我们对于规格说明的理解，即一个ADT的规格说明该写什么。

![屏幕截图 2021-06-09 144437.png](https://i.loli.net/2021/06/09/Bj1CVk98cF7eYux.png)

如图所示，规格说明在使用者和实现者之间构建了一道防火墙。抽象类型的规格说明(包含操作的说明)应该只关注使用者可见的部分，这包括参数、返回值、可能抛出的异常。

规格说明不应该谈论具体的表示/实现细节，例如表示域里面的值。它应该认为表示本身(私有区域)对于使用者是不可见的，就像是方法里面的局部变量对外部不可见。

这也是为什么我们在注解表示不变量和抽象函数的时候使用的是"\\"注释，而非Javadoc格式，如果我们使用Javadoc注释的话，内部的实现细节就会出现在规格说明中，而这会影响表示独立性，以及信息隐藏。


## 15.用ADT不变量替换前置条件
### 定义
良好的ADT一大优点在于我们可以使用它将本该卸载前置条件中的限制封装起来。
### 举例
例如：
```java
/**
* @param set1 is a sorted set of characters with no repeats
* @param set2 is likewise
* @return characters that appear in one set but not the other,
* in sorted order with no repeats
*/
static String exclusiveOr(String set1, String set2);
```
我们可以利用ADT(SortedSet)的不变量属性要求这种前置条件：
```java 
/** @return characters that appear in one set but not the other */
static SortedSet<Character> exclusiveOr(SortedSet<Character> set1,
SortedSet<Character> set2);
```
这满足了我们所有的要求：
* 远离bug：排序、无重复都已经是ADT的不变量了，所以Java可以对其静态检查
* 易于理解：SortedSet的名字就以及表明了它该有的属性
* 可改动：我们可以改变SortedSet的内部实现而不影响exclusiveOr或其他的使用者代码


### 如何建立不变量
不变量是一种在程序中一直为真的属性，对于对象而言，就是从对象创建开始一直具有的属性。

如果一个抽象数据类型的不变量满足：
* 被创建者或者生产者创建；
* 被改造者和观察者保持；
* 没有表示暴露
那么这种类型的所有实例的不变量都是成立的。

## 16.总结
* 不变量是指对于一个对象，它有一种能够在整个生命周期保证为真的属性
* 一个好的ADT会确保它的不变量为真。不变量是由创建者和生产者创建，被观察者和改造者保持。
* 表示不变量明确了什么是合法的表示值，并且这些表示应该在运行时调用checkRep()检查
* 抽象函数将具体的表示映射到抽象值上
* 表示暴露会威胁到表示独立性和表示不变量