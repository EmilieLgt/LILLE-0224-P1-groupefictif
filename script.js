const slider = document.querySelector('.carouselList');
let isDown = false;
let startX;
let scrollLeft;
const leftBTN = document.querySelector('.buttonLeft');
const rightBTN = document.querySelector('.buttonRight');


slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 10;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
})


leftBTN.addEventListener('click', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});


function pressRightArrow() {
    // Simuler l'événement de la touche flèche de droite
    let event = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      keyCode: 39,
      which: 39,
      code: 'ArrowRight'
    });
    document.dispatchEvent(event);
rightBTN.addEventListener('click', pressRightArrow)
};

//  leftBTN.addEventListener(

   
// });

// rightBTN.addEventListener('click', e => {
    
// })
