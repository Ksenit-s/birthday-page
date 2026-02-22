// Эффект при клике на записки
    notes.forEach(note => {
        note.addEventListener('click', function() {
            this.style.transform = 'rotate(0deg) scale(1.1)';
            this.style.zIndex = '100';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
                setTimeout(() => {
                    this.style.zIndex = '';
                }, 300);
            }, 1000);
        });
    });
    
    // Анимация появления элементов
    const animateElements = [
        '.newspaper-header',
        '.main-news',
        '.congratulations-column',
        '.newspaper-footer'
    ];
    
    animateElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 300 + 200);
        }
    });
    
    // Эффект "старой бумаги" при загрузке
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Создаём эффект пожелтевшей бумаги (случайные пятна)
    function createAgingSpots() {
        const container = document.querySelector('.wall-newspaper');
        for (let i = 0; i < 5; i++) {
            const spot = document.createElement('div');
            spot.style.position = 'absolute';
            spot.style.width = Math.random() * 100 + 50 + 'px';
            spot.style.height = Math.random() * 100 + 50 + 'px';
            spot.style.background = 'radial-gradient(circle, rgba(200,180,150,0.1) 0%, transparent 70%)';
            spot.style.borderRadius = '50%';
            spot.style.top = Math.random() * 100 + '%';
            spot.style.left = Math.random() * 100 + '%';
            spot.style.pointerEvents = 'none';
            spot.style.zIndex = '1';
            container.appendChild(spot);
        }
    }
    createAgingSpots();
    
function masonryLayout() {
    const container = document.querySelector('.congrats-container');
    const cards = document.querySelectorAll('.greet-card');
    
    if (!container || cards.length === 0) return;
    
    // Сбрасываем позиции
    cards.forEach(card => {
        card.style.position = 'relative';
        card.style.top = '0';
    });
    
    // Используем columns для автоматического masonry
    container.style.columnCount = '3';
    container.style.columnGap = '25px';
    container.style.breakInside = 'avoid';
    
    // Адаптивность
    const width = window.innerWidth;
    if (width <= 768) {
        container.style.columnCount = '1';
    } else if (width <= 1024) {
        container.style.columnCount = '2';
    } else {
        container.style.columnCount = '3';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('birthdaySong');
    if (!audio) return;

    let confettiActive = false;

    function startConfetti30() {
        if (confettiActive) return;
        confettiActive = true;
        const endTime = Date.now() + 30000; // 30 секунд

        function frame() {
            // Конфетти с левой стороны
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.5 },
                colors: ['#FFD700', '#FF6B8B', '#4FC3F7', '#4CAF50', '#FF9800']
            });
            // Конфетти с правой стороны
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.5 },
                colors: ['#FFD700', '#FF6B8B', '#4FC3F7', '#4CAF50', '#FF9800']
            });

            if (Date.now() < endTime) {
                requestAnimationFrame(frame);
            } else {
                confettiActive = false;
            }
        }
        frame();
    }

    // Запускаем конфетти при старте воспроизведения
    audio.addEventListener('play', startConfetti30);
});