/* var carousel = document.querySelector('#carousel1');
var carouselItems = carousel.querySelectorAll('.carousel-item');
var activeIndex = 0;

carouselItems.forEach(function (item, index) {
    if (item.classList.contains('active')) {
        activeIndex = index;
    } else {
        item.classList.remove('active');
    }
});

function next() {
    carouselItems[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % carouselItems.length;
    carouselItems[activeIndex].classList.add('active');
}

function prev() {
    carouselItems[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[activeIndex].classList.add('active');
}

carousel.querySelector('.carousel-control-next').addEventListener('click', next);
carousel.querySelector('.carousel-control-prev').addEventListener('click', prev); */