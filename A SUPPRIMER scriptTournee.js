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



