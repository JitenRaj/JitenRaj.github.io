export function createProjectCard(project) {
    const tags = project.tags.map(tag => 
        `<span class="text-xs font-semibold bg-${project.tagColor}-900 text-${project.tagColor}-200 px-2 py-1 rounded border border-${project.tagColor}-700">${tag}</span>`
    ).join('');

    // Check if URL exists
    const hasUrl = project.url && project.url !== "#" && project.url.trim() !== "";
    
    let actionButtonHtml;

    if (hasUrl) {
        // CASE 1: Active Link
        actionButtonHtml = `
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center ${project.linkColor} font-medium mt-auto group-hover:underline">
                ${project.linkText} <i data-lucide="external-link" class="ml-2 transition-transform group-hover:translate-x-1" width="16"></i>
            </a>
        `;
    } else {
        // CASE 2: No URL ("Not Hosted")
        actionButtonHtml = `
            <span class="inline-flex items-center text-slate-500 cursor-not-allowed font-medium mt-auto">
                Not Hosted <i data-lucide="cloud-off" class="ml-2" width="16"></i>
            </span>
        `;
    }

    const div = document.createElement('div');
    div.className = 'flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]';
    
    div.innerHTML = `
        <div class="h-full bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl border border-slate-700 flex flex-col">
            <div class="p-8 flex flex-col h-full">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl font-bold text-white">${project.title}</h3>
                    <i data-lucide="${project.icon}" class="${project.iconColor}" width="24" height="24"></i>
                </div>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${tags}
                </div>
                <p class="text-slate-300 mb-6 leading-relaxed flex-grow">
                    ${project.desc}
                </p>
                
                ${actionButtonHtml}

            </div>
        </div>
    `;
    return div;
}