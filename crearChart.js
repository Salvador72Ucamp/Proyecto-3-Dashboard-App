export function crearChart(data){
    const resultadoLabels = data.map((ciudad)=>ciudad.name.common);
    const resultadoValues = data.map((ciudad)=>ciudad.population);
    console.log(resultadoLabels,resultadoValues)

    const ctx = document.getElementById('myChart')
    
//     new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: resultadoLabels,
//         datasets: [
//             {
//                 label: 'Population by Country',
//                 data: resultadoValues,
//                 borderWidth: 1,
//             },
//         ],
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     },
// })




    new Chart(ctx,{
        type: 'polarArea',
     data : {
        labels: resultadoLabels,
        datasets: [{
          label: 'Population by country',
          data: resultadoValues,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      }});
}