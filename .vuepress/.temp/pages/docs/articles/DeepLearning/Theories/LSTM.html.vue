<template><div><h2 id="长短期记忆网络" tabindex="-1"><a class="header-anchor" href="#长短期记忆网络" aria-hidden="true">#</a> 长短期记忆网络</h2>
<p>长短期记忆网络是循环神经网络的一个变体，可以有效的解决简单循环神经网络的梯度爆炸或消失问题。<br>
LSTM的改进主要在以下两个方面。</p>
<h3 id="新的内部状态" tabindex="-1"><a class="header-anchor" href="#新的内部状态" aria-hidden="true">#</a> 新的内部状态</h3>
<p>LSTM网络引入一个新的内部状态$c_{t}{\in}\mathcal{R}^{D}$，新的内部状态专门进行线性的循环信息传递，同时(非线性地)输出信息给隐藏层地外部状态$h_{t}{\in}\mathcal{R}^D$，内部状态$c_{t}$通过下面公式计算:
$$c_{t}=f_{t}{\odot}c_{t-1}+i_{t}{\odot}\widetilde{c}<em>{t}$$
$$h</em>{t}=o_{t}{\odot}tanh(c_{t})$$
其中${f_{(t)}}{\in}{[0,1]}^{D}$、$i_{t}{\in}{[0,1]}^D$、$o_{t}{\in}{[0,1]}^D$为三个门来控制信息传递的路径;$\odot$为向量元素乘积;$c_{t-1}$为上一时刻的记忆单元;$\widetilde{c}<em>{t}{\in}\mathcal{R}^{D}$是通过非线性函数得到的候选状态:<br>
$$\widetilde{c}</em>{t}=tanh(W_{c}x_{t}+U_{c}h_{t-1}+b_{c})$$
在每个时刻$t$，LSTM网络的内部状态$c_{t}$记录了到当前时刻为止的历史信息。</p>
<h3 id="门控状态" tabindex="-1"><a class="header-anchor" href="#门控状态" aria-hidden="true">#</a> 门控状态</h3>
<p>LSTM网络引入门控机制来控制信息传递的路径。三个门分别为输入门$i_{t}$、遗忘门$f_{t}$和输出门$o_{t}$。这三个门的作用为</p>
<ul>
<li>
<p><strong>遗忘门$f_{t}$</strong> 控制上一个时刻的内部状态$c_{t-1}$需要遗忘多少信息。</p>
</li>
<li>
<p><strong>输入门$i_{t}$</strong> 控制当前时刻的候选状态$\widetilde{c}_{t}$有多少信息需要保存。</p>
</li>
<li>
<p><strong>输出门$o_{t}$</strong> 控制当前时刻的内部状态$c_{t}$有多少信息需要输出给外部状态$h_{t}$。</p>
</li>
</ul>
<p>当$f_{t}=0,i_{t}=1$时，记忆单元将历史信息清空，并将候选状态向量$\widetilde{c}<em>{t}$写入。但此时记忆单元$c</em>{t}$依然和上一时刻的历史信息相关。<br>
当$f_{t}=1,i_{t}=0$时，记忆单元将复制上一时刻的内容，不写入新的信息。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>LSTM网络中的“门”是一种“软”门，取值在(0, 1)之间，表示以一定的比例允许信息通过．三个门的计算方式为:
$$i_{t}=\sigma(W_{i}x_{t}+U_{i}h_{t-1}+b_{i})$$
$$f_{t}=\sigma(W_{f}x_{t}+U_{f}h_{t-1}+b_{f})$$
$$o_{t}=\sigma(W_{o}x_{t}+U_{o}h_{t-1}+b_{o})$$
其中$\sigma(\cdot)$为Logistic函数，其输出区间为(0,1)，$x_{t}$为当前时刻的输入，$h_{t-1}$为上一时刻的外部状态。</p>
</div>
<h2 id="网络结构" tabindex="-1"><a class="header-anchor" href="#网络结构" aria-hidden="true">#</a> 网络结构</h2>
<p>LSTM网络的循环单元结构如下图所示，其计算过程为:</p>
<ul>
<li>1.首先利用上一时刻的外部状态$h_{t-1}$和当前时刻的输入$x_{t}$，计算出三个门，以及候选状态$\widetilde{c}_{t}$</li>
<li>2.结合遗忘门$f_{t}$和输入门$i_{t}$来更新记忆单元$c_{t}$</li>
<li>3.结合输出门$o_{t}$，将内部状态的信息传递给外部状态$h_{t}$</li>
</ul>
<p><img src="/DeepLearning/Theories/LSTM/1.png" alt="结构一"></p>
<p>通过上述LSTM循环单元，整个网络可以建立较长举例的时序依赖关系，之前的公式可以简单描述为</p>
<p>$$
\begin{bmatrix} \widetilde{c}<em>{t} \ o</em>{t} \ i_{t} \ f_{t} \end{bmatrix} = \begin{bmatrix} tanh \ \sigma \ \sigma \ \sigma \end{bmatrix} \begin{pmatrix} W \begin{bmatrix} x_{t} \ h_{t-1} \end{bmatrix} + b \end{pmatrix}
$$</p>
<p>$$c_{t}=f_{t}{\odot}c_{t-1}+i_{t}{\odot}{\widetilde{c}_{t}}$$</p>
<p>$$h_{t}=o_{t}{\odot}tanh(c_{t})$$
其中$x_{t}{\in}\mathcal{R}^{M}$为当前时刻的输入，$W{\in}\mathcal{R}^{4D{\times}(M+D)}$和$b{\in}{\mathcal{R}^{4D}}$为网络参数。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>循环神经网络中的隐状态$h$存储了历史信息，可以看作一种记忆(Memory)。在简单循环网络中，隐状态每个时刻都会被重写，因此可以看作一种短
期记忆(Short-Term Memory)在神经网络中，长期记忆(Long-Term Memory)可以看作网络参数，隐含了从训练数据中学到的经验，其更新周期要远远
慢于短期记忆．而在LSTM网络中，记忆单元$c$可以在某个时刻捕捉到某个关键信息，并有能力将此关键信息保存一定的时间间隔．记忆单元$c$中保存信息的生命周期要长于短期记忆$h$，但又远远短于长期记忆，长短期记忆是指长的“短期记忆”．因此称为长短期记忆（LongShort-Term Memory）．</p>
<p>一般在深度网络参数学习时，参数初始化的值一般都比较小。但是在训练 LSTM 网络时，过小的值会使得遗忘门的值比较小。这意味着前一时刻的信息大部分都丢失了，这样网络很难捕捉到长距离的依赖信息。并且相邻时间间隔的梯度会非常小，这会导致梯度弥散问题。因此遗忘的参数初始值一般都设得比较大，其偏置向量$b_{f}$设为1或2。</p>
</div>
<h2 id="相关变体" tabindex="-1"><a class="header-anchor" href="#相关变体" aria-hidden="true">#</a> 相关变体</h2>
<p>目前主流的 LSTM 网络用三个门来动态地控制内部状态应该遗忘多少历史信息，输入多少新信息，以及输出多少信息。我们可以对门控机制进行改进并获
得LSTM网络的不同变体。</p>
<h3 id="无遗忘门的lstm网络" tabindex="-1"><a class="header-anchor" href="#无遗忘门的lstm网络" aria-hidden="true">#</a> 无遗忘门的LSTM网络</h3>
<p>最早提出的 LSTM 网络是没有遗忘门的，其内部状态的更新为
$$c_{t}=c_{t-1}+i_{t}{\odot}{\widetilde{c}_{t}}$$
记忆单元$c$会不断增大．当输入序列的长度非常大时，记忆单元的容量会饱和，从而大大降低LSTM模型的性能。</p>
<h3 id="peephole连接" tabindex="-1"><a class="header-anchor" href="#peephole连接" aria-hidden="true">#</a> peephole连接</h3>
<p>另外一种变体是三个门不但依赖于输入$x_{t}$和上一时刻的隐状态$h_{t-1}$，也依赖于上一个时刻的记忆单元$c_{t-1}$，即<br>
$$i_{t}=\sigma(W_{i}x_{t}+U_{i}h_{t-1}+V_{i}c_{t-1}+b_{i})$$
$$f_{t}=\sigma(W_{f}x_{t}+U_{f}h_{t-1}+V_{f}c_{t-1}+b_{i})$$
$$o_{t}=\sigma(W_{o}x_{t}+U_{o}h_{t-1}+V_{o}c_{t}+b_{o})$$
其中$V_{i}$、$V_{f}$和$V_{o}$为对角矩阵。</p>
<h3 id="耦合输入门和遗忘门" tabindex="-1"><a class="header-anchor" href="#耦合输入门和遗忘门" aria-hidden="true">#</a> 耦合输入门和遗忘门</h3>
<p>LSTM网络中的输入门和遗忘门有些互补关系，因此同时用两个门比较冗余。为了减少LSTM网络的计算复杂度，将这两门合并为一个门。令$f_{t}=1-i_{t}$，内部状态的更新方式为
$$c_{t}=(1-i_{t})\odot c_{t-1}+i_{t}{\odot}{\widetilde{c}_{t}}$$</p>
<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2>
<h3 id="矩阵实现" tabindex="-1"><a class="header-anchor" href="#矩阵实现" aria-hidden="true">#</a> 矩阵实现</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用nn-linear实现" tabindex="-1"><a class="header-anchor" href="#使用nn-linear实现" aria-hidden="true">#</a> 使用nn.Linear实现</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
