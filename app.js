// Класс для управления слайдами
class SlideManager {
    constructor(problemsData) {
        this.problems = problemsData;
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
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }

    // Создание HTML для одного слайда
    createSlideHTML(problem) {
        const stepsHTML = problem.steps.map((step, index) => 
            this.createStepHTML(step, index + 1)
        ).join('');

        return `
            <div class="slide">
                <span class="problem-number">№${problem.number} есеп</span>
                
                <div class="given-section">
                    <div class="given-label">Берілгені:</div>
                    <div class="given-content">${problem.given}</div>
                </div>
                
                ${stepsHTML}
                
                <div class="answer-section">
                    <div class="answer-label">Жауабы:</div>
                    <div class="answer-value">${problem.answer}</div>
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
                if (window.MathJax) {
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

    // Обновление кнопок навигации
    updateNavigation() {
        document.getElementById('prevBtn').disabled = this.currentSlide === 0;
        document.getElementById('nextBtn').disabled = this.currentSlide === this.totalSlides - 1;
    }

    // Обновление прогресс-бара
    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
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
    window.slideManager = new SlideManager(PROBLEMS_DATA);
    
    // Логируем успешную инициализацию
    console.log('Слайд менеджер инициализирован');
    console.log(`Жүктелген есептер саны: ${PROBLEMS_DATA.length}`);
});

// Дополнительная проверка загрузки MathJax
if (window.MathJax) {
    MathJax.startup.promise.then(() => {
        console.log('MathJax толық жүктелді');
    }).catch((e) => {
        console.error('MathJax жүктелу қатесі:', e);
    });
}