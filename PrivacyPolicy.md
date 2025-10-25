---
title: 隐私协议
description: Privacy Policy
published: true
date: 2025-10-25T04:34:55.346Z
tags: 
editor: markdown
dateCreated: 2025-10-06T05:11:24.614Z
---

# 主要收集的信息以及目的

> 为了减少收集你的数据，我们尽可能的使用Github Oauth2登陆方式。这样可以不收集你的账户和密码，仅需要收集你的邮箱和IP。
{.is-info}

## NS Wiki（本站）
**https://nswiki.cn/**
| 收集的数据 | 收集目的 |
| ----------- | ---------- |
| 邮箱    | 作为身份标识符，鉴权用。 |
| IP地址  | 防止滥用，分析网站数据。 |

## 木炉星下载站
**https://dl.awa.cool/** **https://download.nswiki.cn/**
| 收集的数据 | 收集目的 |
| ----------- | --------------------- |
| IP          | 进行基础访问记录与安全防护。 |

## 木炉星评论站
**https://artalk.awa.cool/**
| 收集的数据 | 收集目的 |
| ----------- | ---------- |
| 邮箱         | 作为身份标识符，鉴权用。 |
| IP地址       | 防止滥用。 |
| User-Agent  | 用于评论显示设备类型。 |

## 头像站（需要登录评论站才能用）
**https://gravatar.awa.cool/**
非常的曲线救国。
```mermaid
graph TD
    A["用户访问 /avatar/<digest>"] --> B["检查 user_cache 是否存在该 digest"]

    B -->|"命中"| C["读取缓存的用户数据"]
    C --> D{"是否有缓存的 GitHub 头像？"}
    D -->|"有缓存"| E["拼接头像链接并返回"]
    D -->|"无缓存"| F["提取 GitHub 用户名并请求 GitHub API"]

    F -->|"请求成功"| G["保存 github_id 和 avatar_url 到缓存"]
    F -->|"请求失败"| H["使用默认头像链接"]

    B -->|"未命中"| I["从数据库 public.users 查找用户"]
    I -->|"找到用户"| J["更新缓存 user_cache"]
    I -->|"未找到用户"| H

    E --> K["返回 301 重定向到头像 URL"]
    G --> K
    H --> K

    subgraph 后台任务
        L["每 10 分钟执行定时刷新"] --> M["重新加载数据库用户列表"]
    end

```