---
title: 启动项
description: hekate引导选项
published: true
date: 2025-10-05T02:13:18.587Z
tags: 基础知识
editor: markdown
dateCreated: 2025-08-21T18:13:42.747Z
---

# HEKATE 启动选项
> 本页面的介绍基于[葡萄糖酸菜鱼](https://space.bilibili.com/604067016)的整合包，根据作者不同，启动项名字、图片等可能不同，但原理都是一样的
{.is-info}

![启动选择页面.bmp](/base/boot/启动选择页面.bmp =66%x)

## 配置文件
hekate中显示的启动项由 **\bootloader\hekate_ipl.ini** 决定
```
[config]
updater2p=1

[emuCFW]
pkg3=atmosphere/package3
emummcforce=1
icon=bootloader/res/emuCFW.bmp
logopath=bootloader/boot.bmp
id=1

[sysCFW]
pkg3=atmosphere/package3
emummc_force_disable=1
icon=bootloader/res/sysCFW.bmp
logopath=bootloader/boot.bmp
id=2

[emuOC]
pkg3=atmosphere/package3
kip1=atmosphere/kips/loader.kip
emummcforce=1
icon=bootloader/res/emuOC.bmp
logopath=bootloader/boot.bmp
id=3

[sysOC]
pkg3=atmosphere/package3
kip1=atmosphere/kips/loader.kip
emummc_force_disable=1
icon=bootloader/res/sysOC.bmp
logopath=bootloader/boot.bmp
id=4

[sysOFW]
pkg3=atmosphere/package3
emummc_force_disable=1
stock=1
icon=bootloader/res/sysOFW.bmp
id=5
```
以上是一个配置文件示例，接下来详细讲解
<br>

### [config] 下方是hekate启动配置，这里只讲两条常用的，更详细请查阅[官方github](https://github.com/CTCaer/hekate)
#### autoboot=0 
自启动配置。0为禁用，填写启动项下 **id=** 后的值则自启动到对应启动项。
#### bootwait=3
启动延迟。决定点击启动项后显示多少秒启动画面才真正开始启动，在这期间按音量键会回到hekate。(若使用了**autoboot**，则决定开机到自启动的延迟)
<br>

### 除 [config] 外其他 [ ] 里的内容为启动项名称，下方为启动项配置，这里同样只讲常用的，更详细请查阅[官方github](https://github.com/CTCaer/hekate)
#### pkg3=atmosphere/package3
从此处解析大气层文件，从中加载 kips、exosphere、warmboot 和 mesophere
#### kernel=mesophere.bin
从此处加载内核，会覆盖从package3中解析的结果
#### secmon=exosphere.bin
从此处加载Exosphere.bin，会覆盖从package3中解析的结果
> Exosphere运行在Tegra X1处理器的最高权限级别(Secure Monitor)，负责初始化硬件与提供安全服务，如改8G内存就需要修改此项
{.is-info}
#### emummcforce=1
强制加载虚拟系统
#### emummc_force_disable=1
强制不加载虚拟系统
#### icon=bootloader/res/emuCFW.bmp
从此处加载启动项图标，格式需要为**bmp**，分辨率192 x 192
#### logopath=bootloader/boot.bmp
从此处加载启动加载画面，格式需要为**bmp**，分辨率720 x 1280
> 你没看错，是720 x 1280，这个图片需要是竖向的
{.is-info}
#### id=114514
启动项序号，设置自启动时需要
#### stock=1
禁止加载内核修补与自定义固件，即使用原版系统
#### kip1=atmosphere/kips/loader.kip
从此处加载**kip** (kernel initial process,即“内核初始化进程”)
> 看到这里你也就明白了极限超频启动项的原理，就是加载了EOS的kip，这会修改系统的频率与电压调度。
在系统里的**EOS toolkit**调整设置也是在修改这个kip
{.is-info}