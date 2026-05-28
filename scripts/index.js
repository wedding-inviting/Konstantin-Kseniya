(function () {
    const heroContent = document.querySelector('.hero-content');
    const backgroundImg = document.querySelector('.hero-background');
    if (backgroundImg && backgroundImg.complete) {
        console.log('Фото загружено из кеша');
    } else if (backgroundImg) {
        backgroundImg.addEventListener('load', function () {
            backgroundImg.style.filter = "brightness(0.85) saturate(1.05)";
        });
    }

    const style = window.getComputedStyle(heroContent);
    if (style.opacity === '0') {
        heroContent.style.animation = 'fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards';
    }

    const namesWrapper = document.querySelector('.names');
    if (namesWrapper) {
        namesWrapper.style.animation = 'softGlow 1s ease-out 0.5s both';
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes softGlow {
                0% { text-shadow: 0 0 0px rgba(255,245,200,0); }
                50% { text-shadow: 0 0 8px rgba(255,245,180,0.6); }
                100% { text-shadow: 0 0 0px rgba(255,245,200,0); }
            }
        `;
        document.head.appendChild(styleSheet);
        setTimeout(() => {
            if (namesWrapper) namesWrapper.style.animation = '';
        }, 1500);
    }
})();

(function() {
function renderSeptember2026() {
    const calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = '';
    
    const firstDayOfSept = new Date(2026, 8, 1);
    let startWeekday = firstDayOfSept.getDay();
    startWeekday = startWeekday === 0 ? 6 : startWeekday - 1;
    
    const daysInSept = 30;
    
    const prevMonthDays = new Date(2026, 8, 0).getDate();
    
    for (let i = 0; i < startWeekday; i++) {
        const dayNum = prevMonthDays - startWeekday + i + 1;
        const dayDiv = createDayElement(dayNum, true, false);
        calendarDays.appendChild(dayDiv);
    }
    
    for (let i = 1; i <= daysInSept; i++) {
        const isWeddingDay = (i === 12);
        const dayDiv = createDayElement(i, false, isWeddingDay);
        calendarDays.appendChild(dayDiv);
    }
    
    const totalCells = 35;
    const currentCells = calendarDays.children.length;
    const remainingCells = totalCells - currentCells;
    
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = createDayElement(i, true, false);
        calendarDays.appendChild(dayDiv);
    }
}

function createDayElement(dayNum, isOtherMonth, isWeddingDay) {
    const div = document.createElement('div');
    div.className = 'calendar-day';
    if (isOtherMonth) div.classList.add('other-month');
    if (isWeddingDay) div.classList.add('wedding-day');
    div.textContent = dayNum;
    return div;
}

renderSeptember2026();

const section = document.querySelector('.calendar-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const targetDate = new Date(2026, 8, 12, 15, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

const section = document.querySelector('.program-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const section = document.querySelector('.location-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const section = document.querySelector('.dresscode-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const section = document.querySelector('.chat-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);

const qrElement = document.querySelector('.qr-code');
const chatLink = document.querySelector('.chat-link');

if (qrElement) {
    qrElement.addEventListener('click', () => {
        window.open(chatUrl, '_blank');
    });
}
})();

(function() {
const section = document.querySelector('.form-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const section = document.querySelector('.surprise-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);
})();

(function() {
const section = document.querySelector('.gallery-section');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            section.classList.add('visible');
            animated = true;
            observer.unobserve(section);
        }
    });
}, { threshold: 0.2 });

observer.observe(section);

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsContainer = document.getElementById('sliderDots');

let currentIndex = 0;
const totalSlides = slides.length;
let startX = 0;
let isDragging = false;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    isDragging = false;
});

slider.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    isDragging = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

createDots();
})();