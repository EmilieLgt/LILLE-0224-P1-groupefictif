
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

function filterPays () {
    let filtre, tableau, ligne, cellule, i, texte 

    filtre = document.getElementById("rechercheTourneePays").value.toUpperCase();
    tableau = document.getElementById("tableTournee");
    ligne = tableau.getElementsByTagName ("tr")

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [1] ;
         ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [2] ;
         ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }

} 
function filterCity () {
    let filtre, tableau, ligne, cellule, i, texte 

    filtre = document.getElementById("rechercheTourneeVille").value.toUpperCase();
    tableau = document.getElementById("tableTournee");
    ligne = tableau.getElementsByTagName ("tr")

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [1] ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }
}




/* changement de couleur au survol 
const title = document.querySelector(".titleTournee");

title.addEventListener('mouseover', function () {
    title.style.color ="rgb(224, 124, 247)";
    ;
});

title.addEventListener('mouseout', function () {
    title.style.color = "yellow"; // Réinitialisez la couleur lorsqu'on quitte la zone du titre
});*/

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});


