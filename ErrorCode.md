---
title: 错误码
description: 从这里查找Switch常见的错误码。
published: true
date: 2025-10-05T17:09:56.676Z
tags: 
editor: markdown
dateCreated: 2025-10-05T02:31:51.363Z
---

# Switch 常见错误码
> 正在补充。
{.is-info}

## 开机黑屏报错
**A fatal error occurred while running Atmosphere.**
| Program ID          | 模块类型                    | 解决方案                               |
| ------------------- | -------------------------- | -------------------------------------|
| `010000000000002B`  | Nintendo sysmodules : erpt | 系统可能因为极限超频损坏，重新创建虚拟系统即可。    |
| `010000000000bd00`  | Homebrew sysmodules        | MissionControl（第三方手柄蓝芽）模块不兼容。    |

---

## 大气层蓝屏报错
| 错误码Error Code | 程序Program | 可能原因 | 解决方案 |
| ------- | ------ | ---------- | ---------- |
| `2002-3005` |  | 降级系统未重置 | 参考 **[如何降级系统](/How2Downgrade)** 的 **重置系统** 一段 |
| `2168-0002` | `0100000000001000` | 未删除自定义主题 | 参考 **[NXThemesInstaller](/NXThemesInstaller)** 的 **强制删除主题** 一段 |
| `2162-0002(0x4a2)` | `0100000000001000` | 国行主机升级HOS20+或全球版主机不小心误转国区 | 下载带有自动转区功能的ultrahand组件([葡萄糖酸菜鱼](https://space.bilibili.com/604067016)提供的整合包自带)，放入卡中，重启主机。 |
| `2347-0007` | `420000000007E51A` | Ultrahand崩溃 |  |

---

## 附录：第三方插件 titleid 列表
| Program ID        | 模块类型                  | 解决方案                               |
|-------------------| ------------------------ | -------------------------------------|
| `0000000000534C56`  | Homebrew sysmodules      | SaltyNX（底座手持插件启动器）                         |
| `00FF0000000002AA`  | Homebrew sysmodules      | BootSoundNX（启动时播放声音）                         |
| `00FF0000636C6BFF`  | Homebrew sysmodules      | sys-clk（超频管理）                                  |
| `00FF00006D7470FF`  | Homebrew sysmodules      | mtp-server-nx（MTP 协议 USB 传档）                   |
| `00FF0000A53BB665`  | Homebrew sysmodules      | SysDVR（网络 / USB 投屏）                            |
| `00FF747765616BFF`  | Homebrew sysmodules      | sys-tweak（系统热键、自定义控制器支持）               |
| `0100000000000038`  | Homebrew sysmodules      | Noexes（金手指调试模块）                             |
| `0100000000000052`  | Homebrew sysmodules      | switch-nfp-mitm（Amiibo 模拟）                       |
| `0100000000000081`  | Homebrew sysmodules      | nx-btred（第三方蓝牙音频驱动）                       |
| `01000000000000XX`  | Homebrew sysmodules      | 大气层系统模组（尾数08/32/34/36/37等）        |
| `0100000000000352`  | Homebrew sysmodules      | emuiibo（Amiibo 模拟器）                             |
| `0100000000000523`  | Homebrew sysmodules      | aoc-mitm（DLC 解锁支持）                             |
| `0100000000000BEF`  | Homebrew sysmodules      | fsp-usb（USB 驱动支持）                              |
| `0100000000000CAB`  | Homebrew sysmodules      | nx-TAS（自定义输入 / 模拟控制器）                    |
| `0100000000000DAD`  | Homebrew sysmodules      | nx-overlay（Tesla 菜单叠加层）                       |
| `0100000000000F12`  | Homebrew sysmodules      | Fizeau（屏幕色温调节）                               |
| `0100000000000FAF`  | Homebrew sysmodules      | hid-mitm / hid-mitm-plus（网络手柄映射）              |
| `0100000000006480`  | Homebrew sysmodules      | twili（调试服务）                                   |
| `0100000000007200`  | Homebrew sysmodules      | ilia（系统实用组件）                                 |
| `010000000000BD00`  | Homebrew sysmodules      | MissionControl（第三方蓝牙手柄支持）                  |
| `010000000000C235`  | Homebrew sysmodules      | Freebird（超频管理模块）                             |
| `010000000000DA7A`  | Homebrew sysmodules      | Kosmos-Cleaner（清理旧 Kosmos 模块）                 |
| `010000000000F00F`  | Homebrew sysmodules      | dvdnx（启动时播放 DVD logo 动画）                    |
| `010000000000FFAB`  | Homebrew sysmodules      | usb-mitm（USB 中间层调试）                           |
| `01000000001ED1ED`  | Homebrew sysmodules      | maydel（系统调试模块）                               |
| `0532232232232000`  | Homebrew sysmodules      | NX-input-recorder（输入录制）                         |
| `054E4F4558454000`  | Homebrew sysmodules      | Breeze / noexs（内存搜索与修改）                     |
| `2200000000000100`  | Homebrew sysmodules      | SplitNX（LiveSplit 分段计时插件）                    |
| `4100000000000324`  | Homebrew sysmodules      | sys-http（HTTP 服务）                                |
| `4200000000000000`  | Homebrew sysmodules      | sys-tune / sys-audioplayer（音频播放器）              |
| `420000000000000E`  | Homebrew sysmodules      | sys-ftpd / sys-ftpd-light（FTP 文件传输）             |
| `420000000000000F`  | Homebrew sysmodules      | SlideNX（更改 JoyCon 附加音效）                      |
| `4200000000000010`  | Homebrew sysmodules      | ldn_mitm（局域网联机对战支持）                       |
| `4200000000000811`  | Homebrew sysmodules      | bitmap-printer（绘图功能）                            |
| `4200000000000BAC`  | Homebrew sysmodules      | SwiTAS（控制器脚本 / 自动化输入）                    |
| `4200000000000FFF`  | Homebrew sysmodules      | sys-triplayer（音频播放服务）                        |
| `420000000007E51A`  | Homebrew sysmodules      | Tesla / nx-ovlloader（Tesla 菜单加载器）             |
| `4200000000474442`  | Homebrew sysmodules      | sys-gdbstub（GDB 调试支持）                          |
| `4200000000696969`  | Homebrew sysmodules      | sys-logger（系统日志模块）                            |
| `4200000AF1E8DA89`  | Homebrew sysmodules      | ControllerSaver（手柄配置保存）                      |
| `42000062616B6101`  | Homebrew sysmodules      | sys-screenuploader（截图上传）                       |
| `4200736372697074`  | Homebrew sysmodules      | sys-script（脚本执行支持）                            |
| `4206900000000012`  | Homebrew sysmodules      | sfdnsres_mitm（DNS 劫持，用于自定义服务器）           |
| `430000000000000A`  | Homebrew sysmodules      | sys-netcheat（网络作弊器）                            |
| `430000000000000B`  | Homebrew sysmodules      | sys-botbase（外部控制接口，常用于脚本）                 |
| `430000000000000C`  | Homebrew sysmodules      | sys-botbaseplus（增强版 botbase）                    |
| `43000000000000FF`  | Homebrew sysmodules      | nxsh（命令行终端）                                    |
| `4300000000000909`  | Homebrew sysmodules      | NXGallery（截图传输工具）                             |
| `5600000000000000`  | Homebrew sysmodules      | NXCord（Discord 客户端）                             |
| `690000000000000D`  | Homebrew sysmodules      | sys-con（第三方手柄有线连接）                          |

---

## HOS系统报错
| 错误代码      | 解决方案                                  |
| ------------ | --------------------------------------- |
| `0000-0000`  | 样例条目。 |

> 参考文献：[Switch 三方插件 titleid 列表](https://shipengliang.com/games/switch-%E4%B8%89%E6%96%B9%E6%8F%92%E4%BB%B6-titleid-%E5%88%97%E8%A1%A8.html)，[switch大气层常见报错对应id汇总 ](http://www.k73.com/new/663761.html)，[第三方自製for Switch工具列表](https://www.tekqart.com/thread-273390-1-1.html)，[打不开switch商店](https://www.xiaoheihe.cn/app/bbs/link/cc9c703b2cc2) 。
{.is-info}
