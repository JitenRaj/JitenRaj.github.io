// API Playground Module

export function setupApiPlayground() {
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

