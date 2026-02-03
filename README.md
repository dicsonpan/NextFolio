# Portfolio Pro - 个人简历与作品集展示系统

这是一个基于 **React**、**TypeScript** 和 **Tailwind CSS** 构建的高性能个人简历网站。项目采用了现代化架构，包含**对公众展示的前端页面**以及**管理内容的后台仪表盘**。

![Project Preview](https://picsum.photos/seed/project1/800/400) <!-- 建议您后续替换为实际截图 -->

## ✨ 核心功能

### 🖥️ 前端展示 (Public Portfolio)
- **极简深色美学**: 采用 Zinc 色系的高级深色模式设计，视觉体验舒适且专业。
- **个人信息区**: 展示头像、职位、简介及 GitHub/LinkedIn 等社交链接。
- **工作经历时间轴**: 清晰展示职业生涯节点与成就。
- **项目展示网格**: 图文并茂地展示个人作品，支持标签分类和外部链接。
- **技能可视化**: 直观展示技术栈掌握程度。
- **完全响应式**: 完美适配手机、平板和桌面端设备。

### ⚙️ 后台管理 (Admin Dashboard)
- **可视化编辑**: 无需修改代码，直接在后台录入和修改个人信息、工作经历、项目和技能。
- **实时预览**: 后台修改的数据会立即反映在前端页面。
- **数据持久化**: 
  - **演示模式**: 默认使用浏览器 `LocalStorage`，开箱即用，数据不丢失。
  - **生产模式**: 代码结构已预留 `Supabase` 接口，配置 API Key 后可无缝切换至云端数据库。

## 🛠 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **样式方案**: Tailwind CSS
- **路由管理**: React Router DOM (Hash Mode)
- **图标库**: Lucide React
- **数据层**: Service Pattern (抽象了 LocalStorage 与 Supabase 的实现)

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/portfolio-pro.git
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **使用指南**
   - **前端首页**: 访问 `http://localhost:5173/`
   - **后台管理**: 点击导航栏的 "Admin" 按钮或访问 `http://localhost:5173/#/admin`

## 📝 自定义配置

### 切换到 Supabase (可选)
如果您希望数据存储在云端，请按照以下步骤操作：

1. 在 [Supabase](https://supabase.com) 创建项目。
2. 创建 `profile`, `experiences`, `projects`, `skills` 表。
3. 在 `constants.ts` 文件中填入您的 Supabase URL 和 Key：
   ```typescript
   export const SUPABASE_URL = 'your-project-url';
   export const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

## 📄 许可证

MIT License
