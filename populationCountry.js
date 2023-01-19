import  {crearChart}  from "./crearChart.js";

document.getElementById("btn1").addEventListener("click",()=>populationCountry("mx,gt,sv,hn,ni,cr,pa,bz"));
document.getElementById("btn2").addEventListener("click",()=>populationCountry("ar,bo,br,cl,co,ec,gy,py,pe,uy,ve"));

async function populationCountry(codes){
    document.getElementById("nameTittle").innerHTML="Tablero de Poblacion America por Region"
    console.log(codes);
    document.getElementById("chartContainer").innerHTML='<canvas id="myChart"></canvas>'
    const respuesta = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
    const data = await respuesta.json();
    crearChart(data);
    // .then(response => response.json())
    // .then( crearChart)
    // .catch(error => console.log(error))
}
// populationCountry()