function loadMenu(jsonArray) {
    menuItems.innerHTML = '';
    currentMenu = jsonArray;
    for (let i = 0; i < jsonArray.length; i++) {
        menuItems.innerHTML += generateMenuHtml(jsonArray[i]['name'], jsonArray[i]['ingredients'], jsonArray[i]['price'], i);
    }
}


function addToBasket(index) {
    let basketIndex = getBasketItemIndex(currentMenu[index]['name']);
    if (basketIndex == -1) {
        basketObject.names.push(currentMenu[index]['name']);
        basketObject.prices.push(currentMenu[index]['price']);
        basketObject.amounts.push(1);
    } else {
        basketObject.amounts[basketIndex] = +basketObject.amounts[basketIndex] + 1;
    }
    loadBasket();
}


function getBasketItemIndex(name) {
    return basketObject.names.indexOf(name);
}


function loadBasket() {
    basketItems.innerHTML = ''
    for (let i = 0; i < basketObject.names.length; i++) {
        const amount = basketObject.amounts[i];
        const name = basketObject.names[i];
        const price = basketObject.prices[i];
        basketItems.innerHTML += generateBasketHtml(amount, name, price);
    }
}
