let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('.p');

 // Choice A
let rw2 = document.querySelector('.rw2');
rw2.style.display="none";


left.addEventListener('click', function() {
    
    leftRight.style.display ="none";
    left.style.display="none";
    right.style.display="none";
    rw2.style.display="block";

        text.innerHTML ="to eat a double click"

});