#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 文章生成器
function generateArticle(title, slug, date, readTime) {
    const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
    
    // 替换模板中的占位符
    let article = template
        .replace(/文章标题/g, title)
        .replace(/发布日期/g, date)
        .replace(/阅读时间/g, readTime)
        .replace(/这是文章的正文内容\.\.\./g, '在这里添加你的文章内容...');
    
    // 确保移除任何内联样式
    article = article.replace(/<style>[\s\S]*?<\/style>/g, '');
    
    // 生成文件名
    const filename = `${slug}.html`;
    const filepath = path.join(__dirname, filename);
    
    // 写入文件
    fs.writeFileSync(filepath, article, 'utf8');
    
    console.log(`✅ 文章已生成: ${filename}`);
    console.log(`📝 标题: ${title}`);
    console.log(`📅 日期: ${date}`);
    console.log(`⏱️  阅读时间: ${readTime}`);
    console.log(`🔗 文件路径: ${filepath}`);
    console.log('\n💡 提示:');
    console.log('1. 编辑生成的文件，添加你的文章内容');
    console.log('2. 更新文章导航链接（上一篇/下一篇）');
    console.log('3. 在 blog.js 中添加文章数据');
}

// 命令行参数处理
const args = process.argv.slice(2);

if (args.length < 4) {
    console.log('📝 Blog 文章生成器');
    console.log('');
    console.log('使用方法:');
    console.log('node generate-article.js "文章标题" "slug" "发布日期" "阅读时间"');
    console.log('');
    console.log('示例:');
    console.log('node generate-article.js "我的新文章" "my-new-article" "2024年1月20日" "10分钟"');
    process.exit(1);
}

const [title, slug, date, readTime] = args;

try {
    generateArticle(title, slug, date, readTime);
} catch (error) {
    console.error('❌ 生成文章时出错:', error.message);
    process.exit(1);
} 