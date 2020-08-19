const Fitnes = document.querySelector('.gallery__fitnes'),
Food = document.querySelector('.gallery__food'),
fitnesChoise = document.getElementById('fitness__choise'),
foodChoise = document.getElementById('food__choise'),
toFitness = document.querySelector('.to__fitnes'),
toFood = document.querySelector('.to__food'),
slider = document.querySelectorAll('.zoom'),
galleryFood = document.querySelectorAll('.gallery__food > img'),
gallerFitnes = document.querySelectorAll('gallery__fitnes > img');

const hide = function(elem){
    elem.style.display = 'none';
};

const show = function(elem){
    elem.style.display = 'grid';
};
let src, index;


galleryFood.forEach((element,i) => {
    element.addEventListener('click',() => {
        console.log(element.getAttribute('src'));
        src = element.getAttribute('src');
        for (let i = 0; i<galleryFood.length;i++){
            if (galleryFood[i].getAttribute('src') === src)
            {
                index = i;
            }
            else{
                continue;
            }
        };
    });
});





toFitness.addEventListener('click', () => {
    hide(Food);
    show(Fitnes);
    toFitness.classList.add('active');
    toFood.classList.remove('active');
    console.log(src,index);
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