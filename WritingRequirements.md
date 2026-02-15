---
title: 书写说明
description: 明确维基编辑权限与法律声明，规范页面创建、标题层级及素材上传标准。
published: true
date: 2026-02-15T04:46:17.958Z
tags: 
editor: markdown
dateCreated: 2025-08-21T15:07:21.834Z
---

# 你应当遵循以下要求

## 权限要求
每一个新注册的 维基百科 账户都是 **初始成员** 的权限，请通过任意方式 联系管理员 获取 **正式成员** 权限以编辑文稿。

## 法律要求
All resources come from the network, this site does not participate in any dump or hack activities, if there is any violation of your rights, please provide relevant proof and email huangsam04@vip.qq.com, I will promptly delete it.

本站所有资源来源于网络，本站未参与任何Dump或破解活动。
若有侵犯您的权益请提供相关证明致邮 huangsam04@vip.qq.com，我将及时撤下该内容。

## 结构规范
### 创建Wiki页面 需要遵循的标准
![创建页面.png](/书写要求/创建页面.png =66%x)
创建新页面的时候:
- 地址栏**必须无空格**：Wiki.js不支持带空格的路径，否则会提示非法字符
地址栏其实也可以通过斜杠来形成伪文件夹，不过由于有树状图了所以我们就不做要求
- **英文**路径：在分享Wiki网址的时候，中文会被编码成UTF-8，很难看，如下图
![utf-8编码.png](/书写要求/utf-8编码.png =66%x)

### 页面属性 需要遵循的标准
![页面属性.png](/书写要求/页面属性.png =66%x)
编辑页面属性的时候：
- 标题**填写中文标题**，或者如果只有英文的话就写英文
- 简短说明**无需填写**，本站会使用语言模型自动生成一个并覆盖

### 标题等级 需要遵循的标准
一篇文章应当 **有且仅有** 一个 一级标题（`#`），对于 二级（`##`） 以及更低级标题没有数量限制。
这是因为Wiki.js在渲染页面的时候会将一级标题（`#`）渲染为`<h1>`，若有多个一级标题会触发 `该页面上存在多个 <h1> 标记` ，若没有则会触发 `缺少 <h1> 标记` ，这对于搜索引擎索引 **很重要** ！！

### 上传素材 需要遵循的标准
![上传素材.png](/书写要求/上传素材.png =66%x)
上传素材的时候：
- /root **不要在这里上传内容**（我想不出来上传内容的必要，请保持数据结构的干净）
- /base **基础内容文件夹**。你可以在这里创建一个文件夹，然后把页面的数据上传在这里。例如 常见词汇介绍 在/base/commonterms/
- /书写要求 是本页面的素材文件夹。
- /星际拓荒 里面是空的，只是为了纪念。

目前没有创建新文件夹的计划，也许以后会创建一个进阶内容的文件夹吧。

记得修改图片的大小，在图片链接处加一个空格，再写上你想放的比例x。一般使用66%。做法如下：
```
![上传素材.png](/书写要求/上传素材.png =66%x)
```

> 参考文献： [时鹏亮的Blog](https://shipengliang.com/download/switch/switch-%e5%a1%9e%e5%b0%94%e8%be%be%e4%bc%a0%e8%af%b4%ef%bc%9a%e7%8e%8b%e5%9b%bd%e4%b9%8b%e6%b3%aa-%e6%b8%b8%e6%88%8f%e4%b8%8b%e8%bd%bd-nocache.html)。
{.is-info}