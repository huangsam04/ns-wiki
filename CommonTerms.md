---
title: 常见词汇介绍
description: CommonTerms
published: true
date: 2025-10-04T06:39:01.734Z
tags: 基础知识
editor: markdown
dateCreated: 2025-08-21T05:36:11.237Z
---

# 学习常见的术语
> 本篇主要是为了介绍一些NS学习版的常见术语。
由于NS破解本就无官方，中英文互译更是产生了一堆翻译版本，因此本篇主要是提供常见的翻译。
{.is-info}

## 前端，面板，Title
原名Title。
![解释前端.jpg](/base/commonterms/解释前端.jpg)

当你安装了一个新游戏的时候，switch主页中间那一行正方形便会有一个显示游戏。

前端启动的软件权限较高，可以访问更多的CPU，内存。

## 注入游戏启动
按住R打开任意一个游戏，直到显示HBmenu，sphaira等的界面，然后再从这里面打开程序。

![前端模式sphaira.jpg](/base/commonterms/前端模式sphaira.jpg)

在这个模式下打开的程序拥有和前端启动的软件一样的权限。（较高）


## HBmenu，sphaira，相册
相册只是一个随意叫法。实际上这里的相册被破解并替换了程序入点，而改成HBmenu/sphaira了。
HBmenu已经停更，目前接替的就是sphaira。
从这里启动程序时，权限较低（毕竟设计系统的时候也不会给相册一堆内存和CPU时间对不对），运行程序的时候可能出现错误。
你也可以换一个程序入点，比如说Switch Online，用户头像，EShop等等。

一般来说是打开相册进入HBmenu，按住R打开相册是进入正常的相册。

这是Sphaira↓
![小程序模式sphaira.jpg](/base/commonterms/小程序模式sphaira.jpg)

## 究极手，ultrahand，uberhand
究极手是ultrahand的翻译。uberhand是ultrahand的分支，不过现在已经停更。
![究极手.jpg](/base/commonterms/究极手.jpg)

例如 [葡萄糖酸菜鱼](https://space.bilibili.com/604067016) 的整合包就是按下ZL+ZR+方向下 打开。

## HOS
Horizon OS，指Switch系统。

## OFW
Original Firmware，指原始系统。

## CFW
Custom Firmware，指自定义后的系统。

## 常用程序
### [DBI](https://github.com/rashevskyv/dbi) 
非常好用的工具。主要用于安装游戏，不过有很多其他实用小功能。
使用方式等详情可以在本站 [DBI的详细信息](/dbi) 查看。


### [90DNS Testing Utlity](https://github.com/meganukebmp/Switch_90DNS_tester)
字面意思，检测是否通过DNS屏蔽了任天堂服务器。
如果你进入后都是绿色的blocked，那么就说明你的机子无法连接到任天堂服务器，即屏蔽DNS工作正常。

### [JKSV](https://github.com/J-D-K/JKSV)
用于备份和恢复存档。文件保存在tf卡根目录/JKSV

### MemToolkit NX
用于快速给极限超频后的机子测试稳定性的，不过压力不如打开王国之泪玩上半个小时。

### [Moonlight](https://github.com/XITRIX/Moonlight-Switch)
是一个Moonlight的switch客户端，用于串流游戏。

### [NX Activity log](https://github.com/tallbl0nde/NX-Activity-Log)
在无法连接NS网路的时候，无法查看自己的游戏时间，而这个软件实现了这个功能。

### [Wiliwili](https://github.com/xfangfang/wiliwili)
Bilibili的第三方客户端实现。不支持在小程序模式下打开，需使用注入启动方式或者安装到前端使用。