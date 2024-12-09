let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('.text');

 // Choice A
let rw2 = document.querySelector('.rw2');
rw2.style.display="none";
let js4 = document.querySelector('.js4');
js4.style.display="none";
let es7 = document.querySelector('.es7');
es7.style.display="none";
let nw6 = document.querySelector('.nw6');
nw6.style.display="none";
let aj2 = document.querySelector('.aj2');
aj2.style.display="none";
let ss2 =document.querySelector('.ss2');
ss2.style.display="none";
// left left left left left left left left left left left left
left.addEventListener('click', function() {
    
    leftRight.style.display ="none";
    left.style.display="none";
    right.style.display="none";
    rw2.style.display="block";

        text.innerHTML ="to throw to jeremiah click, to handoff to evan use wheel"

});
// rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice rw2 right choice 
rw2.addEventListener('click', function() {
   leftRight.style.display="none;"
   left.style.display="none";
    right.style.display="none";
    rw2.style.display="none";
    js4.style.display="block";
 text.innerHTML="you ended up giving him the ball and he scored";
});
rw2.addEventListener('wheel', function() {
    leftRight.style.display="none;"
    left.style.display="none";
     right.style.display="none";
     rw2.style.display="none";
     js4.style.display="none";
     es7.style.display="block";
  text.innerHTML="he only got 2 yards its 4th and goal now "
 });
 // right choice 1
 right.addEventListener('click', function() {
    
    leftRight.style.display ="none";
    left.style.display="none";
    right.style.display="none";
    nw6.style.display="block";
    text.innerHTML="you have a double option to give to ashton or noah"
 
    
   });

   nw6.addEventListener('wheel', function() {
    
      leftRight.style.display ="none";
      left.style.display="none";
      right.style.display="none";
      aj2.style.display="block";
      nw6.style.display="none";
      text.innerHTML="you gave it to ashton and he got you to the 5 yard line now finish it with shedeur"

   
      
     });
     aj2.addEventListener('dblclick', function() {
    
      leftRight.style.display ="none";
      left.style.display="none";
      right.style.display="none";
      aj2.style.display="none";
      nw6.style.display="none";
      ss2.style.display="block";
      text.innerHTML=" yayyyy shedeur scored";

   
      
     });
