---
id: basic
title: 配置文件
sidebar_label: 配置文件
---

配置包含两类，普通配置和路由配置，Dahlia 约定把配置文件放在 `config` 目录中。

```bash
src/config
      ├── config.default.ts
      ├── config.local.ts
      ├── config.prod.ts
      └── router.config.ts
```

## 普通配置

普通配置文件根据环境，可分为三种:

- `config.default.ts` 默认配置，在所有环境中生效。
- `config.local.ts` 在开发环境生效，当和 defulat 配置重复时，优先级高于 default 配置。
- `config.prod.ts` 在生产环境生效，当和 defulat 配置重复时，优先级高于 default 配置。



## 路由配置
