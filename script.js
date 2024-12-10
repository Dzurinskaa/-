// Получение элементов
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileForm = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');

// Открытие окна
profileEditButton.addEventListener('click', () => {
    popup.classList.add('show');
});

// Закрытие окна
popupClose.addEventListener('click', () => {
    popup.classList.remove('show');
});

// Сохранение изменений
profileForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращение перезагрузки страницы
    profileName.textContent = nameInput.value;
    profileSubtitle.textContent = descriptionInput.value;
    popup.classList.remove('show');
});
