// Particles Module

export function setupParticles() {
    if (!window.particlesJS) return;

    window.particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#06b6d4"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.3,
                "random": false,
            },
            "size": {
                "value": 2,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2563eb",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.6
                    }
                }
            }
        },
        "retina_detect": true
    });
}