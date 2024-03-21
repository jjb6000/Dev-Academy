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
        <div class="basket-item">
            <p>${amount}x</p>
            <p class="jstfy-self-start">${name}</p>
            <div class="btn-container jstfy-self-center">
                <button onclick="changeAmountInBasket(${basketIndex}, -1)" class="amount-btn"><img src="icons/minus.svg" alt="less"></button>
                <button onclick="changeAmountInBasket(${basketIndex}, 1)" class="amount-btn"><img src="icons/plus-gr.svg" alt="more"></button>
                <!-- <img src="icons/pen.svg" alt="edit"> -->
            </div>
            <p class="jstfy-self-center" >${price}</p>
            <img onclick="changeAmountInBasket(${basketIndex}, -${basketObject.amounts[basketIndex]})" class="jstfy-self-end" src="icons/delete.svg" alt="">
        </div>
    `;
}



function generateBasketPlaceholderHtml() {
    return /*html*/`
        <div class="basket-placeholder" id="emptyBasket">
            <img src="icons/basket.svg" alt="">
            <h2>Fülle deinen Warenkorb</h2>
            <div>Füge einige leckere Gerichte aus der Speiekate hinzu und bestelle dein Essen</div>
        </div>
    `;
}