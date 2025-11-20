---
title: 电池校准插件
description: battery desync fix
published: true
date: 2025-11-20T09:50:42.263Z
tags: 
editor: markdown
dateCreated: 2025-08-23T14:57:18.154Z
---

# battery desync fix 电池容量校准
> 虽然该插件有github仓库，但作者目前只在discord发布新版，可点此从[本站镜像下载](https://dl.awa.cool/scy/mirror/battery_desync_fix/battery_desync_fix.nro)
{.is-info}

## 插件作用
当更换大电池时，需要校准电池容量，如果出现电量不到0%就关机或者到0%后仍能使用较长时间，也可以尝试校准。
## 使用 battery desync fix 校准电池容量
### 1.清除容量记录
下载后将**battery_desync_fix.nro**放入卡内switch文件夹，从HBmenu打开插件。
按X清除记录，显示Fuel Gauge IC initialized and context saved!即为清除完成。
![清除记录.jpg](/homebrew/battery_desync_fix/清除记录.jpg =66%x)

### 2.进行校准
1)打开性能监控插件，进入电池与充电信息页面，进行充电，直到充电电流到0为止。
2)进行放电，可开启超频插件加快放电速度，但注意控制放电功率在5-6w，最多不要超过6.5w。
3)重复以上操作，直到电池实际容量值达到满意的数值。
> 充电要充满！放电要放干！
充满: 电流显示为0
放干: 黑屏，左上角显示电池耗尽图标
充满/放干后，最好等一会再进行下一步
{.is-info}

![充电信息.jpg](/homebrew/battery_desync_fix/充电信息.jpg =66%x)