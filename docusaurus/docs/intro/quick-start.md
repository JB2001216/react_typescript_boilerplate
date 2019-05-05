---
id: quick-start
title: 快速上手
sidebar_label: 快速上手
---

## 安装 Dahlia CLI

```bash
yarn global add dahlia-cli
```

## 初始化应用

```bash
dh new myapp
```

它将在当前文件夹中创建一个名为 myapp 的目录，目录结构如下：

```bash

.
├── package.json
├── pages
│   └── index.tsx
└── tsconfig.json
```

**启动开发服务器**

```bash
cd myapp
dh start
```

启动成功后，然后访问浏览器：

<img src="http://forsigner.com/images/dahlia/dahlia-app.png" width="900" />

至此，你已经完成了 Dahlia 的基本体验。
