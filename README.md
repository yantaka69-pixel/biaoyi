# 标易 Agent

标易 Agent 是一款面向招投标场景的智能标书制作桌面工具，支持 AI 生成技术方案、图文生成、商务标、企业知识库管理、标书查重、废标项检查等功能。

支持 OpenAI like 模式的所有 AI API，也支持 ollama、lm studio 等接入本地模型。

## 核心功能

- **AI 写标书**：AI 生成技术方案、目录、正文，支持全文一致性检查
- **图文与图表**：支持 Mermaid 预览、正文配图和图表转 Word
- **知识库复用**：沉淀企业资料、历史案例和方案素材
- **风险检查**：标书查重、废标项检查、错别字检查、逻辑谬误分析
- **本地桌面工作区**：配置、缓存和生成结果保存在本机
- **后台任务恢复**：解析、生成等耗时任务持续落盘，切换页面后仍可恢复进度
- **插件系统**：支持插件扩展
- **多方式文档解析**：支持本地解析与 MinerU 解析配置

## 已完成功能

- 招标文件解析（18个解析项）
- 已有方案扩写
- 多标段支持
- 多阶段投标支持
- 导出格式设置（有预设模版）
- AI 生成图片
- Mermaid 图片渲染
- HTML 绘图
- 字数无上限
- 全局事实设定
- 全文一致性检查
- 本地知识库
- 多份标书查重
- 废标项检查
- 错别字检查
- 逻辑谬误分析
- 语义化修改生成结果
- 插件系统
- 开放 API
- 投标资源下载

## 本地开发调试

桌面客户端代码位于 `client/`，建议使用 Node.js 22；调试 Open XML 功能或本地打包还需要安装 .NET 10 SDK。

### 安装与启动

```bash
cd client
npm ci
npm run dev
```

Pi Agent SDK 及所需命令工具已随项目提供，无需单独安装。

### 构建与打包

```bash
cd client
npm run build       # TypeScript 检查与 Vite 构建
npm run dist:win    # Windows x64 安装包和 ZIP
npm run dist:mac    # macOS DMG 和 ZIP
```

打包产物位于 `client/release/`。

## 技术架构

- **桌面端**：Electron Main / Preload 提供本地能力，Renderer 通过 `window.biaoyi` 调用
- **界面层**：Vite + React + TypeScript，使用全局 CSS 和 Radix UI
- **数据与任务**：配置保存在本地文件，业务状态存入 SQLite；耗时任务在 Main 后台运行并支持恢复
- **AI 与 Agent**：AI Service 统一管理模型请求，Pi Agent 使用独立 Runtime / Session 执行智能体任务
- **文档与在线服务**：支持本地或 MinerU 解析、Open XML 和本地图片渲染；Cloudflare Worker 提供公告、资源、插件、模型信息、许可证及统计服务

### 项目结构

```
标易 Agent/
├── client/                    # Electron 桌面客户端
│   ├── electron/              # Main、Preload、IPC 与本地服务
│   ├── src/                   # Renderer 应用源码
│   │   ├── app/               # 路由、菜单与全局 Provider
│   │   ├── components/        # 应用壳层组件
│   │   ├── features/          # 各业务功能模块
│   │   ├── shared/            # 通用类型、UI 与工具函数
│   │   └── styles/            # 全局样式与设计变量
│   ├── scripts/               # 构建、资源准备与校验脚本
│   ├── vendor/agent-tools/    # 各平台 Pi Agent 命令工具
│   ├── assets/                # 客户端图标与静态资源
│   └── package.json           # 客户端依赖和打包配置
├── openxmlhelper/             # .NET 10 Word / Open XML 助手
│   └── src/OpenXmlHelper/     # 助手程序源码
├── analytics/                 # Cloudflare 在线服务
│   ├── worker/                # API、聚合任务与存储逻辑
│   └── dashboard/             # 管理后台
├── sql/
│   └── workspace_schema.sql   # 工作区 SQLite 目标结构
├── .github/workflows/         # CI 与客户端发布流程
└── README.md                  # 中文项目说明
```

## 许可证

本项目基于 [GNU Affero General Public License v3.0](LICENSE) 开源协议发布。
