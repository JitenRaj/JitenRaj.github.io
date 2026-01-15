// Navigation Module

import {scrollToSection} from '../utils/scrollToSection.js';

export function setupNavigation() {
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