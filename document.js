var liner = document.querySelectorAll(".listed-characters");
var inside = document.querySelectorAll(".inner_li_flex");
var names = document.querySelectorAll(".names");
for(var i = 0; i < inside.length; i++){
    inside[i].addEventListener("click", (e) => {
        e.currentTarget.parentNode
                .querySelectorAll('.sub-menu')[0]
                .classList.toggle("showMenu");
        e.currentTarget.querySelectorAll('.arrow')[0]
                       .classList.toggle("rotation");
    })
}
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let spdr = document.querySelector("#spdr");
let sbd = document.querySelector("#sbd");
var x = window.matchMedia("(max-width: 1000px)")
function toogler(x){
  if(x.matches){
    btn.onclick = function() {
      sidebar.classList.toggle("active")
      spdr.classList.toggle("slider_active")
    }
    spdr.onclick = function() {
      sidebar.classList.toggle("active")
      spdr.classList.toggle("slider_active")
    }
  }
}
toogler(x)
let walker = document.querySelectorAll("#walk")
console.log(walker)
for(var i = 0; i < walker.length; i++){
  walker[i].addEventListener("click", (e) => {
    if(e.currentTarget.parentNode.querySelectorAll('.inner_container')[0]
    .classList != "scale-in-top"){
      e.currentTarget.parentNode.querySelectorAll('.inner_container')[0]
      .classList.add("scale-in-top")
    }else{
      e.currentTarget.parentNode.querySelectorAll('.inner_container')[0]
      .classList.remove("scale-in-top").add("scale-in-top-reverse")
    }
  })
}
// for(var i = 0; i < walker.length; i++){
//   walker[i].addEventListener("click", (e) =>{
//     if(e.currentTarget.parentNode.querySelectorAll('.inner_container')[0]
//     .classList == "scale-in-top"){
//       e.currentTarget.parentNode.querySelectorAll('.inner_container')[0]
//       .classList.remove("scale-in-top").add("scale-in-top-reverse")
//     }
//   })
// }