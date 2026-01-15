// Render Projects Data

import { projects } from '../data/projects.js';
import { createProjectCard } from '../modules/projectCard.js';
import { initLeapfrogScroll } from '../utils/leapfrogScroll.js';

export function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    // Setup Container
    container.className = 'relative w-full bg-slate-900 py-10 overflow-hidden group';
    container.innerHTML = ''; 

    // Create the "Track"
    const track = document.createElement('div');
    // NOTE: Removed 'transition-transform' classes here because JS handles the movement.
    // Kept all layout/visual classes.
    track.className = 'flex gap-8 px-4 w-max will-change-transform';
    
    // Ensure we have enough items for infinite scroll (Duplicate list if short)
    let displayProjects = [...projects];
    while (displayProjects.length < 8) { 
        displayProjects = [...displayProjects, ...projects];
    }

    displayProjects.forEach(project => {
        const item = createProjectCard(project);
        track.appendChild(item);
    });

    // Buttons
    const btnClass = "absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-800/80 border border-slate-600 text-white rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg backdrop-blur-sm hidden md:flex opacity-0 group-hover:opacity-100 cursor-pointer";
    
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = `<i data-lucide="chevron-left" width="24"></i>`;
    prevBtn.className = `${btnClass} left-4`;
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = `<i data-lucide="chevron-right" width="24"></i>`;
    nextBtn.className = `${btnClass} right-4`;

    container.appendChild(track);
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    // Initialize the Logic
    // We use a slight delay to ensure the DOM is fully painted before measuring width
    requestAnimationFrame(() => {
        initLeapfrogScroll(container, track, prevBtn, nextBtn);
    });
}


/*
import { projects } from '../data/projects.js';

export function renderProjects() {
    const container = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const tags = project.tags.map(tag => 
            `<span class="text-xs font-semibold bg-${project.tagColor}-900 text-${project.tagColor}-200 px-2 py-1 rounded">${tag}</span>`
        ).join('');

        const html = `
            <div class="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl border border-slate-700">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold text-white">${project.title}</h3>
                        <i data-lucide="${project.icon}" class="${project.iconColor}" width="24" height="24"></i>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${tags}
                    </div>
                    <p class="text-slate-300 mb-6 leading-relaxed">
                        ${project.desc}
                    </p>
                    <a href="#" class="inline-flex items-center ${project.linkColor} font-medium">
                        ${project.linkText} <i data-lucide="external-link" class="ml-2" width="16"></i>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}
    
*/