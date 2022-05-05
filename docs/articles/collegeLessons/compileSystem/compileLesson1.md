# 语法分析


## 自顶向下分析概述
![推导与归约](/collegeLessons/compileSystem/compileLesson1/compile1_1.png)  
规范推导:最右推导  
规范归约:最左规约  

## 文法转换

左递归文法会使递归下降分析器陷入无限循环。  
直接左递归的文法:
$$A{\rightarrow} A{\alpha}$$ 
经过两步或两步以上的推导产生的左递归是间接左递归的。

### 消除直接左递归:  
$$A{\rightarrow}A{\alpha}|{\beta}(a\not=\epsilon,\beta不以A开头)$$ 
替换为:  
$$A{\rightarrow}{\beta}A^{'}$$
$$A^{'}{\rightarrow}{\alpha}A^{'}|\epsilon$$

消除左递归的一般形式:  
$$A{\rightarrow}Aa_{1}|Aa_{2}|...|Aa_{3}|{\beta}_{1}|{\beta}_{2}|...|{\beta}_{n}|(a_{i}\not=\epsilon,\beta_{j}不以A开头)$$  
替换为:  
$$A{\rightarrow}{\beta}_{1}A^{'}|{\beta}_{2}A^{'}|...|{\beta}_{3}A^{'}$$  
$$A^{'}{\rightarrow}a_{1}A^{'}|a_{2}A^{'}|...|a_{n}A^{'}|\epsilon$$  

### 消除间接左递归
$$S{\rightarrow}Aa|b$$
$$A{\rightarrow}Ac|Sd|\epsilon$$

此时将$S$的定义代入$A-$产生式，得:  
$$A{\rightarrow}Ac|Aad|bd|\epsilon$$
消除$A-$产生式的直接左递归:  
$$A{\rightarrow}bdA^{'}|A^{'}$$
$$A^{'}{\rightarrow}cA^{'}|adA^{'}|\epsilon$$




## LL(1)文法

### FIRST集、SELECT集、FOLLOW集
1. FIRST集  
${\alpha}$的串首终结符集$FIRST({\alpha})$集的定义为:  
可以从${\alpha}$推导出来的所有串首终结符构成的集合。
若${\alpha}{\rightarrow}\epsilon$，那么$\epsilon$也在$FIRST({\alpha})$中。  

2. SELECT集  
若${\epsilon}{\notin}FIRST({\alpha})$，那么$SELECT(A{\rightarrow}a)=FIRST({\alpha})$  
若${\epsilon}{\in}FIRST({\alpha})$，
那么$SELECT(A{\rightarrow}a)=FIRST({\alpha}-{\{}{\epsilon}{\}}){\cup}FOLLOW(A)$  





