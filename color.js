//-----SINGLE COLOR----- 
// const colors = ["#000080", "#00008B", "#0000CD", "#0000FF","#006400", "#008000", "#008080", "#008B8B"];
// document.getElementById("btn").style.backgroundColor=colors;

// btn.addEventListener("click", function  () {
//   const colour = 7;
//   document.body.style.backgroundColor = colors[colour];
// });


// -----ARRAY-----
const colors = ["#FF0000","#FF00FF","#FF00FF","#FF1493","#FF4500","#FF6347","#FF69B4","#FF7F50","#FF8C00","#FFA07A","#FFA500","#FFB6C1","#FFC0CB","#FFD700","#FFDAB9","#000080","#FFDEAD","#FFE4B5","#FFE4C4","#FFE4E1","#FFEBCD","#FFEFD5","#FFF0F5","#FFF5EE","#FFF8DC","#FFFACD","#FFFAF0","#FFFAFA","#FFFF00","#FFFFE0","#FFFFF0","#FFFFFF"];
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


//-----HEXCODE-------
   const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
   const btn = document.getElementById("btn");
   const color = document.querySelector(".color");
   
   btn.addEventListener("click", function() {
       let hexColor = "#";
       let i=0
       for( i=0 ; i<6; i++) {
           hexColor= hexColor+ hex[getRandomNumber()];
       }
   color.textContent=hexColor;
       document.body.style.backgroundColor = hexColor;
   });
   
   function getRandomNumber() {
       return Math.floor(Math.random() * hex.length);
   } 
