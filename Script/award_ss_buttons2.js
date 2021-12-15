var count2 = 0;
var pht4 = document.getElementById("pht4");
var pht5 = document.getElementById("pht5");
var pht6 = document.getElementById("pht6");
function awardsSSPrev2() {

	if( count2 == 0)
	{
		count2 = 5;
		pht4.style="top: 0px;"
		pht4.src = "/Photos/Awards/Glass/Award2020NECA.png";
		pht5.src = "/Photos/Awards/Glass/Award2020OSPA.png";
		pht6.src = "/Photos/Awards/Glass/Award2021NECA.png";
	}
	else if( count2 == 1)
	{
		count2--;
		pht4.style="top: 36px;"
		pht4.src = "/Photos/Awards/Glass/Award2001BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2004BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2006BGSC.png";
	}
	else if( count2 == 2)
	{
		count2--;
		pht4.style="top: 0px;"
		pht4.src = "/Photos/Awards/Glass/Award2007BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2008BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2009BGSC.png";
	}
	else if( count2 == 3)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2010BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2012BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2013OSPA.png";
	}
	else if( count2 == 4)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2015BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2016BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2017BGSC.png";
	}
	else if( count2 == 5)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2018BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2019BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2019NECA.png";
	}

}

function awardsSSNext2() {

	if( count2 == 0)
	{
		count2++;
		pht4.style="top: 0px;"
		pht4.src = "/Photos/Awards/Glass/Award2007BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2008BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2009BGSC.png";
	}
	else if( count2 == 1)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2010BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2012BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2013OSPA.png";
	}
	else if( count2 == 2)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2015BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2016BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2017BGSC.png";
	}
	else if( count2 == 3)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2018BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2019BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2019NECA.png";
	}
	else if( count2 == 4)
	{
		count2++;
		pht4.style="top: 0px;"
		pht4.src = "/Photos/Awards/Glass/Award2020NECA.png";
		pht5.src = "/Photos/Awards/Glass/Award2020OSPA.png";
		pht6.src = "/Photos/Awards/Glass/Award2021NECA.png";
	}
	else if( count2 == 5)
	{
		count2 = 0;
		pht4.style="top: 36px;"
		pht4.src = "/Photos/Awards/Glass/Award2001BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2004BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2006BGSC.png";
	}

}
