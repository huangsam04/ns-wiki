---
title: Switch自更新原理
description: 本文告诉你大气层自更新的原理，以及为什么不能用DBI更新大气层。
published: true
date: 2025-11-20T09:54:20.378Z
tags: switch更新
editor: markdown
dateCreated: 2025-09-06T14:40:49.829Z
---

# Switch 大气层能不能自更新

## 引言

很多玩 Switch 破解的朋友会发现：每次更新大气层整合包时，总有人反复提醒 
> "别用 DBI 换包，一用就报错"。
{.is-warning}

为啥 DBI、ftpd 这些工具都不行？要搞懂这事，得先从 "系统咋自己更新" 说起。

## 系统更新的基本原理

> 其实更新的本质很简单 —— 删了旧系统，装上新系统。
{.is-success}


但让系统 "自己更自己"，就像让它 "先把自己拆成零件，再拼个新版本"，根本不现实：拆到一半系统就瘫了，连旧的都删不完，更别提装新的了。

咱们常用的手机、电脑早解决了这个问题，靠两种办法：

###### 一是 "双系统"
机器里存两个一模一样的系统。比如用系统 1 时要更新，就先把系统 2 更到新版本，然后切换到系统 2 启动；下次更新再反过来，用系统 2 更系统 1，永远有一个 "完好的系统" 帮忙。
###### 二是 "子母系统"
一个 "主系统" 负责日常用（刷游戏、看视频），另一个 "子系统" 只干更新这一件事。主系统下好新包后，子系统会接手删掉旧主系统，把新的装上去，全程不影响更新流程。

## Switch大气层更新问题的原因

现在回头看 Switch 的大气层：DBI、ftpd 这些工具，全是在 "正在运行的大气层里干活"。

> 想在大气层里换整合包，相当于 "在正在行驶的车里拆发动机"，
{.is-warning}


肯定会把大气层的结构搞崩，机器自然报错。

那大气层就没法自己更新了吗？当然能！关键还是得像手机电脑那样 —— 找个 "帮手系统"。

早期有玩家想过用安卓当 "帮手"：给 Switch 刷个安卓系统，在安卓里操作大气层的文件来更新。这办法虽然能行，但刷安卓对很多人来说已经够麻烦了，在安卓里更新大气层更是难上加难，所以没普及。

后来大家把目光投向了更底层的 "payloads（有效载荷）" —— 这可是 Switch 破解的核心。你可能知道，Switch 的 TegraX1 芯片破解时，是用树莓派在开机时发脉冲电压，同时注入一个 "引导程序（就是 payloads）"，让机器能引导到 TF 卡里的系统。咱们大气层整合包里的 payload.bin，就是引导工具 hekate 的核心。

不过树莓派有个限制：
> 注入的 payloads 不能超过 128KB，
{.is-warning}

装不下 hekate 的可视化界面。所以 payload.bin 会先引导到 TF 卡 bootloader 文件夹里的 nyx.bin，这个文件能识别你的操作，再进一步引导到 fusee.bin 或 package3（这俩是启动大气层的关键），最后才进入大气层系统 。
> 大气层启动的过程相当于一场 "接力赛"：树莓派→payload.bin→nyx.bin→fuse.bin/package3→大气层。
{.is-info}


## 解决方案：利用payloads实现更新

这么看，hekate 有点像大气层的 "辅助系统"，但它本身功能已经够复杂了，再让它负责 "删旧大气层、装新大气层"，后续维护会很麻烦。那 "更新功能" 该加在哪？

答案是在 "接力赛" 里插一脚：让 hekate 先不进大气层，而是引导到一个 "专门更大气层的系统"。这个 "更新系统" 得满足两个要求：能删旧包、装新包，还能被 hekate 引导 —— 这不正好是 payloads 能做的事吗？

国外开发者早做过不少实用的 payloads，比如修故障的 CommonProblemResolver.bin、管文件的 TegraExplorer.bin。咱们照着这个思路，自己做一个 "更新专用 payloads"，让 hekate 引导到它，就能自动删旧大气层、装新包；更新完再重启到 hekate，流程就通了。

至于大气层这边，只需要干两件简单的事：一是下载新的整合包，二是让 hekate 重启时能引导到 "更新用的 payloads"—— 这俩活交给 ultrahand 或 uberhand（大气层里的小工具）就能搞定。

到这一步，你相当于自己搞出了 Switch 大气层的 "在线更新" 功能的基本框架方案：
> 
> ultrahand端：
> download {整合包网址} /临时路径1
> unzip /临时路径1 /临时路径2
> reboot /更新系统payloads路径
> 
> payloads端：将老整合包删除，将新整合包放入
{.is-success}

当然ultrahand的作者 ppkantorski也思考到了这个框架，并且进行了优化，在ultrahand端对大气层无关文件进行增删改，并将相关文件加上后缀用以区别，最后利用ultrahand_updatepayloads.bin对后缀新文件进行操作，更新系统。并将这个过程完全浓缩在ultrahand内部。这样我们便只需要书写ultrahand端代码：
> [在线更新]
> [覆盖更新大气层]
> try:
> download 'https://dl.awa.cool/hahappify/Hahappify.zip' /config/ultra/Hahappify.zip
> unzip /config/ultra/Hahappify.zip /
> del /config/ultra/
> reboot

即可完成更新。图下为ultrahand的payloads封面。
![myselfupdate.avif](/base/myselfupdate.avif =66%x)