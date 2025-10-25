---
title: 隐私协议
description: Privacy Policy
published: true
date: 2025-10-25T04:56:52.925Z
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

## 下载站
**https://dl.awa.cool/** **https://download.nswiki.cn/**
| 收集的数据 | 收集目的 |
| ----------- | --------------------- |
| IP          | 进行基础访问记录与安全防护。 |

## 评论站
**https://artalk.awa.cool/**
| 收集的数据 | 收集目的 |
| ----------- | ---------- |
| 邮箱         | 作为身份标识符，鉴权用。 |
| IP地址       | 防止滥用。 |
| User-Agent  | 用于评论显示设备类型。 |

## 头像站
**https://gravatar.awa.cool/**
非常的曲线救国。
```mermaid
graph TD
    A["用户访问 /avatar/<digest>"] --> B["检查缓存是否存在"]

    B -->|"命中"| C["读取缓存的用户数据"]
    C --> D{"是否有缓存的 GitHub 头像？"}
    D -->|"有缓存"| E["使用 GitHub 头像链接"]
    D -->|"无缓存"| F["检查用户 link 是否为 GitHub 链接"]

    F -->|"是 GitHub 链接"| G["提取 GitHub 用户名并请求 GitHub API"]
    F -->|"不是 GitHub 链接"| H["使用默认头像链接"]

    G -->|"请求成功"| I["保存头像链接到缓存"]
    G -->|"请求失败"| H

    I --> E
    H --> L["准备跳转链接"]

    B -->|"未命中"| J["从 Artalk 数据库查找用户"]
    J -->|"找到用户"| K["将用户信息写入缓存"]
    J -->|"未找到用户"| H

    K --> D
    E --> L["返回跳转到头像 URL"]
```