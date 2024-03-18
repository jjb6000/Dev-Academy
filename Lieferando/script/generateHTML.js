function generateMenuHtml(name, ingredients, price, index) {
    return /*html*/`
        <div class="menu-item">
            <div class="menu-item-content">
                <h3>${name}</h3>
                <p>${ingredients}</p>
                <p class="highlighted price">${price} €</p>
            </div>

            <div class="add-btn-container">
                <img onclick="addToBasket(${index})" src="icons/plus.svg" alt="">
            </div>

        </div>
    `;
}


function generateBasketHtml(amount, name, price) {
    return /*html*/`
        <div class="basket-item">
            <p>${amount}x</p>
            <p>${name}</p>
            <div class="btn-container">
                <button class="amount-btn"><img src="icons/minus.svg" alt="less"></button>
                <button class="amount-btn"><img src="icons/plus-gr.svg" alt="more"></button>
                <img src="icons/pen.svg" alt="edit">
            </div>
            <p>${price}</p>
            <img src="icons/delete.svg" alt="">
        </div>
    `
}