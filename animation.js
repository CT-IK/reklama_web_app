// Файл для анимации заголовка
// Добавляет эффект печатания для заголовка

const animatedTitle = document.getElementById('animated-title');
const mainContent = document.getElementById('main-content');
const text = 'Реклама';
let charIndex = 0;

function typeCharacter() {
    if (charIndex < text.length) {
        animatedTitle.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeCharacter, 200); // 200ms между символами, то есть промежутки с которыми они будут появляться 
    } else {
        // Анимация завершена, скрываем заголовок и показываем основной контент
        setTimeout(() => {
            animatedTitle.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 500); // Пауза 500ms перед показом FAQ
    }
}

// Запускаем анимацию при загрузке страницы
function startAnimation() {
    typeCharacter();
}
