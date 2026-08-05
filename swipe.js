// Mobile swipe navigation for arjun-na.github.io
// Swipe left  -> next page in navigation order
// Swipe right -> previous page in navigation order
// Pages: CORE -> RESEARCH -> CASES -> REPOS -> COMM

(function () {
    const pages = [
        'index.html',
        'research.html',
        'case-studies.html',
        'projects.html',
        'contact.html'
    ];

    const THRESHOLD = 60;      // minimum horizontal travel (px)
    const MAX_Y_RATIO = 0.5;   // vertical travel must be <= 50% of horizontal

    let startX = 0;
    let startY = 0;

    function getCurrentIndex() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        return pages.indexOf(filename);
    }

    document.addEventListener('touchstart', function (e) {
        const touch = e.changedTouches[0];
        startX = touch.pageX;
        startY = touch.pageY;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
        const touch = e.changedTouches[0];
        const distX = touch.pageX - startX;
        const distY = touch.pageY - startY;

        if (Math.abs(distX) < THRESHOLD) return;
        if (Math.abs(distY) > Math.abs(distX) * MAX_Y_RATIO) return;

        const idx = getCurrentIndex();
        if (idx === -1) return;

        if (distX < 0 && idx < pages.length - 1) {
            window.location.href = pages[idx + 1];
        } else if (distX > 0 && idx > 0) {
            window.location.href = pages[idx - 1];
        }
    }, { passive: true });
})();
