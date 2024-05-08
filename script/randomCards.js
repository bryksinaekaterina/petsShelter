import { pets } from "./arrays.js";



function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

function displayRandomCards() {
    const shuffledPets = shuffleArray(pets);
    const selectedPets = shuffledPets.slice(0, 3);
    const petsCardsContainer = document.querySelector('.pets-cards');

    if (!petsCardsContainer) {
        console.error('Контейнер для карточек не найден!');
        return;
    }

    petsCardsContainer.innerHTML = '';

    selectedPets.forEach(pet => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('pets-cards-item')
        cardElement.innerHTML = `
            <a href = "inform-about-pet.html" class="pet-card">
                <img src="${pet.img}" alt="${pet.name}">
                <div class = "pet-info">
                    <h3>${pet.name}</h3>
                    <p>Возраст: ${pet.age}</p>
                    <p>Пол: ${pet.sex}</p>
                </div>    
            </a>
        `;
        petsCardsContainer.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomCards();
});









