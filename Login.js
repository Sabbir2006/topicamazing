
/**Preloader | Sign in form position fixed **/
var loader=document.getElementById("preloader-div");
window.addEventListener("load",function()
{
    loader.style.display="none";
    document.getElementById("usretag-signin-txt").focus();
    //Removable after complete positioning   
    sign_in.style.left="35px";
});



/**Logo Click | Transparent topbar while scrolling**/
document.getElementById('imgLogo').onclick=function()
{
    window.open('index.html','_self');
}


/**Show Signin & Signup form 'onbtnclick'**/
var sign_in=document.getElementById("signin-frm")
var sign_up=document.getElementById("signup-frm")
var btn=document.getElementById("btn")
function signin()
{
    sign_in.style.left="35px";
    sign_up.style.left="400px";
    btn.style.left="0px";
    document.getElementById('status-label').textContent="Sign in with";
}
function signup()
{
    sign_in.style.left="400px";
    sign_up.style.left="35px";
    btn.style.left="110px";
    document.getElementById('status-label').textContent="Sign up with";
}

/**Signin-btn Click**/
var usertag='Sabbir Rahman Bd 5040302010';
var passkey='bd5040302010';

function submit_of_signin()
{
    event.preventDefault();
    if(
        document.getElementById('usretag-signin-txt').value==usertag &&
        document.getElementById('passkey-signin-txt').value==passkey)
    {
        window.open('Dashboard.html','_self');
    }
    else
    {
        document.getElementById('status-label').textContent="Faild ! Check it again.";
    }
}