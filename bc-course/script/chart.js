
let myChart

function drawChart() {
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: apiLabels,
      datasets: [{
        label: 'Course',
        data: apiData,
        backgroundColor: CONFIG_BG_COLOR,
        borderColor: CONFIG_BORDER_COLOR,
        borderWidth: 1
      }],
      options: CONFIG_CHART_OPTIONS
    }
  });
}


function destroyOldChart() {
  if (myChart != undefined) {
    myChart.destroy()
  }
}




