<template><div><h2 id="一、rnn的几种基本的结构" tabindex="-1"><a class="header-anchor" href="#一、rnn的几种基本的结构" aria-hidden="true">#</a> 一、RNN的几种基本的结构</h2>
<h3 id="_1-1-结构一" tabindex="-1"><a class="header-anchor" href="#_1-1-结构一" aria-hidden="true">#</a> 1.1 结构一</h3>
<p><img src="/DeepLearning/Theories/RNN/1.png" alt="结构一"></p>
<p>上述所示RNN的结构中，输入序列为$X=(x^{0},x^{1},...,x^{l-1})$。对于任意时刻$t$，$h^{t}$由$h^{t-1}$和$x^{t}$共同决定。且目标时刻$t$对应于目标输出$y^{t}$。这样的结构很适合时间序列类预测的任务，模型可以通过之前的信息$h^{t-1}$和当前的输入$x_{t}$来预测当前时刻的输出$\hat{y}^{t}$。该结构最大的问题是时刻$t$的损失$L^{t}$与所有之前的状态$h^{t-1}$,$h^{t-2}$,...,$h^{0}$都有关系。因此求$h^{t}$时，要先求$h^{t-1}$。在反向传播时，需要对每一个输入进行前向传播过程来计算网络的activation，而RNN的顺序计算，会导致难以并行化，导致训练较慢。</p>
<h3 id="_1-2-结构二" tabindex="-1"><a class="header-anchor" href="#_1-2-结构二" aria-hidden="true">#</a> 1.2 结构二</h3>
<p><img src="/DeepLearning/Theories/RNN/2.png" alt="结构二"></p>
<p>与结构一相比，这种结构取消了相邻时刻间状态$h$之间的连接，取而代之的是前一时刻的输出$o^{t-1}$与当前时刻状态$h^{t}$的连接，此时仍然是顺序计算，但$o$的维度通常小于$h$，因此训练参数可能减少。模型的缺点主要是$y^{t}$中的信息远少于$h^{t}$，因此模型对历史信息的学习能力不如结构一。</p>
<p>这种网络可以采用teacher forcing的方法来训练，$h^{t}$的输入部分来自$o^{t-1}$，而$o^{t-1}$本身在训练过程中受$y^{t-1}$的约束($o^{t-1}$要尽可能逼近$y^{t-1}$)，因此可以直接使用$y^{t-1}$来代替$o^{t-1}$作为$h^{t}$的输入。</p>
<h3 id="_1-3-结构三" tabindex="-1"><a class="header-anchor" href="#_1-3-结构三" aria-hidden="true">#</a> 1.3 结构三</h3>
<p><img src="/DeepLearning/Theories/RNN/3.png" alt="结构三"></p>
<p>该结构的RNN仅在最后时刻$l$才会有输出$o^{l}$。</p>
<h2 id="二、前向传播" tabindex="-1"><a class="header-anchor" href="#二、前向传播" aria-hidden="true">#</a> 二、前向传播</h2>
<h3 id="_2-1-理论推导" tabindex="-1"><a class="header-anchor" href="#_2-1-理论推导" aria-hidden="true">#</a> 2.1 理论推导</h3>
<p><img src="/DeepLearning/Theories/RNN/4.png" alt="结构三"><br>
定义完全连接的循环神经网络，输入为$x_{t}$，输出为$y_{t}$。<br>
$$h_{t}=f(Uh_{t-1}+Wx_{t}+b)$$
$$y_{t}=Vh_{t}$$</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>其中$h$为隐状态，$f(\cdot)$为非线性激活函数，通常使用Logisitic函数或Tanh函数，$U$、$W$、$b$和$V$为网络参数。</p>
<p>$x_{t}{\in}{\mathcal{R}^{M}}$表示时刻t网络的输入，$h_{t}{\in}{\mathcal{R}^{D}}$表示隐藏层状态，$U{\in}{\mathcal{R}}^{D{\times}D}$表示状态-状态权重矩阵，$W{\in}{\mathcal{R}}^{D{\times}M}$表示状态-输入权重矩阵，$b{\in}{\mathcal{R}}^{D}$表示偏置向量。</p>
<p>若将每个时刻的状态都看作前馈神经网络的一层，循环神经网络可以看作在时间维度上权值共享的神经网络。</p>
</div>
<h3 id="_2-2-代码实现" tabindex="-1"><a class="header-anchor" href="#_2-2-代码实现" aria-hidden="true">#</a> 2.2 代码实现</h3>
<p>使用矩阵的推导。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_params</span><span class="token punctuation">(</span>embedding_size<span class="token punctuation">,</span> output_size<span class="token punctuation">,</span> num_hiddens<span class="token punctuation">,</span> device<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    获取RNN的参数

    Args:
        embedding_size: 词嵌入的维度
        output_size: 输出的维度
        num_hiddens: 隐藏层大小
        device: 训练设备
    
    Returns:
        参数的元组
    """</span>
    <span class="token comment"># 输入的维度假设为词嵌入的维度</span>
    num_inputs <span class="token operator">=</span> embedding_size
    <span class="token comment"># 输出的维度假设为output_size</span>
    num_outputs <span class="token operator">=</span> output_size
    <span class="token comment"># 使用正态分布初始化权重</span>
    <span class="token keyword">def</span> <span class="token function">normal</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>size<span class="token operator">=</span>shape<span class="token punctuation">,</span> device<span class="token operator">=</span>device<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.1</span>
    <span class="token comment"># 隐藏层的参数</span>
    W <span class="token operator">=</span> normal<span class="token punctuation">(</span><span class="token punctuation">(</span>num_inputs<span class="token punctuation">,</span> num_hiddens<span class="token punctuation">)</span><span class="token punctuation">)</span>
    U <span class="token operator">=</span> normal<span class="token punctuation">(</span><span class="token punctuation">(</span>num_hiddens<span class="token punctuation">,</span> num_hiddens<span class="token punctuation">)</span><span class="token punctuation">)</span>
    b_h <span class="token operator">=</span> torch<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>num_hiddens<span class="token punctuation">,</span> device<span class="token operator">=</span>device<span class="token punctuation">)</span>
    <span class="token comment"># 输出层参数</span>
    V <span class="token operator">=</span> normal<span class="token punctuation">(</span><span class="token punctuation">(</span>num_hiddens<span class="token punctuation">,</span> num_outputs<span class="token punctuation">)</span><span class="token punctuation">)</span>
    b_q <span class="token operator">=</span> torch<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>num_outputs<span class="token punctuation">,</span> device<span class="token operator">=</span>device<span class="token punctuation">)</span>
    <span class="token comment"># 附加梯度</span>
    params <span class="token operator">=</span> <span class="token punctuation">[</span>W<span class="token punctuation">,</span> U<span class="token punctuation">,</span> b_h<span class="token punctuation">,</span> V<span class="token punctuation">,</span> b_q<span class="token punctuation">]</span>
    <span class="token keyword">for</span> param <span class="token keyword">in</span> params<span class="token punctuation">:</span>
        param<span class="token punctuation">.</span>requires_grad_<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> params
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、应用模式" tabindex="-1"><a class="header-anchor" href="#三、应用模式" aria-hidden="true">#</a> 三、应用模式</h2>
<h3 id="_3-1-序列到类别模式" tabindex="-1"><a class="header-anchor" href="#_3-1-序列到类别模式" aria-hidden="true">#</a> 3.1 序列到类别模式</h3>
<p><img src="/DeepLearning/Theories/RNN/5.png" alt="序列到类别模式"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>主要用于序列数据的分类：输入数据为序列，输出为类别。</p>
<p>输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出类别$y{\in}{{}1,...,C{}}$，将样本$x$，按不同时刻输入到循环神经网络中，得到不同时刻的隐藏状态$h_{1},...,h_{T}$，可以将$h_{T}$看作整个序列的最终表示，并输入给分类器$g(\cdot)$进行分类。</p>
<p>如上图所示，除了使用最后时刻的状态作为整个序列的表示，也可以使用整个状态的所有状态进行平均，并使用这个平均状态作为整个序列的表示，即$\hat{y}=g(\frac{1}{T}\sum\limits_{t=1}^{T}h_{t})$</p>
</div>
<h3 id="_3-2-同步的序列到序列模式" tabindex="-1"><a class="header-anchor" href="#_3-2-同步的序列到序列模式" aria-hidden="true">#</a> 3.2 同步的序列到序列模式</h3>
<p><img src="/DeepLearning/Theories/RNN/6.png" alt="同步的序列到序列模式"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>主要用于序列标注任务，即每一时刻都有输入和输出，输入序列和输出序列的长度相同。</p>
<p>输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出为序列$y_{1:T}=(y_{1},...,y_{T})$。将样本$x$，按不同时刻输入到循环神经网络中，得到不同时刻的隐藏状态$h_{1},...,h_{T}$，每个时刻的隐状态$h_{t}$代表了当前时刻的和历史的信息，并输入给分类器$g(\cdot)$得到当前时刻的标签$\hat{y}$，即$\hat{y}<em>{t}=g(h</em>{t}), \forall{t}{\in}[1,T]$.</p>
</div>
<h3 id="_3-3-异步的序列到序列模式" tabindex="-1"><a class="header-anchor" href="#_3-3-异步的序列到序列模式" aria-hidden="true">#</a> 3.3 异步的序列到序列模式</h3>
<p><img src="/DeepLearning/Theories/RNN/7.png" alt="异步的序列到序列模式"></p>
<p>令$f_{1}(\cdot)$和$f_{2}(\cdot)$分别为编码器和解码器的循环神经网络，则编码器-解码器模型可以写为:<br>
$$h_{t}=f_{1}(h_{t-1},x_{t}),{\forall}t{\in}[1,T]$$
$$h_{T+t}=f_{2}(h_{T+t-1},\hat{y}<em>{t-1}),{\forall}t{\in}[1,M]$$
$$\hat{y}</em>{t}=g(h_{T+t}),{\forall}t{\in}[1,M]$$<br>
其中$g(\cdot)$为分类器，$\hat{y}<em>{t}$为预测输出$\hat{y}</em>{t}$的向量表示。
在解码器通常采用自回归模型，每个时刻的输入为上一时刻的预测结果$\hat{y}_{t-1}$。如上图所示，其中$<EOS>$表示输入序列的结束，虚线表示将上一时刻的输出作为下一时刻的输入。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><strong>异步的序列到序列模式</strong>也称为<strong>编码器-解码器</strong>模型。即输入序列和输出序列不需要严格的对应关系，也不需要保持相同的长度，例如机器翻译任务。</p>
<p>输入的样本$x_{1:T}=(x_{1},...,x_{T})$为一个长度为T的序列，输出为长度为M的序列$y_{1:M}=(y_{1},...,y_{M})$。</p>
<p>异步的序列到序列模式一般通过先编码后解码的方式来实现，先将样本$x$按不同时刻输入到一个循环神经网络(<strong>编码器</strong>)中，得到其编码$h_{T}$，然后再使用另一个循环神经网络(<strong>解码器</strong>)，得到输出序列$\hat{y}_{1:M}$。为了建立输出序列之间的依赖关系，再解码器中通常使用非线性的自回归模型。</p>
</div>
<h2 id="四、参数学习" tabindex="-1"><a class="header-anchor" href="#四、参数学习" aria-hidden="true">#</a> 四、参数学习</h2>
<p>循环神经网络的参数可以通过梯度下降的方法来进行学习。</p>
<p>以随机梯度下降为例，给定一个训练样本$(x,y)$，其中$x_{1:T}=(x_{1},...,x_{T})$为长度是$T$的输入序列，$y_{1:T}=(y_{1},...,y_{T})$是长度为$T$的标签序列，每个时刻$t$都有一个监督信息$y_{t}$，我们定义时刻$t$的损失函数为
$$\mathcal{L}<em>{t}={\mathcal{L}}(y</em>{t},g(h_{t}))$$
其中$g(h_{t})$为第$t$时刻的输出，$\mathcal{L}$为可微分的损失函数，如交叉熵等，整个序列的损失函数为
$$\mathcal{L}=\sum_{t=1}^{T}{\mathcal{L}}<em>{t}$$
则整个序列的损失函数$\mathcal{L}$关于参数$U$的梯度为
$$\frac{\partial{\mathcal{L}}}{\partial{U}}={\sum</em>{t=1}^{T}{\frac{\partial{\mathcal{L}<em>{t}}}{\partial{U}}}}$$
即每个时刻损失$\mathcal{L}</em>{t}$对参数$U$的偏导数之和。</p>
<p>BPTT和RTRL比较:在循环神经网络中，一般网络输出维度要远低于输入维度，因此BPTT算法的计算量会小，但是BPTT算法需要保存中间所有时刻的中间梯度，空间复杂度高。RTRL算法不需要梯度回传，因此非常适用于需要在线学习或无限序列的任务中。</p>
<h3 id="_4-1-随时间反向传播算法-bptt" tabindex="-1"><a class="header-anchor" href="#_4-1-随时间反向传播算法-bptt" aria-hidden="true">#</a> 4.1 随时间反向传播算法 BPTT</h3>
<p><strong>算法主要思想</strong>:通过类似前馈神经网络的误差反向传播算法来计算梯度。</p>
<p>BPTT算法将循环神经网络看作一个展开的多层前馈网络，其中“每一层”对应循环网络中的“每个时刻”。这样，循环神经网络可以按照前馈神经网络中的反向传播算法计算参数梯度。在“展开”的前馈神经网络中，所有层的参数是共享的，因此参数的真实梯度是所有“展开层”的参数梯度之和。</p>
<p><strong>计算偏导数$\frac{\partial{\mathcal{L}_{t}}}{U}$</strong>:首先计算第$t$时刻损失对参数$U$的偏导数。<br>
因为参数$U$和隐藏层在每个时刻$k(1{\leq}k{\leq}t)$的净输入$z_{k}=Uh_{k-1}+Wx_{k}+b$有关(根据前向传播计算公式)，因此$t$时刻的损失函数$\mathcal{L}<em>{t}$关于参数$u</em>{ij}$的梯度为(链式法则):
$${\frac{\partial{L_{t}}}{u_{ij}}}=\sum_{k=1}^{t}{\frac{\partial{^{+}z_{k}}}{\partial{u_{ij}}}\frac{\partial{L_{t}}}{\partial{z_{k}}}}$$
其中$\frac{\partial{^{+}z_{k}}}{\partial{u_{ij}}}$为直接偏导数，即$z_{k}=Uh_{k-1}+Wx_{k}+b$中$h_{k-1}$保持不变，对$u_{ij}$求偏导数，得到
$$\frac{\partial{^{+}z_{k}}}{\partial{u_{ij}}}=[0,...,[h_{k-1}]<em>{j},...,0]$$
其中$[h</em>{k-1}]<em>{j}$为第$k-1$时刻隐状态的第$j$维。<br>
定义误差项${\delta</em>{t,k}}=\frac{\partial{L_{t}}}{\partial{z_{k}}}$为第$t$时刻的损失对第$k$时刻隐藏层神经层的净输入$z_{k}$的导数，则当$1{\leq}k&lt;t$时
$${\delta_{t,k}}=\frac{\partial{\mathcal{L}<em>{t}}}{\partial{z</em>{k}}}=\frac{\partial{h_{k}}}{\partial{z_{k}}}\frac{\partial{z_{k+1}}}{\partial{h_{k}}}\frac{\partial{L_{t}}}{\partial{z_{k+1}}}$$
因此有<br>
$${\delta_{t,k}}=diag(f^{'}(z_{k}))U^{T}{\delta_{t,k+1}}$$
将${\delta_{t,k}}$、$\frac{\partial{^{+}z_{k}}}{\partial{u_{ij}}}$代入到${\frac{\partial{L_{t}}}{u_{ij}}}$中得到
$${\frac{\partial{L_{t}}}{u_{ij}}}=\sum_{k=1}^{t}[\delta_{t,k}]<em>{i}[h</em>{k-1}]<em>{j}$$
写成矩阵形式有<br>
$$\frac{\partial{\mathcal{L</em>{t}}}}{U}=\sum_{k=1}^{t}{\delta_{t,k}}h_{k-1}^{T}$$
代入到$\frac{\partial{\mathcal{L}}}{\partial{U}}$，得到整个序列的损失函数$\mathcal{L}$关于参数$U$的梯度<br>
$$\frac{\partial{\mathcal{L}}}{\partial{U}}=\sum_{t=1}^{T}\sum_{k=1}^{t}\delta_{t,k}h_{k-1}^{T}$$
同理可得$\mathcal{L}$关于权重$W$和偏置$b$的梯度为<br>
$$\frac{\partial{\mathcal{L}}}{\partial{W}}=\sum_{t=1}^{T}\sum_{k=1}^{t}\delta_{t,k}x_{k}^{T}$$
$$\frac{\partial{\mathcal{L}}}{\partial{b}}=\sum_{t=1}^{T}\sum_{k=1}^{t}\delta_{t,k}$$
$$$$
误差随时间进行反向传播算法的示例:<br>
<img src="/DeepLearning/Theories/RNN/8.png" alt="BPTT"><br>
由上述推导过程可知，在BPTT算法中，参数的梯度需要在一个完整的“前向”计算和“反向”计算后才能得到并进行参数更新。</p>
<h3 id="_4-2-实时循环学习算法-rtrl" tabindex="-1"><a class="header-anchor" href="#_4-2-实时循环学习算法-rtrl" aria-hidden="true">#</a> 4.2 实时循环学习算法 RTRL</h3>
<p>实时循环学习通过前向传播的方式来计算梯度。<br>
假设循环神经网络中第$t$时刻的状态为$h_{t+1}$为<br>
$$h_{t+1}=f(z_{t+1})=f(Uh_{t}+Wx_{t+1}+b)$$
其中关于参数$u_{ij}$的偏导数为<br>
$$\frac{\partial{h_{t+1}}}{\partial{u_{ij}}}=(\frac{\partial{^{+}z_{t+1}}}{\partial{u_{ij}}}+\frac{\partial{h_{t}}}{\partial{u_{ij}}}U^{T})\frac{\partial{h_{t+1}}}{\partial{z_{t+1}}}$$
$$\frac{\partial{h_{t+1}}}{\partial{u_{ij}}}=(\frac{\partial{^{+}z_{t+1}}}{\partial{u_{ij}}}+\frac{\partial{h_{t}}}{\partial{u_{ij}}}U^{T})diag(f'(z_{t+1}))$$
RTRL算法从第1个时刻开始，除了计算循环神经网络的隐状态之外，还依次前向计算偏导数$\frac{\partial{h_{1}}}{\partial{u_{ij}}}$,$\frac{\partial{h_{2}}}{\partial{u_{ij}}}$,$\frac{\partial{h_{3}}}{\partial{u_{ij}}}$,...<br>
假设在第$t$时刻存在一个监督信息，其损失函数为$\mathcal{L}<em>{t}$，可以同时计算损失函数对$u</em>{ij}$的偏导数<br>
$$\frac{\partial{\mathcal{L}<em>{t}}}{\partial{u</em>{ij}}}=\frac{\partial{h_{t}}}{\partial{u_{ij}}}\frac{\partial{\mathcal{L}<em>{t}}}{\partial{h</em>{t}}}$$
这样可以在$t$时刻，实时计算损失$\mathcal{L}_{t}$关于参数$U$的梯度，并更新参数。参数$W$和$b$同样按上述方法实时计算。</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>
<p>[1] 邱锡鹏，神经网络与深度学习，机械工业出版社，https://nndl.github.io/, 2020.<br>
[2] <a href="https://blog.csdn.net/weixin_40871455/article/details/89670970" target="_blank" rel="noopener noreferrer">深度学习（三）：详解循环神经网络RNN，含公式推导<ExternalLinkIcon/></a><br>
[3] <a href="https://zh.d2l.ai/" target="_blank" rel="noopener noreferrer">动手学深度学习<ExternalLinkIcon/></a>
[4] <a href="https://zybuluo.com/hanbingtao/note/541458" target="_blank" rel="noopener noreferrer">零基础入门深度学习(5) - 循环神经网络<ExternalLinkIcon/></a></p>
</div></template>
