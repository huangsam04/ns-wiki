---
title: 破解Switch
description: Crack Switch
published: true
date: 2025-10-04T10:40:45.996Z
tags: 基础知识
editor: markdown
dateCreated: 2025-08-21T04:49:54.579Z
---

# 怎么破解的？

## 软破
Switch1的Tegra X1提供一个Recovery Mode（恢复模式，简称RCM），用于厂商救砖一类的操作，这个模式写在了只读的bootROM中。

### Switch开机过程
1. 在Switch通电后，bootCPU就会执行bootROM
2. bootROM 首先决定执行代码所需要的内存芯片
3. 内存决定下来后，读取启动配置表（[Boot Configuration Table](https://http.download.nvidia.com/tegra-public-appnotes/bct-overview.html)，简称BCT）
3.1 如果读取BCT失败，那么就会进入RCM
3.2 根据BCT的配置，如果没找到有效的Bootloader，那么也会进入RCM
4. 如果找到了Bootloader，那么控制权就会转移至Bootloader

> BCT中提供了配置信息，用于配置boot memory，配置SDRAM（如果有需要的话，bootloader一般都会加载到SDRAM中），表明bootloader镜像的位置，bootloader加载到的内存地址，指定bootloader的入口。
{.is-info}

> Bootloader是用于启动操作系统的程序。
{.is-info}

### RCM漏洞 CVE-2018-6242
问题就出在Recovery Mode中。

该模式会从USB中读取一段程序（Payload）并执行他们。这样做的本意是允许厂家给Switch输入一段小程序，用来做诊断和维修的。

但是 ShofEL2 和 Fusée Gelée开发团队 发现，RCM模式中有一个复制操作，但是这个操作并没有规定长度限制。

聪明的你一定想到了**溢出操作**，所以我们可以精心构建一个USB输入，把我们想要执行的操作溢出到bootROM使用的内存上面。bootROM有最高权限级别，我们控制了bootROM内存，就可以将任意代码加载到主CPU复合体（CCPLEX，指所有CPU核心以及它们共享的缓存）了。 

> 溢出类漏洞
想象一个杯子（缓冲区），设计只装 200ml 水（固定大小）。如果有人往里倒 500ml 水，多出来的水会溢出到桌面上，可能把旁边的东西弄湿、损坏或改变它们的位置。
溢出漏洞 就是程序给的空间比实际写入的数据小，导致多出来的数据写到了不该写的内存区域，产生未定义行为。
{.is-info}

这样就完成了CPU的提权，我们就能启动一个自制引导链（把签名检查绕过），最终实现加载自制固件。

TX就做了这样的一个注入器。

还记得我们上文提到过bootROM是只读的吗？所以厂家只能出场修复，而不能后期OTA。因此初代机一直都能软破。

## 硬破
任天堂修复了软破漏洞，因此软破在后期的机器都用不了了。

新的方法是，装一个破解用芯片焊接到CPU附近，在开机时干扰CPU供电电压，通过CPU电压故障从而绕过bootROM固件验证，允许payload.bin将取代BOOT0的文件。payload.bin进一步启动Hekate，完成Switch的破解。

> 参考文献： [Nintendo Switch 破解原理:详解 Fusée Gelée 漏洞](https://github.com/Ginurx/fusee_gelee_explained_in_chinese)，[Switch System Flaws](https://switchbrew.org/wiki/Switch_System_Flaws)，[Introduction to Modchips](https://switch.hacks.guide/user_guide/modchip/) 。
{.is-info}
