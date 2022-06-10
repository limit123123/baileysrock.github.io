---
# 这是侧边栏索引
# 这是页面的图标
icon: page
# 这是文章的标题
title: Do Transformers Really Perform Bad for Graph Representation
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-06-05
# 一个页面可以有多个分类
category:
  - 自然语言处理
# 一个页面可以有多个标签
tag:
  - 自然语言处理
  - 读论文
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在首页的文章板块中
star: false
# 你可以自定义页脚
footer: Baileys

pageview: true
---
## 论文名称
[Do Transformers Really Perform Bad for Graph Representation?](https://proceedings.neurips.cc/paper/2021/hash/f1c1592588411002af340cbaedd6fc33-Abstract.html)


## Abstract
Transformer结构已经成为许多领域的主要选择，例如自然语言处理和计算机视觉。然而，与主流的GNN变体相比，它在流行的graph-level的排行榜上并没有取得具有竞争力的表现。因此，Transformer如何很好地进行图表示学习仍然是一个谜。  

通过提出基于标准Transformer架构的graphhormer来解决这个谜题，它可以在广泛的图表示学习任务中取得优异的结果，特别是在最近的OGB大规模挑战中。

我们在图中使用Transformer的关键点是，必须有效地将图的结构信息编码到模型中。

为此提出了几种简单而有效的结构编码方法，以帮助Graphormer更好地建模图结构数据。

此外还从数学上描述了Graphormer的表达能力，并展示了通过编码图的结构信息的方式，许多流行的GNN变体都可以作为Graphormer的特殊情况。

[代码链接](https://github.com/Microsoft/Graphormer)

## Introduction

Transformer被公认为是建模序列数据(如自然语言和语音)的最强大的神经网络。
基于Transformer构建的模型变体在计算机视觉和编程语言方面也表现出了出色的性能。
然而，Transformer仍然不是图表示排行榜的实际标准。
有许多尝试将Transformer引入图领域，但唯一有效的方法是通过softmax attention来替换经典GNN变体中的一些关键模块(例如，特性聚合)。
因此，Transformer架构是否适用于图的建模以及如何使其适用于图表示学习仍然是一个悬而未决的问题。


在本文中，我们通过设计Graphormer给出了肯定的答案，它直接构建在标准的Transformer上，并在广泛的图形级预测任务中实现了最先进的性能，包括最近的Open Graph Benchmark大规模挑战(OGB-LSC)，以及一些流行的排行榜(如OGB，Benchmarking-GNN)。
Transformer最初是为序列建模而设计的。为了在图中利用它的功能，我们认为关键是将图的结构信息适当地纳入到模型中。注意，对于每个节点i，自注意只计算i与其他节点的语义相似度，而不考虑节点上反映的图的结构信息和节点对之间的关系。Graphormer合并了几种有效的结构编码方法来利用这些信息，如下所述。

- 首先，我们在Graphormer中提出一种中心性编码来捕捉图中的节点重要性。在一个图中，不同的节点可能有不同的重要性，例如，名人被认为比社交网络中的大多数网络用户更有影响力。但是这些信息并没有在self-attention模块中体现出来，它主要通过节点语义特征来计算相似性。为了解决这个问题，我们建议在Graphormer中编码节点中心性。特别地，我们利用度中心性进行中心性编码，根据度为每个节点分配一个可学习向量，并添加到输入层的节点特征中。实证研究表明，简单中心性编码对Transformer图形数据建模是有效的。 

- 其次，我们在Graphormer中提出了一种新的空间编码来捕捉节点之间的结构关系。图结构数据与其他结构化数据(如语言、图像)的一个显著的几何特性是，不存在嵌入图的规范网格。事实上，节点只能位于非欧几里得空间中，并且由边连接。为了对这种结构信息进行建模，我们根据每个节点对的空间关系分配一个可学习的嵌入。文献中的多种测量方法可以用于建模空间关系。一般来说，我们使用任意两个节点之间的最短路径距离作为演示，它将被编码为softmax attention中的偏差项，并帮助模型准确地捕捉图中的空间依赖性。此外，有时在边缘特征中包含额外的空间信息，例如分子图中两个原子之间的键的类型。我们设计了一种新的边缘编码方法，进一步将这种信号引入Transformer层。具体地说，对于每个节点对，我们沿最短路径的计算边缘特征的点积和可学习嵌入的平均值，然后将其用于attention module。有了这些编码，Graphormer可以更好地建模节点对的关系并表示图。

通过使用上面提出的编码，我们进一步从数学上表明，由于许多流行的GNN变体只是它的特殊情况，Graphormer具有很强的表达能力。该模型的巨大容量导致在实践中广泛的任务上的最先进的性能。在最近的Open Graph Benchmark大规模挑战(OGB-LSC)中的大规模量子化学回归数据3中，就相对误差而言，Graphormer的表现比大多数主流GNN变体高出10%以上。在其他流行的图表示学习排行榜上(如MolHIV, MolPCBA, ZINC)，Graphormer也超过了之前的最佳结果，展示了Transformer结构的潜力和适应性。






