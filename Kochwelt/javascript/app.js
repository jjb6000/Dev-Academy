const standardValue = document.getElementById('input-text').value
let amountSpans = document.getElementsByClassName('variable');
let basicArray = []
let basicArrayXstandardvalue = []

function getBasicAmounts() {
    for (let i = 0; i < amountSpans.length; i++) {
        let base = amountSpans[i].innerHTML / standardValue
        basicArray.push(base.toFixed(2));
    }
    for (let i = 0; i < amountSpans.length; i++) {
        let base = amountSpans[i].innerHTML
        basicArrayXstandardvalue.push(base);
    }

    console.log(basicArray);
    console.log(basicArrayXstandardvalue);
}

function calculateAmount() {

    let multiplicator = document.getElementById('input-text').value

    if (multiplicator === standardValue) {
        for (let i = 0; i < basicArrayXstandardvalue.length; i++) {
            let newAmount = basicArrayXstandardvalue[i];
            amountSpans[i].innerHTML = `${newAmount}`;
        }

    } else if (multiplicator > 0) {
        for (let i = 0; i < basicArray.length; i++) {
            let newAmount = basicArray[i] * multiplicator;
            amountSpans[i].innerHTML = `${newAmount}`;
        }
    } else {
        alert("Nur positive Zahlen");
    }
}