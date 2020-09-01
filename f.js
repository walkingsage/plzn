const galerry = document.querySelectorAll('.class__conteinera > a'), // class__containera - пропиши здесь класс контейнера в котором лежат картинки
knopka = document.querySelector('.classknopki'); //здесь класс кнопки для скачка, заранее в кнопку напиши атрибут download

let hrefKartinki;

galerry.forEach(Element => {
    Element.addEventListener('click', () => {
      hrefKartinki = Element.getAttribute('href');
    });
});

knopka.href(hrefKartinki);