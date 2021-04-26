let mobileNav = document.querySelector("#nav-con");
let closeButton = document.querySelector(".cross");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
    mobileNav.classList.toggle("show-nav");
    closeButton.classList.toggle('close-menu')

});

closeButton.addEventListener("click",()=>{
    mobileNav.classList.toggle("show-nav");
    closeButton.classList.toggle("close-menu");
});
