// Render Experience Data

import { experience } from '../data/experience.js';

export function renderExperience() {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';

    experience.forEach(job => {
        const listItems = job.achievements.map(item => `<li>${item}</li>`).join('');

        const html = `
            <div class="relative md:flex items-start group">
                
                <div class="absolute -left-10 md:left-1/2 transform md:-translate-x-1/2 mt-1">
                    <div class="w-6 h-6 rounded-full border-4 border-white bg-blue-600 shadow-md"></div>
                </div>

                <div class="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h3 class="text-xl font-bold text-slate-900">${job.role}</h3>
                    <div class="text-blue-700 font-semibold mb-1">${job.company}</div>
                    <div class="text-slate-500 text-sm font-medium bg-slate-100 inline-block px-3 py-1 rounded-full mt-2">
                        ${job.period}
                    </div>
                </div>

                <div class="md:w-1/2 md:pl-12">
                    <ul class="space-y-3 text-slate-600 list-disc marker:text-blue-500">
                        ${listItems}
                    </ul>
                </div>
            </div>
        `;

        container.innerHTML += html;
    });
}