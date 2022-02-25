const counter=document.getElementById('counter')

  let i = 0;
function inc() {
  i=i+1;
  document.getElementById("counter").innerHTML = i;
  color();
 }

 function dec() {
    i=i-1;
    document.getElementById("counter").innerHTML = i;
  color();
   }
   function reset() {
    i=0;
    document.getElementById("counter").innerHTML = i;
    color();
   }
   function color(){
if (i > 0) {
    counter.style.color = 'green';
}

if (i < 0) {
    counter.style.color = 'red';
}

if (i == 0) {
    counter.style.color = 'grey';
}
   }
