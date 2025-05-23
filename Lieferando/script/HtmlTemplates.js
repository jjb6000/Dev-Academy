function generateMenuHtml(name, ingredients, price, menuIndex) {
    return /*html*/`
        <div class="menu-item">
            <div class="menu-item-content">
                <h3>${name}</h3>
                <p>${ingredients}</p>
                <p class="highlighted price">${price} €</p>
            </div>

            <div class="add-btn-container">
                <img onclick="checkBasketObject(${menuIndex})" src="icons/plus.svg" alt="">
            </div>

        </div>
    `;
}


function generateBasketHtml(amount, name, price, basketIndex) {
    return /*html*/`
        <div class="basket-item padd-basket">
            <p>${amount}x</p>
            <p class="jstfy-self-start">${name}</p>
            <div class="btn-container jstfy-self-center">
                <button onclick="changeAmountInBasket(${basketIndex}, -1)" class="amount-btn pointer"><img src="icons/minus.svg" alt="less"></button>
                <button onclick="changeAmountInBasket(${basketIndex}, 1)" class="amount-btn pointer"><img src="icons/plus.svg" alt="more"></button>
            </div>
            <p class="txt-nowrap jstfy-self-center" >${price} €</p>
            <img onclick="changeAmountInBasket(${basketIndex}, -${basketObject.amounts[basketIndex]})" class="pointer jstfy-self-end" src="icons/delete.svg" alt="">
        </div>
    `;
}



function generateBasketPlaceholderHtml() {
    return /*html*/`
        <div class="basket-placeholder" id="emptyBasket">
            <img src="icons/basket.svg" alt="">
            <h2>Fülle deinen Warenkorb</h2>
            <div>Füge einige leckere Gerichte aus der Spesiekarte hinzu und bestelle dein Essen</div>
        </div>
    `;
}


function generateSumContainerHtml(subtotal, total) {
    return /*html*/`
        <p id="subtotal">${subtotal} €</p>
        <p id="deliverFee">1,00 €</p>
        <p><b id="total">${total} €</b></p>
    `
}


function generateConfirmOrderHtml() {
    return /*html*/`
        <div class="flex-center">
            <h3 class="orange-font" >Deine Bestellung wird Übermittelt</h3>
        </div>
    `
}


function generateDesktopMenuBar() {
    return /*html*/`
        <p onclick="loadMenu(menuBurger)" id="menuBurger">Burger</p>
        <p onclick="loadMenu(menuHotDog)" id="menuHotDog">Hot Dogs</p>
        <p onclick="loadMenu(menuPommes)" id="menuPommes">Pommes</p>
        <p onclick="loadMenu(menuSalads)" id="menuSalads">Salate</p>
    `
}


function generateMobileMenuBar() {
    return /*html*/`
    <img onclick="openMobileMenu()" id="menuBtn" src="icons/menu-btn.svg" alt="Menü">
    `
}


function generateMobileMenu() {
    return /*html*/`
    <img onclick="closeMobileMenu()" id="menuBtn" src="icons/menu-btn.svg" alt="Menü">
    <div class='mobile-menu'>
        <p onclick="loadMenu(menuBurger); closeMobileMenu()" id="menuBurger">Burger</p>
        <p onclick="loadMenu(menuHotDog); closeMobileMenu()" id="menuHotDog">Hot Dogs</p>
        <p onclick="loadMenu(menuPommes); closeMobileMenu()" id="menuPommes">Pommes</p>
        <p onclick="loadMenu(menuSalads); closeMobileMenu()" id="menuSalads">Salate</p>
    </div>
    `
}


function generateBasketLinkHtml() {
    return /*html*/`
        <img src="icons/basket.svg" alt="">Warenkorb (${convertToGermanTypeFloat(total)} €)
    `   
}