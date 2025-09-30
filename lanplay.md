---
title: 如何使用lanplay
description: 
published: true
date: 2025-08-31T11:39:38.951Z
tags: 
editor: markdown
dateCreated: 2025-08-28T15:49:35.972Z
---

# 如何使用lanplay远程游玩局域网联机游戏
> 本页面仅适用支持**局域网连接**的游戏，本地联机游戏需要使用ldnmitm插件转为局域网联机，具体请参阅[还没写（]()
{.is-warning}
## 电脑端准备
### 1.安装lanplay
我常用的是[LanPlay-Electron](https://github.com/elton11220/LanPlay-Electron/releases/tag/v1.0.0.210810)。
下载并解压后，你会得到两个文件。
先安装驱动WinPcap，再安装LanPlay_Electron。
![解压安装.png](/software/lanplay/解压安装.png =66%x)
### 2.配置服务器
安装完成并打开后默认没有服务器，需要自己从网络搜集，或者加wiki主页的群获取群主自建服务器。
点击右下角+号添加服务器，备注随意。
```
//一些从网络搜集的服务器，自行验证可用性
lanplay.f-ever.cn:11451
139.155.72.235:11451
ns.ix.tc:11451
122.112.211.64:11451
www.kyle666.top:11451
joinsg.net:11453
175.178.187.22:11451
srv.jaxlewis.top:11451
124.223.87.139:11451
switch.lan-play.com:11451
wang54188.iask.in:11451
joinsg.net:11453
lanplay.cpalm.org:11451
```
配置完成后，点击服务器右侧播放按钮启动。
![启动服务器.png](/software/lanplay/启动服务器.png =66%x)
### 3.配置switch网络。
1)将switch连接到与电脑同一网络的WiFi。
2)点击已连接的网络，选择“更改设置”。
3)将“IP地址设置”改为手动。
4)IP地址设置为10.13.x.y  子网掩码设置为255.255.0.0  网关设置为10.13.37.1
> x与y可以是0~255的任意值，但ip不能是10.13.0.0、10.13.37.1、10.13.255.255其中任意一个。
多名玩家间IP不能重复。
{.is-warning}

5)DNS设置为任意可正常访问的DNS，现在的大气层屏蔽任天堂服务器已经不依赖90DNS。（我使用阿里云DNS：223.5.5.5、223.6.6.6）
![网络设置.jpg](/software/lanplay/网络设置.jpg =66%x)
### 4.启动游戏
打开支持局域网联机的游戏，一名玩家创建房间后，其他人即可看到并加入。
> 部分游戏的局域网联机模式是隐藏的，如马车8需要在主页按**L+R+左摇杆**。
{.is-info}

发现了野生的[参考文档](https://www.cnblogs.com/backuper/p/18312432)。