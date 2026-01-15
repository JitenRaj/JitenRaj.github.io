// Main App

// themes
import { initTheme, setupThemeToggle } from './utils/theme.js';
import { setupParticles } from './modules/setupParticles.js';

// renderers
import { renderSkills } from './renderers/renderSkills.js';
import { renderExperience } from './renderers/renderExperience.js';
import { renderProjects } from './renderers/renderProjects.js';

// modules
import { setupNavigation } from './modules/navigation.js';
import { setupApiPlayground } from './modules/apiPlayground.js';
import { setupContactForm } from './modules/contactForm.js';

// Run immediate check (Runs before HTML is fully loaded to prevent flash)
initTheme();

document.addEventListener('DOMContentLoaded', () => {
    // theme toggle button
    setupThemeToggle();

    // Initialize Lucide Icons
    if(window.lucide) window.lucide.createIcons();

    //// Initialize Particles
    setupParticles();

    // Render Dynamic Content
    renderSkills();
    renderExperience();
    renderProjects();

    // Setup Logic
    setupNavigation();
    setupApiPlayground();
    setupContactForm();

    // Re-initialize icons (Because render functions added new icons)
    if(window.lucide) window.lucide.createIcons();
});