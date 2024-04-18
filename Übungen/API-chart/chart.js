


function drawChart() {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: apiLabels,
      datasets: [{
        label: 'My First Dataset',
        data: apiData,
        backgroundColor: CONFIG_BG_COLOR,
        borderColor: CONFIG_BORDER_COLOR,
        borderWidth: 1
      },
      {
        label: 'My 2nd Dataset',
        data: apiData2,
        backgroundColor: CONFIG_BG_COLOR,
        borderColor: CONFIG_BORDER_COLOR,
        borderWidth: 1
      }],
      options: CONFIG_CHART_OPTIONS
    }
  });
}




