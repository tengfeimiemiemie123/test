# 个人博客网站

一个现代化的个人博客网站，使用HTML、CSS和JavaScript构建的静态网站。

## 功能特点

### 🎨 现代化设计
- 响应式设计，适配各种设备
- 渐变色彩和动画效果
- 现代化的UI界面
- 流畅的用户体验

### 📝 博客功能
- 文章列表展示
- 分类筛选功能
- 分页导航
- 热门文章推荐
- 阅读时间显示

### 👤 个人介绍
- 个人简介和统计数据
- 技能展示（进度条）
- 职业经历时间线
- 兴趣爱好展示

### 📞 联系功能
- 联系表单
- 表单验证
- 联系信息展示
- 社交媒体链接

### 📱 响应式设计
- 移动端友好的导航菜单
- 自适应布局
- 触摸友好的交互

## 文件结构

```
mystie/
├── index.html          # 首页
├── blog.html           # 博客页面
├── about.html          # 关于页面
├── contact.html        # 联系页面
├── styles.css          # 主样式文件
├── script.js           # 主JavaScript文件
├── blog.js             # 博客页面JavaScript
├── contact.js          # 联系页面JavaScript
└── README.md           # 说明文档
```

## 页面说明

### 首页 (index.html)
- Hero区域展示个人介绍
- 最新文章预览
- 关于我的简介
- 页脚信息

### 博客页面 (blog.html)
- 文章列表展示
- 侧边栏分类筛选
- 热门文章推荐
- 分页功能

### 关于页面 (about.html)
- 个人详细介绍
- 技能展示（进度条）
- 职业经历时间线
- 兴趣爱好

### 联系页面 (contact.html)
- 联系表单
- 联系信息展示
- 社交媒体链接
- 地图占位符

## 技术栈

- **HTML5**: 语义化标签
- **CSS3**: 现代CSS特性，包括Grid、Flexbox、动画
- **JavaScript**: 原生JavaScript，无框架依赖
- **Font Awesome**: 图标库
- **Google Fonts**: 字体库

## 使用方法

1. 下载所有文件到本地目录
2. 用浏览器打开 `index.html` 即可查看网站
3. 根据需要修改内容和样式

## 自定义指南

### 修改个人信息
- 编辑各个HTML文件中的个人信息
- 更新联系信息
- 修改社交媒体链接

### 添加新文章
- 在 `blog.js` 中的 `blogPosts` 数组添加新文章
- 包含标题、摘要、分类、日期等信息

### 修改样式
- 编辑 `styles.css` 文件
- 修改颜色、字体、布局等

### 添加新页面
- 复制现有页面作为模板
- 修改内容和样式
- 更新导航链接

## 部署说明

### 本地部署
1. 将所有文件上传到Web服务器
2. 确保所有文件路径正确
3. 访问网站即可

### GitHub Pages部署
1. 创建GitHub仓库
2. 上传所有文件
3. 在仓库设置中启用GitHub Pages
4. 选择主分支作为源

### 其他静态托管服务
- Netlify
- Vercel
- Surge.sh
- 等等

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 性能优化

- 图片使用占位符，可替换为实际图片
- CSS和JavaScript文件已优化
- 响应式图片支持
- 懒加载支持（可扩展）

## 扩展功能

### 可添加的功能
- 搜索功能
- 评论系统
- 文章详情页
- 标签系统
- 归档功能
- 订阅功能
- 多语言支持

### 技术升级
- 使用静态站点生成器（如Hugo、Jekyll）
- 添加CMS支持
- 集成数据库
- 添加后端API

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 联系方式

如有问题或建议，欢迎联系：
- 邮箱: hello@example.com
- GitHub: [你的GitHub用户名]

---

**注意**: 这是一个静态网站模板，所有数据都是硬编码的。在实际使用中，你可能需要：
1. 替换占位符图片为实际图片
2. 更新个人信息和联系方式
3. 添加真实的博客文章
4. 配置表单提交功能
5. 集成地图服务 