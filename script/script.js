const Fitnes = document.querySelector('.gallery__fitnes'),
Food = document.querySelector('.gallery__food'),
fitnesChoise = document.getElementById('fitness__choise'),
foodChoise = document.getElementById('food__choise'),
toFitness = document.querySelector('.to__fitnes'),
toFood = document.querySelector('.to__food'),
slider = document.querySelectorAll('.zoom');


const hide = function(elem){
    elem.style.display = 'none';
};

const show = function(elem){
    elem.style.display = 'grid';
};

toFitness.addEventListener('click', () => {
    hide(Food);
    show(Fitnes);
    toFitness.classList.add('active');
    toFood.classList.remove('active');
});

fitnesChoise.addEventListener('click', () => {
    hide(Food);
    show(Fitnes);
    toFitness.classList.add('active');
    toFood.classList.remove('active');
});

toFood.addEventListener('click', () => {
    hide(Fitnes);
    show(Food);
    toFood.classList.add('active');
    toFitness.classList.remove('active');
});

foodChoise.addEventListener('click', () => {
    hide(Fitnes);
    show(Food);
    toFood.classList.add('active');
    toFitness.classList.remove('active');
});