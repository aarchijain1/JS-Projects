var acc = document.getElementsByClassName("faq");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// document.getElementsByClassName("faq")[0].addEventListener("click",function(){
//     document.getElementsByClassName("content")[0].style.display="block";
//     document.getElementsByClassName("content")[1].style.display="none";
//     document.getElementsByClassName("content")[2].style.display="none";
//     document.getElementsByClassName("faq")[0].classList.add("active");
//     document.getElementsByClassName("faq")[1].classList.remove("active");
//     document.getElementsByClassName("faq")[2].classList.remove("active");
  
//   });
//   document.getElementsByClassName("faq")[1].addEventListener("click",function(){
//     document.getElementsByClassName("content")[0].style.display="none";
//     document.getElementsByClassName("content")[1].style.display="block";
//     document.getElementsByClassName("content")[2].style.display="none";
//     document.getElementsByClassName("faq")[0].classList.remove("active");
//     document.getElementsByClassName("faq")[1].classList.add("active");
//     document.getElementsByClassName("faq")[2].classList.remove("active");
  
//   });
//   document.getElementsByClassName("faq")[2].addEventListener("click",function(){
//     document.getElementsByClassName("content")[0].style.display="none";
//     document.getElementsByClassName("content")[1].style.display="none"; 
//     document.getElementsByClassName("content")[2].style.display="block";
//     document.getElementsByClassName("faq")[0].classList.remove("active");
//     document.getElementsByClassName("faq")[1].classList.remove("active");
//     document.getElementsByClassName("faq")[2].classList.add("active");
  
//   });
