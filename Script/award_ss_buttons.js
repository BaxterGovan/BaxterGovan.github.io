var count = 0;
var pht1 = document.getElementById("pht1");
var pht2 = document.getElementById("pht2");
var pht3 = document.getElementById("pht3");
function awardsSSPrev() {

	if( count == 0)
	{
		count = 4;
		pht1.src = "/Photos/Awards/Placards/Award2016BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2017BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2018BGSC.png";
	}
	else if( count == 1)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2001BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2002BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2006BGSC.png";
	}
	else if( count == 2)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2007BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2008BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2008BGSC2.png";
	}
	else if( count == 3)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2009BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2010BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2011BGSC.png";
	}
	else if( count == 4)
	{
		count--;
		pht1.src = "/Photos/Awards/Placards/Award2014BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2015BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2015BGSC2.png";
	}

}

function awardsSSNext() {

	if( count == 0)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2007BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2008BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2008BGSC2.png";
	}
	else if( count == 1)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2009BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2010BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2011BGSC.png";
	}
	else if( count == 2)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2014BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2015BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2015BGSC2.png";
	}
	else if( count == 3)
	{
		count++;
		pht1.src = "/Photos/Awards/Placards/Award2016BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2017BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2018BGSC.png";
	}
	else if( count == 4)
	{
		count = 0;
		pht1.src = "/Photos/Awards/Placards/Award2001BGSC.png";
		pht2.src = "/Photos/Awards/Placards/Award2002BGSC.png";
		pht3.src = "/Photos/Awards/Placards/Award2006BGSC.png";
	}

}
