let element = document.getElementById('btn');
let links = document.querySelector('.small-nav');
let box = document.querySelector('.info-box');
element.onclick = function(){
    links.classList.toggle('nav-open');
    box.classList.toggle('inf');
}