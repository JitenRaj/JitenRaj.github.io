// Render Skills Data

import { skills } from '../data/skills.js';

export function renderSkills() {
    const categories = [
        { key: 'languages', title: 'Languages', icon: 'terminal', color: 'text-blue-600' },
        { key: 'frameworks', title: 'Frameworks', icon: 'layers', color: 'text-green-600' },
        { key: 'databases', title: 'Databases', icon: 'database', color: 'text-purple-600' },
        { key: 'tools', title: 'Tools & CI/CD', icon: 'server', color: 'text-orange-600' }
    ];

    const container = document.getElementById('skills-grid');
    
    categories.forEach(cat => {
        const skillItems = skills[cat.key].map(skill => `
            <div class="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <img src="${skill.icon}" alt="${skill.name}" class="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span class="text-slate-700 font-medium text-sm group-hover:text-blue-700">${skill.name}</span>
            </div>
        `).join('');

        const cardHtml = `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                    <div class="p-2 bg-slate-50 rounded-lg"><i data-lucide="${cat.icon}" class="${cat.color}"></i></div>
                    <h3 class="text-xl font-bold text-slate-800">${cat.title}</h3>
                </div>
                <div class="flex flex-wrap gap-3">
                    ${skillItems}
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

