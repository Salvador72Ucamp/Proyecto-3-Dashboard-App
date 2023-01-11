import  crearChart  from "./crearChart.js";

document.getElementById("btn1").addEventListener("click",populationCountry);

function populationCountry(){
    var nameCountry = document.getElementById('inputName').value;
    console.log(nameCountry);

    fetch(`https://restcountries.com/v3.1/alpha?codes=mx,pe,br`)
    .then(response => response.json())
    .then( crearChart)
    .catch(error => console.log(error))
}
