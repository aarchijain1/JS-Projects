document.getElementsByClassName("tabs")[0].addEventListener("click",function(){
  document.getElementsByClassName("content")[0].style.display="block";
  document.getElementsByClassName("content")[1].style.display="none";
  document.getElementsByClassName("content")[2].style.display="none";
  document.getElementsByClassName("content")[3].style.display="none";
  document.getElementsByClassName("tabs")[0].classList.add("active");
  document.getElementsByClassName("tabs")[1].classList.remove("active");
  document.getElementsByClassName("tabs")[2].classList.remove("active");
  document.getElementsByClassName("tabs")[3].classList.remove("active");

});
document.getElementsByClassName("tabs")[1].addEventListener("click",function(){
  document.getElementsByClassName("content")[0].style.display="none";
  document.getElementsByClassName("content")[1].style.display="block";
  document.getElementsByClassName("content")[2].style.display="none";
  document.getElementsByClassName("content")[3].style.display="none";
  document.getElementsByClassName("tabs")[0].classList.remove("active");
  document.getElementsByClassName("tabs")[1].classList.add("active");
  document.getElementsByClassName("tabs")[2].classList.remove("active");
  document.getElementsByClassName("tabs")[3].classList.remove("active");

});
document.getElementsByClaassName("tabs")[2].addEventListener("click",function(){
  document.getElementsByClassName("content")[0].style.display="none";
  document.getElementsByClassName("content")[1].style.display="none";
  document.getElementsByClassName("content")[3].style.display="none";
  document.getElementsByClassName("content")[2].style.display="block";
  document.getElementsByClassName("tabs")[0].classList.remove("active");
  document.getElementsByClassName("tabs")[1].classList.remove("active");
  document.getElementsByClassName("tabs")[3].classList.remove("active");
  document.getElementsByClassName("tabs")[2].classList.add("active");

});

document.getElementsByClassName("tabs")[3].addEventListener("click",function(){
  document.getElementsByClassName("content")[0].style.display="none";
  document.getElementsByClassName("content")[1].style.display="none";
  document.getElementsByClassName("content")[2].style.display="none";
  document.getElementsByClassName("content")[3].style.display="block";
  document.getElementsByClassName("tabs")[0].classList.remove("active");
  document.getElementsByClassName("tabs")[1].classList.remove("active");
  document.getElementsByClassName("tabs")[2].classList.remove("active");
  document.getElementsByClassName("tabs")[3].classList.add("active");

});
