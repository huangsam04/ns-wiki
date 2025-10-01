---
title: 安装主题&主题补丁
description: NXThemesInstaller
published: true
date: 2025-10-01T14:54:50.964Z
tags: 
editor: markdown
dateCreated: 2025-08-29T15:14:28.887Z
---

# NXThemesInstaller

> 更新系统前一定要删掉主题！
{.is-danger}

> 报错无法进入系统参考[FAQ](/FAQ)
{.is-info}

## 安装补丁
首先在你的Switch上面启动一遍NXThemesInstaller（整合包自带），他会在你的TF卡中根目录处生成一个`themes`文件夹。

下载补丁包：[官方Github](https://github.com/exelix11/theme-patches/archive/refs/heads/master.zip)（最新版），或者镜像站(链接待补)。下载后解压，里面应该有`.github`文件夹，`systemPatches`文件夹和一个没人读的`README.md`。

把你的Switch打到Hekate引导-传输模式，或者把TF卡取出来插到电脑上面。将`systemPatches`文件夹复制到`themes`文件夹里面（此时`themes`文件夹里面可能有一些重复的文件，选择覆盖）。

![install.gif](/homebrew/nxthemesinstaller/install.gif =66%x)

## 下载主题
打开[主题下载网站](https://themezer.net/)，选中你喜欢的主题，点击右侧的Download按钮。

你会下载下来：
- 一个`.nxtheme`文件，例如`W11 by icarokkmelisco217 (Home Menu, Eternal Returnal by Glowmoss)-48EA.nxtheme`
- 一个压缩包，里面有许多`.nxtheme`文件。例如`Project Clean by usiruktv via Themezer-16D`文件夹

然后打开你的Switch TF卡，把这个/些`.nxtheme`文件拷贝进TF卡`themes`文件夹中。
为了方便寻找或者排序，你可以在这个文件夹中创建文件夹，然后再把主题文件拷入子文件夹。
例如对于`Project Clean`主题，你可以把`Project Clean by usiruktv via Themezer-16D`这一整个文件夹放进`themes`文件夹中。

例如我的`themes`文件夹中是如下的结构：

+ themes/
  + systemData/
  + systemPatches/
  + Example_folder/
    + W11 by icarokkmelisco217 (Home Menu, Eternal Returnal by Glowmoss)-48EA.nxtheme
  + Project Clean by usiruktv via Themezer-16D/
  	+ Project Clean - All Apps by usiruktv (All Apps, Project Clean - All Apps by usiruktv)-9A5.nxtheme
    + Project Clean - Home by usiruktv (Home Menu, Project Clean - Home by usiruktv)-9A6.nxtheme
    + Project Clean - Lockscreen by usiruktv (Lockscreen, Project Clean - Lockscreen by usiruktv)-9A7.nxtheme
    + Project Clean - My Page by usiruktv (User Page, Project Clean - My Page by usiruktv)-9A8.nxtheme
    + Project Clean - Player Select by usiruktv (Player Select, Project Clean - Player Select by usiruktv)-9A9.nxtheme
    + Project Clean - Settings by usiruktv (Settings, Project Clean - Settings by usiruktv)-9AA.nxtheme
    

打开Switch，打开NXThemesInstaller，你将会在Themes菜单看到你刚刚放进去的主题。

我的就在Themes菜单里面看到了Themezer文件夹，
![主页.jpg](/homebrew/nxthemesinstaller/主页.jpg =66%x)

对于我刚刚创建的Example_folder，打开后是我刚刚下载的Windows11主题，
![打开示例文件夹.jpg](/homebrew/nxthemesinstaller/打开示例文件夹.jpg =66%x)

对于我刚刚放进去的Project Clean主题合集，打开后是一堆主题，
![打开主题包文件夹.jpg](/homebrew/nxthemesinstaller/打开主题包文件夹.jpg =66%x)
负责的内容如下：

- All apps = 所有软件
- Home = 主页
- Lockscreen = 锁屏
- MyPage = 个人页面
- PlayerSelect = 玩家账户选择
- Settings = 设置

按下X可以预览，确认好后就可以按下A安装了。对于主题合集，应当全部安装以获得最好的体验。
安装完后建议重启一下，打到Reboot菜单，点击Reboot。

重启后就会正常加载你想要的主题了。
![成品.jpg](/homebrew/nxthemesinstaller/成品.jpg =50%x)
![projectclean-lockscreen.jpg](/homebrew/nxthemesinstaller/projectclean-lockscreen.jpg =33%x)![projectclean-home.jpg](/homebrew/nxthemesinstaller/projectclean-home.jpg =33%x)![projectclean-allapps.jpg](/homebrew/nxthemesinstaller/projectclean-allapps.jpg =33%x)
