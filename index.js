let current = 0;
let papers = document.querySelectorAll(".paper");

function nextPage(){

if(current < papers.length){

papers[current].style.zIndex = 100 - current;
papers[current].style.transform = "rotateY(-180deg)";

current++;

}

}

function prevPage(){

if(current > 0){

current--;

papers[current].style.transform = "rotateY(0deg)";

}

}