let apiData = [65, 59, 80, 81, 56, 55, 40];
let apiData2 = [65, 60, 86, 86, 56, 40, 40];
let apiLabels = ['01', '02', '03', '04', '05', '06'];

const ctx = document.getElementById('myChart');


// ANCHOR   GRAPH CONFIGS
const CONFIG_BG_COLOR = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
];

const CONFIG_BORDER_COLOR = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

const CONFIG_CHART_OPTIONS = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};



