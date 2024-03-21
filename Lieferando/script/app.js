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
        const amount = basketObject.amounts[i];
        const name = basketObject.names[i];
        const price = basketObject.prices[i];
        basketItems.innerHTML += generateBasketHtml(amount, name, price, i);
    }
}


function addToBasket(menuIndex) {
    basketObject.names.push(currentMenu[menuIndex]['name']);
    basketObject.prices.push(currentMenu[menuIndex]['price']);
    basketObject.amounts.push(1);
    loadBasket();
}


function changeAmountInBasket(basketIndex, number) {
    basketObject.amounts[basketIndex] = +basketObject.amounts[basketIndex] + number;
    checkAmountsFor0(basketIndex, basketObject.amounts[basketIndex])
}


function deleteFromBasketObject(basketIndex) {
    basketObject.names.splice(basketIndex, 1);
    basketObject.prices.splice(basketIndex, 1);
    basketObject.amounts.splice(basketIndex, 1);
}


//ANCHOR Basket validation functions

function checkIfBasketIsEmpty() {
    if (basketObject.names[0] == undefined) {
        basketItems.innerHTML = generateBasketPlaceholderHtml();
    } else {
        loadBasket();
    }
}


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



