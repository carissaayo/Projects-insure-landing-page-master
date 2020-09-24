let harmburger = document.getElementById('harmburger');
let closeButton = document.getElementById('close-menu');
let showNav= document.querySelector('.show-nav');
harmburger.addEventListener('click',function(){
    // to remove the harmburger image
    harmburger.classList += "close-harmburger";
    // to add the close image
    closeButton.classList.toggle('close-img');
    // to show the nav-menu
    showNav.classList.toggle('hide-nav')


})
closeButton.addEventListener('click',function(){
    // to show the harmburger image
    harmburger.classList.toggle('close-harmburger');
    // to remove the close image
    closeButton.classList.toggle('close-img');
    // to close the nav-menu
    showNav.classList.toggle('hide-nav')
})


