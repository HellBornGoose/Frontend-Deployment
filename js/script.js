// Находим мини-карточки и само окно
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Находим места, куда будем вставлять текст в модалке
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDate = document.getElementById('modalDate');

// Находим элементы управления слайдером
const sliderTrack = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Переменные для состояния слайдера
let currentSlideIndex = 0;
let currentSlideCount = 0;

// --- 1. КЛИК ПО КАРТОЧКЕ: ЗАПОЛНЯЕМ И ОТКРЫВАЕМ ---
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // 1. Берем данные из data-атрибутов и вставляем в текст
        modalTitle.textContent = card.getAttribute('data-title');
        modalDesc.textContent = card.getAttribute('data-desc');
        modalDate.textContent = card.getAttribute('data-date');
        
        // 2. Достаем массив картинок
        const imagesArray = JSON.parse(card.getAttribute('data-images'));
        currentSlideCount = imagesArray.length;
        currentSlideIndex = 0; // Начинаем всегда с первого слайда
        
        // 3. Очищаем ленту от старых картинок и добавляем новые
        sliderTrack.innerHTML = '';
        imagesArray.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            sliderTrack.appendChild(imgElement);
        });
        
        // 4. Сдвигаем ленту в самое начало
        updateSlider();
        
        // 5. Показываем модальное окно с красивым fadeIn
        modal.classList.add('active');
    });
});

// --- 2. ЛОГИКА ПЕРЕЛИСТЫВАНИЯ СЛАЙДЕРА ---
function updateSlider() {
    // Сдвигаем ленту влево на 100% за каждый слайд
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < currentSlideCount - 1) {
        currentSlideIndex++; // Листаем вперед
    } else {
        currentSlideIndex = 0; // Возвращаемся в начало, если дошли до конца
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--; // Листаем назад
    } else {
        currentSlideIndex = currentSlideCount - 1; // Прыгаем в самый конец
    }
    updateSlider();
});

// --- 3. ЛОГИКА ЗАКРЫТИЯ ОКНА ---
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});