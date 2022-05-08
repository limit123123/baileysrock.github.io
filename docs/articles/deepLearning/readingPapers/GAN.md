---
# 这是侧边栏索引
# 这是页面的图标
icon: page
# 这是文章的标题
title: Generative Adversarial Nets
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-05-08
# 一个页面可以有多个分类
category:
  - 深度学习
# 一个页面可以有多个标签
tag:
  - 深度学习
  - 读论文
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在首页的文章板块中
star: false
# 你可以自定义页脚
footer: Baileys
---


## 论文名称
[Generative Adversarial Nets](https://proceedings.neurips.cc/paper/2014/file/5ca3e9b122f61f8f06494c97b1afccf3-Paper.pdf)  
期刊:NIPS2014  

## 摘要
提出一个framework通过对抗的过程，估计生成的模型：同时训练两个模型。  

一个生成模型G:抓住整个数据的分布，生成和原始数据相似的数据，G的训练过程最大化D犯错的概率。
一个辨别模型D:辨别一个数据是来自真实训练集，还是来自G生成的数据。  

在任何函数空间的G和D，有一个独一无二的解，G能挖掘出原始数据分布，使D的预测概率为$\frac{1}{2}$.

## Introduction
深度学习是发现丰富的、有层次的模型可以对各种AI应用的数据做出概率分布的表示。深度学习已经对辨别模型，取得了很大的进展，但是在生成模型上还有很大发展空间。这主要由于最大化似然函数，需要对概率分布近似，带来了计算上的困难。



