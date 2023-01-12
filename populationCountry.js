import  {crearChart}  from "./crearChart.js";

document.getElementById("btn1").addEventListener("click",()=>populationCountry("mx,cl"));
document.getElementById("btn2").addEventListener("click",()=>populationCountry("br,ar"));

function populationCountry(codes){
    // var nameCountry = document.getElementById('inputName').value;
    console.log(codes);
document.getElementById("chartContainer").innerHTML='<canvas id="myChart"></canvas>'
    fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
    .then(response => response.json())
    .then( crearChart)
    .catch(error => console.log(error))
}
// populationCountry()