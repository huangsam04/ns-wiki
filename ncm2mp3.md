---
title: .NCM格式转换到.MP3
description: 网易云音乐私有格式转换到MP3
published: true
date: 2025-08-23T00:57:36.897Z
tags: 
editor: markdown
dateCreated: 2025-08-22T13:19:02.647Z
---

# 仅供学习交流，严禁用于商业用途，尊重知识产权
## 网页版的坏处
目前网上有很多网页版转换器，但是他们大多效率低下，一旦转换几百首就会卡死，甚至于等了几个小时后发现竟然失败了，令人十分恼火。

## 客户端实现
### 下载
有一个非常优质的客户端实现，在Github上 [项目地址](https://github.com/taurusxin/ncmdump)。
点击右侧中间的Release，选择最新的 [Tag](https://github.com/taurusxin/ncmdump/releases/latest) 。
根据你的系统来下载程序：
- **Windows**：下载 ncmdump-x.x.x-windows-amd64-msvc.zip
当然msys2的效果应该也是差不多的，不过msvc是微软推出的编译器，我想应该在windows上更有优势。
- **MacOS**：arm芯片的（例如M1/M2/M3/M4）下载 ncmdump-x.x.x-darwin-arm64.tar.gz 
非arm芯片的下载 ncmdump-x.x.x-darwin-x86_64.tar.gz 
- **linux**：下载 ncmdump-x.x.x-linux-x86_64.tar.gz
好像没有给arm64编译的说？

### 使用
把这个压缩包解压，以我的Windows电脑为例，解压出来一个 ncmdump.exe
在有这个 ncmdump.exe 的文件夹目录下，点击资源管理器的标题栏，输入 `cmd` ，回车
![cmd.png](/星际拓荒/cmd.png)
回车后你会看到一个黑色的窗口，然后输入 `ncmdump.exe` （你在输入几个字符之后就可以按下`tab`自动补全）
![ncmdump.exe.png](/星际拓荒/ncmdump.exe.png)
这个时候你就可以使用ncmdump.exe来处理.ncm文件了！在这个窗口输入
`ncmdump -d <源文件夹> -o <输出文件夹> -r`
- -d <源文件夹> ：你的.ncm文件所在的文件夹，例如 `-d D:\CloudMusic\VipSongsDownload`
- -o <输出文件夹> ：你想要把转换成MP3的音乐存放的地方，例如 `-o D:\CloudMusic\Unlock`
- -r ：如果你不加这个项，那就不会包含<源文件夹中>中子文件夹
> 不要把<和>输入进命令行！这只是提示你你应该修改这两项。
例如在我的电脑上我会执行 `ncmdump -d D:\CloudMusic\VipSongsDownload -o D:\CloudMusic\Unlock -r`
{.is-info}


![解密音乐中.png](/星际拓荒/解密音乐中.png)
稍等片刻，程序运行完毕后，你就可以在你的 `<输出文件夹>` 中看到生成好的MP3了。
