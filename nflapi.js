const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39c368df73mshcd9c28f03fca784p1c5cbejsn25f72bcea325',
		'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
	}
};


let equipos = [];

document.getElementById("btn3").addEventListener("click",()=>cargaApi());

async function cargaApi()
{
    document.getElementById("nameTittle").innerHTML="NFL"
    
    await fetch('https://api-american-football.p.rapidapi.com/standings?league=1&season=2022', options)
    .then(response => response.json())
    .then(response => CargaChart(response))
    .catch(err => console.error(err));

}


function GetTeams(equipos){
    let arrNames = [];
    equipos.forEach(element => {
        arrNames.push(element.team.name);
    });
    return arrNames;
}

function GetWon(equipos){
    let arrWon = [];
    equipos.forEach(element => {
        arrWon.push(element.won);
    });
    return arrWon;
}

//const ctx = document.getElementById('myChart');

function CargaChart(response){
    console.log(response);
    document.getElementById("chartContainer").innerHTML='<canvas id="myChart"></canvas>'
    const ctx = document.getElementById('myChart')
    equipos = response.response

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: GetTeams(equipos),
            datasets: [{
            label: 'Juegos Ganados',
            data: GetWon(equipos),
            backgroundColor:['rgba(0, 0, 255, 1)'],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });
}

