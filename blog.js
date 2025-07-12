// 博客文章数据
const blogPosts = [
    {
        id: 1,
        title: "对普通女性来说，生孩子有什么好处？",
        excerpt: "去年年初我做了一个体检，发现自己的子宫衰退得很严重。医生建议尽快考虑生育问题。作为一个快35岁的普通打工人，我开始严肃思考：到底要不要生孩子呢？",
        category: "all",
        date: "2024年1月20日",
        image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=生活",
        readTime: "8分钟",
        slug: "childbirth-benefits-for-women"
    },
    {
        id: 2,
        title: "现代Web开发技术趋势",
        excerpt: "探讨2024年Web开发领域的最新趋势，包括前端框架、后端技术和开发工具的发展方向。从React、Vue到Next.js，从微服务到Serverless，我们将深入分析这些技术的应用场景和未来发展方向。",
        category: "all",
        date: "2024年1月15日",
        image: "https://via.placeholder.com/400x250/667eea/ffffff?text=技术",
        readTime: "8分钟",
        slug: "web-development-trends-2024"
    },
    {
        id: 3,
        title: "如何保持工作与生活的平衡",
        excerpt: "在快节奏的现代社会中，如何找到工作与生活之间的平衡点，让每一天都充满意义。本文将分享一些实用的方法和技巧，帮助你在忙碌的工作中找到属于自己的生活节奏。",
        category: "all",
        date: "2024年1月10日",
        image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=生活",
        readTime: "6分钟",
        slug: "work-life-balance"
    },
    {
        id: 4,
        title: "人工智能时代的思考",
        excerpt: "随着AI技术的快速发展，我们需要重新思考人类在技术发展中的角色和未来。从ChatGPT到自动驾驶，AI正在改变我们的生活方式和工作方式。",
        category: "all",
        date: "2024年1月5日",
        image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=思考",
        readTime: "10分钟",
        slug: "ai-era-thinking"
    },
    {
        id: 5,
        title: "React 18新特性详解",
        excerpt: "React 18带来了许多激动人心的新特性，包括并发渲染、自动批处理、Suspense改进等。本文将详细介绍这些新特性的使用方法和最佳实践。",
        category: "all",
        date: "2024年1月3日",
        image: "https://via.placeholder.com/400x250/667eea/ffffff?text=React",
        readTime: "12分钟",
        slug: "react-18-features"
    },
    {
        id: 5,
        title: "我的读书心得",
        excerpt: "最近读了几本好书，想和大家分享一下我的读书心得。从技术书籍到文学经典，每一本书都给我带来了不同的启发和思考。",
        category: "all",
        date: "2024年1月1日",
        image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=读书",
        readTime: "5分钟",
        slug: "reading-notes"
    },
    {
        id: 6,
        title: "TypeScript高级技巧",
        excerpt: "TypeScript作为JavaScript的超集，提供了强大的类型系统。本文将分享一些高级的TypeScript技巧，帮助你写出更安全、更易维护的代码。",
        category: "all",
        date: "2023年12月28日",
        image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=TypeScript",
        readTime: "15分钟",
        slug: "typescript-advanced-tips"
    },
    {
        id: 7,
        title: "旅行中的思考",
        excerpt: "最近去了一趟旅行，在旅途中有了很多新的思考和感悟。有时候，离开熟悉的环境，反而能让我们更清楚地认识自己。",
        category: "all",
        date: "2023年12月25日",
        image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=旅行",
        readTime: "7分钟",
        slug: "travel-thoughts"
    },
    {
        id: 8,
        title: "代码重构的艺术",
        excerpt: "代码重构是每个开发者都应该掌握的重要技能。本文将分享一些重构的最佳实践和技巧，帮助你写出更优雅、更易维护的代码。",
        category: "all",
        date: "2023年12月20日",
        image: "https://via.placeholder.com/400x250/667eea/ffffff?text=重构",
        readTime: "11分钟",
        slug: "code-refactoring-art"
    }
];

// 分页配置
const postsPerPage = 6;
let currentPage = 1;
let currentCategory = 'all';

// 获取文章列表
function getPosts(category = 'all', page = 1) {
    let filteredPosts = blogPosts;
    
    if (category !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    
    return {
        posts: filteredPosts.slice(startIndex, endIndex),
        total: filteredPosts.length,
        totalPages: Math.ceil(filteredPosts.length / postsPerPage)
    };
}

// 渲染文章卡片
function renderPostCard(post) {
    return `
        <article class="post-card" data-category="${post.category}">
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-category">${getCategoryName(post.category)}</span>
                    <span class="post-read-time">${post.readTime}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="blog/${post.slug}.html" class="read-more">阅读更多 <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `;
}

// 获取分类名称
function getCategoryName(category) {
    return '全部';
}

// 渲染文章列表
function renderPosts(category = 'all', page = 1) {
    const { posts, total, totalPages } = getPosts(category, page);
    const postsGrid = document.getElementById('postsGrid');
    
    if (posts.length === 0) {
        postsGrid.innerHTML = `
            <div class="no-posts">
                <i class="fas fa-search"></i>
                <h3>没有找到相关文章</h3>
                <p>请尝试其他分类或关键词</p>
            </div>
        `;
        return;
    }
    
    postsGrid.innerHTML = posts.map(renderPostCard).join('');
    renderPagination(totalPages, page);
}

// 渲染分页
function renderPagination(totalPages, currentPage) {
    const paginationNumbers = document.getElementById('paginationNumbers');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 更新按钮状态
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // 生成分页数字
    let paginationHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-number ${i === currentPage ? 'active' : ''}" 
                    data-page="${i}">${i}</button>
        `;
    }
    
    paginationNumbers.innerHTML = paginationHTML;
    
    // 添加分页点击事件
    document.querySelectorAll('.pagination-number').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            currentPage = page;
            renderPosts(currentCategory, page);
        });
    });
}

// 分类筛选
function initCategoryFilter() {
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 更新活动状态
            document.querySelectorAll('.category-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // 更新当前分类和页码
            currentCategory = link.dataset.category;
            currentPage = 1;
            
            // 重新渲染文章
            renderPosts(currentCategory, currentPage);
        });
    });
}

// 分页按钮事件
function initPaginationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPosts(currentCategory, currentPage);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const { totalPages } = getPosts(currentCategory, currentPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderPosts(currentCategory, currentPage);
        }
    });
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(currentCategory, currentPage);
    initCategoryFilter();
    initPaginationButtons();
});

// 添加博客页面特定的CSS样式
const blogStyles = `
    .page-header {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        color: white;
        padding: 120px 0 60px;
        text-align: center;
    }
    
    .page-header h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    .page-header p {
        font-size: 1.25rem;
        opacity: 0.9;
    }
    
    .blog-content {
        padding: 60px 0;
        background: #fafafa;
    }
    
    .blog-layout {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 3rem;
    }
    
    .sidebar {
        position: sticky;
        top: 100px;
        height: fit-content;
    }
    
    .sidebar-widget {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .sidebar-widget h3 {
        margin-bottom: 1rem;
        color: #333;
        font-weight: 600;
    }
    
    .category-list {
        list-style: none;
    }
    
    .category-list li {
        margin-bottom: 0.5rem;
    }
    
    .category-link {
        display: block;
        padding: 0.5rem 1rem;
        color: #666;
        text-decoration: none;
        border-radius: 6px;
        transition: all 0.3s ease;
    }
    
    .category-link:hover,
    .category-link.active {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        color: white;
    }
    
    .popular-posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .popular-post {
        display: flex;
        gap: 1rem;
        padding: 0.5rem;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }
    
    .popular-post:hover {
        background-color: #f5f5f5;
    }
    
    .popular-post img {
        width: 80px;
        height: 60px;
        object-fit: cover;
        border-radius: 6px;
    }
    
    .popular-post h4 {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
        color: #333;
    }
    
    .popular-post .post-date {
        font-size: 0.75rem;
        color: #666;
    }
    
    .main-content {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .post-read-time {
        background: #f0f0f0;
        color: #666;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
    }
    
    .pagination-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid #667eea;
        background: transparent;
        color: #667eea;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    
    .pagination-btn:hover:not(:disabled) {
        background: #1e3a8a;
        color: white;
    }
    
    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .pagination-numbers {
        display: flex;
        gap: 0.5rem;
    }
    
    .pagination-number {
        width: 40px;
        height: 40px;
        border: 2px solid #e0e0e0;
        background: white;
        color: #666;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    
    .pagination-number:hover {
        border-color: #1e3a8a;
        color: #1e3a8a;
    }
    
    .pagination-number.active {
        background: #1e3a8a;
        color: white;
        border-color: #1e3a8a;
    }
    
    .no-posts {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-posts i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ccc;
    }
    
    .no-posts h3 {
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    @media (max-width: 768px) {
        .blog-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .sidebar {
            position: static;
        }
        
        .page-header h1 {
            font-size: 2rem;
        }
        
        .posts-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = blogStyles;
document.head.appendChild(styleSheet); 