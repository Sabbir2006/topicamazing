var loader=document.getElementById("preloader-div");
window.addEventListener("load",function()
{
    loader.style.display="none";
    document.getElementById("txtSearch").focus();
});


document.getElementById('btnSearch').onclick = function() 
{
    window.open('http://google.com/search?q='+document.getElementById('txtSearch').value);
}
document.getElementById('btnReveal').onclick = function()
{
    window.open('Login.html','_self');
}