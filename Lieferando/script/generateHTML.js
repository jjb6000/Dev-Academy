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


function generateBasketHtml(name, price) {
    return /*html*/`
        <p>${name}</p>
        <p>${price}</p>
    `
}