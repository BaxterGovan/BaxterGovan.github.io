    	var playSlider;
    	var track = 0;
	var pht = document.getElementById("photo-switch");
	var cnt = document.getElementById("cnt");
	var txt1 = document.getElementById("text1");
	var txt2 = document.getElementById("text2");
	var l1 = document.getElementById("l1");
	var l2 = document.getElementById("l2");
	var l3 = document.getElementById("l3");
    	var repeater = () => {
      		playSlider = setInterval(function(){
			if(track == 0) {
				
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht,cnt)},0);
				}
				setTimeout(function() {switch1(pht,txt1,txt2)},1000);
				/*pht.src = "C:\\Users\\Tiffany McDonald\\Dropbox\\BrianFoster_Award.jpg"*/
				l1.style.backgroundColor = "white";
				l2.style.backgroundColor = "green";
				l3.style.backgroundColor = "white";
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht,cnt)},1000);
				}
				track++;
				
			}
			else if( track == 1) {
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht,cnt)},0);
				}
				setTimeout(function() {switch2(pht,txt1,txt2)},1000);

				l1.style.backgroundColor = "white";
				l2.style.backgroundColor = "white";
				l3.style.backgroundColor = "green";
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht,cnt)},1000);
				}
				
				track++;
				
			}
			else if(track == 2)
			{
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {minusOpacity(pht,cnt)},0);
				}
				setTimeout(function() {switch3(pht,txt1,txt2)},1000);
				/*pht.src = "C:\\Users\\Tiffany McDonald\\Dropbox\\Scott.jpg"*/
				l1.style.backgroundColor = "green";
				l2.style.backgroundColor = "white";
				l3.style.backgroundColor = "white";
				for(let i=0;i<1;i++)
				{
					setTimeout(function() {addOpacity(pht,cnt)},1000);
				}
				track = 0;
			}

	      }, 10000);
    	}
    repeater();

 function minusOpacity(event,container) {
console.log("minusOpacity"+event.style.opacity);
	event.style.opacity = 0;
	container.style.opacity = 0;
 }
 function addOpacity(event,container) {
console.log("addOpacity"+event.style.opacity);
	event.style.opacity = 1;
	container.style.opacity = 1;
 }
 function switch1(event, text1, text2) {
	event.src = "/Photos/BrianFoster_Award.jpg";
	text1.innerText = "Project Manager Brian Foster";
	text2.innerText = "Mayberry Electric is proud to win a 2021 NECA interiors Project Excellence Award";
 }
 function switch2(event, text1, text2) {
	event.src = "/Photos/LisaAward.png";
	text1.innerText = "Mayberry Electric President Lisa Hollingshed (Right)";
	text2.innerText = "Winner of the 2013 BOMA Georgia Presidents Award";
 }
 function switch3(event, text1, text2) {
	event.src = "/Photos/steve_mowers_2018AGC_award.jpg";
	text1.innerText = "Senior Project Manager Scott Mowers (Middle)";
	text2.innerText = "MEI winning the First Place Trophy for the 2018 AGC Georgia Specialty Contractor Award";
 }
