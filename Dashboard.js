var loader=document.getElementById("preloader-div");
window.addEventListener("load",function()
{
    loader.style.display="none";
});


/* add hovered class in selected list item */
let list = document.querySelectorAll('.menu-ulli');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    item.classList.add('hovered');
    list.forEach((item) =>
    item.addEventListener('mouseover',activeLink));
}   

let toggle=document.querySelector('#imgLogo');
let nevigation=document.querySelector('#menuwrapper-div');
let main=document.querySelector('#topbar');

toggle.onclick=function(){
    nevigation.classList.toggle('active');
}