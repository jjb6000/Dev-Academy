


function drawChart() {
  const myChart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
         label: 'Base Stats',
        data: currentPokemon.basicStats,
        fill: 'false',
        backgroundColor: CONFIG_BG_COLOR,
        borderColor: CONFIG_BORDER_COLOR,
        borderWidth: 1
      }]
    },
    options: CONFIG_CHART_OPTIONS
  });
}




