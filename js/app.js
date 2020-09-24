let harmburger = document.getElementById('harmburger');
let closeButton = document.getElementById('close-menu');
let showNav = document.getElementById('show-nav')
harmburger.addEventListener('click',function(){
    harmburger.classList += "close-harmburger";
    closeButton.classList.toggle('close-img');
    showNav.classList.toggle('hide-nav')


})
console.log(closeButton);
