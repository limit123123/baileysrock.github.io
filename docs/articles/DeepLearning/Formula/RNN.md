---
# 这是侧边栏索引
# 这是页面的图标
icon: page
# 这是文章的标题
title: RNN Formula
# 设置作者
author: Baileys
# 设置写作时间
date: 2022-05-25
# 一个页面可以有多个分类
category:
  - 深度学习
tag:
  - 深度学习
  - 公式推导
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在首页的文章板块中
star: false
# 你可以自定义页脚
footer: Baileys
---

## 一、RNN的几种基本的结构
### 1.1 结构一
![结构一](/DeepLearning/Formula/RNN/1.png)  

上述所示RNN的结构中，输入序列为$X=(x^{0},x^{1},...,x^{l-1})$。对于任意时刻$t$，$h^{t}$由$h^{t-1}$和$x^{t}$共同决定。且目标时刻$t$对应于目标输出$y^{t}$。这样的结构很适合时间序列类预测的任务，模型可以通过之前的信息$h^{t-1}$和当前的输入$x_{t}$来预测当前时刻的输出$\hat{y}^{t}$。该结构最大的问题是时刻$t$的损失$L^{t}$与所有之前的状态$h^{t-1}$,$h^{t-2}$,...,$h^{0}$都有关系。因此求$h^{t}$时，要先求$h^{t-1}$。在反向传播时，需要对每一个输入进行前向传播过程来计算网络的activation，而RNN的顺序计算，会导致难以并行化，导致训练较慢。  


### 1.2 结构二
![结构二](/DeepLearning/Formula/RNN/2.png)  

与结构一相比，这种结构取消了相邻时刻间状态$h$之间的连接，取而代之的是前一时刻的输出$o^{t-1}$与当前时刻状态$h^{t}$的连接，此时仍然是顺序计算，但$o$的维度通常小于$h$，因此训练参数可能减少。模型的缺点主要是$y^{t}$中的信息远少于$h^{t}$，因此模型对历史信息的学习能力不如结构一。  

这种网络可以采用teacher forcing的方法来训练，$h^{t}$的输入部分来自$o^{t-1}$，而$o^{t-1}$本身在训练过程中受$y^{t-1}$的约束($o^{t-1}$要尽可能逼近$y^{t-1}$)，因此可以直接使用$y^{t-1}$来代替$o^{t-1}$作为$h^{t}$的输入。  


### 1.3 结构三
![结构三](/DeepLearning/Formula/RNN/3.png)  

该结构的RNN仅在最后时刻$l$才会有输出$o^{l}$。

## 二、前向传播

### 2.1 理论推导
![结构三](/DeepLearning/Formula/RNN/4.png)  
定义完全连接的循环神经网络，输入为$x_{t}$，输出为$y_{t}$。  
$$h_{t}=f(Uh_{t-1}+Wx_{t}+b)$$
$$y_{t}=Vh_{t}$$  
::: tip
其中$h$为隐状态，$f(\cdot)$为非线性激活函数，通常使用Logisitic函数或Tanh函数，$U$、$W$、$b$和$V$为网络参数。  

$x_{t}{\in}{\mathcal{R}^{M}}$表示时刻t网络的输入，$h_{t}{\in}{\mathcal{R}^{D}}$表示隐藏层状态，$U{\in}{\mathcal{R}}^{D{\times}D}$表示状态-状态权重矩阵，$W{\in}{\mathcal{R}}^{D{\times}M}$表示状态-输入权重矩阵，$b{\in}{\mathcal{R}}^{D}$表示偏置向量。     

若将每个时刻的状态都看作前馈神经网络的一层，循环神经网络可以看作在时间维度上权值共享的神经网络。
:::
  

### 2.2 代码实现
使用矩阵的推导，网络框架更易理解。  

```python
def get_params(embedding_size, output_size, num_hiddens, device):
    """
    获取RNN的参数

    Args:
        embedding_size: 词嵌入的维度
        output_size: 输出的维度
        num_hiddens: 隐藏层大小
        device: 训练设备
    
    Returns:
        参数的元组
    """
    # 输入的维度假设为词嵌入的维度
    num_inputs = embedding_size
    # 输出的维度假设为3，假设当前任务为三分类的文本分类任务
    num_outputs = output_size
    # 使用正态分布初始化权重
    def normal(shape):
        return torch.randn(size=shape, device=device) * 0.1
    # 隐藏层的参数
    W = normal((num_inputs, num_hiddens))
    U = normal((num_hiddens, num_hiddens))
    b_h = torch.zeros(num_hiddens, device=device)
    # 输出层参数
    V = normal((num_hiddens, num_outputs))
    b_q = torch.zeros(num_outputs, device=device)
    # 附加梯度
    params = [W, U, b_h, V, b_q]
    for param in params:
        param.requires_grad_(True)
    return params
```

## 三、应用模式



## 四、反向传播




## 参考文献
[1] 邱锡鹏，神经网络与深度学习，机械工业出版社，https://nndl.github.io/, 2020.  
[2] [深度学习（三）：详解循环神经网络RNN，含公式推导](https://blog.csdn.net/weixin_40871455/article/details/89670970)  
[3] [动手学深度学习](https://zh.d2l.ai/)
















