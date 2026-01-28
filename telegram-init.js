// Файл для инициализации Telegram WebApp
// Все настройки и события Telegram здесь

function initTelegram() {
    Telegram.WebApp.ready(); // Сообщаем Telegram, что app готово
    Telegram.WebApp.expand(); // Расширяем на весь экран

    // Настройка главной кнопки (внизу экрана)
    Telegram.WebApp.MainButton.setText('Отправить');
    Telegram.WebApp.MainButton.onClick(handleSubmit);
    Telegram.WebApp.MainButton.show();

    // Обработка изменения темы
    Telegram.WebApp.onEvent('themeChanged', () => {
        document.body.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;
    });
}

// Функция обработки submit
function handleSubmit() {
    Telegram.WebApp.MainButton.showProgress(); // Показываем индикатор загрузки
    // Здесь можно отправить данные в бот: Telegram.WebApp.sendData('{"action": "submit"}');
    setTimeout(() => {
        Telegram.WebApp.MainButton.hideProgress();
        Telegram.WebApp.close(); // Закрываем app
    }, 1000); // Симуляция задержки
}
