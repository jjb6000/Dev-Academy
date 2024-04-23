const API_KEY = 'F1R0AAVWVLRRU233';
const courseContainer = document.getElementById('courseContainer');
let currJSON;
let option = 'BTC';


document.getElementById('cryptoSelect').addEventListener('change', (e) => {
    option = e.target.value;
    console.log(option)
})


function getURL() {
    url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + option + '&to_currency=EUR&apikey=' + API_KEY;
    init(url);
}


async function init(url) {
    let course = await fetch(url).catch(errorFunction);
    data = await course.json();
    showCurr(data);
}


function errorFunction() {
    console.log('Fehler aufgetreten');
}


function showCurr(data) {
    courseContainer.innerHTML = roundTwoDecimalPlaces(data['Realtime Currency Exchange Rate']['5. Exchange Rate']) + ' ' + data['Realtime Currency Exchange Rate']['3. To_Currency Code'];
}


function roundTwoDecimalPlaces(number) {
    return Number(number).toFixed(2)
}