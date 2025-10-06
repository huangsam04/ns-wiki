---
title: 如何安装整合包
description: How to Install Integration Package
published: true
date: 2025-10-06T08:54:03.118Z
tags: 
editor: markdown
dateCreated: 2025-08-27T13:59:15.909Z
---

# 整合包来自于 [葡萄糖酸菜鱼](https://space.bilibili.com/604067016) 公益提供支持
> 本文配套整合包为 葡萄糖酸菜鱼 提供更新服务，[夸克网盘下载链接](https://pan.quark.cn/s/3c0d28411181)。
如果链接失效请通过首页的 [联系我们](/home) 来通知。
本教程提供了**安装整合包+创建分区格式虚拟系统**的方法。
{.is-info}

> 使用 Windows自带的分区软件，或者使用DiskGenius这种完善的第三方分区软件，都和Hekate内自带分区软件效果**不同**。
它们不会使用AU对齐，而是使用512B或1MB对齐方法，这将会降低**大约30%写入**和**10%~30%读取**。
目前支持AU对齐的只有这三个工具：Hekate，SD协会的Sd Formatter和HOS（本文使用前两个工具）。
原文请看此 [Github Issue](https://github.com/CTCaer/hekate/issues/1138#event-20092252629)。
{.is-warning}

## 下载整合包
点击上方信息块中的下载链接，从夸克网盘下载整合包。请不要使用**在线解压**！又慢又不稳定。
- 如果你是Windows：请使用自带的解压软件或者任意一款解压软件解压。
- 如果你是Mac：不建议使用Mac操作，可能出现归档位错误。
- 如果你是安卓：不建议使用安卓操作，可能出现归档位错误。如果必须要用建议[MT文件管理器](https://mt2.cn/)处理压缩包。

## 安装整合包（以Windows系统为例）
### 准备
需要：
- 一张TF卡。如果你没有，可以参考 [SD卡指南](/sdcard) 。
- 一台Windows电脑。现在上面应该有你下载好的整合包，例如 `酸菜鱼大气层整合包1.9.3-v1.1.zip`。
- 一根正常的，可以传输数据的线。如果你的连接出现问题，首先考虑换一根线。

### 格式化TF卡
> 本段不是必须的， `新卡` 、 `只有一个分区` 或者 `可以被switch正常读取的卡` 等可以跳过这一步。本段的目的是清空卡上面所有分区信息，让卡初始化。
{.is-info}

你将会**丢失TF卡上所有数据**！请提前备份好你需要的文件。

下载 [SD协会的Sd Formatter](https://www.sdcard.org/downloads/formatter/)，[点此下载V5版](https://www.sdcard.org/downloads/formatter/eula_windows/SDCardFormatterv5_WinEN.zip) [从本站下载V5版](https://dl.awa.cool/huangsam04/SD%20Card%20Formatter%205.0.3%20Setup%20EN.exe) 。

安装这个格式化软件，并打开。将你的TF卡插入进电脑里面，选择识别到的那个分区的盘符。例如我这里就识别为 `E:` 。
![sd_card_formatter.png](/base/install/sd_card_formatter.png =22%x)

点击右下角 `Format`， 执行格式化，选择 `是(Y)` 。	这时候你的TF卡上面将会只有一个分区，打开格式化好的TF卡。

### 拷入Hekate
阅读 酸菜鱼葡萄糖 整合包中 `文档` 文件夹里面的内容。按照整合包里面的操作提示，把 `大气层整合包本体` 文件夹内的所有文件拷贝到TF卡根目录。
![放好文件.png](/base/install/放好文件.png =66%x)

这里**不需要**拷入其他的附加包等等，后面分区的时候大多都会丢失，后面会重新拷入。

### 设置Hekate
把TF卡插入Switch，开机，正常情况下你会来到这个界面。
![设置nyx时间.bmp](/base/install/设置nyx时间.bmp =66%x)
你可以不设置，这无关紧要。

来到Hekate主页。
![hekate主页.bmp](/base/install/hekate主页.bmp =66%x)

### 分区
> 执行本段会清空SD卡上面大部分文件。
Hekate调整分区的时候会移除所有文件，修改分区配置，最后恢复所有文件，但Hekate只能备份1G以下的文件。
这也是下文为什么又重新拷入了一遍整合包。
{.is-info}

点击上方 `工具` 按钮。
![hekate工具.bmp](/base/install/hekate工具.bmp =66%x)

选择 `SD卡分区管理`，`不备份`/`确定` 均可。
![hekatesd卡分区管理.bmp](/base/install/hekatesd卡分区管理.bmp =50%x)![hekatesd卡分区管理初始.bmp](/base/install/hekatesd卡分区管理初始.bmp =50%x)

将第二个分区条 `emuMMC(RAW)` 拖动到12GiB处，点击右下角 `下一步`， `开始` ，按下 `电源键` 。
![hekatesd卡分区管理调整.bmp](/base/install/hekatesd卡分区管理调整.bmp =66%x)
![hekatesd卡分区管理警告.bmp](/base/install/hekatesd卡分区管理警告.bmp =50%x)![hekatesd卡分区管理完成.bmp](/base/install/hekatesd卡分区管理完成.bmp =50%x)

### 拷入整合包
完成后点击左下角 `SD UMS` ，把Switch连接到电脑上，重新拷入 `大气层整合包本体` ，覆盖拷入。

如果你需要其他内容，可以打开 `附加包` 文件夹，并阅读你想要使用的包的 文件夹里面 的教程。	
请注意**一定要仔细**阅读附加包里面的教程！这里面会提到很多常见的问题以及基础信息。

同时按下电源键+-，退出 `SD UMS` 模式，回到主页。

### 创建虚拟系统
点击主页右侧的`虚拟系统`，你应当看到左侧emuMMC信息和选项处是 `× 关！`。
![hekate虚拟系统关.bmp](/base/install/hekate虚拟系统关.bmp =66%x)

点击右侧emuMMC工具 `创建emuMMC`，选择`SD卡分区`，选择`第1部分`。
![hekate虚拟系统创建emummc.bmp](/base/install/hekate虚拟系统创建emummc.bmp =50%x)![hekate虚拟系统创建emummc第一部分.bmp](/base/install/hekate虚拟系统创建emummc第一部分.bmp =50%x)

然后你会等待一段时间创建完成（大约是一分钟）。
![hekate虚拟系统创建emummc完成.bmp](/base/install/hekate虚拟系统创建emummc完成.bmp =66%x)

你会发现左侧 `emuMMC信息` 变成了 `开!` ，而且类型是 `SD卡分区` 。回到主页。
![hekate虚拟系统开.bmp](/base/install/hekate虚拟系统开.bmp =66%x)

## 完成
点击`启动` ，选择`虚拟破解` 。
![hekate启动.bmp](/base/install/hekate启动.bmp =66%x)

正常情况下会开机并显示和你的正版系统一摸一样的内容，然后就可以快乐的使用各种学习版软件、好玩的模组和插件了。

## 自动启动
点击上方 `选项` 按钮。
![hekate自动启动.bmp](/base/install/hekate自动启动.bmp =66%x)

点击 `自动启动 OFF`。
![hekate自动启动选项.bmp](/base/install/hekate自动启动选项.bmp =66%x)

选择你想要的配置，例如点击 `虚拟破解` 。然后就会提示 `自动启动 ON` 。点击下方 `保存选项` 。
![hekate自动启动on.bmp](/base/install/hekate自动启动on.bmp =66%x)

## 附录
如果你下次把TF卡连接到电脑提示：`使用驱动器E:中的光盘之前需要将其格式化。`请不要格式化！格式化了你的Switch虚拟系统就没了。
可以打开`DiskGenius`，在磁盘树中选择你的TF卡，`右键`那个12G的分区，选择`隐藏/取消隐藏 当前分区` 来隐藏这个分区。
这样下次TF卡插入电脑就不会提示异常了。

