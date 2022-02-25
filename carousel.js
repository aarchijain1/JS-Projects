const slides = document.getElementsByClassName('item');
let i = 0;
document.getElementById('next').addEventListener("click", function() {
    Next();
  });
document.getElementById('prev').addEventListener("click", function() {
    Prev();
  });

function Next() {
  if (i == slides.length - 1) {
    i = 0;
  }
   else {
    i++;
  }
 show();
}

function Prev() {
  if (i == 0) {
    i = slides.length - 1;
  } 
  else {
    i--;
  }
  show();
}
function show() {
  for (let slide of slides) {
    slide.classList.remove('visible');
    slide.classList.add('hidden');
  }

  slides[i].classList.add('visible');
}
