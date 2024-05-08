import { pets } from "./arrays.js";


const SearchInput = document.querySelector('input');
const cardsContainer = document.querySelector('.pets-cards');

let currentPage = 1;
const petsPerPage = 9;

function renderCards(petsToRender) {
    cardsContainer.innerHTML = ''

    const start = (currentPage - 1) * petsPerPage;
    const end = start + petsPerPage;
    const petsToDisplay = petsToRender.slice(start, end);

      petsToDisplay.forEach(item => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('pets-cards-item')
        cardDiv.innerHTML = `
        
        <a href="inform-about-pet.html" class="pet-card">
            <img src="${item.img}" alt="">
            <div class="pet-info">
                <h3 class="pets-cards-item-name">${item.name}</h3>
                <p class="pets-cards-item-sex">${item.sex}</p>
                <p class="pets-cards-item-age">${item.age}</p>
            </div>
        </a>
        `

        cardsContainer.appendChild(cardDiv)
    });

    
    SearchInput.addEventListener('input', filterCards)

    renderPagination(petsToRender.length);
}


function renderPagination(totalPets) {
    const paginationContainer = document.querySelector('.pagination-container');
    paginationContainer.innerHTML = ''; 

    const pagesCount = Math.ceil(totalPets / petsPerPage);

    for (let i = 1; i <= pagesCount; i++) {
        const pageItem = document.createElement('button');
        pageItem.innerText = i;
        if (i === currentPage) {
            pageItem.classList.add('active'); 
        }
        pageItem.addEventListener('click', () => {
            currentPage = i;
            filterCards(); 
        });
        paginationContainer.appendChild(pageItem);
    }
}


function filterCards() {
    const searchTerm = SearchInput.value.toLowerCase()
    const filteredPets = pets.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
    )

    renderCards(filteredPets)
}

filterCards()


const FilterAllBtn = document.querySelector('#showAll');
const FilterCatsBtn = document.querySelector('#showCats');
const FilterDogsBtn = document.querySelector('#showDogs');

function filterAll() {
    const allPets = pets.filter(pet => pet.animal === 'кошка' ||  pet.animal === 'собака')
    cardsContainer.innerHTML = ''; 
    renderCards(allPets);

    FilterCatsBtn.classList.remove('filterBtn-active');
    FilterDogsBtn.classList.remove('filterBtn-active');

    FilterAllBtn.classList.add('filterBtn-active')
}

function filterCats() {
    const cats = pets.filter(pet => pet.animal === 'кошка' )
    cardsContainer.innerHTML = ''; 
    renderCards(cats);

    FilterDogsBtn.classList.remove('filterBtn-active');
    FilterAllBtn.classList.remove('filterBtn-active');

    FilterCatsBtn.classList.add('filterBtn-active')
}

function filterDogs() {
    const dogs = pets.filter(pet => pet.animal === 'собака' )
    cardsContainer.innerHTML = ''; 
    renderCards(dogs);

    FilterCatsBtn.classList.remove('filterBtn-active');
    FilterAllBtn.classList.remove('filterBtn-active');

    FilterDogsBtn.classList.add('filterBtn-active')
    
}

FilterAllBtn.addEventListener('click', filterAll)
FilterCatsBtn.addEventListener('click', filterCats)
FilterDogsBtn.addEventListener('click', filterDogs)

