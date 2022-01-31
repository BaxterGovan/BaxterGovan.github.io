var count = 0;
var pht1 = document.getElementById("pht1");
var pht2 = document.getElementById("pht2");
var pht3 = document.getElementById("pht3");
var phttxt1 = document.getElementById("phttxt1");
var phttxt2 = document.getElementById("phttxt2");
var phttxt3 = document.getElementById("phttxt3");
function awardsSSPrev() {

	if( count == 0)
	{
		count = 4;
		pht1.src = "/Photos/Awards/Placards/Award2016BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2017BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2018BGSC.png";
		phttxt1.innerText = "2016 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2017 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2018 AGC Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 1)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2001BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2002BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2006BGSC.png";
		phttxt1.innerText = "2001 Build Georgia Specalty Contractor Award"
		phttxt2.innerText = "2002 Build Georgia Specalty Contractor Award"
		phttxt3.innerText = "2006 Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 2)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2007BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2008BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2008BGSC2.png";
		phttxt1.innerText = "2007 Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2008 Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2008 Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 3)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2009BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2010BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2011BGSC.png";
		phttxt1.innerText = "2009 Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2010 Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2011 AGC Build Georgia Specalty Contractor Award Merit Award"
	}
	else if( count == 4)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2014BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2015BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2015BGSC2.png";
		phttxt1.innerText = "2014 AGC Build Georgia Specalty Contractor Award Merit Award"
		phttxt2.innerText = "2015 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2015 AGC Build Georgia Specalty Contractor Award First Place"
	}

}

function awardsSSNext() {

	if( count == 0)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2007BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2008BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2008BGSC2.png";
		phttxt1.innerText = "2007 Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2008 Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2008 Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 1)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2009BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2010BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2011BGSC.png";
		phttxt1.innerText = "2009 Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2010 Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2011 AGC Build Georgia Specalty Contractor Award Merit Award"
	}
	else if( count == 2)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2014BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2015BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2015BGSC2.png";
		phttxt1.innerText = "2014 AGC Build Georgia Specalty Contractor Award Merit Award"
		phttxt2.innerText = "2015 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2015 AGC Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 3)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2016BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2017BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2018BGSC.png";
		phttxt1.innerText = "2016 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt2.innerText = "2017 AGC Build Georgia Specalty Contractor Award First Place"
		phttxt3.innerText = "2018 AGC Build Georgia Specalty Contractor Award First Place"
	}
	else if( count == 4)
	{
		count = 0;
		pht1.src = "/Photos/Awards/Placards/Award2001BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2002BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2006BGSC.png";
		phttxt1.innerText = "2001 Build Georgia Specalty Contractor Award"
		phttxt2.innerText = "2002 Build Georgia Specalty Contractor Award"
		phttxt3.innerText = "2006 Build Georgia Specalty Contractor Award First Place"
	}

}
