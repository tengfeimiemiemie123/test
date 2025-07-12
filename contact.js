// 联系表单处理
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // 添加表单验证
    addFormValidation();
});

// 处理表单提交
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // 验证表单
    if (!validateForm(data)) {
        return;
    }
    
    // 显示加载状态
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
    submitBtn.disabled = true;
    
    // 模拟发送请求
    setTimeout(() => {
        showSuccessMessage();
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// 表单验证
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('姓名至少需要2个字符');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('请输入有效的邮箱地址');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('消息至少需要10个字符');
    }
    
    if (errors.length > 0) {
        showErrorMessage(errors.join('<br>'));
        return false;
    }
    
    return true;
}

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 添加表单验证
function addFormValidation() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
    });
}

// 验证单个字段
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(field);
    
    switch (fieldName) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError(field, '姓名至少需要2个字符');
            }
            break;
        case 'email':
            if (!value || !isValidEmail(value)) {
                showFieldError(field, '请输入有效的邮箱地址');
            }
            break;
        case 'message':
            if (!value || value.length < 10) {
                showFieldError(field, '消息至少需要10个字符');
            }
            break;
    }
}

// 显示字段错误
function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #e74c3c;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    `;
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#e74c3c';
}

// 清除字段错误
function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

// 显示成功消息
function showSuccessMessage() {
    const message = `
        <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <div>
                <h3>消息发送成功！</h3>
                <p>感谢您的留言，我会尽快回复您。</p>
            </div>
        </div>
    `;
    
    showMessage(message, 'success');
}

// 显示错误消息
function showErrorMessage(message) {
    const messageHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <div>
                <h3>请检查以下错误：</h3>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    showMessage(messageHTML, 'error');
}

// 显示消息
function showMessage(messageHTML, type) {
    // 移除现有的消息
    const existingMessage = document.querySelector('.message-overlay');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建消息覆盖层
    const overlay = document.createElement('div');
    overlay.className = 'message-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    const messageContainer = document.createElement('div');
    messageContainer.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    `;
    
    messageContainer.innerHTML = messageHTML;
    
    // 添加关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '确定';
    closeBtn.style.cssText = `
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 8px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        overlay.remove();
    });
    
    messageContainer.appendChild(closeBtn);
    overlay.appendChild(messageContainer);
    document.body.appendChild(overlay);
    
    // 3秒后自动关闭成功消息
    if (type === 'success') {
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 3000);
    }
}

// 添加联系页面特定的CSS样式
const contactStyles = `
    .contact-content {
        padding: 80px 0;
        background: #fafafa;
    }
    
    .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }
    
    .contact-info {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .contact-info h2 {
        margin-bottom: 1rem;
        color: #333;
        font-weight: 600;
    }
    
    .contact-info > p {
        color: #666;
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .contact-items {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }
    
    .contact-item:hover {
        background-color: #f8f9fa;
    }
    
    .contact-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.25rem;
    }
    
    .contact-details h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: #333;
    }
    
    .contact-details p {
        color: #666;
        font-size: 0.875rem;
    }
    
    .social-contact h3 {
        margin-bottom: 1rem;
        color: #333;
        font-weight: 600;
    }
    
    .social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        color: #666;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.875rem;
    }
    
    .social-link:hover {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
        color: white;
        transform: translateY(-2px);
    }
    
    .contact-form {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .contact-form h2 {
        margin-bottom: 2rem;
        color: #333;
        font-weight: 600;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: 500;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        font-family: inherit;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #1e3a8a;
    }
    
    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }
    
    .contact-form .btn {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        margin-top: 1rem;
    }
    
    .map-section {
        padding: 80px 0;
        background: white;
    }
    
    .map-container {
        background: #f8f9fa;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .map-placeholder {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #666;
        text-align: center;
    }
    
    .map-placeholder i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ccc;
    }
    
    .map-placeholder h3 {
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    .success-message,
    .error-message {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-align: left;
    }
    
    .success-message i {
        color: #27ae60;
        font-size: 2rem;
    }
    
    .error-message i {
        color: #e74c3c;
        font-size: 2rem;
    }
    
    .success-message h3,
    .error-message h3 {
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    .success-message p,
    .error-message p {
        color: #666;
        line-height: 1.5;
    }
    
    @media (max-width: 768px) {
        .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .social-links {
            justify-content: center;
        }
        
        .contact-item {
            flex-direction: column;
            text-align: center;
        }
        
        .contact-icon {
            margin-bottom: 0.5rem;
        }
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet); 