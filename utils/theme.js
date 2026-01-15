// Themes Utility

export function initTheme() {
    // Check preference
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Update images immediately on load
    updateStatsImages(); 
}

export function toggleTheme() {
    const html = document.documentElement;
    const themeBtnIcon = document.getElementById('theme-toggle-icon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        if(themeBtnIcon) themeBtnIcon.setAttribute('data-lucide', 'moon');
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        if(themeBtnIcon) themeBtnIcon.setAttribute('data-lucide', 'sun');
    }

    if (window.lucide) window.lucide.createIcons();
    
    // Update images whenever toggled
    updateStatsImages(); 
}

export function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    const themeBtnIcon = document.getElementById('theme-toggle-icon');
    
    if (!btn) return;

    const isDark = document.documentElement.classList.contains('dark');
    if(themeBtnIcon) {
        themeBtnIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
}


function updateStatsImages() {
    const isDark = document.documentElement.classList.contains('dark');

    // GitHub Stats
    const ghStats = document.querySelector('img[src*="github-readme-stats"]');
    if (ghStats) {
        try {
            const url = new URL(ghStats.src);
            if (isDark) {
                url.searchParams.set('theme', 'transparent');
                url.searchParams.set('title_color', 'e2e8f0');
                url.searchParams.set('text_color', '94a3b8');
                url.searchParams.set('icon_color', '60a5fa');
                url.searchParams.set('bg_color', '0f172a');
            } else {
                url.searchParams.set('theme', 'transparent');
                url.searchParams.delete('title_color');
                url.searchParams.delete('text_color');
                url.searchParams.delete('icon_color');
                url.searchParams.delete('bg_color');
            }
            ghStats.src = url.toString();
        } catch (e) { console.error(e); }
    }

    // LeetCode Stats
    const leetCard = document.querySelector('img[src*="leetcard"]');
    if (leetCard) {
        try {
            const url = new URL(leetCard.src);
            
            url.searchParams.set('theme', isDark ? 'dark' : 'light');
            
            leetCard.src = url.toString();
        } catch (e) { console.error(e); }
    }
}
