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
使用矩阵的推导。  

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
    # 输出的维度假设为output_size
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
### 3.1 序列到类别模式  
![序列到类别模式](/DeepLearning/Formula/RNN/5.png)  
::: tip
主要用于序列数据的分类：输入数据为序列，输出为类别。   

输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出类别$y{\in}{\{}1,...,C{\}}$，将样本$x$，按不同时刻输入到循环神经网络中，得到不同时刻的隐藏状态$h_{1},...,h_{T}$，可以将$h_{T}$看作整个序列的最终表示，并输入给分类器$g(\cdot)$进行分类。  

如上图所示，除了使用最后时刻的状态作为整个序列的表示，也可以使用整个状态的所有状态进行平均，并使用这个平均状态作为整个序列的表示，即$\hat{y}=g(\frac{1}{T}\sum\limits_{t=1}^{T}h_{t})$  

:::

### 3.2 同步的序列到序列模式
![同步的序列到序列模式](/DeepLearning/Formula/RNN/6.png)  
::: tip
主要用于序列标注任务，即每一时刻都有输入和输出，输入序列和输出序列的长度相同。  

输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出为序列$y_{1:T}=(y_{1},...,y_{T})$。将样本$x$，按不同时刻输入到循环神经网络中，得到不同时刻的隐藏状态$h_{1},...,h_{T}$，每个时刻的隐状态$h_{t}$代表了当前时刻的和历史的信息，并输入给分类器$g(\cdot)$得到当前时刻的标签$\hat{y}$，即$\hat{y}_{t}=g(h_{t}), \forall{t}{\in}[1,T]$.

:::

### 3.3 异步的序列到序列模式
![异步的序列到序列模式](/DeepLearning/Formula/RNN/7.png)  

::: tip
**异步的序列到序列模式**也称为**编码器-解码器**模型。即输入序列和输出序列不需要严格的对应关系，也不需要保持相同的长度，例如机器翻译任务。   

输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出为长度为M的序列$y_{1:M}=(y_{1},...,y_{M})$。  

异步的序列到序列模式一般通过先编码后解码的方式来实现，先将样本$x$按不同时刻输入到一个循环神经网络(**编码器**)中，得到其编码$h_{T}$，然后再使用另一个循环神经网络(**解码器**)，得到输出序列$\hat{y}_{1:M}$。为了建立输出序列之间的依赖关系，再解码器中通常使用非线性的自回归模型。

令$f_{1}(\cdot)$和$f_{2}(\cdot)$分别为编码器和解码器的循环神经网络，则编码器-解码器模型可以写为:  
$$h_{t}=f_{1}(h_{t-1},x_{t}),{\forall}t{\in}[1,T]$$
$$h_{T+t}=f_{2}(h_{T+t-1},\hat{y}_{t-1}),{\forall}t{\in}[1,M]$$
$$\hat{y}_{t}=g(h_{T+t}),{\forall}t{\in}[1,M]$$  
其中$g(\cdot)$为分类器，$\hat{y}_{t}$为预测输出$\hat{y}_{t}$的向量表示。 
在解码器通常采用自回归模型，每个时刻的输入为上一时刻的预测结果$\hat{y}_{t-1}$。如上图所示，其中$<EOS>$表示输入序列的结束，虚线表示将上一时刻的输出作为下一时刻的输入。 


:::

## 四、反向传播




## 参考文献
[1] 邱锡鹏，神经网络与深度学习，机械工业出版社，https://nndl.github.io/, 2020.  
[2] [深度学习（三）：详解循环神经网络RNN，含公式推导](https://blog.csdn.net/weixin_40871455/article/details/89670970)  
[3] [动手学深度学习](https://zh.d2l.ai/)
















