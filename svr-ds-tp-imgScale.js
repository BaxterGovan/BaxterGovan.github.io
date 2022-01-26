var cont = document.querySelector(".svr-ds-tp-img-container");

var x = window.matchMedia("(max-width: 850px)")

function myfunc(x) {
if(x.matches)
	cont.style.height = $(window).width() +"px"; 
}

var playSlider;

    var repeater = () => {
	playSlider = setInterval(function(){
      myfunc(x);
     
      }, 500);
    }
    repeater();

