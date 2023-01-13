import  {crearChart}  from "./crearChart.js";

document.getElementById("btn1").addEventListener("click",()=>populationCountry("mx,gt,sv,hn,ni,cr,pa,bz"));
document.getElementById("btn2").addEventListener("click",()=>populationCountry("ar,bo,br,cl,co,ec,gy,py,pe,uy,ve"));

function populationCountry(codes){
    
    console.log(codes);
    document.getElementById("chartContainer").innerHTML='<canvas id="myChart"></canvas>'
    fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
    .then(response => response.json())
    .then( crearChart)
    .catch(error => console.log(error))
}
// populationCountry()