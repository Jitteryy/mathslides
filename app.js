// Класс для управления слайдами
class SlideManager {
    constructor(topicsData) {
        this.topicsData = topicsData;
        this.currentTopic = 1;
        this.problems = topicsData[this.currentTopic].problems;
        this.currentSlide = 0;
        this.totalSlides = this.problems.length;
        this.container = document.getElementById('slidesContainer');
        this.init();
    }

    // Инициализация
    init() {
        this.generateSlides();
        this.setupEventListeners();
        this.updateSlide();
    }

    // Генерация HTML для всех слайдов
    generateSlides() {
        this.container.innerHTML = this.problems.map(problem => 
            this.createSlideHTML(problem)
        ).join('');
        
        // Перерендерим MathJax после создания слайдов
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise();
        }
    }

    // Создание HTML для одного слайда
    createSlideHTML(problem) {
        const stepsHTML = problem.steps.map((step, index) => 
            this.createStepHTML(step, index + 1)
        ).join('');

        const optionsHTML = problem.type === 'multiple_choice' ? 
            this.createOptionsHTML(problem.options, problem.correct_option) : '';

        return `
            <div class="slide">
                <div class="header-container">
                    <span class="problem-number">№${problem.number} есеп</span>
                    <div class="main-title">${this.topicsData[this.currentTopic].title}</div>
                </div>
                
                <div class="given-section">
                    <div class="given-label">Берілгені:</div>
                    <div class="given-content">${problem.given}</div>
                </div>
                
                ${optionsHTML}
                
                ${stepsHTML}
                
                <div class="answer-section">
                    <div class="answer-label">Жауабы:</div>
                    <div class="answer-value">${problem.answer}</div>
                </div>
            </div>
        `;
    }

    createOptionsHTML(options, correctOption) {
        const optionsHTML = options.map(option => 
            `<div class="option ${option.label.replace(')', '').toLowerCase() === correctOption.toLowerCase() ? 'correct' : ''}">
                <span class="option-label">${option.label}</span>
                <span class="option-value">${option.value}</span>
            </div>`
        ).join('');

        return `
            <div class="options-section">
                <div class="options-label">Жауап нұсқалары:</div>
                <div class="options-container">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }

    // Создание HTML для одного шага
    createStepHTML(step, stepNumber) {
        return `
            <div class="step">
                <span class="step-number">${stepNumber}</span>
                <div class="step-content-wrapper">
                    <div class="step-content">${step.content}</div>
                    <div class="step-explanation">${step.explanation}</div>
                </div>
            </div>
        `;
    }

    // Обновление отображения слайда
    updateSlide() {
        const slides = document.querySelectorAll('.slide');
        
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            if (index === this.currentSlide) {
                slide.classList.add('active');
                // Перерендерим MathJax для активного слайда
                if (window.MathJax && window.MathJax.typesetPromise) {
                    MathJax.typesetPromise([slide]);
                }
            } else if (index < this.currentSlide) {
                slide.classList.add('prev');
            }
        });
        
        this.updateNavigation();
        this.updateProgress();
        this.updateCounter();
    }

    updateNavigation() {
        document.getElementById('prevBtn').disabled = this.currentSlide === 0;
        document.getElementById('nextBtn').disabled = this.currentSlide === this.totalSlides - 1;
        
        const checkmarkBtn = document.getElementById('checkmarkBtn');
        const isLastTopic = this.currentTopic === 2;
        const isLastSlide = this.currentSlide === this.totalSlides - 1;
        
        if (isLastTopic && isLastSlide) {
            checkmarkBtn.style.display = 'flex';
        } else {
            checkmarkBtn.style.display = 'none';
        }
    }

    showSecretSlide() {
        const secretSlide = document.getElementById('secretSlide');
        secretSlide.classList.add('show');
    }

    hideSecretSlide() {
        const secretSlide = document.getElementById('secretSlide');
        secretSlide.classList.remove('show');
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Обновление прогресс-бара
    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressText').textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }

    // Обновление счетчика слайдов
    updateCounter() {
        document.getElementById('slideCounter').textContent = 
            `${this.currentSlide + 1} / ${this.totalSlides}`;
    }

    // Переход на следующий/предыдущий слайд
    changeSlide(direction) {
        const newSlide = this.currentSlide + direction;
        if (newSlide >= 0 && newSlide < this.totalSlides) {
            this.currentSlide = newSlide;
            this.updateSlide();
        }
    }

    // Переход на конкретный слайд
    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides) {
            this.currentSlide = slideIndex;
            this.updateSlide();
        }
    }

    // Переключение топика
    switchTopic(topicId) {
        if (this.topicsData[topicId]) {
            this.currentTopic = topicId;
            this.problems = this.topicsData[topicId].problems;
            this.totalSlides = this.problems.length;
            this.currentSlide = 0;
            
            this.updateTopicButtons();
            this.updateMainTitle();
            this.generateSlides();
            this.updateSlide();
        }
    }

    // Обновление кнопок топиков
    updateTopicButtons() {
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`topic${this.currentTopic}Btn`).classList.add('active');
    }

    // Обновление главного заголовка
    updateMainTitle() {
        const titleElement = document.querySelector('.main-title');
        if (titleElement) {
            titleElement.textContent = this.topicsData[this.currentTopic].title;
        }
    }

    // Настройка обработчиков событий
    setupEventListeners() {
        // Клавиатурная навигация
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.changeSlide(-1);
                    break;
                case 'ArrowRight':
                    this.changeSlide(1);
                    break;
                case 'Home':
                    this.goToSlide(0);
                    break;
                case 'End':
                    this.goToSlide(this.totalSlides - 1);
                    break;
                case ' ':
                    e.preventDefault();
                    this.changeSlide(1);
                    break;
            }
        });

        // Поддержка свайпов на мобильных устройствах
        this.setupTouchSupport();
    }

    // Настройка поддержки сенсорных экранов
    setupTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        const threshold = 50; // Минимальное расстояние для свайпа

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX, threshold);
        }, { passive: true });
    }

    // Обработка свайпа
    handleSwipe(startX, endX, threshold) {
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Свайп влево - следующий слайд
                this.changeSlide(1);
            } else {
                // Свайп вправо - предыдущий слайд
                this.changeSlide(-1);
            }
        }
    }
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Создаем глобальный объект для доступа из HTML
    window.slideManager = new SlideManager(TOPICS_DATA);
    
    // Логируем успешную инициализацию
    console.log('Слайд менеджер инициализирован');
    console.log(`Жүктелген топиктер саны: ${Object.keys(TOPICS_DATA).length}`);
    console.log(`Ағымдағы топик: ${TOPICS_DATA[1].title}`);
    
    // Инициализация пасхалки
    initEasterEgg();
});

function initEasterEgg() {
    const trigger = document.getElementById('easterEggTrigger');
    const easterEgg = document.getElementById('easterEgg');
    let clickCount = 0;
    let clickTimer = null;
    
    trigger.addEventListener('click', () => {
        clickCount++;
        
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        if (clickCount === 3) {
            easterEgg.classList.add('show');
            
            setTimeout(() => {
                easterEgg.classList.remove('show');
            }, 3000);
            
            clickCount = 0;
        } else {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 500);
        }
    });
}
