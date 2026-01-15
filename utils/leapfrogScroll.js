// Leapfrog Scrolling for Projects

export function initLeapfrogScroll(container, track, prevBtn, nextBtn) {
    let speed = 0.5; 
    let offset = 0;
    let isPaused = false;
    let isAnimating = false;
    let animationId;

    // --- MEASUREMENT ---
    function getItemWidth() {
        const item = track.firstElementChild;
        if (!item) return 0;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 0; 
        return item.offsetWidth + gap;
    }

    // --- AUTO SCROLL LOOP ---
    function loop() {
        // Only auto-scroll if we are NOT paused AND NOT currently animating a button click
        if (!isPaused && !isAnimating) {
            const itemWidth = getItemWidth();
            if (itemWidth === 0) {
                requestAnimationFrame(loop);
                return;
            }
            
            // Move Left
            offset -= speed;

            // CIRCULAR LOGIC (Auto):
            if (Math.abs(offset) >= itemWidth) {
                const firstItem = track.firstElementChild;
                if (firstItem) {
                    track.appendChild(firstItem);
                    // Adjust offset to prevent visual jump
                    offset += itemWidth;
                }
            }

            track.style.transform = `translateX(${offset}px)`;
        }
        animationId = requestAnimationFrame(loop);
    }

    // Start Loop
    animationId = requestAnimationFrame(loop);
    
    // 1. NEXT (Move Left)
    const handleNext = () => {
        if (isAnimating) return;
        const itemWidth = getItemWidth();
        if (itemWidth === 0) return;

        isAnimating = true;

        // Animate visually to the left
        track.style.transition = 'transform 0.5s ease-in-out';
        const targetOffset = offset - itemWidth;
        track.style.transform = `translateX(${targetOffset}px)`;

        // When animation ends, rearrange DOM
        setTimeout(() => {
            track.style.transition = 'none'; // Stop animation
            
            const firstItem = track.firstElementChild;
            if (firstItem) track.appendChild(firstItem);

            // Snap offset back
            offset = targetOffset + itemWidth; 
            
            // Apply new offset instantly
            track.style.transform = `translateX(${offset}px)`;
            
            isAnimating = false;
        }, 500);
    };

    // 2. PREV (Move Right)
    const handlePrev = () => {
        if (isAnimating) return;
        const itemWidth = getItemWidth();
        if (itemWidth === 0) return;
        
        isAnimating = true;

        // INSTANTLY Teleport the last item to the front
        track.style.transition = 'none';
        const lastItem = track.lastElementChild;
        if (lastItem) track.prepend(lastItem);

        // Instantly shift offset to the LEFT so the item is hidden
        offset -= itemWidth;
        track.style.transform = `translateX(${offset}px)`;

        // Force Browser Reflow (Crucial: tells browser to process the 'none' transition)
        void track.offsetWidth; 

        // Smoothly Animate back to original position
        track.style.transition = 'transform 0.5s ease-in-out';
        offset += itemWidth; // Move visually Right
        track.style.transform = `translateX(${offset}px)`;

        // Cleanup
        setTimeout(() => {
            track.style.transition = 'none';
            isAnimating = false;
        }, 500);
    };

    // --- CONTROLS ---
    
    // Pause Logic
    container.addEventListener('mouseenter', () => isPaused = true);
    container.addEventListener('mouseleave', () => isPaused = false);

    // Click Listeners
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleNext();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handlePrev();
    });

    // Resize Handler
    window.addEventListener('resize', () => {
        // Reset everything
        offset = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
    });
}