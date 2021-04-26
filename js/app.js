let closeButton = document.querySelector(".cross");
let hamburger = document.getElementById("hamburger");
let mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", ()=>{
    mobileNav.classList.toggle("show-nav-con");
    console.log(mobileNav);
    closeButton.classList.toggle('close-menu')

});

closeButton.addEventListener("click",()=>{
    mobileNav.classList.toggle("show-nav-con");
    closeButton.classList.toggle("close-menu");
});
