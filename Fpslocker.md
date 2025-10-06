---
title: 帧率解锁 Fpslocker
description: 
published: true
date: 2025-10-03T09:10:10.572Z
tags: 
editor: markdown
dateCreated: 2025-09-28T13:41:31.418Z
---

# 支持大部分游戏的解锁帧数的教程

> 对于绝大部分游戏，底座模式下跑满60FPS都需要极限超频。
> 对于大部分游戏，掌机模式下跑满60FPS需要对内存极限超频。
> {.is-warning}

## 0.查询支持的游戏/版本

1) 打开金手指插件，查看右侧显示的第一个ID (根据译者不同，可能名为 游戏ID/程序ID/应用ID/tid/title id)
![title_id.png](/homebrew/fpslocker/title_id.png =50%x)

2) 进入查询页面，[Github原项目](https://github.com/masagrator/FPSLocker-Warehouse) 或 [国内同步源](https://dl.awa.cool/scy/FPSLocker-Warehouse/) 。打开你浏览器的网页搜索，输入第一步显示的ID
![search.png](/homebrew/fpslocker/search.png)

3) 查看结果
	a. 如果查询不到，说明不支持
	你可以向作者提出[适配申请](https://github.com/masagrator/FPSLocker-Warehouse/issues/895)，请注意格式要求。
  <br>
	b. 如果搜索到的ID右侧一栏有✅，说明Fpslocker支持对应版本，下载对应版本游戏即可解锁畅玩。
	![支持.png](/homebrew/fpslocker/支持.png =50%x)
	▸ 上图说明支持该游戏的1.0.3版本。
  <br>
	c. 右侧有❌，说明Fpslocker不支持该游戏
	![不支持.png](/homebrew/fpslocker/不支持.png =50%x)
  ▸ 经典问题之，宝可梦全系列都不支持。
  <br>
	d. 右侧有◯，说明不需要补丁，可以直接解锁帧数。
  ![不需要.png](/homebrew/fpslocker/不需要.png =50%x)
  ▸ 旷世奇作《小猪佩奇历险记:世界之旅》就不需要补丁。
  
## 1.补丁文件
> 确认你的整合包已经安装了最新版的 Fpslocker 和 SaltyNX。
> 不懂的话问你的整合包作者，[葡萄糖酸菜鱼]的整合包已经预置。
{.is-warning}

0) 如果你是用的是[葡萄糖酸菜鱼]的整合包，Fpslocker已经配置了国内源，可以跳过这步，转换补丁时直接点下载。
1) 下载补丁文件，从[Github原项目](https://github.com/masagrator/FPSLocker-Warehouse/archive/refs/heads/v4.zip) 或 [国内同步源](https://dl.awa.cool/scy/FPSLocker-Warehouse/fpslocker.zip) 。
2) 下载完成后解压，将“atmosphere”和“SaltySD”两个文件夹复制到根目录。

## 2.补丁安装

1) 呼出Ultrahand，进入帧数解锁
2) 进入高级设置选项，点击转换配置文件到补丁。
	a. 如果显示无补丁，点击下载，但如果你的包没有配置Fpslocker国内源可能无法下载成功。
  b. 如果报错提示 补丁不可用，0x312。说明不支持该游戏。
  c. 如果报错提示 补丁未生效，0x1101。说明你的 Fpslocker或SaltyNX 版本过低。
3) 重启游戏，在帧数解锁中调高目标帧数。
