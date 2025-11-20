---
title: 如何降级系统
description: 本文将会告诉你怎么给Switch降级。
published: true
date: 2025-11-20T05:18:33.338Z
tags: 
editor: markdown
dateCreated: 2025-10-03T16:45:45.966Z
---

# Switch 20系统降级19

我们在使用Switch 20系统的时候，如果安装模组，总是会受到内存不够的问题。

因此本文就是告诉你该如何从**虚拟系统20**系统降级到虚拟系统19。

> **需要注意**
从20降级到19**必须删除游戏**！存档可以保留。
仅限于**虚拟系统**！真实系统不得降级。
{.is-danger}

> 请预先删除掉主题，参考 [NXThemesInstaller](/NXThemesInstaller) 中 删除主题 一段。
{.is-warning}


## 下载固件
你可以在 葡萄糖酸菜鱼 的资源中看到固件，下载Firmware.19.0.1.Rebootless。或者 [点此](https://dl.awa.cool/huangsam04/SwitchFirmware.19.0.1.Rebootless.zip) 从本站下载。

## 拷贝固件到TF卡
把这个.zip文件解压成一个文件夹，它将是一个文件夹里面有229个NCA文件。
将这个文件夹放入你的TF卡根目录。
![拷贝文件示意1.png](/base/downgrade_system/拷贝文件示意1.png =50%x)![拷贝文件示意2.png](/base/downgrade_system/拷贝文件示意2.png =50%x)

## 降级系统
打开HBmenu/Sphaira，打开Daybreak，选择`Install`，选择`SwitchFirmware.19.0.1.Rebootless`（如果你没有更改文件夹名的话）。
马上就会开始校验安装包，如果你复制的文件齐全的话就会通过，如下图。
![daybreak选择文件夹.jpg](/base/downgrade_system/daybreak选择文件夹.jpg =50%x)![daybreak校验安装包.jpg](/base/downgrade_system/daybreak校验安装包.jpg =50%x)

点击`Continue`，接下来会让你选择是否恢复出厂设置，选择`Preserve Settings`。

接下来让你选择驱动，如果你的卡格式为FAT32，那么选`Install`即可。否则就选择`Install(FAT32 + exFAT)` 。

接下来会让你二次确认，你真的想要进行这个过程吗？点击`Continue`。

然后就开始降级流程，稍等一小会儿，就降级完了。点击左侧 `Shutdown（关机）` 或者右侧 `Reboot（重启）` 均可 。

降级固件包（ `SwitchFirmware.19.0.1.Rebootless` 文件夹）使用完后就可以删除了，不会有什么影响。

## 重置系统
如果你选择了 `Reboot` ，不出意外，你的系统在开机之后就会蓝屏，`错误码 Error Code: 2002-3005` 。

这时候应该重启你的机子，进入虚拟系统，在出现大气层标后同时按住音量+-（然后就会亮起来Switch图标），按住等一会儿，进入恢复模式。

一共有三项，为了保留存档，我们选择第二项 `保留保存数据并初始化(Initialize Console Without Deleting Save Data)` 。
选择这一项，你的存档就会被放入已卸载那一块，而不会被格式化掉。

过一会儿游戏机就会自动重启，正常配置系统。

> 如果你想要一个干净的系统（存档也将被删除），可以选择第三项 `初始化主机(Initialize Console)` 。
点三次 `继续(Continue)` ，点击红色的 `初始化(Initialize)`，将会出现一个进度条。
稍等一会儿，你的游戏机会自动关机（？），让它开机，继续进入虚拟系统。
{.is-info}

> 如果你开机后报 `错误码 Error Code: 2168-0002`，并且第二行是 `Program: 0100000000001000`，请检查你是否没有删除主题。如果忘记删除可以参考 [NXThemesInstaller](/NXThemesInstaller) 的 强制删除主题 部分。
{.is-warning}

## 重装游戏
把你之前的游戏再装回去，你的存档就会从已卸载读回来，这样的话你的存档就没有丢失了。

