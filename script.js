import { skills, experience, projects } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Render Skills
    renderSkills();

    // 3. Render Experience
    renderExperience();

    // 4. Render Projects
    renderProjects();

    // 5. Setup Scroll Spy & Navigation
    setupNavigation();

    // 6. Setup API Playground
    setupApiPlayground();

    // 7. Setup Contact Form Submission
    setupContactForm();

    // Re-initialize icons after dynamic content injection
    lucide.createIcons();
});

function renderSkills() {
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

function renderExperience() {
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

function renderProjects() {
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

function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            // Change icon to X (needs re-render or manual SVG replacement)
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Mobile Menu Link Clicks
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Desktop Menu Link Clicks
    document.querySelectorAll('.desktop-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Scroll Spy
    window.addEventListener('scroll', () => {
        const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                // Update active state
                document.querySelectorAll('.desktop-link').forEach(link => {
                    link.classList.remove('text-blue-700', 'border-b-2', 'border-blue-700');
                    link.classList.add('text-slate-600');
                    
                    if(link.getAttribute('href') === `#${section}`) {
                        link.classList.remove('text-slate-600');
                        link.classList.add('text-blue-700', 'border-b-2', 'border-blue-700');
                    }
                });
            }
        });
    });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function setupApiPlayground() {
    const btn = document.getElementById('api-play-btn');
    const contentArea = document.getElementById('api-content-area');

    // Templates
    const loadingTemplate = `
        <div class="space-y-2 animate-pulse pt-4">
            <div class="h-4 bg-slate-800 rounded w-3/4"></div>
            <div class="h-4 bg-slate-800 rounded w-1/2"></div>
            <div class="h-4 bg-slate-800 rounded w-5/6"></div>
            <div class="h-4 bg-slate-800 rounded w-2/3"></div>
        </div>
    `;

    const successTemplate = `
        <div class="animate-fade-in">
            <div class="text-green-400 mb-2">HTTP/1.1 200 OK</div>
            <div class="text-purple-400">{</div>
            <div class="pl-4">
                <span class="text-blue-400">"name"</span>: <span class="text-orange-300">"Jitendra Singh"</span>,
            </div>
            <div class="pl-4">
                <span class="text-blue-400">"role"</span>: <span class="text-orange-300">"Backend Developer"</span>,
            </div>
            <div class="pl-4">
                <span class="text-blue-400">"experience"</span>: <span class="text-orange-300">"2+ Years"</span>,
            </div>
            <div class="pl-4">
                <span class="text-blue-400">"specialties"</span>: [
            </div>
            <div class="pl-8 text-orange-300">
                "Java", "Spring Boot", "DSA", "DBMS", "Microservices", "High-Scale APIs"
            </div>
            <div class="pl-4">],</div>
            <div class="pl-4">
                <span class="text-blue-400">"hireable"</span>: <span class="text-red-400">true</span>
            </div>
            <div class="text-purple-400">}</div>
        </div>
    `;

    btn.addEventListener('click', () => {
        // Set loading state
        contentArea.innerHTML = loadingTemplate;
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        // Simulate network request
        setTimeout(() => {
            contentArea.innerHTML = successTemplate;
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 800);
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');
    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Basic Client-Side Validation
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        
        // Simple Regex for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(object.email)) {
            showResult('Please enter a valid email address.', 'text-red-600');
            return;
        }

        // 2. Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        `;
        result.classList.add('hidden');

        // 3. Send Data to Web3Forms
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Success
                showResult('Message sent successfully! I will get back to you soon.', 'text-green-600');
                form.reset();
            } else {
                // Error from server
                console.log(response);
                showResult(json.message || 'Something went wrong.', 'text-red-600');
            }
        })
        .catch(error => {
            // Network Error
            console.log(error);
            showResult('Failed to send message. Please try again later.', 'text-red-600');
        })
        .finally(() => {
            // Reset Button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Re-render icons since we overwrote HTML
            if(window.lucide) window.lucide.createIcons();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                result.classList.add('hidden');
            }, 5000);
        });
    });

    function showResult(message, colorClass) {
        result.innerHTML = message;
        result.className = `text-center text-sm font-medium mt-3 ${colorClass}`;
        result.classList.remove('hidden');
    }
}