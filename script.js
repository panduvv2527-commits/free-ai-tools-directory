// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const toolsList = document.getElementById('toolsList');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayTools(aiTools);
});

// Debounce helper so filtering doesn't run on every single keystroke
function debounce(fn, delay = 150) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Search and filter functionality
searchInput.addEventListener('input', debounce(filterTools));
categoryFilter.addEventListener('change', filterTools);

function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = aiTools.filter(tool => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory =
            selectedCategory === '' || tool.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayTools(filtered);
}

// Basic HTML escaping so tool data can never break out of markup,
// even if it's later sourced from a form, CMS, or API instead of a static file.
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function displayTools(tools) {
    if (tools.length === 0) {
        toolsList.innerHTML = '<div class="no-results">No AI tools found. Try different search terms!</div>';
        return;
    }

    toolsList.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${escapeHtml(tool.name)}</div>
            <div class="tool-category">${escapeHtml(tool.category.replace(/-/g, ' ').toUpperCase())}</div>
            <p class="tool-description">${escapeHtml(tool.description)}</p>
            <a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer" class="tool-link">Visit Website</a>
        </div>
    `).join('');
}
