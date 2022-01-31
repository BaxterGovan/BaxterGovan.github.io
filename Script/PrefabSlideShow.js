    	var playSlider1;
    	var track1 = 0;
	var cont = document.getElementById("photo-media1").children;
	var photo = cont[0];
    	var repeater1 = () => {
      		playSlider1 = setInterval(function(){
			if(track1 == 0) {
				
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch1(photo)},1000);
				
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				track1++;
				
			}
			else if( track1 == 1) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch2(photo)},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				
				track1++;
				
			}
			else if( track1 == 2) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch3(photo)},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				
				track1++;
				
			}
			else if( track1 == 3) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch4(photo)},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				
				track1++;
				
			}
			else if( track1 == 4) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch5(photo)},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				
				track1++;
				
			}
			else if( track1 == 5) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity1(photo)},0);
				}
				setTimeout(function() {theSwitch6(photo)},1000);

				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity1(photo)},1000);
				}
				
				track1 = 0;
				
			}
			

	      }, 10000);
    	}
    repeater1();

 function minusOpacity1(event1) {
	event1.style.opacity = 0;
 }
 function addOpacity1(event1) {
	event1.style.opacity = 1;
 }
 function theSwitch1(event1) {
	event1.src = "/Photos/Prefab/PrefabPost.png";
 }
 function theSwitch2(event1) {
	event1.src = "/Photos/Prefab/PrefabSpool.png";
 }
 function theSwitch3(event1) {
	event1.src = "/Photos/Prefab/Prefab-sm1.jpg";
 }
 function theSwitch4(event1) {
	event1.src = "/Photos/Prefab/Prefab-sm2.jpg";
 }
 function theSwitch5(event1) {
	event1.src = "/Photos/Prefab/Prefab-sm3.jpg";
 }
 function theSwitch6(event1) {
	event1.src = "/Photos/Prefab/Prefab-sm4.jpg";
 }

