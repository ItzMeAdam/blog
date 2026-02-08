// Comment Form Handling
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Load comments from localStorage
let comments = JSON.parse(localStorage.getItem('blogComments')) || [];

// Display stored comments
function displayComments() {
    // Clear sample comments on first real comment
    if (comments.length > 0) {
        commentsList.innerHTML = '';
    }
    
    comments.forEach(comment => {
        const commentEl = createCommentElement(comment);
        commentsList.appendChild(commentEl);
    });
}

// Create comment element
function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.style.animation = 'fadeIn 0.5s ease-out';
    
    const date = new Date(comment.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    
    div.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${escapeHtml(comment.name)}</span>
            <span class="comment-date">${date}</span>
        </div>
        <p class="comment-text">${escapeHtml(comment.text)}</p>
    `;
    
    return div;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle form submission
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const commentText = document.getElementById('comment').value.trim();
    
    if (name && commentText) {
        const newComment = {
            name: name,
            text: commentText,
            date: new Date().toISOString()
        };
        
        // Add to beginning of array (newest first)
        comments.unshift(newComment);
        
        // Save to localStorage
        localStorage.setItem('blogComments', JSON.stringify(comments));
        
        // Add to display
        const commentEl = createCommentElement(newComment);
        commentsList.insertBefore(commentEl, commentsList.firstChild);
        
        // Clear form
        commentForm.reset();
        
        // Show success message
        showSuccessMessage();
    }
});

// Show success message
function showSuccessMessage() {
    const button = commentForm.querySelector('.submit-btn');
    const originalText = button.textContent;
    
    button.textContent = '✓ Comment Posted!';
    button.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #ff7e5f 100%)';
    }, 2000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load comments on page load
displayComments();
