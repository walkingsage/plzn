const Fitnes = document.querySelector('.gallery__fitnes'),
Food = document.querySelector('.gallery__food'),
galleryTitle = document.querySelector('.gallery__title'),
galleryTit = document.querySelector('.gallery__tit'),
gallerySubFit = document.querySelector('.gallery__sub__fitnes'),
gallerySubFood = document.querySelector('.gallery__sub__food'),
fitnesChoise = document.getElementById('fitness__choise'),
foodChoise = document.getElementById('food__choise'),
toFitness = document.querySelector('.to__fitnes'),
toFood = document.querySelector('.to__food'),
slider = document.querySelector('.zoom'),
menuBurger = document.querySelector('.fa-bars'),
closeBurger = document.querySelector('.close__nav'),
menu = document.querySelector('.menu'),
sliderImg = document.querySelector('.zoom > img'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
close = document.querySelector('.close'),
header = document.querySelector('.header__nav'),
galleryFood = document.querySelectorAll('.gallery > .gallery__food > img'),
galleryFitnes = document.querySelectorAll('.gallery > .gallery__fitnes > img'),
anchors = document.querySelectorAll('a[href*="#"]'),
nameInput = document.querySelector('.input__name'),
navigation = document.querySelectorAll('ul > a'),
faDown = document.querySelector('.fa-down'),
sectionsId = document.querySelectorAll('section'),
svyaz = document.querySelectorAll('.svyaz'),
gallery = document.querySelector('.gallery'),
galleryTo = document.querySelectorAll('.to__gallery'),
logo = document.querySelector('.logo');

let navIndex = 0;
window.scrollTo(0,1000);

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

const hide = function(elem){
    elem.style.display = 'none';
};

const show = function(elem){
    elem.style.display = 'grid';
};

const remactive = () => {
    for(let i = 0; i < navigation.length; i++){
        navigation[i].classList.remove('active');
    }
};

const scrollOf = () => {
    document.body.style.overflow = 'hidden';
};

const scrollOn = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.overflowX = 'hidden';
};

const colorFood = element => {
    element.style.color = '#ffffff';
    element.style.background = '#000000';
};

const colorFitness = element => {
    element.style.color = '#000000';
    element.style.background = '#ffffff';
};

nameInput.addEventListener('input',function(){
    nameInput.value = nameInput.value.replace(/[0-9,-.,:+/*]/g, '');
});


let src, index;

const zoom = elem => {
    scrollOf();
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

navigation.forEach(elem => {
    elem.addEventListener('click',() => {
        let navId = elem.getAttribute('href');
        for(let i=0;i<navigation.length;i++){
            if (navId == navigation[i].getAttribute('href')){
                navIndex = i;
            }
            else{
                continue;
            }
        }
        hideSection();
        window.scrollTo(0,1000);
    });
});

let hideSection = () => {
    sectionsId.forEach(elem => {
        for(let i=0;i<sectionsId.length;i++){
            if(i == navIndex){
                show(sectionsId[i]);
                navigation[i].classList.add('active');
            }
            else{
                hide(sectionsId[i]);
                navigation[i].classList.remove('active');
            }
        }
        up();
    });
};

hideSection();




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

navigation.forEach((element) => {
    element.addEventListener('click', () => {
        remactive();
        element.classList.add('active');
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

svyaz.forEach(element => {
    element.addEventListener('click', () => {
        navIndex = 3;
        hideSection();
        // window.scrollTo(0,1000);
    });
});

galleryTo.forEach(element => {
    element.addEventListener('click', () => {
        navIndex = 2;
        hideSection();
        // window.scrollTo(0,1000);
    });
});

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

sliderImg.addEventListener('click', () => {
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

logo.addEventListener('click', () => {
    navIndex = 0;
    hideSection();
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
    scrollOn();
    header.style.animation = 'headerShow 2s cubic-bezier(0, 1.1, 0.58, 1) forwards';
});

toFitness.addEventListener('click', () => {
    Food.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {   
        Fitnes.style.display = 'block'; 
        hide(Food);
      }, 1000);
    gallery.style.background = '#000000';
    Fitnes.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    colorFood(galleryTitle);
    gallerySubFood.style.display = 'none';
    gallerySubFit.style.display = 'block';
    galleryTit.style.color = '#ffffff';
    toFitness.classList.add('active');
    toFood.classList.remove('active');
    toFood.style.color = '#ffffff';
});

fitnesChoise.addEventListener('click', () => {
    Food.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {
        Fitnes.style.display = 'block';
        hide(Food);   
      }, 1000);
    navIndex = 2;
    hideSection();
    gallery.style.background = '#000000';
    Fitnes.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    toFitness.classList.add('active');
    toFood.classList.remove('active');
    colorFood(galleryTitle);
    gallerySubFood.style.display = 'none';
    gallerySubFit.style.display = 'block';
    galleryTit.style.color = '#ffffff';
    toFood.style.color = '#ffffff';
});

toFood.addEventListener('click', () => {
    Fitnes.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {
        Food.style.display = 'block';
        hide(Fitnes);  
      }, 1000);
    gallery.style.background = '#ffffff';
    Food.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    colorFitness(galleryTitle);
    gallerySubFit.style.display = 'none';
    gallerySubFood.style.display = 'block';
    galleryTit.style.color = '#000000';
    toFood.classList.add('active');
    toFitness.classList.remove('active');
    toFitness.style.color = '#000000';
});

foodChoise.addEventListener('click', () => {
    Fitnes.style.animation = 'hide 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    setTimeout(() => {
        Food.style.display = 'block';
        hide(Fitnes);  
      }, 1000);
    navIndex = 2;
    hideSection();
    gallery.style.background = '#ffffff';
    Food.style.animation = 'show 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    colorFitness(galleryTitle);
    gallerySubFit.style.display = 'none';
    gallerySubFood.style.display = 'block';
    galleryTit.style.color = '#000000';
    toFood.classList.add('active');
    toFitness.classList.remove('active');
    toFitness.style.color = '#000000';
});

menuBurger.addEventListener('click', () => {
    menuBurger.classList.remove('burgerOn');
    menuBurger.classList.add('burgerOff');
    menu.style.display = 'grid';
    menu.style.animation = 'openNav 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    closeBurger.style.display = 'block';
    scrollOf();
});

document.addEventListener('DOMContentLoaded', function(){
    screen.width < 652 ? (hide(menu),menuBurger.classList.remove('burgerOff'),menuBurger.classList.add('burgerOn')): (menuBurger.classList.remove('burgerOn'),menuBurger.classList.add('burgerOff'),show(menu),menu.style.animation = 'openNav 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards');
});

closeBurger.addEventListener('click', () => {
    menuBurger.classList.remove('burgerOff');
    menuBurger.classList.add('burgerOn');
    menu.style.animation = 'closeNav 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards';
    closeBurger.style.display = 'none';
    setTimeout(() => {
        hide(menu);  
      }, 1000);
    scrollOn();
});

window.addEventListener('resize', () => {
    screen.width < 650 ? (hide(menu),menuBurger.classList.remove('burgerOff'),menuBurger.classList.add('burgerOn')): (menuBurger.classList.remove('burgerOn'),menuBurger.classList.add('burgerOff'),show(menu),menu.style.animation = 'openNav 1s cubic-bezier(0.51, 0.8, 0.77, 0.99) forwards');
});






