// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";

const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
let pPat=0;
let pMat=0;
let patMat = false;
while (i<6) {
  i++;

  if (Math.random ()<0.5){
    kodFigurek +="<div>" + pat + "</div>";
  }
  else {
    kodFigurek +="<div>" + mat + "</div>";
  }
  patMat=!patMat;
}

figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = pMat;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = pPat;         // vypíše počet vykreslenách figurek Mata (žádný)

