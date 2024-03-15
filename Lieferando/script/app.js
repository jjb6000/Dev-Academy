function loadMenu(jsonArray) {
    menuItems.innerHTML = '';
    currentMenu = jsonArray;
    for (let i = 0; i < jsonArray.length; i++) {
        menuItems.innerHTML += generateMenuHtml(jsonArray[i]['name'], jsonArray[i]['ingredients'], jsonArray[i]['price'], i);
    }
}


function addToBasket(index) {
    basketItems.innerHTML += generateBasketHtml(currentMenu[index]['name'], currentMenu[index]['price']);
}

