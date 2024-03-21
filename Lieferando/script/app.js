function loadMenu(jsonArray) {
    menuItems.innerHTML = '';
    currentMenu = jsonArray;
    for (let i = 0; i < jsonArray.length; i++) {
        menuItems.innerHTML += generateMenuHtml(jsonArray[i]['name'], jsonArray[i]['ingredients'], jsonArray[i]['price'], i);
    }
}


function loadBasket() {
    basketItems.innerHTML = ''
    for (let i = 0; i < basketObject.names.length; i++) {
        basketItems.innerHTML += generateBasketHtml(
            basketObject.amounts[i], 
            basketObject.names[i], 
            convertToGermanTypeFloat(basketObject.prices[i] * basketObject.amounts[i]),
             i);
    }
    showPrices();
}


function addToBasket(menuIndex) {
    arrayPush(basketObject.names, currentMenu[menuIndex]['name']);
    arrayPush(basketObject.prices, currentMenu[menuIndex]['price']);
    arrayPush(basketObject.amounts, 1);
    loadBasket();
}


function changeAmountInBasket(basketIndex, number) {
    basketObject.amounts[basketIndex] = +basketObject.amounts[basketIndex] + number;
    checkAmountsFor0(basketIndex, basketObject.amounts[basketIndex])
}


function deleteFromBasketObject(basketIndex) {
    arraySplice(basketObject.names, basketIndex);
    arraySplice(basketObject.prices, basketIndex);
    arraySplice(basketObject.amounts, basketIndex);
}


function convertToGermanTypeFloat(number) {
    let price = number.toFixed(2);
    return price.toString().replace('.', ',');
}


//ANCHOR Basket validation functions

function checkBasketObject(menuIndex) {
    let basketIndex = getBasketIndex(menuIndex)
    if (basketIndex == -1) {
        addToBasket(menuIndex);
    } else {
        changeAmountInBasket(basketIndex, 1)
    }
}


function getBasketIndex(menuIndex) {
    return basketObject.names.indexOf(currentMenu[menuIndex]['name']);
}


function checkAmountsFor0(basketIndex, number) {
    if (number == 0) {
        deleteFromBasketObject(basketIndex);
        checkIfBasketIsEmpty();
    } else {
        loadBasket();
    }
}


function checkIfBasketIsEmpty() {
    if (basketObject.names[0] == undefined) {
        basketItems.innerHTML = generateBasketPlaceholderHtml();
        sumContainer.innerHTML = generateSumContainerHtml(convertToGermanTypeFloat(0), convertToGermanTypeFloat(0));
    } else {
        loadBasket();
    }
}



// ANCHOR sum

function showPrices() {
    let subtotal = calculatePrices();
    let total = +subtotal + 1;
    sumContainer.innerHTML = generateSumContainerHtml(convertToGermanTypeFloat(+subtotal), convertToGermanTypeFloat(+total));
}


function calculatePrices() {
    let sum = 0;
    for (let i = 0; i < basketObject.prices.length; i++) {
        const itemXAmount = +basketObject.prices[i] * basketObject.amounts[i];
        sum = sum + itemXAmount;
    }
    return sum
}


// ANCHOR array functions
function arrayPush(array, value) {
    array.push(value);
}


function arraySplice(array, value) {
    array.splice(value, 1);
}





