---
title: 破解Switch
description: Crack Switch
published: true
date: 2025-10-04T06:44:13.923Z
tags: 基础知识
editor: markdown
dateCreated: 2025-08-21T04:49:54.579Z
---

# 怎么破解的？
## 软破
Switch在开机的时候会经过一个硬件固化在本地的签名，来验证Bootloader，然后Bootloader自己也有一个钥匙去验证本地系统的签名。全部通过后就可以完成开机了，如果有一个不通过就会退出流程。

但是任天堂被老黄背刺了，他的那块Tegra X1（Switch1芯片）中带有一个厂商调试模式，也就是Recovery Mode（简称RCM）。这个模式下可以接收USB传来的数据，但是通过某些操作可以跳过校验签名的部分。因此只要简单的方式就可以把程序溢出，跳转到其他地址执行我们想要做的事情了。

因此TX就做了这样的一个注入器，在进入RCM的时候发送有非法代码的数据，从而加载第三方程序。

### 硬破
任天堂修复了软破漏洞，但是由于ns还是用的TegraX1，而TegraX1的信息全被扒出来了，因此还有其他方法破解。

新的方法是，搞一个破解用芯片焊接到CPU附近，在开机时干扰CPU供电电压，然后等待到他准备加载emmc正版系统的时候发出脉冲电流并劫持CPU，使其加载TF卡里面的破解系统（例如Hekate）而不是emmc，从而破解switch。

因此在没有插入TF卡的时候，硬破switch开机是会提示异常的。但是你还是可以通过某种方式使破解芯片运行正版引导从而开机。

> 参考文献： [Nintendo Switch 破解原理:详解 Fusée Gelée 漏洞](https://github.com/Ginurx/fusee_gelee_explained_in_chinese) 。
{.is-info}