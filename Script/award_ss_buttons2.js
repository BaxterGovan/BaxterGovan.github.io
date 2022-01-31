var count2 = 0;
var pht4 = document.getElementById("pht4");
var pht5 = document.getElementById("pht5");
var pht6 = document.getElementById("pht6");
var phttxt4 = document.getElementById("phttxt4");
var phttxt5 = document.getElementById("phttxt5");
var phttxt6 = document.getElementById("phttxt6");


pht4.style.maxHeight = "436px";
pht5.style.maxHeight = "436px";
pht6.style.maxHeight = "436px";
phttxt4.style.marginTop = "-50px";
phttxt5.style.marginTop = "-20px";
phttxt6.style.marginTop = "-20px";
function awardsSSPrev2() {

	if( count2 == 0)
	{
		count2 = 5;
		
		pht4.src = "/Photos/Awards/Glass/Award2020NECA.png";
		pht5.src = "/Photos/Awards/Glass/Award2020OSPA.png";
		pht6.src = "/Photos/Awards/Glass/Award2021NECA.png";
		phttxt4.innerText = "2020 NECA Project Excellence Award";
		phttxt4.style.marginTop = "-20px";
		phttxt5.innerText = "2020 Turner Outstanding Subcontractor Performance Award";
		phttxt5.style.fontSize = "18px";
		phttxt6.innerText = "2021 NECA Project Excellence Award";
	}
	else if( count2 == 1)
	{
		count2--;
		
		pht4.src = "/Photos/Awards/Glass/Award2001BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2004BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2006BGSC.png";
		phttxt4.innerText = "2001 Build Georgia Specialty Contractor Award";
		phttxt4.style.marginTop = "-50px";
		phttxt5.innerText = "2004 Build Georgia Specialty Contractor Award";
		phttxt5.style.fontSize = "20px";
		phttxt6.innerText = "2006 Build Georgia Specialty Contractor Award";
	}
	else if( count2 == 2)
	{
		count2--;
		
		pht4.src = "/Photos/Awards/Glass/Award2007BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2008BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2009BGSC.png";
		phttxt4.innerText = "2007 Build Georgia Specialty Contractor Award";
		phttxt4.style.marginTop = "-20px";
		phttxt5.innerText = "2008 Build Georgia Specialty Contractor Award";
		phttxt6.innerText = "2009 Build Georgia Specialty Contractor Award First Place";
	}
	else if( count2 == 3)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2010BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2012BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2013OSPA.png";
		phttxt4.innerText = "2010 Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2012 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2013 Turner Outstanding Subcontractor Performance Award";
		phttxt6.style.fontSize = "18px";
	}
	else if( count2 == 4)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2015BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2016BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2017BGSC.png";
		phttxt4.innerText = "2015 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2016 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2017 AGC Build Georgia Specialty Contractor Award First Place";
	}
	else if( count2 == 5)
	{
		count2--;
		pht4.src = "/Photos/Awards/Glass/Award2018BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2019BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2019NECA.png";
		phttxt4.innerText = "2018 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2019 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2019 NECA Project Excellence Award";
	}

}

function awardsSSNext2() {

	if( count2 == 0)
	{
		count2++;
		
		pht4.src = "/Photos/Awards/Glass/Award2007BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2008BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2009BGSC.png";
		phttxt4.innerText = "2007 Build Georgia Specialty Contractor Award";
		phttxt5.innerText = "2008 Build Georgia Specialty Contractor Award";
		phttxt6.innerText = "2009 Build Georgia Specialty Contractor Award First Place";
	}
	else if( count2 == 1)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2010BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2012BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2013OSPA.png";
		phttxt4.innerText = "2010 Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2012 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2013 Turner Outstanding Subcontractor Performance Award";
	}
	else if( count2 == 2)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2015BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2016BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2017BGSC.png";
		phttxt4.innerText = "2015 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2016 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2017 AGC Build Georgia Specialty Contractor Award First Place";
	}
	else if( count2 == 3)
	{
		count2++;
		pht4.src = "/Photos/Awards/Glass/Award2018BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2019BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2019NECA.png";
		phttxt4.innerText = "2018 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt5.innerText = "2019 AGC Build Georgia Specialty Contractor Award First Place";
		phttxt6.innerText = "2019 NECA Project Excellence Award";
	}
	else if( count2 == 4)
	{
		count2++;
		
		pht4.src = "/Photos/Awards/Glass/Award2020NECA.png";
		pht5.src = "/Photos/Awards/Glass/Award2020OSPA.png";
		pht6.src = "/Photos/Awards/Glass/Award2021NECA.png";
		phttxt4.innerText = "2020 NECA Project Excellence Award";
		phttxt5.innerText = "2020 Turner Outstanding Subcontractor Performance Award";
		phttxt6.innerText = "2021 NECA Project Excellence Award";
	}
	else if( count2 == 5)
	{
		count2 = 0;
		
		pht4.src = "/Photos/Awards/Glass/Award2001BGSC.png";
		pht5.src = "/Photos/Awards/Glass/Award2004BGSC.png";
		pht6.src = "/Photos/Awards/Glass/Award2006BGSC.png";
		phttxt4.innerText = "2001 Build Georgia Specialty Contractor Award";
		phttxt5.innerText = "2004 Build Georgia Specialty Contractor Award";
		phttxt6.innerText = "2006 Build Georgia Specialty Contractor Award";
	}

}
