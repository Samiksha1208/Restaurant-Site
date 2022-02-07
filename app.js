var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");
var cont3 = document.getElementsByClassName("container3")[0]; 
function OnAll(){
        menu1.style.display = 'block';
        menu2.style.display = 'block';
        menu3.style.display = 'block';
        menu4.style.display = 'block';
        menu5.style.display = 'block';
        menu6.style.display = 'block';
        cont3.style.height = "auto";
}
function OnBreakFast(){
        menu1.style.display = 'block';
        menu2.style.display = 'none';
        menu3.style.display = 'none';
        menu4.style.display = 'block';
        menu5.style.display = 'block';
        menu6.style.display = 'block';
        cont3.style.height = "auto";
}
function OnLunch(){
        menu1.style.display = 'none';
        menu2.style.display = 'none';
        menu3.style.display = 'none';
        menu4.style.display = 'none';
        menu5.style.display = 'block';
        menu6.style.display = 'block';
        cont3.style.height = "auto";
}
function OnDinner(){
        menu1.style.display = 'block';
        menu2.style.display = 'block';
        menu3.style.display = 'none';
        menu4.style.display = 'none';
        menu5.style.display = 'block';
        menu6.style.display = 'none';
        cont3.style.height = "auto";
}
function OnCoffee(){
        menu1.style.display = 'none';
        menu2.style.display = 'block';
        menu3.style.display = 'none';
        menu4.style.display = 'block';
        menu5.style.display = 'block';
        menu6.style.display = 'none';
        cont3.style.height = "auto";
}
function OnSnacks(){
        menu1.style.display = 'none';
        menu2.style.display = 'none';
        menu3.style.display = 'none';
        menu4.style.display = 'block';
        menu5.style.display = 'block';
        menu6.style.display = 'block';
        cont3.style.height = "auto";
}
var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}