---
title: 如何更新大气层&固件
description: 本教程提供了 更新整合包 和 更新虚拟系统 的方法。
published: true
date: 2026-02-14T12:18:57.408Z
tags: 
editor: markdown
dateCreated: 2025-08-27T14:32:27.410Z
---

# 执行更新操作
## 更新整合包
有以下**注意事项**：
- **能玩就别更新**。为了确保更新后不会出现奇怪的BUG，在本教程中将会删除所有的配置文件。
- 由于整合包中的部分插件**可能**存在不兼容的问题，**不建议覆盖更新整合包**。
曾经出现过老插件没有更新，而新整合包由于没有这个插件，所以覆盖的时候也没有覆盖，然而这个插件不兼容导致开不了机。
- 不能使用DBI等Switch系统内的插件来换包，**建议把TF卡拔出来插到电脑上更新**。

以 葡萄糖酸菜鱼 的整合包为例。

把卡插到电脑上，打开卡（也可以进入Hekate UMS挂载）。把**除了emuMMC和Nintendo以外**（emiibo、JKSV、RetroArch、roms等其他**不冲突**的文件也可以保留）的所有文件删除。这将意味着你**失去所有以前配置过的内容**。

然后再把新的酸菜鱼整合包中`大气层整合包本体`和你想要的附加包按照安装时的流程复制进去。拔下卡，插入Switch，完成。

## 更新虚拟系统
更新前为了防止异常，请先**卸载主题**，参考[NXThemesInstaller](/NXThemesInstaller) 。
从葡萄糖酸菜鱼的夸克网盘分享中下载固件,例如`Firmware.20.5.0.zip` 。

解压成一个文件夹，例如 `Firmware.20.5.0` 。
![unzip_firmware.png](/base/how2upgrade/unzip_firmware.png =66%x)

把这一个文件夹移动至TF卡根目录（不是把里面的文件放到根目录）。
![cp1.png](/base/how2upgrade/cp.png =66%x)

进入虚拟系统，打开Daybreak，选择 `安装`。
![daybreak安装.jpg](/base/how2upgrade/daybreak安装.jpg =66%x)

选择你的固件文件夹，例如 `Firmware.20.5.0` ，然后将会校验。
![daybreak选择文件夹.jpg](/base/how2upgrade/daybreak选择文件夹.jpg =50%x)![daybreak校验.jpg](/base/how2upgrade/daybreak校验.jpg =50%x)

等待校验完成后点击 `继续` ，点击右边的 `保留设置` 。
![daybreak保留设置.jpg](/base/how2upgrade/daybreak保留设置.jpg =66%x)

选择SD卡驱动。
![daybreak选择sd卡驱动.jpg](/base/how2upgrade/daybreak选择sd卡驱动.jpg =66%x)
- 如果你的TF卡使用的是exFAT格式，请一定点击右边的 `Install(FAT32+exFAT)` ，否则无法进入系统
- 如果你是跟着本站 [如何安装整合包](/How2Install) 教程来的，那么你的卡应当是 `FAT32` 格式，点击左侧 `Install(FAT32)` 也可以。选择哪个无所谓。

![daybreak最终确认.jpg](/base/how2upgrade/daybreak最终确认.jpg =66%x)
点击 `继续` ，等待进度条跑完点击 `重启` 。
![daybreak重启.jpg](/base/how2upgrade/daybreak重启.jpg =66%x)
进入Hekate引导后点击 `启动-虚拟破解` （ `虚拟极限` 也可，下同）。

如果你再次回到了Hekate，这是正常的，再启动 `虚拟破解` 系统即可。

> 如果你开机后报 `错误码 Error Code: 2168-0002`，并且第二行是 `Program: 0100000000001000`，请检查你是否没有删除主题。如果忘记删除可以参考 [NXThemesInstaller](/NXThemesInstaller) 的 强制删除主题 部分。
{.is-warning}

## 更新正版系统
只要你在真实系统里面没做过会ban的事，就可以在正版系统里联网更新。
请**不要使用真实破解更新系统**！这会导致假熔断——据说熔断数不对会直接ban鸡。