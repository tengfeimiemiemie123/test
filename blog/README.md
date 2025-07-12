# Blog 文章管理

这个文件夹用于存放所有独立的blog文章页面。

## 文件结构

```
blog/
├── README.md                    # 说明文档
├── template.html                # 文章模板
├── web-development-trends-2024.html  # 示例文章
└── [其他文章文件...]
```

## 文章命名规范

- 文件名使用英文，用连字符分隔单词
- 文件名应该简洁明了，反映文章内容
- 例如：`web-development-trends-2024.html`

## 文章模板使用

每篇新文章都应该基于 `template.html` 创建，包含以下部分：

### 1. 页面头部信息
```html
<title>文章标题 - 我的个人博客</title>
```

### 2. 文章头部
```html
<section class="article-header">
    <div class="container">
        <h1>文章标题</h1>
        <div class="article-meta">
            <span><i class="fas fa-calendar"></i> 发布日期</span>
            <span><i class="fas fa-clock"></i> 阅读时间</span>
            <span><i class="fas fa-tag"></i> 分类</span>
        </div>
    </div>
</section>
```

### 3. 文章内容
```html
<section class="article-content">
    <div class="container">
        <article class="article-body">
            <!-- 文章内容 -->
        </article>
    </div>
</section>
```

### 4. 文章导航
```html
<section class="article-navigation">
    <div class="container">
        <div class="nav-links">
            <a href="previous-article.html" class="nav-link">
                <i class="fas fa-chevron-left"></i>
                <span>上一篇</span>
            </a>
            <a href="next-article.html" class="nav-link">
                <span>下一篇</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>
        <div class="back-to-blog">
            <a href="../blog.html">
                <i class="fas fa-arrow-left"></i>
                返回博客列表
            </a>
        </div>
    </div>
</section>
```

## 样式特性

每篇文章页面都包含以下样式特性：

- ✅ 响应式设计，适配各种屏幕尺寸
- ✅ 优雅的排版和间距
- ✅ 代码高亮显示
- ✅ 引用块样式
- ✅ 文章导航功能
- ✅ 返回博客列表按钮
- ✅ 统一的配色方案

## 添加新文章步骤

1. 复制 `template.html` 文件
2. 重命名为新的文件名（如：`my-new-article.html`）
3. 修改页面标题和文章内容
4. 更新文章元信息（日期、阅读时间等）
5. 更新导航链接（上一篇/下一篇）
6. 在 `blog.js` 中添加文章数据（包括slug字段）

## 注意事项

- 所有文章都使用相对路径引用CSS和JS文件
- 文章内容支持HTML标签，包括代码块、列表、引用等
- 确保文章内容的质量和可读性
- 定期更新文章导航链接 