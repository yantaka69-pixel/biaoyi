# BiaoYi Agent

BiaoYi Agent is an intelligent bid document creation desktop tool for tendering and bidding scenarios. It supports AI-generated technical proposals, image-and-text generation, commercial bid support, enterprise knowledge base management, duplicate checking, rejection-risk checks, and more.

It supports all OpenAI-compatible AI APIs, as well as local models through Ollama, LM Studio, and similar tools.

## Features

- **AI Proposal Writing**: AI generates technical proposals, outlines, and full content with full-document consistency checks
- **Images & Diagrams**: Supports Mermaid preview, generated illustrations, and diagram conversion for Word export
- **Knowledge Base Reuse**: Store company materials, historical cases, and proposal assets
- **Risk Checks**: Duplicate checking, rejection-risk checks, typo checking, and logical fallacy analysis
- **Local Desktop Workspace**: Configurations, caches, and generated results are stored locally
- **Background Task Recovery**: Long-running parsing and generation tasks are persisted
- **Plugin System**: Extensible through plugins
- **Multiple Parsing Options**: Supports local parsing and MinerU parser configuration

## Local Development

The desktop client lives under `client/`. Node.js 22 is recommended. The .NET 10 SDK is also required to debug Open XML features or build local packages.

### Install and Run

```bash
cd client
npm ci
npm run dev
```

### Build and Package

```bash
cd client
npm run build       # TypeScript checks and Vite build
npm run dist:win    # Windows x64 installer and ZIP
npm run dist:mac    # macOS DMG and ZIP
```

Packaging artifacts are written to `client/release/`.

## Technical Architecture

- **Desktop**: Electron Main / Preload provides local capabilities, which the Renderer accesses through `window.biaoyi`.
- **UI**: Vite + React + TypeScript with global CSS and Radix UI.
- **Data and Tasks**: Configuration is stored in local files and business state in SQLite. Long-running tasks execute in the Main process and can be resumed.
- **AI and Agent**: AI Service manages model requests, while Pi Agent runs agent tasks in independent Runtime / Session instances.

## License

This project is released under the [GNU Affero General Public License v3.0](LICENSE).
