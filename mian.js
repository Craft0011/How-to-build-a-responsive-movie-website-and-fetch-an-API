const imageWidth = 330;
let scrollPosition = 0;

function scrollLeft() {
    if (scrollPosition > 0) {
        scrollPosition -= imageWidth;
        document.querySelector(".carousel").style.transform = `translateX(-${scrollPosition}px)`;
    }
}

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

    if(scrollPosition < maxScrollPosition) {
        scrollPosition += imageWidth;
        document.querySelector('.carousel').style.transform = `translateX(-${scrollPosition}px)`;
    }
}

document.getElementById('left').addEventListener('click', scrollLeft);
document.getElementById('right').addEventListener('click' , scrollRight);