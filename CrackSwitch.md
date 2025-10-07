---
title: Switch破解历史&原理
description: Crack Switch
published: true
date: 2025-10-07T07:23:17.314Z
tags: 基础知识
editor: markdown
dateCreated: 2025-08-21T04:49:54.579Z
---

# Switch破解历史  
> 金钱利益不是大部分黑客破解游戏、硬件或软件的根本原因。

## RCM漏洞发现以前(2017.3.3-2017.12.31)
早期破解，通过软件漏洞实现。例如利用`LayeredFS`替换合法游戏的`TID`运行备份游戏
![crackswitch_layeredfs.jpg](/base/crack_switch/crackswitch_layeredfs.jpg "游戏TID替换工具")
早期破解主要集中在低版本系统`HOS 5.1.0 -`，以特定的试玩版游戏作为破解入点，具体就是通过备份的游戏ROM替换下载的试玩版游戏，但是过程非常繁琐，兼容性也一般。有些游戏只能通过特定的试玩版游戏启动，有些游戏的试玩版无法启动它对应的正式版游戏。这段时间，黑客们的主要工作就集中在测试哪些游戏可以由哪些试玩版游戏替换启动。

## RCM漏洞发现以后(2017.12.31-)
首位发现并公开利用Tegra X1芯片漏洞的是女性黑客 **Kate Temkin**，她的这个发现彻底改变了Switch的破解进程。这是一个无法修复的硬件漏洞，称作`Fusée Gelée`，代号 **CVE-2018-6242**。**Kate Temkin** 后来将这个漏洞提交给了谷歌，获得十万美元的报酬。谷歌将这个漏洞反馈给英伟达，然后任天堂也就知道了这个漏洞的存在，封堵了部分较晚生产的`Erista`机型和后续`Mariko`机型。早期生产的部分`Erista`机型可以通过锡纸或短接器将右手柄插槽的两个触点短接，搭配注入器进入**RCM模式**。

### Erista 机型
TX小组于2018年5月首先放出了商业化破解方案`SX PRO`，包括短接器，注入器和自制破解固件`SXOS`，该破解套件收费$31美元，为永久授权(实际上只坚持到`HOS 11.0`以前，因为TX团队被任天堂干掉了)。 `SXOS`相对来说比下面要提到的破解固件`Atmosphère`操作简单，因为它支持直接加载XCI(卡带形式的游戏ROM)和在线激活。。同时也有黑客破解了TX小组的`SXOS`，2018年7月互联网上就可以下载到破解版的`SXOS`。但是TX团队在其中加入了变砖代码，检测到未授权的运行会锁定Switch主机，这个锁定由于规模比较小(有说法是指影响到了破解`SXOS`的黑客的switch)，目前没有被解开。
差不多与TX小组同时，也有开源免费的`Atmosphère`正在发展，上文提到的 **Kate Temkin** 曾经隶属于此团队，她在报告漏洞后被`Atmosphère`项目的主要开发者[**SciresM**](https://github.com/SciresM)从团队除名。 **Kate Temkin** 的行为没有和团队内的任何一位成员商量过，并且`Atmosphère`了解此漏洞的时间晚于官方，这深深地伤害了团队成员间的关系。TX小组能被执法部门干掉的原因首先是收费破解(官方罪名之一是涉嫌洗钱)，另外SXOS的代码主要抄袭自`Atmosphère`，此外为了实现直读XCI，他们使用了部分任天堂的代码。而`Atmosphère`官方不对运行盗版游戏提供支持或便利，这也是`Atmosphère`项目能发展至今的最大原因之一。

### Mariko 机型
2019年8月30日，任天堂发售了续航加强版Switch，Switch lite同步开始预订；2019年9月20日，任天堂发售了Nintendo Switch Lite，这是一款专为便携游戏设计的轻量级版本；2020年9月，任天堂宣布将推出Nintendo Switch OLED版，并于2021年10月8日正式发售。这三款机型使用改进款Tegra X1，芯片制程从20纳米提升至14纳米大幅改进了续航和发热表现。但是`Mariko`机型无法像大部分`Erista`机型那样直接进入**RCM模式**。
TX小组于2020年初公开了自己的硬破芯片`SX Core/Lite`，适用于Switch(部分无法使用注入器的`Erista`机型)初代和switch lite。几个月后，TX小组被由美国牵头多国执法机构联合组成的跨国执法团队，逮捕了全部核心成员，包括两名法国籍成员和一名中国籍成员。TX小组被捕后，国内TX芯片的价格由四百多人民币被炒到一千多人民币。这时期国内出现过租芯片破解，即不把芯片焊接到Switch主板，拆机引导自制系统后使用，重启需要重新破解。
![现在的SXOS官网](/base/crack_switch/crackswitch_sxos.jpg "现在SXOS官网的域名已被ICE-美国国土安全局没收")
2021-2024年间，涌现出一大批国产仿制TX芯片，功能类似但价格更低。其中较为成熟的是**HWFLY芯片**，基于开源固件`Spacecraft NX`开发(即“小飞船”固件)。国产第一代芯片普遍成本在￥200-300，平均玩家到手价格在￥500-600；后来的**HWFLY芯片**成本在￥100-200，焊接总费用在￥300-500之间。
2023年3月份，又有开发者使用**树莓派RP2040**成功引导了大气层系统，当时这颗芯片国内批量拿货价￥4。之前的TX芯片与国产芯片价格昂贵是因为采用了FPGA方案，而树莓派RP2040本身就应用广泛。到了2025年的今天，全系焊接总费用普遍已经来到了100元人民币以下。

## Switch 烧录卡
2023年12月，Switch烧录卡开发团队**MIGswitch**发布了他们的第一支演示视频。
官方说法是一种卡带备份方式：
    1，烧录卡可以实现n合一
    2，主机不需要破解
    3，提取正版卡数据到烧录卡，需要已破解switch或MIGdumper。
    4，有证书的正版游戏数据是不会被封
    5，无证书资源无法运行
> 并非绝对安全!!!
{.is-warning}

# 怎么破解的？

## 软破
仅适用于Tegra X1 T210芯片。

Switch1的Tegra X1提供一个Recovery Mode（恢复模式，简称RCM），用于厂商救砖一类的操作，这个模式写在了只读的bootROM中。

### Switch开机过程
1. 在Switch通电后，bootCPU就会执行bootROM
2. bootROM 首先决定执行代码所需要的内存芯片
3. 内存决定下来后，读取启动配置表（[Boot Configuration Table](https://http.download.nvidia.com/tegra-public-appnotes/bct-overview.html)，简称BCT）
3.1 如果读取BCT失败，那么就会进入RCM
3.2 根据BCT的配置，如果没找到有效的Bootloader，那么也会进入RCM
4. 如果找到了Bootloader，那么控制权就会转移至Bootloader

> BCT： 其提供了配置信息，用于配置boot memory，配置SDRAM（如果有需要的话，bootloader一般都会加载到SDRAM中），表明bootloader镜像的位置，bootloader加载到的内存地址，指定bootloader的入口。
Bootloader： 用于启动操作系统的程序。
{.is-info}

![hekateautorcm.bmp](/base/crack_switch/hekateautorcm.bmp =50%x)
这就是AutoRCM的由来，破坏掉BCT让Switch自动进入RCM。

### RCM漏洞 CVE-2018-6242
问题就出在Recovery Mode中。

RCM的工作流程大体分为四步：
1. 处理USB主机控制传输请求，将设备的基本信息传输给主机。
2. 接收RCM消息**以及**一段程序（Payload），这里只是接收数据到缓冲区而不会对数据做检查。
3. 对RCM消息的合法性做一系列的检查，如果不合法直接返回，不会执行缓冲区的程序。
4. 如果所有的合法性检查都通过之后，保存用户代码的地址，然后跳转执行。

这样做的本意是允许厂家给Switch输入一段小程序，用来做诊断和维修的。
但是 ShofEL2 和 Fusée Gelée开发团队 发现，RCM模式中第二步（也就是在鉴权前）有一个复制操作，而且这个操作并没有规定长度限制。

我们来到**第二步**，为了便于理解，我们假设有一台电脑（和Switch区分）正在和Switch通信，下图为bootROM程序内存的分布图。
![rom_memory_layout.png](/base/crack_switch/rom_memory_layout.png =77%x)
| 区域名             | 大小               | 作用                                         |
| ------------------ | ------------------ | -------------------------------------------- |
| Global variables   | 未说明             | 全局变量区，存放设备接收到的 RCM 消息。     |
| USB DMA Buffer 1   | 16 kB             | 用于接收 USB 数据。                   |
| USB DMA Buffer 2   | 16 kB             | 用于发送 USB 数据。                   |
| Stack              | 12 kB              | 栈，存放局部变量和**函数调用的返回地址信息**。 |
| RCM Payload        | 192 kB（3 × 64 kB）| 存放 RCM Payload 数据。                     |

略过接收数据的部分，放置有效数据后如图：
![rom_memory_layout1.png](/base/crack_switch/rom_memory_layout1.png =66%x)

在接收完RCM消息和RCM Payload后，将会进行本次破解关键一步，电脑将进行GET_STATUS来确认Switch是否接收数据完成。
GET_STATUS协议规定，Switch应当返回一定信息（在栈里面，即图中的USB endpoint status variable）给电脑。

这时候，Switch就会把栈里面wLength（图中为2）字节的内容拷贝到USB DMA Buffer 2里面。顺便回顾一下，USB DMA Buffer 2是用来发送USB数据的内存区域。
![copy_2byte.png](/base/crack_switch/copy_2byte.png =66%x)

问题就出现了，其实根据USB协议，GET_STATUS返回的数据大小应该固定为**2个字节**。但是在Switch的实现中，返回的数据大小由电脑发送的数据包中的wLength规定，这就给了我们可乘之机。

如果我们把wLength填入8192呢？我们会发现，这个内存拷贝函数将RCM Payload中的部分内容也拷贝进了USB DMA Buffer 2。
![copy_8192byte.png](/base/crack_switch/copy_8192byte.png =66%x)

如果我们把wLength填入16+12K呢？
![copy_(16+12)kbyte.png](/base/crack_switch/copy_(16+12)kbyte.png =66%x)
由于在USB DMA Buffer 2区域之后是栈区，那么内存拷贝函数会用RCM Payload区域的数据覆盖栈区！

回顾一下，我们发现：栈中除了保存局部变量数据之外，还保存了函数调用的返回指针！
因此，如果我们精心设计RCM Payload区的数据，让其覆盖栈中的函数返回指针，并指向我们的程序入口，那么当bootROM的函数执行完返回时就会跳转到我们自己的代码执行了！

函数调用链
![call_stack.png](/base/crack_switch/call_stack.png =66%x)

如此一来，我们就控制了RCM。RCM有最高权限级别，于是我们就可以将任意代码加载到主CPU复合体（CCPLEX，指所有CPU核心以及它们共享的缓存）了。 

聪明的你一定想到了，这就是**溢出类漏洞**。
> 溢出类漏洞
想象一个杯子（缓冲区），设计只装 200ml 水（固定大小）。如果有人往里倒 500ml 水，多出来的水会溢出到桌面上，可能把旁边的东西弄湿、损坏或改变它们的位置。
溢出漏洞 就是程序给的空间比实际写入的数据小，导致多出来的数据写到了不该写的内存区域，产生未定义行为。
{.is-info}

这样就完成了CPU的提权，我们就能启动一个自制引导链（把签名检查绕过），最终实现加载自制固件。
TX就做了这样的一个注入器。

还记得我们上文提到过bootROM是只读的吗？所以厂家只能出场前修复，而不能后期OTA修复。因此初代机一直都能软破。

## 硬破
任天堂重新设计了bootROM，将Tegra X1 T210换为了T214，解决了上文提到的漏洞，因此软破路线在后期的机器都被封死了。

新的方法是，装一个破解用芯片（Picofly，或其他所有modchip）焊接到CPU附近并与CPU部分阵脚等连接。

每次Switch正常启动到校验部分的时候（这是一个非常精确的时间点），注入过大的电压（即进行Voltage glitching），让CPU运行电路速度不同从而出现故障，从而绕过启动固件验证。
在这个故障的时间窗口内，会由Picofly固件（或modchip固件）的一个模块（sdloader）把SD卡根目录的 `payload.bin` 注入（加载）进你的Switch。

一旦第一次成功破解了Switch（即找到了第一个合适的时序），破解芯片就会执行一个叫做训练的行为。所谓训练，实质上是针对已发现的故障时序进行压力测试，确定发现的这个时序是合适的、稳定的。

时序即前文提及的芯片为注入 `payload.bin` 文件所进行的电压脉冲的精确时机和强度。多个最优故障时序参数会被写入破解用芯片的内置存储器，用于实现快速破解。当因执行Switch系统更新导致某一时序不好用的时候，芯片将自动尝试使用其余备用时序使芯片故障并运行sdloader。
若上述操作失败了，则可能需要重置芯片（需拆解主机并手动操作芯片）。但是除非存在硬件故障，Picofly芯片基本不会出现使芯片故障与训练失败的情况。

第一次启动完成使芯片故障与训练后，modchip会将其自带的 `payload.bin` 写入Switch内置存储器 `BOOT0` 分区的空白扇区。
该自带的负载负责实现以下功能：启动时显示Picofly引导画面（带有Picofly标识的"NO SD Card"提示界面），并中止Switch的正常启动流程（除非同时按住音量+/-键开机以绕过sdloader）。此负载程序没有危险，不会对Switch内置存储器的任何关键区域造成影响。

我们会把hekate的 `payload.bin` 放到SD卡的根目录以启动heakte，于是就完成了对Switch的破解。

> 参考文献： [Nintendo Switch 破解原理:详解 Fusée Gelée 漏洞](https://github.com/Ginurx/fusee_gelee_explained_in_chinese)，[Switch System Flaws](https://switchbrew.org/wiki/Switch_System_Flaws)，[Introduction to Modchips](https://switch.hacks.guide/user_guide/modchip/) ，[Nintendo Switch RCM漏洞分析](https://www.bilibili.com/opus/359518805976270922)，[Glitching the Switch 演讲](https://media.ccc.de/v/c4.openchaos.2018.06.glitching-the-switch)，[Functionality of modchips](https://guide.nx-modchip.info/functionality/functionality_of_modchips) 。
{.is-info}
