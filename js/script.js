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
    // 1. Теперь ищем сами треки, так как даты теперь на них
    const tracks = document.querySelectorAll('.progress-track[data-start][data-end]');
    const now = new Date();

    tracks.forEach(track => {
        // !!! КЛЮЧЕВОЙ МОМЕНТ !!!
        // Находим общего родителя (article), чтобы найти текст, который лежит ВНЕ трека
        const parent = track.closest('article'); 
        
        const startDate = new Date(track.getAttribute('data-start'));
        const endDate = new Date(track.getAttribute('data-end'));

        // Элементы внутри трека
        const fill = track.querySelector('.progress-fill');
        const progressText = track.querySelector('.progress-text');
        
        // Элементы ВНЕ трека (ищем их внутри родителя-article)
        const timeRemainingText = parent.querySelector('.time-remaining');
        const endResultText = parent.querySelector('.end-result');

        const totalDuration = endDate - startDate;
        const elapsedDuration = now - startDate;

        if (now < startDate) {
            if (fill) fill.style.width = '0%';
            if (progressText) progressText.textContent = '0.0000% / 100%';
            if (timeRemainingText) timeRemainingText.textContent = 'Not started yet';
            return;
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

        // Обновление интерфейса
        if (fill) fill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${percentage.toFixed(4)}% / 100%`; 
        
        // Теперь это сработает, так как мы нашли timeRemainingText через parent
        if (timeRemainingText) {
            timeRemainingText.textContent = `Complete in: ${days}d ${hours}h`;
        }
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