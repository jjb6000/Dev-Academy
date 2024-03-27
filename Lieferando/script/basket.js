// ANCHOR Basket functionality
function loadBasket() {
    // showBasketOnMobile()
    basketItems.innerHTML = ''
    for (let i = 0; i < basketObject.names.length; i++) {
        basketItems.innerHTML += generateBasketHtml(
            basketObject.amounts[i],
            basketObject.names[i],
            convertToGermanTypeFloat(basketObject.prices[i] * basketObject.amounts[i]), i);
    }
    showPrices();
    showPayBtn('flex');
    mobileBasketLink();
}


function orderFunction() {
    basketItems.innerHTML = generateConfirmOrderHtml();
    setTimeout(reload, 2000);
}


function reload() {
    window.location.reload();
}


function showPayBtn(attr) {
    payBtn.style.display = attr
}


// ANCHOR basket object
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
        showPayBtn('none');
        mobileBasketLink();
    } else {
        loadBasket();
    }
}


// ANCHOR mobile specific
function showBasketOnMobile() {
    basket.classList.add('mobile-basket');
    menuItems.classList.add('hide-with-mobile-basket');
    if (window.innerWidth < 1200) {
        window.scroll(0, 0);    
    }
}


function closeMobileBasket() {
    basket.classList.remove('mobile-basket');
    menuItems.classList.remove('hide-with-mobile-basket');
    loadMenu(currentMenu);
}


// ANCHOR math
function showPrices() {
    let subtotal = calculatePrices();
    total = +subtotal + 1;
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


function convertToGermanTypeFloat(number) {
    let price = number.toFixed(2);
    return price.toString().replace('.', ',');
}

