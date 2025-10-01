---
title: 安装/提取游戏 DBI
description: Duckbill
published: true
date: 2025-10-01T13:57:39.876Z
tags: 
editor: markdown
dateCreated: 2025-10-01T13:53:34.747Z
---

# DB Installer

DBI是一个非常实用的工具集，其主要功能是安装和提取游戏。

时鹏亮曾[指出](https://shipengliang.com/games/switch-dbi-%e5%9b%be%e6%96%87%e4%bd%bf%e7%94%a8%e6%95%99%e7%a8%8b.html) ：忘记Awoo、nxUSBload、NS-USBloader、NUT、NS-USBloader、TinWoo、AtmoXL(AtmoXL-Titel-Installer)以及Goldleaf这些**古老过时**的游戏安装插件，睿智的你掌握DBI就足够了。

由于一个叫 [三上烤鸭](https://space.bilibili.com/679023184) 的人，DBI仅提供Russian version only。原因请看这张照片（来自 时鹏亮的Blog） [链接1](https://pic.shipengliang.com/wp-content/uploads/2025/05/%E5%85%B3%E4%BA%8EDBI%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8E%BB%E6%8E%89%E4%BA%86%E4%B8%AD%E6%96%87%E7%89%88.png) [链接2(镜像)](https://dl.awa.cool/huangsam04/%E5%85%B3%E4%BA%8EDBI%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8E%BB%E6%8E%89%E4%BA%86%E4%B8%AD%E6%96%87%E7%89%88.png) 。

## 下载并打开DBI
时鹏亮 大佬对DBI进行了翻译，这是其[页面](https://shipengliang.com/games/%e7%ab%af%e5%8d%88%e8%8a%82%e5%84%bf%e7%ab%a5%e8%8a%82%e7%a4%bc%e7%89%a9%ef%bc%9a%e5%85%a8%e7%90%83%e9%a6%96%e5%8f%91-dbi-%e4%b8%ad%e6%96%87%e7%89%88.html) 。
大部分整合包都附带了DBI（的时鹏亮翻译版），例如 葡萄糖酸菜鱼 的整合包，[夸克网盘下载链接](https://pan.quark.cn/s/3c0d28411181)。

将下载好的.nro 放到 tf卡switch文件夹 里面，然后从HBmenu或者Sphaira 启动它。
![dbi主页.jpg](/homebrew/dbi/dbi主页.jpg =66%x)

打开后提示 `prod.keys 缺少必须的密匙` 是正常的，如果你很在意的话可以参考本文 导出游戏-提取密钥 部分来取得密钥。

## 安装游戏
打开你的DBI（如果有任何异常请先从前端模式/注入游戏启动，不明白的请回顾 [常见词汇介绍](/CommonTerms)），选择 `运行 MTP 响应器`。
![dbi_mtp响应器.jpg](/homebrew/dbi/dbimtp响应器.jpg =66%x)

打开你的 资源管理器，选择 `MTP USB 设备` （也可能不叫这个名字）
![资源管理器.png](/homebrew/dbi/资源管理器.png =66%x)

| 名称              | 说明 |
| ----------------- | ---- |
| 1: SD Card        | 这是你的TF卡储存，打开就是你的TF卡根目录。 |
| 2: Nand USER      | 这是机身储存的用户盘（一般用不上） |
| 3: Nand SYSTEM    | 这是机身储存的系统盘（一般用不上） |
| 4: Installed games| 已安装的游戏（一般用不上） |
| 5: SD Card install| 安装游戏的盘，目标是TF卡，把NSP, NSZ, XCI, XCZ or MSP文件拖拽进这里 |
| 6: NAND install   | 安装游戏的盘，目标是机身储存，把NSP, NSZ, XCI, XCZ or MSP文件拖拽进这里 |
| 7: Saves          | 存档文件夹 |
| 8: Album          | 显示30s短视频和截图的盘 |

需要注意的是，机身储存 并不是指的是真实的机身储存，在虚拟系统中，机身储存是由TF卡模拟出来的，详情请回顾 [基础知识](/GettingStarted)。

如果你想要安装游戏，就（一般）打开5盘 把游戏文件考入就可以安装了。
![dbi安装游戏.jpg](/homebrew/dbi/dbi安装游戏.jpg =66%x)

## 导出游戏
这要求你要先提取密钥。

### 提取密钥
首先回到Hekate界面，这里以 葡萄糖酸菜鱼 的整合包举例。点击`主页`下的`更多设置`，选择`密钥提取`（标题为`Lockpick_RCM`）。
你将会进入一个非常彩的页面，默认选中了`Dump from SysNAND`。通过**音量上下来移动光标**，**电源键确认**。

我们需要的是机带储存中的正版系统密钥，因此直接按下`电源键`确认。稍等一段时间后，程序就会提取完密钥了。
这个密钥已经放置在了能被DBI识别到的地方，因此不需要你自己手动移动，当然你也可以自己来备份一下，密钥文件被放到了`TF卡/switch/prod.keys`。
![lockpick_rcm.png](/lockpick_rcm.png =30%x)

按下`音量下`回到主页面，你可以选择 `Power off` 或者 `Reboot to hekate` 都行，总之再重新开机，回到Switch操作系统。

### 提取游戏
重新打开DBI，选择 `浏览已安装的应用程序`，你可以在这里看到你安装的所有游戏和前端程序。
![dbi_浏览已安装的应用程序.jpg](/homebrew/dbi/dbi浏览已安装的应用程序.jpg =66%x)

按下X来选中（多选），如果你只想选一个的话可以不多选。按下+打开菜单，选择 `转储到 SD 卡`。
![dbi转储选择.jpg](/homebrew/dbi/dbi转储选择.jpg =66%x)

DBI就会开始导出游戏：
![dbi转储.jpg](/homebrew/dbi/dbi转储.jpg =66%x)

而后，你选中的游戏（包括已安装的本体、升级包、DLC）就会被导出到 tf卡/switch/DBI/dumps/ 。
通过任意一种方式把他们拷贝出来就好了。



