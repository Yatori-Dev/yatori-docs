<template><div><h1 id="yatori-go-console" tabindex="-1"><a class="header-anchor" href="#yatori-go-console"><span>Yatori-go-console</span></a></h1>
<p>Hello，欢迎来到yatori系列yatori-go-console，此项目采用GO语言开发，基于yatori-go-core核心</p>
<h2 id="🎯-目前支持平台" tabindex="-1"><a class="header-anchor" href="#🎯-目前支持平台"><span>🎯 目前支持平台：</span></a></h2>
<table>
<thead>
<tr>
<th>平台</th>
<th>描述</th>
<th>状态</th>
</tr>
</thead>
<tbody>
<tr>
<td>英华学堂</td>
<td>支持暴力模式（会被检测到）</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>仓辉实训</td>
<td>支持暴力模式（套壳英华版本会被检测到）</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>创能实训</td>
<td>支持暴力模式（会被检测到）</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>社会公益课</td>
<td>支持暴力模式（会被检测到）</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>重庆工业学院CQIE</td>
<td>支持暴力模式（支持秒刷）</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>学习公社</td>
<td>无</td>
<td>已完成 ✅</td>
</tr>
<tr>
<td>学习通</td>
<td>无</td>
<td>开发中 🚧</td>
</tr>
<tr>
<td>智慧树</td>
<td>无</td>
<td>开发中 🚧</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>其中<code v-pre>已完成 ✅</code>指标已最基础的支持视屏学习为基准，<code v-pre>开发中 🚧</code>代表正在开发中...</p>
</div>
<h2 id="🚀-下载和使用方式-给小白看的" tabindex="-1"><a class="header-anchor" href="#🚀-下载和使用方式-给小白看的"><span>🚀 下载和使用方式（给小白看的）</span></a></h2>
<h3 id="第一步从官网下载最新版本压缩包" tabindex="-1"><a class="header-anchor" href="#第一步从官网下载最新版本压缩包"><span>第一步从官网下载最新版本压缩包</span></a></h3>
<h4 id="_1、home跳转主页-并点击获取可跳转至github-部分地区可能要梯子" tabindex="-1"><a class="header-anchor" href="#_1、home跳转主页-并点击获取可跳转至github-部分地区可能要梯子"><span>1、Home跳转主页，并点击获取可跳转至github（部分地区可能要梯子）</span></a></h4>
<p><img src="@source/yatori-go-console/assets/img/download_1.png" alt=""></p>
<h4 id="_2、获取最新版本文件" tabindex="-1"><a class="header-anchor" href="#_2、获取最新版本文件"><span>2、获取最新版本文件</span></a></h4>
<p><img src="@source/yatori-go-console/assets/img/download_2.png" alt=""></p>
<h4 id="_3、下载对应平台压缩包" tabindex="-1"><a class="header-anchor" href="#_3、下载对应平台压缩包"><span>3、下载对应平台压缩包</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>注意：这里框了两个，带linux字眼的是linux系统用的，带windows字眼是windows系统用的，别搞错了</p>
</div>
<p><img src="@source/yatori-go-console/assets/img/download_3.png" alt=""></p>
<h3 id="第二步解压下载好的最新版本" tabindex="-1"><a class="header-anchor" href="#第二步解压下载好的最新版本"><span>第二步解压下载好的最新版本</span></a></h3>
<p><img src="@source/yatori-go-console/assets/img/download_4.png" alt="">
<img src="@source/yatori-go-console/assets/img/download_5.png" alt="">
<img src="@source/yatori-go-console/assets/img/download_6.png" alt=""></p>
<h3 id="第三步编辑配置文件" tabindex="-1"><a class="header-anchor" href="#第三步编辑配置文件"><span>第三步编辑配置文件</span></a></h3>
<p>1、这里是推荐使用vscode等其他编程软件编辑，当然也可以用文本编辑器。没有文本编辑器的也可以用<a href="https://vscode.dev" target="_blank" rel="noopener noreferrer">网页版在线vscode</a>
<img src="@source/yatori-go-console/assets/img/download_7.png" alt="">
2、将最主要的平台类型以及url链接和账号密码填写好之后保存（其他配置自行参考<a href="#%F0%9F%9A%80-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%A1%AB%E5%86%99%E8%AF%B4%E6%98%8E">配置文件填写说明</a>）
<img src="@source/yatori-go-console/assets/img/download_8.png" alt=""></p>
<h3 id="第四步启动yatori" tabindex="-1"><a class="header-anchor" href="#第四步启动yatori"><span>第四步启动yatori</span></a></h3>
<p><img src="@source/yatori-go-console/assets/img/download_9.png" alt=""></p>
<p>如果出现以下大概内容说明成功启动了，之后你只需要挂着就行
<img src="@source/yatori-go-console/assets/img/download_10.png" alt=""></p>
<h2 id="🚀-配置文件填写说明" tabindex="-1"><a class="header-anchor" href="#🚀-配置文件填写说明"><span>🚀 配置文件填写说明</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>注意，配置文件为config.yaml文件，此文件必须要与yatori-go-console在相同目录下才可让程序正常读取到</p>
</div>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">setting:</span>
<span class="line">  basicSetting:</span>
<span class="line">    completionTone: 1 #是否开启完成提示音，0为关闭，1为开启</span>
<span class="line">    colorLog: 1 #是否开启彩色日志，0为关闭，1为开启，如果控制台乱码可以尝试改为0关闭</span>
<span class="line">    logOutFileSw: 1 #是否开启日志文件输出，0为关闭，1为开启</span>
<span class="line">    logLevel: "INFO" #日志类型，一般INFO即可</span>
<span class="line">    logModel: 0 #日志输出模式，0为以视屏提交学时为单位进行日志输出，1为以课程信息为单位进行输出</span>
<span class="line">    ipProxySw: 0 #是否开启IP代理，0代表关闭，1代表开启，开启后一定要子当前启动目录下创建ip.txt这个ip池文件，里面填写对应的代理IP即可，一行一个。注意，代理的IP一定要支持Https</span>
<span class="line">  aiSetting:</span>
<span class="line">    aiType: "TONGYI" #智普：CHATGLM、星火：XINGHUO、通义千问：TONGYI、豆包：DOUBAO、其他模型：OTHER</span>
<span class="line">    aiUrl: "" #默认不填，除非你用的不是上面所指明的AI模型，比如ChatGPT</span>
<span class="line">    model: "" #AI模型，不填则使用yatori默认选择的模型，如果你用的豆包则必填并且填的是接入点ID非模型名称，比如ep-2024xxxxx</span>
<span class="line">    API_KEY: "" #AI平台对应的apikey</span>
<span class="line">users:</span>
<span class="line">  <span class="token list punctuation">-</span> accountType: "YINGHUA" #平台类型，英华学堂：YINGHUA、仓辉：CANGHUI、学习公社：ENAEA</span>
<span class="line">    url: "url" #对应平台的url链接,学习公社可以不用填且可以直接把这一行去掉</span>
<span class="line">    account: "账号" #账号</span>
<span class="line">    password: "密码" #密码</span>
<span class="line">    coursesCustom:</span>
<span class="line">      videoModel: 1 #刷视屏模式，0代表不刷，1代表普通模式，2代表暴力模式</span>
<span class="line">      autoExam: 0 #是否自动考试，0代表不考试，1代表考试</span>
<span class="line">      includeCourses: []  #include和exclude填一个即可，include代表只有这里面的课程才刷，填课程名称，比如["xxxx","xxxx"]，学习公社填必修课程或者选修课程等</span>
<span class="line">      excludeCourses: []  #include和exclude填一个即可，exclude代表除了这里面的课程其他都刷，填课程名称，比如["xxxx","xxxx"]，学习公社填必修课程或者选修课程等</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-添加多个账号模板例子" tabindex="-1"><a class="header-anchor" href="#🚀-添加多个账号模板例子"><span>🚀 添加多个账号模板例子</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">setting:</span>
<span class="line">  basicSetting:</span>
<span class="line">    completionTone: 1</span>
<span class="line">    colorLog: 1</span>
<span class="line">    logOutFileSw: 1</span>
<span class="line">    logLevel: "INFO"</span>
<span class="line">    logModel: 0</span>
<span class="line">    ipProxySw: 0</span>
<span class="line">  aiSetting:</span>
<span class="line">    aiType: "TONGYI"</span>
<span class="line">    aiUrl: ""</span>
<span class="line">    model: ""</span>
<span class="line">    API_KEY: ""</span>
<span class="line">users:</span>
<span class="line">  <span class="token list punctuation">-</span> accountType: "YINGHUA" # 英华学堂 or 套壳仓辉</span>
<span class="line">    url: "https://mooc.xxx.com"</span>
<span class="line">    account: "123456"</span>
<span class="line">    password: "114514"</span>
<span class="line">    coursesCustom:</span>
<span class="line">      videoModel: 1 # 开启视屏学习</span>
<span class="line">      autoExam: 0 # 关闭AI答题</span>
<span class="line">      includeCourses: []</span>
<span class="line">      excludeCourses: []</span>
<span class="line">  <span class="token list punctuation">-</span> accountType: "CQIE" # 重庆工程学院CQIE</span>
<span class="line">    account: "1888282231" # CQIE和学习公社可以不用url</span>
<span class="line">    password: "114514"</span>
<span class="line">    coursesCustom:</span>
<span class="line">      videoModel: 1 # 开启视屏学习</span>
<span class="line">      autoExam: 0</span>
<span class="line">      includeCourses: []</span>
<span class="line">      excludeCourses: []</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


