const Fitnes = document.querySelector('.gallery__fitnes'),
Food = document.querySelector('.gallery__food'),
fitnesChoise = document.getElementById('fitness__choise'),
foodChoise = document.getElementById('food__choise'),
toFitness = document.querySelector('.to__fitnes'),
toFood = document.querySelector('.to__food'),
slider = document.querySelector('.zoom'),
sliderImg = document.querySelector('.zoom > img'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
close = document.querySelector('.close'),
header = document.querySelector('.header__nav'),
galleryFood = document.querySelectorAll('.gallery__food > img'),
galleryFitnes = document.querySelectorAll('.gallery__fitnes > img'),
anchors = document.querySelectorAll('a[href*="#"]');

const hide = function(elem){
    elem.style.display = 'none';
};

const show = function(elem){
    elem.style.display = 'grid';
};
let src, index;

const zoom = elem => {
    header.style.animation = 'headerHide 5s cubic-bezier(0.26, 0.45, 0.6, 0.93) forwards';
    sliderImg.src = src;
    setTimeout(() => {
        show(slider);  
      }, 1000);
    slider.style.animation = 'show 2s ease-out forwards';
};

const zoomFitness = () => {
    src = galleryFitnes[index].getAttribute('src');
    sliderImg.src = src;
};

const zoomFood = () => {
    src = galleryFood[index].getAttribute('src');
    sliderImg.src = src;
};


galleryFood.forEach((element) => {
    element.addEventListener('click',() => {
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
        zoom(slider);
    });
});

galleryFitnes.forEach((element) => {
    element.addEventListener('click',() => {
        src = element.getAttribute('src');
        for (let i = 0; i<galleryFitnes.length;i++){
            if (galleryFitnes[i].getAttribute('src') === src)
            {
                index = i;
            }
            else{
                continue;
            }
        };
        zoom(slider);
    });
});

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const blockID = anchor.getAttribute('href').substr(1);
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

prev.addEventListener('click',() => {
    if(toFitness.classList.contains('active')){
        if (index == 0){
            index = galleryFitnes.length-1;
            zoomFitness();
        }
        else{
            index --;
            zoomFitness();
        }
    }
    else{
        if (index == 0){
            index = galleryFood.length-1;
            zoomFood();
        }
        else{
            index --;
            zoomFood();
        }
    }
});

next.addEventListener('click',() => {
    if(toFitness.classList.contains('active')){
        if (index == galleryFitnes.length-1){
            index = 0;
            zoomFitness();
        }
        else{
            index ++;
            zoomFitness();
        }
    }
    else{
        if (index == galleryFood.length-1){
            index = 0;
            zoomFood();
        }
        else{
            index ++;
            zoomFood();
        }
    }
});

close.addEventListener('click',() => {
    slider.style.animation = 'hide 2s ease-out forwards';
    setTimeout(() => {
        hide(slider);  
      }, 2000);
    header.style.animation = 'headerShow 2s cubic-bezier(0, 1.1, 0.58, 1) forwards';
});

toFitness.addEventListener('click', () => {
    Food.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {
        hide(Food);
        show(Fitnes);  
      }, 1000);
    Fitnes.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
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
    Fitnes.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {
        show(Food);
        hide(Fitnes);  
      }, 1000);
    Food.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    toFood.classList.add('active');
    toFitness.classList.remove('active');
});

foodChoise.addEventListener('click', () => {
    hide(Fitnes);
    show(Food);
    toFood.classList.add('active');
    toFitness.classList.remove('active');
});