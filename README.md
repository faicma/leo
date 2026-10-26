# Leo 的个人网站

基于 [Astro](https://astro.build) + [Fumika](https://github.com/iyanarmanda/fumika) 主题 + [Starlight](https://starlight.astro.build) 知识库的个人网站，托管在 GitHub Pages。

**线上地址**：<https://faicma.github.io/leo/>

## 网站结构

| 板块 | 路径 | 内容来源 |
| --- | --- | --- |
| 首页（博客列表） | `/` | `src/content/posts/` |
| 归档 | `/archive/` | 自动生成 |
| 项目展示 | `/projects/` | `src/content/projects/` |
| 知识库（Starlight） | `/docs/` | `src/content/docs/docs/` |
| 关于 | `/about/` | `src/content/spec/about.md` |
| 友链 | `/friends/` | `src/content/data/friends.json` |

站点配置集中在 `src/config.ts`（站名、导航、头像、链接、部署地址等）。

## 常用命令

```bash
pnpm install        # 安装依赖（本机需 Node >= 22.23.4）
pnpm dev            # 本地开发 http://localhost:4321
pnpm build          # 构建到 dist/（含 Pagefind 搜索索引）
pnpm preview        # 预览构建结果
pnpm new-post       # 新建一篇文章：node scripts/new-post.js
```

> 本机 Node 版本不够时，可用仓库外的隔离版本：
> `export PATH="$HOME/.workbuddy/binaries/node/versions/22.23.4/bin:$PATH"`

## 发布流程

1. 在 GitHub 上创建仓库 `faicma/leo`（公开仓库）
2. 推送代码：

   ```bash
   git remote add origin https://github.com/faicma/leo.git
   git push -u origin main
   ```

3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**
4. 之后每次 push 到 `main`，`.github/workflows/deploy.yml` 会自动构建并部署

## 待补充内容清单（placeholder）

- [ ] **个人信息**：自我介绍、头像（替换 `src/assets/images/demo-avatar.jpg`）、横幅图（`demo-banner.jpg`）
- [ ] **博客文章**：真实的学习笔记 / 随笔（现在是 3 篇模板文）
- [ ] **项目**：真实项目介绍，含截图、仓库链接、在线地址（`src/content/projects/`）
- [ ] **知识库**：学习资料、指南（`src/content/docs/docs/`，边栏配置在 `astro.config.mjs` 的 `sidebar`）
- [ ] **关于页**：自我介绍、联系方式、社交账号（`src/content/spec/about.md`）
- [ ] **MW AI Club**：社团介绍、招新方式、活动信息（散布在 about / 知识库社团手册 / 文章中）
- [ ] **评论区**（可选）：在 [giscus.app](https://giscus.app/) 用 `faicma/leo` 仓库生成配置，填回 `src/config.ts` 的 `commentConfig`
- [ ] **域名**（可选）：如需自定义域名，在仓库设置里配置并把 `src/config.ts` 的 `siteUrl`/`baseUrl` 改掉
