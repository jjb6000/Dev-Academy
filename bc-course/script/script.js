let currJSON;
let option = 'BTC';
let weeklyURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=demo';
let url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo'


document.getElementById('cryptoSelect').addEventListener('change', (e) => {
    option = e.target.value;
    console.log(option)
})

// TODO ZURÜCK AUF EURO SETZEN
function getURL() {
    // url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + option + '&to_currency=JPY&apikey=' + API_KEY;
    // weeklyURL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' + option + '&market=CNY&apikey=' + API_KEY
    init(url, showCurr);
    init(weeklyURL, callChartFunctions);
}


async function init(url, doSomethingFunction) {
    let course = await fetch(url).catch(errorFunction);
    data = await course.json();
    doSomethingFunction(data);
}


function errorFunction() {
    console.log('Fehler aufgetreten');
}


function showCurr(data) {
    courseContainer.innerHTML = roundTwoDecimalPlaces(data['Realtime Currency Exchange Rate']['5. Exchange Rate']) + ' ' + data['Realtime Currency Exchange Rate']['3. To_Currency Code'];
}



// ANCHOR CHART DATA
function callChartFunctions(data) {
    destroyOldChart();
    removeOldChartData();
    putInChartArrays(data['Time Series (Digital Currency Monthly)']);
    drawChart();
}


function putInChartArrays(object) {
    for (const key in object) {
        apiLabels.push(key);
        apiData.push(object[key]['2b. high (USD)']);
    }
    apiLabels.reverse();
    apiData.reverse()
}


function removeOldChartData() {
    apiData = [];
    apiLabels = [];
}


function roundTwoDecimalPlaces(number) {
    return Number(number).toFixed(2)
}