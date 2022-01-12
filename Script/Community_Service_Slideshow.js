    	var playSlider;
    	var track = 0;
	var pht = document.getElementById("photo-switch-communityService");

    	var repeater = () => {
      		playSlider = setInterval(function(){
			if(track == 0) {
				
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht)},0);
				}
				setTimeout(function() {switch1(pht)},1000);
				/*pht.src = "C:\\Users\\Tiffany McDonald\\Dropbox\\BrianFoster_Award.jpg"*/
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht)},1000);
				}
				track++;
				
			}
			else if( track == 1) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht)},0);
				}
				setTimeout(function() {switch2(pht},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht)},1000);
				}
				
				track++;
				
			}
			else if(track == 2)
			{
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht)},0);
				}
				setTimeout(function() {switch3(pht)},1000);
				/*pht.src = "C:\\Users\\Tiffany McDonald\\Dropbox\\Scott.jpg"*/
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht)},1000);
				}
				track = 3;
			}
        else if(track == 3)
			{
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht)},0);
				}
				setTimeout(function() {switch3(pht)},1000);
				/*pht.src = "C:\\Users\\Tiffany McDonald\\Dropbox\\Scott.jpg"*/
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht)},1000);
				}
				track = 0;
			}

	      }, 10000);
    	}
    repeater();

 function minusOpacity(event) {
	event.style.opacity = 0;
 }
 function addOpacity(event) {
	event.style.opacity = 1;
 }
 function switch1(event) {
	event.src = "/Photos/Associations/ACS.png";
 }
 function switch2(event) {
	event.src = "/Photos/Associations/GCCA.png";
 }
 function switch3(event) {
	event.src = "/Photos/HillsideLogo.png";
 }
 function switch4(event) {
	event.src = "/Photos/HFH_logo.png";
 }
