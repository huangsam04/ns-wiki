---
title: 常见词汇介绍
description: 本文介绍了Switch破解中的常见术语及工具。核心概念包括前端与注入启动，两者均拥有较高系统权限；而通过相册入口启动的Sphaira等程序权限较低。此外，文章列举了常用工具，如用于安装游戏的DBI、备份存档的JKSV、检测网络屏蔽的90DNS，以及串流、看B站和查看游戏时长的辅助软件。
published: true
date: 2026-02-14T13:06:58.628Z
tags: 
editor: markdown
dateCreated: 2025-08-21T05:36:11.237Z
---

# 学习常见的术语

## 前端，面板，Title
英文名 Title。
![解释前端.jpg](/base/commonterms/解释前端.jpg =66%x)

当你安装了一个新游戏的时候，switch主页中间那一行正方形便会有一个显示游戏。

前端启动的软件权限较高，可以访问更多的CPU，内存。

## 注入游戏启动
按住R打开任意一个游戏，直到显示HBmenu，sphaira等的界面，然后再从这里面打开程序。

![前端模式sphaira.jpg](/base/commonterms/前端模式sphaira.jpg =66%x)

在这个模式下打开的程序拥有和前端启动的软件一样的权限。（较高）


## HBmenu，sphaira，相册
相册只是一个随意叫法。实际上这里的相册被破解并替换了程序入点，而改成HBmenu/sphaira了。
HBmenu已经停更，目前接替的就是sphaira。
从这里启动程序时，权限较低（毕竟设计系统的时候也不会给相册一堆内存和CPU时间对不对），运行程序的时候可能出现错误。
你也可以换一个程序入点，比如说Switch Online，用户头像，EShop等等。

一般来说是打开相册进入HBmenu，按住R打开相册是进入正常的相册。

这是Sphaira↓（小程序模式会在右上角标注出来）
![小程序模式sphaira.jpg](/base/commonterms/小程序模式sphaira.jpg =66%x)

## 究极手，ultrahand，uberhand
究极手是ultrahand的翻译。uberhand是ultrahand的分支，不过现在已经停更。
![究极手.jpg](/base/commonterms/究极手.jpg =66%x)

例如 [葡萄糖酸菜鱼](https://space.bilibili.com/604067016) 的整合包就是按下ZL+ZR+方向下 打开。

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
在无法连接NS网络的时候，无法查看自己的游戏时间，而这个软件实现了这个功能。

### [Wiliwili](https://github.com/xfangfang/wiliwili)
Bilibili的第三方客户端实现。不支持在小程序模式下打开，需使用注入启动方式或者安装到前端使用。