// Finding out card
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Where we would put our text
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDate = document.getElementById('modalDate');

// Finding slider elements
const sliderTrack = document.getElementById('sliderTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Slider variables
let currentSlideIndex = 0;
let currentSlideCount = 0;

// Updating progress barr
function updateDateProgressBars() {
    // Ищем все треки, у которых есть даты
    const tracks = document.querySelectorAll('.progress-track[data-start][data-end]');
    const now = new Date();

    tracks.forEach(track => {
        // 1. ГИБКИЙ ПОИСК РОДИТЕЛЯ:
        // Ищем ближайшую обертку с классом .progress-widget, 
        // а если ее нет — берем просто прямого родителя (в котором лежит трек)
        const wrapper = track.closest('.progress-widget') || track.parentElement; 
        
        const startDate = new Date(track.getAttribute('data-start'));
        const endDate = new Date(track.getAttribute('data-end'));

        // 2. Ищем элементы. Если их нет, в переменные запишется null (и скрипт не упадет)
        const fill = track.querySelector('.progress-fill');
        const progressText = track.querySelector('.progress-text');
        
        // Ищем дополнительные тексты внутри нашей гибкой обертки
        const timeRemainingText = wrapper ? wrapper.querySelector('.time-remaining') : null;
        const endResultText = wrapper ? wrapper.querySelector('.end-result') : null;

        const totalDuration = endDate - startDate;
        const elapsedDuration = now - startDate;

        // 3. БЕЗОПАСНОЕ ОБНОВЛЕНИЕ (обновляем только то, что существует в HTML)
        if (now < startDate) {
            if (fill) fill.style.width = '0%';
            if (progressText) progressText.textContent = '0.0000% / 100%';
            if (timeRemainingText) timeRemainingText.textContent = 'Not started yet';
            return; // Переходим к следующему бару
        }

        if (now > endDate) {
            if (fill) fill.style.width = '100%';
            if (progressText) progressText.textContent = '100.0000% / 100%';
            if (timeRemainingText) timeRemainingText.textContent = 'Completed!';
            return;
        }

        // Расчеты
        const percentage = (elapsedDuration / totalDuration) * 100;
        const remainingMs = endDate - now;
        const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // Обновляем интерфейс только для найденных элементов
        if (fill) fill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage.toFixed(4)}% / 100%`; 
        if (timeRemainingText) timeRemainingText.textContent = `Complete in: ${days}d ${hours}h`;
    });
}


document.addEventListener('DOMContentLoaded', updateDateProgressBars);

setInterval(updateDateProgressBars, 60000);

// Opening card
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Taking data atribute
        modalTitle.textContent = card.getAttribute('data-title');
        modalDesc.textContent = card.getAttribute('data-desc');
        modalDate.textContent = card.getAttribute('data-date');
        
        // 2. Image array
        const imagesArray = JSON.parse(card.getAttribute('data-images'));
        currentSlideCount = imagesArray.length;
        currentSlideIndex = 0; // Starting with first
        
        // Removing past and adding new
        sliderTrack.innerHTML = '';
        imagesArray.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            sliderTrack.appendChild(imgElement);
        });
        
        // Moving to start
        updateSlider();
        
        // Showing modal window
        modal.classList.add('active');
    });
});

// Slider moving
function updateSlider() {
    // Goind back for 100% of every slide
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < currentSlideCount - 1) {
        currentSlideIndex++; // Going forward
    } else {
        currentSlideIndex = 0; // Going back, if we at the end
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--; // Going back
    } else {
        currentSlideIndex = currentSlideCount - 1; // Jumping to the end
    }
    updateSlider();
});

// Closing window
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});